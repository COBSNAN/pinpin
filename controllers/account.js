var models = require('../models');
var utils = require("../lib").utils;
var moment = require('moment');
var nodemailer = require('nodemailer');
//var emailConfig = require('./emailConfig.json');

/**
 * 获取登录界面
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[ejs]}     [登录界面]
 */
exports.login = function(req,res){
  res.render('account/login',{msg:''});
}
/**
 * 注册控制
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.registAction = function(req,res){
  var user = {};
  if (req.body.email && utils.trim(req.body.email) != "") {
    user.email = utils.trim(req.body.email);
  }
  if (req.body.Pwd && utils.trim(req.body.Pwd) != "") {
    user.password = utils.trim(req.body.Pwd);
  }
  if (req.body.nickname && utils.trim(req.body.nickname) != "") {
    user.nickname = utils.trim(req.body.nickname);
  }
  user.jointime=moment().format('YYYY-MM-DD HH:mm:ss');
  user.credit=100;
  user.status=0;
  user.headaddr='default.jpg';

  models.account.getUserByEmail(user.email,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if(rs){
          res.render('account/login',{user:user,msg:'此邮箱已被注册！'});
        }else{
          user.password = utils.hashStr(user.password);
          models.account.saveAccount(user,function(err,data){
            if(err){
              res.send(500, {error: err});
            }else{
                console.log('data');
                req.session.nickname=user.nickname;
                req.session.email=user.email;
                req.session.userid=data;
                req.session.headaddr=user.headaddr;
                res.redirect('/order/getOrderList?flag=0');
            }
          })
        }
      }
  })  
}
/**
 * 登录控制
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.loginAction = function(req,res){
  var email,password;
  if (req.body.email && utils.trim(req.body.email) != "") {
    email = utils.trim(req.body.email);
  }
  if (req.body.Pwd && utils.trim(req.body.Pwd) != "") {
    password = utils.trim(req.body.Pwd);
  }
  models.account.getUserByEmail(email,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if(!rs){
          res.render('account/login',{email:email,msg:'登陆邮箱没有注册！'});
        }else{
          password = utils.hashStr(password);
          if(password==rs.password){
            req.session.nickname=rs.nickname;
            req.session.email=rs.email;
            req.session.userid=rs.userid;
            req.session.headaddr=rs.headaddr;
            models.order.getOrderList([],function(err1,rs1){
              if(err){
                 res.send(500, {error: err});
              }else{
                models.order.getShopList(function(err2,rs2){
                  if(err){
                     res.send(500, {error: err});
                  }else{
                    res.render('order/list',{loginuser:rs,userorder:rs1,shop:rs2})
                  }
                })
              }
            })
          }else{
            res.render('account/login',{email:email,msg:'密码错误，请重新登陆！'});
          }
        }
      }
  })  
}
/**
 * [sendVerifyEmail 发送邮箱验证]
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.sendVerifyEmail = function(req,res){
  var email,flag=0;
  if (req.body.email && utils.trim(req.body.email) != "") {
    email = utils.trim(req.body.email);
  }
  if (req.body.flag && utils.trim(req.body.flag) != "") {
    flag = utils.trim(req.body.flag);
  }
  models.account.getUserByEmail(email,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if(!rs){
          res.send({email:email,msg:'这个邮箱没有注册！'});
        }else{
            var transporter = nodemailer.createTransport({
                    host: 'smtp.qq.com',
                    port: 465,
                    secure: true, // use SSL 
                    auth: {
                        user: '1162580903@qq.com',
                        pass: 'lovesky110'
                    }
                });
            var verifyPin=utils.verifyPin();
            var sendhtml='<b>'+rs.nickname+'，你好，</b><div align="left" valign="top" style="font-size:14px; color:#7b7b7b; line-height: 25px; font-family:Hiragino Sans GB; padding: 20px 0px 20px 0px">你此次'+flag==0?'重置密码':'邮箱验证'+'的验证码如下，请在 10 分钟内输入验证码进行下一步操作。 如非你本人操作，请忽略此邮件。</div>'+
            '<div style="padding:10px 18px 10px 18px;border-radius:3px;text-align:center;text-decoration:none;background-color:#ecf4fb;color:#4581E9;font-size:20px; font-weight:700; letter-spacing:2px; margin:0;white-space:nowrap"><span style="border-bottom:1px dashed #ccc;z-index:1">'+verifyPin+
            '</span></div>';
            var mailOptions = {
                from: '<1162580903@qq.com>', // sender address 
                to: email, // list of receivers 
                subject: 'Hello ', // Subject line 
                text: 'Hello 拼友 ', // plaintext body 
                html: sendhtml // html body 
            };
            transporter.sendMail(mailOptions, function(err, info){
              if(err){
                  res.send({error:err});
              }else{
                  res.send({userid:rs.userid,verifyemail:email,verifyPin:utils.hashStr(verifyPin)});
              }
          });
        }
      }
  })  
}

/**
 * [sendVerifyEmail 重置密码]
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.resetAccountPwd = function(req,res){
  var user={},verifyPin,pin,verifyemail;
  console.log(34343);
  if (req.body.email && utils.trim(req.body.email) != "") {
    user.email = utils.trim(req.body.email);
  }
  if (req.body.verifyemail && utils.trim(req.body.verifyemail) != "") {
    verifyemail = utils.trim(req.body.verifyemail);
  }
  if (req.body.pin && utils.trim(req.body.pin) != "") {
    pin = utils.hashStr(utils.trim(req.body.pin));
  }
  if (req.body.newPwd && utils.trim(req.body.newPwd) != "") {
    user.password = utils.hashStr(utils.trim(req.body.newPwd));
  }
  if (req.body.verifyPin && utils.trim(req.body.verifyPin) != "") {
    verifyPin = req.body.verifyPin;
  }
  if (req.body.userid && utils.trim(req.body.userid) != "") {
    user.userid=req.body.userid;
  }
  console.log(pin+"   "+verifyPin+" "+req.body.newPwd);
  if(pin!=verifyPin){
    res.send({type:0,msg:'验证码不匹配'})
  }else if (user.email!=verifyemail){
    res.send({type:1,msg:'修改失败'})
  }else{
    models.account.saveAccount(user,function(err,data){
      if(err){
        res.send(500, {error: err});
      }else{
          res.send({type:2,msg:'修改成功'});
      }
    }) 
  }
}

/**
 * 退出
 * @param {Object} req request
 * @param {Object} res response
 */
exports.loginOut = function(req, res) {
  // req.session.destroy(function(err) {
  //   console.log(err);
  // });
  req.session = null;
  res.redirect('/account/login');
};
/**
 * 显示用户信息详情
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.userDetail = function(req,res){
  var email,loginuser = new LoginUser(req);
  if (req.query.email && utils.trim(req.query.email) != "") {
    email = utils.trim(req.query.email);
  }
  if(loginuser.email){
      models.account.getUserByEmail(email,function(err,rs){
          if(err){
             res.send(500, {error: err});
          }else{
            models.address.getAddrList(rs.userid,function(err1,rs1){
              if (err1) {
                res.send(500,{error:err1});
              }else{
                var sql=[];
                sql.push(' uid = '+ loginuser.userid);
                models.order.getOrderList(sql,function(err2,rs2){
                    if(err2){
                       res.send(500, {error: err2});
                    }else{
                        sql=[];
                        sql.push(' uid = '+ loginuser.userid);
                        models.order.getLikeOrderList(sql,function(err3,rs3){
                          if(err3){
                             res.send(500, {error: err3});
                          }else{
                            res.render('account/userdetail',{user:rs,addr:rs1,loginuser:rs,myorder:rs2,likeorder:rs3})
                          }
                        })
                    }
                })
              }
            })
          }
      })
  }else{
      res.redirect('/account/login');
  }  
};
/**
 * 用户信息修改
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.userModify = function(req,res){
  var user = new User(req),loginuser = new LoginUser(req);;
  console.log(user)
  if(loginuser.userid==user.userid){
      models.account.saveAccount(user,function(err,data){
          if(err){
            res.send(500, {error: err});
          }else{
              res.send({error:err,userid:data});
          }
      })
   }else{
      res.redirect('/account/login');
  }   
};


var User = function(req) {
  //字符串转换
  if (req.body.email && utils.trim(req.body.email) != "") {
    this.email = utils.trim(req.body.email);
  }
  if (req.body.Pwd && utils.trim(req.body.Pwd) != "") {
    this.password = utils.hashStr(utils.trim(req.body.Pwd));
  }
  if (req.body.nickname && utils.trim(req.body.nickname) != "") {
    this.nickname = utils.trim(req.body.nickname);
  }
  if (req.body.userid && utils.trim(req.body.userid) != "") {
    this.userid = utils.trim(req.body.userid);
  }
  if (req.body.sex && utils.trim(req.body.sex) != "") {
    this.sex = utils.trim(req.body.sex);
  }
  if (req.body.motto && utils.trim(req.body.motto) != "") {
    this.motto = utils.trim(req.body.motto);
  }
  if (req.body.headaddr && utils.trim(req.body.headaddr) != "") {
    this.headaddr = utils.trim(req.body.headaddr);
  }
  if (req.body.mobile && utils.trim(req.body.mobile) != "") {
    this.mobile = utils.trim(req.body.mobile);
  }
};
/**
 * 验证邮箱
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.verifyEmail = function(req,res){
  var user={},verifyPin,pin,verifyemail;
  if (req.body.pin && utils.trim(req.body.pin) != "") {
    pin = utils.hashStr(utils.trim(req.body.pin));
  }
  if (req.body.verifyPin && utils.trim(req.body.verifyPin) != "") {
    verifyPin = req.body.verifyPin;
  }
  if (req.body.userid && utils.trim(req.body.userid) != "") {
    user.userid=req.body.userid;
  }
  if(pin!=verifyPin){
    res.send({type:0,msg:'验证码不匹配'})
  }else{
    user.status=3;
    models.account.saveAccount(user,function(err,data){
      if(err){
        res.send(500, {error: err});
      }else{
          res.send({type:1,msg:'邮箱验证成功'});
      }
    }) 
  }
}

/**
 * 修改密码
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.changePwd = function(req,res){
  var OldPwd,user = new User(req);
  if (req.body.OldPwd && utils.trim(req.body.OldPwd) != "") {
    OldPwd = utils.hashStr(utils.trim(req.body.OldPwd));
  }
  console.log(user);
  models.account.getUserByUserid(user.userid,function(err,rs){
      if(err){
         res.send(500, {error: err});
      }else{
        if (OldPwd!=rs.password) {
          res.send({err: err,type:0});
        } else {
            models.account.saveAccount(user,function(err1,rs1){
              if (err1) {
                res.send(500,{error:err1});
              }else{
                res.send({err: error,type:1,msg:'密码修改成功！'});
              }
            })
       }
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
 * 获取用户关系
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getmatch = function(req,res){
  var friendid,loginuser = new LoginUser(req);;
  if (req.body.friendid && utils.trim(req.body.friendid) != "") {
    friendid = utils.trim(req.body.friendid);
  }
  if(loginuser.userid){
      models.account.getmatch(friendid,loginuser.userid,function(err,data){
          if(err){
            res.send(500, {error: err});
          }else{
              res.send({error:err,usermatch:data});
          }
      })
   }else{
      res.redirect('/account/login');
  }   
};

/**
 * 设置用户关系
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.setmatch = function(req,res){
  var userrelation={},loginuser = new LoginUser(req);
  
  if (req.body.addflg && utils.trim(req.body.addflg) != "") {
    userrelation.addflg = utils.trim(req.body.addflg);
  }
  if (req.body.friendid && utils.trim(req.body.friendid) != "") {
    userrelation.userid1 = utils.trim(req.body.friendid);
  }
  if(loginuser.userid){
      userrelation.userid2=loginuser.userid;
      models.account.setmatch(userrelation,function(err,data){
          if(err){
            res.send(500, {error: err});
          }else{
              var sysinfo={};
              sysinfo.userfrom=loginuser.userid;
              sysinfo.userto  =userrelation.userid1;
              sysinfo.type  =3;
              sysinfo.content =loginuser.nickname+'请求加你为好友。';
              sysinfo.sendtime=moment().format('YYYY-MM-DD HH:mm:ss');
              sysinfo.status  =5;
              models.chat.addchatinfo(sysinfo,function(err1,rs1){
                  if (err1) {res.send({error: err1});
                  }else{
                      res.send({error:err1,usermatch:data});
                  }
              })
          }
      })
   }else{
      res.redirect('/account/login');
  }   
};