var connection =require('./mysqlConn');
var moment = require('moment');
/**
 * 获取商户类型
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.getShopList = function(cb){

	connection.query('SELECT * from shop ' ,function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}
/**
 * 根据商户id获取商户名称
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.getShopByShopId = function(shopId,cb){

  connection.query('SELECT shopname from shop where shopid = ? ',[shopId] ,function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r[0].shopname);
      }
    })
}
/**
 * 保存修改订单信息
 * @param  {[type]}   user [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
exports.saveOrder = function(order,cb){
	if(order.orderid){
    //Update
    var tampid= order.orderid;
    delete order.orderid;
    connection.query('UPDATE pporder SET ? WHERE orderid= ? ' ,[order,tampid],function(err,r){
      if(err){
        cb(err);
      }else{
        order.orderid=tampid;
        cb(err,order.orderid);
      }
    })
  }else{
  	console.log("insert");
    //Insert
    connection.query('INSERT INTO pporder SET ? ' ,[order],function(err,r){
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
 * 根据订单id获取订单信息
 * @param  {[type]}   email [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.getOrderById = function(orderid,cb){

  connection.query('SELECT * from pporder WHERE orderid= ? ' ,[orderid],function(err,r){
      if(err){
        cb(err);
      }else{
        r[0].failtime=moment(r[0].failtime).format('YYYY-MM-DD');
        cb(err,r[0]);
      }
    })
}

/**
 * 删除订单
 * @param  {[type]}   orderid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.removeOrder = function(orderid,cb){
  connection.query('DELETE FROM pporder WHERE orderid = ? ' ,[orderid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err);
      }
    })
}

/**
 * 获取订单列表
 * @param  {[type]}   orderid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getOrderList = function(sql,cb){
  var newsql='select * from (select po.orderid,po.addr,po.title,po.content,po.orderstatus,po.failtime,po.shopid,po.uid,s.shopname,u.nickname,u.headaddr,u.credit,a.notes,a.endcode  from pporder po,shop s,address a,user u where po.shopid=s.shopid and po.addrid=a.addrid and po.uid=u.userid)t where 1=1';
  for (var i = sql.length - 1; i >= 0; i--) {
    newsql+=' and '+sql[i];
  }
  //newsql+=' and orderstatus = 1 ';
  connection.query(newsql,function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}
/**
 * 获取相关订单列表
 * @param  {[type]}   orderid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getLikeOrderList = function(sql,cb){
  var newsql='select * from (select po.orderid,po.addr,po.title,po.content,po.orderstatus,om.uid,om.type,s.shopname,u.nickname from pporder po,shop s,ordermatch om,user u where po.shopid=s.shopid and po.orderid=om.oid and po.uid=u.userid)t where 1=1';
  for (var i = sql.length - 1; i >= 0; i--) {
    newsql+=' and '+sql[i];
  }
  //newsql+=' and orderstatus = 1 ';
  connection.query(newsql,function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}

/**
 * 设置订单关系
 * @param  {[type]}   orderid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getlike = function(ordermatch,cb){
  connection.query('SELECT * from ordermatch WHERE uid = ? and oid = ? ' ,[ordermatch.uid,ordermatch.oid],function(err,r){
      if(err){
        cb(err);
      }else{
        console.log(r);
        if (r[0]) {
          console.log(123);
          connection.query('UPDATE ordermatch SET ? WHERE uid = ? and oid = ? ' ,[ordermatch,ordermatch.uid,ordermatch.oid],function(err1,r1){
              cb(err1);
          })
        }else{
          console.log(112323);
          connection.query('INSERT INTO ordermatch SET ? ' ,[ordermatch],function(err2,r2){
            console.log(err2);
              cb(err2);
          })
        }
      }
    })
}

/**
 * 根据oid,uid获取类型
 * @param  {[type]}   【】 [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.geliketype = function(para,cb){
  connection.query('select * from ordermatch where oid = ? and uid = ?',para,function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r[0]);
      }
    })
}

/**
 * 根据oid获取类型uid昵称
 * @param  {[type]}   【】 [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.gelikeuname = function(oid,cb){
  connection.query('select u.nickname,om.myoid from ordermatch om,user u where u.userid = om.uid and om.type>=2 and om.oid = ? ',[oid],function(err,r){
      if(err){
        cb(err);
      }else{
        console.log(r)
        cb(err,r[0]);
      }
    })
}