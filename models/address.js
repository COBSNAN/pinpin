var connection =require('./mysqlConn');
var moment = require('moment');
/**
 * 获取地址列表
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getAddrList = function(userid,cb){

	connection.query('SELECT * from address WHERE uid= ? ' ,[userid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}
/**
 * 保存地址
 * @param  {[type]}   address [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
exports.saveAddress = function(address,cb){
	if(address.addrid){
    //Update
    var tampid= address.addrid;
    delete address.addrid;
    connection.query('UPDATE address SET ? WHERE addrid= ? ' ,[address,tampid],function(err,r){
      if(err){
        cb(err);
      }else{
        address.addrid=tampid;
        cb(err,address.addrid);
      }
    })
  }else{
  	console.log("insert");
    //Insert
    connection.query('INSERT INTO address SET ? ' ,[address],function(err,r){
	  if(err){
	    cb(err);
	  }else{
	  	console.log('插入完毕'); 
	    cb(err,r.insertId);
	  }
	})
    
  }
}
/**
 * 获取省市县列表
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getAreaList = function(table,para,cb){
  connection.query('SELECT * from '+table+' WHERE '+para[0]+' = ? ' ,[para[1]],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}
/**
 * 删除地址
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.deleteAddr = function(addrid,cb){
  connection.query('DELETE FROM address WHERE addrid = ? ' ,[addrid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err);
      }
    })
}