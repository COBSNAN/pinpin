var connection =require('./mysqlConn');
var moment = require('moment');
/**
 * 获取聊天记录列表
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getchatlist = function(fusid,tuid,type,cb){

	connection.query("SELECT chatid ,userfrom,userto,type,content,date_format(sendtime,'%Y-%c-%d %h:%i:%s') sendtime,status from chat WHERE userfrom in (?,?) and userto in (?,?) and type in ("+type+") " ,[fusid,tuid,fusid,tuid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}

/**
 * 获取系统通知
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getsysnotice = function(tuid,cb){

  connection.query("SELECT chatid ,userfrom,userto,type,content,date_format(sendtime,'%Y-%c-%d %h:%i:%s') sendtime,status from chat WHERE  userto = ? and type in (2,3,4) " ,[tuid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}

/**
 * 聊天记录
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.addchatinfo = function(chat,cb){

	connection.query('INSERT INTO chat SET ? ' ,[chat],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}
/**
 * 修改系统记录
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.updatechat = function(chat,cb){

	connection.query('UPDATE chat SET ? where chatid = ?' ,[chat,chat.chatid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}

/**
 * 获取联系人
 * @param  {[type]}   userid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getchatpeople = function(myuid,cb){

	connection.query('select cc.*,user.nickname from (select case when u.userid1 = ? then u.userid2 else u.userid1 end chatid,u.type1,u.type2,u.addflg from userrelation u WHERE u.userid1 = ? or u.userid2 = ? ) cc,user where user.userid = cc.chatid ' ,[myuid,myuid,myuid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r);
      }
    })
}

/**
 * 根据id获取
 * @param  {[type]}   cid [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.getchatbyid = function(cid,cb){

  connection.query('select * from chat where chatid = ? ' ,[cid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r[0]);
      }
    })
}

/**
 * 同意订单请求
 * @param  {[type]}   chatinfo ,ordermatchinfo [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.agreeorder = function(cinfo,ominfo,nickname,cb){
  console.log(ominfo);
  var cmsg={},orderstatus,omtype,optype,oids=ominfo.oid,sql=' ( uid = '+cinfo.userfrom+' and oid = '+ominfo.oid +' ) ';
  if(ominfo.type==1){
     omtype=2;
     orderstatus=3;
     optype='匹配';
   }
   if(ominfo.type==5){
     omtype=3;
     orderstatus=4;
     optype='完成';
   }
   if(ominfo.myoid) {
     oids+=','+ominfo.myoid;
     sql+=' or ( uid = '+cinfo.userto+' and oid = '+ominfo.myoid +' ) ';
   }
   cmsg.userfrom= cinfo.userto;
   cmsg.userto  = cinfo.userfrom;  
   cmsg.type    = 4;  
   cmsg.content = nickname+'已同意了你所请求的订单'+optype+'操作';
   cmsg.sendtime= moment().format('YYYY-MM-DD HH:mm:ss');
   console.log(1);
  connection.beginTransaction(function(err) {
    console.log(2);
    if (err) { throw err; }
    console.log(3);
    connection.query('INSERT INTO chat SET ? ' ,[cmsg],function(err,r){
      if (err) {
        return connection.rollback(function() {
          throw err;
        });
      }

      connection.query('UPDATE pporder SET orderstatus = ? WHERE orderid in ( '+ oids +' )', [orderstatus], function(err, r1) {
        if (err) {
          return connection.rollback(function() {
            throw err;
          });
        }
        connection.query('UPDATE ordermatch SET type = ? WHERE '+ sql, [omtype], function(err, r2) {
          if (err) {
            return connection.rollback(function() {
              throw err;
            });
          }
          connection.query('SELECT * from userrelation u WHERE u.userid1 in (?,?) and u.userid2 in (?,?) ' ,[cinfo.userfrom,cinfo.userto,cinfo.userfrom,cinfo.userto], function(err3, r3) {
            if (err) {
              return connection.rollback(function() {
                throw err;
              });
            }
            if(!r3.type1||r3.type1==0){
                 connection.query('UPDATE userrelation SET type1 = ? WHERE userid1 in (?,?) and userid2 in (?,?) ' ,[0,cinfo.userfrom,cinfo.userto,cinfo.userfrom,cinfo.userto], function(err4, r4) {
                    if (err) {
                      return connection.rollback(function() {
                        throw err;
                      });
                    }
                    connection.commit(function(err) {
                      if (err) {
                        return connection.rollback(function() {
                          throw err;
                        });
                      }
                      cb(err)
                    });
                 }); 
            }else{
                connection.commit(function(err) {
                   if (err) {
                     return connection.rollback(function() {
                       throw err;
                     });
                   }
                   cb(err)
                 });
            }
          });
        });
      });
    });
  })
}