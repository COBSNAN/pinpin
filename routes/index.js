// 用户操作
var account       =require('./account');
// 地址操作
var address       =require('./address');
// 聊天操作
var chat       =require('./chat');
// 订单操作
var order       =require('./order');
//上传
var upload = require('./upload');


/* GET home page. */
module.exports= function(app){
	// app.all('/chat',function(req,res){
	// 	res.render('chat/cs');
	// })
	account(app);
	app.all('/*',function(req,res,next){
		if(req.session.userid){
			next();
		}else{
			console.log(123);
			res.redirect('/account/login');
		}
	});
	//user(app);
	address(app);
	chat(app);
	order(app);
	/*上传文件*/
	upload(app);
}
