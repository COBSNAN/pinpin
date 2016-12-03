
var utils = require("../lib").utils;
var models = require('../models');
var moment = require('moment');
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: './public/images/orderimg' });
var uploadhead = multer({ dest: './public/images/headimage' });
var uploadchat = multer({ dest: './public/images/chatimage' });
module.exports= function(app){
  /**
   * 接收上传的文件，
   * @param {Object} req request
   * @param {Object} res response
   */
  app.post("/upload",upload.array('images', 12) ,function (req, res, next) {
    var userid=req.session.userid,imgfile='',i=1;
    try{
      req.files.forEach(function(el){
          var path =el.path;
          var type=el.originalname.split(".");
          var tail=type[type.length-1]
          var tampName=moment().format('YYYYMMDDhhmmss')+'-'+userid+'-'+i+'.'+tail;
          imgfile+=tampName+',';
          fs.renameSync(path, './public/images/orderimg/'+tampName);
          i++;
      });
      res.send({imgpath:imgfile,error:false})
    }catch(err){
      res.send({imgpath:imgfile,error:true})
    }
  });
/**
   * 接收上传的头像文件，
   * @param {Object} req request
   * @param {Object} res response
   */
  app.post("/uploadhead",uploadhead.single('headimage') ,function (req, res, next) {
    var userid=req.session.userid,imgfile='';
    try{
          var path =req.file.path;
          var type=req.file.originalname.split(".");
          var tail=type[type.length-1]
          var tampName=moment().format('YYYYMMDDhhmmss')+'-'+userid+'.'+tail;
          fs.renameSync(path, './public/images/headimage/'+tampName);
          var user={};
          user.userid=userid;
          user.headaddr=tampName;
          models.account.saveAccount(user,function(err,data){
          if(err){
            res.send(500, {error: err});
          }else{
              res.send({error:err,imgpath:tampName});
          }
      })
    }catch(err){
      res.send({error:true})
    }
  });
  /**
   * 接收聊天文件，
   * @param {Object} req request
   * @param {Object} res response
   */
  app.post("/uploadchat",uploadchat.single('chatimage') ,function (req, res, next) {
    var userid=req.session.userid,imgfile='',chattouid;
    if (req.body.chattouid && utils.trim(req.body.chattouid) != "") {
        chattouid = utils.trim(req.body.chattouid);
    }
    try{
          var path =req.file.path;
          var type=req.file.originalname.split(".");
          var tail=type[type.length-1]
          var tampName=moment().format('YYYYMMDDhhmmss')+'-'+userid+'to'+chattouid+'.'+tail;
          fs.renameSync(path, './public/images/chatimage/'+tampName);
          res.send({error:false,imgpath:tampName});
    }catch(err){
      res.send({error:true})
    }
  });
  /**
   * 删除文件，
   * @param {Object} req request
   * @param {Object} res response
   */
  app.post("/delete/image",function (req, res) {
    var imgsrc,luid=6;
    if (req.body.imgsrc && utils.trim(req.body.imgsrc) != "") {
      imgsrc = utils.trim(req.body.imgsrc);
    }
    if (imgsrc) {
      var uid=imgsrc.split("-")[1];
      if (uid==luid) {
        fs.unlink('./public/images/orderimg/'+imgsrc,function(err,rs){
          if (err) {
            res.send({error:err})
          }else{
            res.send({error:err,msg:'ok'})
          }
        });
      }
    }
  });
}