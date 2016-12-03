var connection =require('./mysqlConn');
var moment = require('moment');
/**
 * 根据邮箱获取用户信息
 * @param  {[type]}   email [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.getUserByEmail = function(email,cb){
  console.log(email)

	connection.query('SELECT * from user WHERE email= ? ' ,[email],function(err,r){
      if(err){
        cb(err);
      }else{
        console.log(r[0])
        cb(err,r[0]);
      }
    })
}
/**
 * 保存修改用户信息
 * @param  {[type]}   user [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
exports.saveAccount = function(user,cb){
	if(user.userid){
    //Update
    var tampid= user.userid;
    delete user.userid;
    connection.query('UPDATE user SET ? WHERE userid= ? ' ,[user,tampid],function(err,r){
      if(err){
        cb(err);
      }else{
        user.userid=tampid;
        cb(err,user.userid);
      }
    })
  }else{
  	console.log("insert");
    //Insert
    connection.query('INSERT INTO user SET ? ' ,[user],function(err,r){
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
 * 根据用户id获取用户信息
 * @param  {[type]}   email [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.getUserByUserid = function(userid,cb){

  connection.query('SELECT * from user WHERE userid= ? ' ,[userid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r[0]);
      }
    })
}

/**
 * 获取用户关系
 * @param  {[type]}   fuid,uid [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
var getmatch=exports.getmatch = function(fuid,uid,cb){

  connection.query('SELECT * from userrelation u WHERE u.userid1 in (?,?) and u.userid2 in (?,?) ' ,[fuid,uid,fuid,uid],function(err,r){
      if(err){
        cb(err);
      }else{
        cb(err,r[0]);
      }
    })
}

/**
 * 设置用户关系
 * @param  {[type]}   user [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
exports.setmatch = function(userrelation,cb){
  getmatch(userrelation.userid2,userrelation.userid1,function(err,rs){
      if(err){
        cb(err);
      }else{
        if (rs) {
          console.log(123);
          connection.query('UPDATE userrelation SET ? WHERE userid1 in (?,?) and userid2 in (?,?) ' ,[userrelation,userrelation.userid2,userrelation.userid1,userrelation.userid2,userrelation.userid1],function(err1,r1){
              cb(err1);
          })
        }else{
          console.log(userrelation);
          connection.query('INSERT INTO userrelation SET ? ' ,[userrelation],function(err2,r2){
            console.log(err2);
              cb(err2);
          })
        }
      }
    })
}