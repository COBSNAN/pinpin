var models = require('../models');
var utils = require("../lib").utils;
var moment = require('moment');

/**
 * 获取订单编辑界面
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[ejs]}     []
 */
exports.order = function(req,res){
  var orderid,uid=req.session.userid,loginuser = new LoginUser(req);
  if (req.body.orderid && utils.trim(req.body.orderid) != "") {
    orderid = utils.trim(req.body.orderid);
  }
  if (req.query.orderid && utils.trim(req.query.orderid) != "") {
    orderid = utils.trim(req.query.orderid);
  }
  models.order.getShopList(function(err,data){
      if(err){
          res.send(500, {error: err});
      }else{
          models.address.getAddrList(uid,function(err1,rs1){
          if (err1) {
            res.send(500,{error:err1});
          }else{
              if(orderid==null||orderid==""){
                  res.render('order/edit_order',{userid:uid,shop:data,addr:rs1,order:{},loginuser:loginuser})
              }else{
                   models.order.getOrderById(orderid,function(err2,rs2){
                        if(err2){
                           res.send(500, {error: err2});
                        }else{
                          if(rs2==null||rs2==""){
                            rs2={};
                          }
                           res.render('order/edit_order',{userid:uid,shop:data,addr:rs1,order:rs2,loginuser:loginuser})
                        }
                   })
              }
          }
          })    
      }
  }) 
}
/**
 * 保存拼单
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.saveORupdateOrder = function(req,res){
  var order = new Order(req);
  models.order.saveOrder(order,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
          order.orderid=rs;
          models.order.getShopByShopId(order.shopid,function(err1,rs1){
              if (err1) {
                res.send(500, {error: err1});
              }else{
                  models.account.getUserByUserid(order.uid,function(err2,rs2){
                      if(err2){
                         res.send(500, {error: err2});
                      }else{
                         res.render('order/order_detail',{shopname:rs1,user:rs2,order:order,loginuser:rs2})
                      }
                  }) 
              }
          })
      }
  })  
}
/**
 * 获取订单列表
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 * flag 0 获取首页 2 下一页 1 自动匹配没有下一页
 */
exports.getOrderList = function(req,res){
  var sql=[],flag,luser= new LoginUser(req);;
  if (req.body.endcode && utils.trim(req.body.endcode) != "") {
     sql.push(' endcode = '+ utils.trim(req.body.endcode));
  }
  if (req.body.shopid && utils.trim(req.body.shopid) != "") {
     sql.push(' shopid = '+ utils.trim(req.body.shopid));
  }
  if (req.body.notes && utils.trim(req.body.notes) != "") {
     sql.push(' notes = '+ utils.trim(req.body.notes));
  }
  if (req.body.mineflag && utils.trim(req.body.mineflag) != "") {
     sql.push(' uid = '+ luser.userid);
  }else{
     sql.push(' uid != '+ luser.userid);
  }
  console.log(sql)
  if (req.body.flag && utils.trim(req.body.flag) != "") {
     flag = utils.trim(req.body.flag);
  }
  if (req.query.flag && utils.trim(req.query.flag) != "") {
     flag = utils.trim(req.query.flag);
  }
  models.order.getOrderList(sql,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if(flag==0||flag==1){
          models.order.getShopList(function(err1,rs1){
              if (err1) {
                 res.send(500, {error: err1});
              }else{
                res.render('order/list',{error: err,userorder:rs,loginuser:luser,shop:rs1});
              }
          })
        }
        if(flag==2){
          res.send({error: err,userorder:rs});
        }
      }
  })  
}
/**
 * [getOrderByOrderid 获取订单详情]
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getOrderByOrderid = function(req,res){
  var orderid,flag=0,luser= new LoginUser(req);
  if (req.query.orderid && utils.trim(req.query.orderid) != "") {
    orderid = utils.trim(req.query.orderid);
  }
  models.order.getOrderById(orderid,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        console.log(rs);
         models.order.getShopByShopId(rs.shopid,function(err,rs1){
              if (err) {
                res.send(500, {error: err});
              }else{
                  models.account.getUserByUserid(rs.uid,function(err2,rs2){
                      if(err2){
                         res.send(500, {error: err2});
                      }else{
                         models.order.geliketype([orderid,luser.userid],function(err3,rs3){
                            if(err3){
                               res.send(500, {error: err3});
                            }else{ 
                                if(rs.orderstatus>=3){
                                    models.order.gelikeuname(orderid,function(err4,rs4){
                                      if(err4){
                                         res.send(500, {error: err4});
                                      }else{
                                          res.render('order/order_detail',{shopname:rs1,user:rs2,order:rs,loginuser:luser,liketype:rs3,likeuname:rs4})
                                      }
                                    })
                                }else{
                                  res.render('order/order_detail',{shopname:rs1,user:rs2,order:rs,loginuser:luser,liketype:rs3})
                                }
                            }
                          })
                      }
                  }) 
              }
          })
      }
  })  
}

/**
 * 获取登录user信息
 * @param {Object} req request
 */
var LoginUser = function(req) {

  if (req.session.nickname) {
    this.nickname = req.session.nickname;
  }
  if (req.session.email) {
    this.email = req.session.email;
  }
  if (req.session.userid) {
    this.userid = req.session.userid;
  }
  if (req.session.headaddr) {
    this.headaddr = req.session.headaddr;
  }
};

/**
 * 订单删除
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.removeOrder = function(req,res){
  var orderid,luser= new LoginUser(req);
  if (req.body.orderid && utils.trim(req.body.orderid) != "") {
    orderid = utils.trim(req.body.orderid);
  }
  if (req.query.orderid && utils.trim(req.query.orderid) != "") {
    orderid = utils.trim(req.query.orderid);
  }
  // models.order.removeOrder(orderid,function(err,rs){
  //     if(err){
  //       res.send(500, {error: err});
  //     }else{
          res.send({error: false});
  //     }
  // })
};

/**
 * 订单操作
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getlike = function(req,res){
  var ordermatch={},luser= new LoginUser(req),chat={},touid;
  if (req.body.orderid && utils.trim(req.body.orderid) != "") {
    ordermatch.oid = utils.trim(req.body.orderid);
  }
  if (req.body.type && utils.trim(req.body.type) != "") {
    ordermatch.type = utils.trim(req.body.type);
  }
  if (req.body.myoid && utils.trim(req.body.myoid) != "") {
    ordermatch.myoid = utils.trim(req.body.myoid);
  }
  if (req.body.touid && utils.trim(req.body.touid) != "") {
    touid = utils.trim(req.body.touid);
  }
  console.log(11111);
  if(ordermatch.type==1){
     chat.userfrom=luser.userid;
     chat.userto=touid;  
     chat.type=2  
     chat.content =luser.nickname+'请求与<a href="/order/getOrderByOrderid?orderid='+ordermatch.oid+'">你的订单</a>匹配。'+(ordermatch.myoid?'查看<a href="/order/getOrderByOrderid?orderid='+ordermatch.myoid+'">他的订单</a>':'');
     chat.sendtime = moment().format('YYYY-MM-DD HH:mm:ss');
     chat.status  = 5;
     chat.orderid = ordermatch.oid;
  }
  if(ordermatch.type==5){
     chat.userfrom=luser.userid;
     chat.userto=touid;  
     chat.type=2  
     chat.content =luser.nickname+'请求与你达成订单完成，<a href="/order/getOrderByOrderid?orderid='+ordermatch.oid+'">相关订单</a>。';
     chat.sendtime = moment().format('YYYY-MM-DD HH:mm:ss');
     chat.status  = 5;
     chat.orderid = ordermatch.oid;
  }
  if(ordermatch.type==4){
     chat.userfrom=luser.userid;
     chat.userto=touid;  
     chat.type=2  
     chat.content =luser.nickname+'评价了你和他的订单，<a href="/order/getOrderByOrderid?orderid='+ordermatch.oid+'">相关订单</a>。评价:'+utils.trim(req.body.PJcontent);
     chat.sendtime = moment().format('YYYY-MM-DD HH:mm:ss');
     chat.status  = 10;
     chat.orderid = ordermatch.oid;
  }console.log(chat);
  ordermatch.uid=luser.userid;
  models.order.getlike(ordermatch,function(err,rs){
      if(err){
        res.send(500, {error: err});
      }else{
          if(ordermatch.type==1||ordermatch.type==5||ordermatch.type==4){
               models.chat.addchatinfo(chat,function(err1,rs1){
                    res.send({error: err1})
               })
          }else {
            res.send({error: err});
          }
      }
  })
};
var Order = function(req) {

  if (req.body.orderid && utils.trim(req.body.orderid) != "") {
    this.orderid = utils.trim(req.body.orderid);
  }else{
    this.pubtime=moment().format('YYYY-MM-DD HH:mm:ss');
  }
  if (req.body.shopid && utils.trim(req.body.shopid) != "") {
    this.shopid = utils.trim(req.body.shopid);
  }
  if (req.body.addrid && utils.trim(req.body.addrid) != "") {
    this.addrid = utils.trim(req.body.addrid);
  }
  if (req.body.addr && utils.trim(req.body.addr) != "") {
    this.addr = utils.trim(req.body.addr);
  }
  if (req.body.uid && utils.trim(req.body.uid) != "") {
    this.uid = utils.trim(req.body.uid);
  }
  if (req.body.content && utils.trim(req.body.content) != "") {
    this.content = utils.trim(req.body.content);
  }
  if (req.body.title && utils.trim(req.body.title) != "") {
    this.title = utils.trim(req.body.title);
  }
  if (req.body.failtime && utils.trim(req.body.failtime) != "") {
    this.failtime = utils.trim(req.body.failtime);
  }
  if (req.body.imgpath && utils.trim(req.body.imgpath) != "") {
    this.imgpath = utils.trim(req.body.imgpath);
  }
  if (req.body.orderType && utils.trim(req.body.orderType) != "") {
    this.orderstatus = utils.trim(req.body.orderType);
  }
};
