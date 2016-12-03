var chat=require('../controllers').chat;

/* GET users listing. */

module.exports= function(app){
  /*获取聊天记录*/ 
  app.all("/chat/getchatlist",  chat.getchatlist);
  /*获取聊天窗*/ 
  app.all("/chat",  chat.getChat);
  /*获取个人聊天人*/ 
  app.all("/chat/getchatpeople",  chat.getchatpeople);
  /*同意订单*/
  app.all("/chat/agree",  chat.agree);
  /*获取系统消息*/
  app.all("/chat/getsysmsg",  chat.getsysmsg);
  /*获取系统消息list*/
  //app.all("/chat/sysmsglist",  chat.getsysmsglist);
}