var models = require('../models');
var utils = require("../lib").utils;
var moment = require('moment');


/**
 * 获取省市县列表
 * @body  {[type]} req [description]
 * @body  {[type]} res [description]
 * @return {[ejs]}     [登录界面]
 */
exports.getAreaList = function(req,res){
  var para = [],table;
  if (req.body.addrTable && utils.trim(req.body.addrTable) != "") {
    table=utils.trim(req.body.addrTable);
  }
  if (req.body.addrfield && utils.trim(req.body.addrfield) != "") {
    para.push(utils.trim(req.body.addrfield));
  }
  if (req.body.addrCode && utils.trim(req.body.addrCode) != "") {
    para.push(utils.trim(req.body.addrCode));
  }
  models.address.getAreaList(table,para,function(err,data){
      if(err){
         res.status(500).send({error: err});
      }else{
          res.send({error:err,addrdata:data});
      }
  })
}

var Address = function(req) {
  if (req.body.notes && utils.trim(req.body.notes) != "") {
    this.notes = utils.trim(req.body.notes);
  }
  if (req.body.uid && utils.trim(req.body.uid) != "") {
    this.uid = utils.trim(req.body.uid);
  }
  if (req.body.endcode && utils.trim(req.body.endcode) != "") {
    this.endcode = utils.trim(req.body.endcode);
  }
  if (req.body.detailaddr && utils.trim(req.body.detailaddr) != "") {
    this.detailaddr = utils.trim(req.body.detailaddr);
  }
  if (req.body.prioraddr && utils.trim(req.body.prioraddr) != "") {
    this.prioraddr = utils.trim(req.body.prioraddr);
  }
  if (req.body.addrid && utils.trim(req.body.addrid) != "") {
    this.addrid = utils.trim(req.body.addrid);
  }
};

/**
 * 地址保存修改
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.saveORupdateAddress = function(req,res){
  var address = new Address(req);
  console.log(address)
  models.address.saveAddress(address,function(err,data){
      if(err){
        res.send(500, {error: err});
      }else{
      	  address.addrid=data;
          res.send({error:err,addr:address});
      }
  })
};

/**
 * 地址删除
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.deleteAddress = function(req,res){

  var addrid;
  if (req.body.addrid && utils.trim(req.body.addrid) != "") {
    addrid = utils.trim(req.body.addrid);
  }
  models.address.deleteAddr(addrid,function(err){
      if(err){
        res.send(500, {error: err});
      }else{
          res.send({error:err});
      }
  })
};