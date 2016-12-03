var account=require('../controllers').account;

/* GET users listing. */

module.exports= function(app){
  /*用户登录页面*/ 
  app.all("/account/login",  account.login);
  /*用户登录处理*/ 
  app.post("/account/loginAction",  account.loginAction);
  /*用户注册处理*/ 
  app.post("/account/registAction",  account.registAction);
  
  /*用户退出登录处理*/ 
  app.all("/account/loginOut",  account.loginOut);
  /*用户重置密码发送邮箱验证码处理*/ 
  app.all("/account/sendVerifyEmail",  account.sendVerifyEmail);
  /*用户重置密码处理*/ 
  app.all("/account/resetAccountPwd",  account.resetAccountPwd);
  /*用户详细信息处理*/ 
  app.all("/account/userDetail",  account.userDetail);
  /*用户验证邮箱处理*/ 
  app.all("/account/verifyEmail",  account.verifyEmail);
  /*用户验证邮箱处理*/ 
  app.post("/account/changePwd",  account.changePwd);
  /*用户修改信息*/ 
  app.post("/account/userModify",  account.userModify);
  /*获取用户关系*/ 
  app.post("/account/getmatch",  account.getmatch);
  /*设置用户关系*/ 
  app.post("/account/setmatch",  account.setmatch);

}
