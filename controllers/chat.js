var models = require('../models');
var utils = require("../lib").utils;
var moment = require('moment');


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
 * 获取聊天记录
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[ejs]}     [登录界面]
 */
exports.getchatlist = function(req,res){
  var chatuid,type ,luser = new LoginUser(req);
  if (req.body.chatuid && utils.trim(req.body.chatuid) != "") {
    chatuid=utils.trim(req.body.chatuid);
  }
  if (req.body.type && utils.trim(req.body.type) != "") {
    type=utils.trim(req.body.type);
  }
  models.chat.getchatlist(luser.userid,chatuid,type,function(err,data){
      if(err){
         res.status(500).send({error: err});
      }else{
        models.account.getUserByUserid(chatuid,function(err1,rs1){
            if(err){
                res.send(500, {error: err});
            }else{
                models.account.getUserByUserid(luser.userid,function(err2,rs2){
                    if(err2){
                       res.send(500, {error: err2});
                    }else{
                       res.send({error:err2,chatdata:data,tuser:rs1,user:rs2});
                    }
                })
            }
        })
      }
  })
}


/**
 * 获取聊天窗
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getChat = function(req,res){
  var chatuid="" ,luser = new LoginUser(req);
  if (req.query.chatuid && utils.trim(req.query.chatuid) != "") {
      chatuid=utils.trim(req.query.chatuid);
  }
  if(chatuid){
      var userrelation={};
      userrelation.userid1=chatuid;
      userrelation.userid2=luser.userid;
      userrelation.type1 =1;
      models.account.setmatch(userrelation,function(err,rs){
          if(err){
              res.send(500, {error: err});
          }else{
              res.render('chat/chat',{chatuid:chatuid,loginuser:luser})
          }
      })
  }else{
      res.render('chat/chat',{chatuid:chatuid,loginuser:luser})
  }
  
};

/**
 * 修改系统信息
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.updatechat = function(req,res){

  var chat={};
  if (req.body.chatid && utils.trim(req.body.chatid) != "") {
    chat.chatid = utils.trim(req.body.chatid);
  }
  if (req.body.status && utils.trim(req.body.status) != "") {
    chat.status = utils.trim(req.body.status);
  }
  models.chat.updatechat(chat,function(err){
      if(err){
        res.send(500, {error: err});
      }else{
          res.send({error:err});
      }
  })
};


/**
 * 获取个人聊天人
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getchatpeople = function(req,res){

  var luser = new LoginUser(req);

  models.chat.getchatpeople(luser.userid,function(err,rs){
      if(err){
        res.send(500, {error: err});
      }else{
          res.send({error:err,chatp:rs});
      }
  })
};

/**
 * 获取系统消息
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getsysmsg = function(req,res){

  var luser = new LoginUser(req);

  models.chat.getsysnotice(luser.userid,function(err4,rs4){
      if(err4){
         res.send({error: err4});
      }else{
        console.log(rs4);
        res.render('chat/sysmsg',{loginuser:luser,msg:rs4});
      }
  })
};

/**
 * agree
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.agree = function(req,res){

  var luser = new LoginUser(req),cid;
  if (req.body.cid && utils.trim(req.body.cid) != "") {
    cid = utils.trim(req.body.cid);
  }

  models.chat.getchatbyid(cid,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if (rs) {
          
          var chat={};chat.chatid=cid;chat.status=4;console.log(rs);
          models.chat.updatechat(chat,function(err1,rs1){
              if(err1){
                res.send(500, {error: err1});
              }else{
                  if (rs.type==2) {
                      var args=[rs.orderid,rs.userfrom];console.log(args);
                      models.order.geliketype(args,function(err2,rs2){
                        if(err2){
                            res.send(500, {error: err2});
                        }else{
                            if(rs2.myoid){
                                   var orderm2={};
                                   orderm2.uid =rs.userto;
                                   orderm2.oid =rs2.myoid;
                                   orderm2.type=100;
                                   orderm2.myoid=rs.orderid;
                                   models.order.getlike(orderm2,function(err3,rs3){
                                       if(err3){
                                           res.send({error: err3});
                                       }else{
                                           models.chat.agreeorder(rs,rs2,luser.nickname,function(err4){
                                              if(err4){
                                                  res.send({error: err4});
                                              }else{
                                                  res.send({error: err4});
                                              }
                                           })
                                       }
                                   })
                             }else{
                                  models.chat.agreeorder(rs,rs2,luser.nickname,function(err3){
                                      if(err3){
                                          res.send({error: err3});
                                      }else{
                                          res.send({error: err3});
                                      }
                                  })
                             }
                        }
                      })
                  }
                  if (rs.type==3) {
                      var msg={};
                      msg.userfrom= rs.userto;
                      msg.userto  = rs.userfrom;  
                      msg.type    = 4;  
                      msg.content = luser.nickname+'已同意你加为好友！';
                      msg.sendtime= moment().format('YYYY-MM-DD HH:mm:ss');

                      models.chat.addchatinfo(msg,function(err2,rs2){
                          if(err2){
                            res.send(500, {error: err2});
                          }else{
                              var url={};
                              url.userid1= rs.userfrom;
                              url.userid2= rs.userto;
                              url.type1=2;
                              url.addflg = 0; 
                              models.account.setmatch(url,function(err3,rs3){
                                if(err3){
                                    res.send(500, {error: err3});
                                }else{
                                    res.send({error: err3});
                                }
                            })
                          }
                      })
                  }
              }
          })
        }else{
          res.send({error: true});
        }
      }
  })
};