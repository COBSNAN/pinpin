var order=require('../controllers').order;

/* GET users listing. */

module.exports= function(app){
  /*获取订单列表*/ 
  app.all("/order/getOrderList",  order.getOrderList);
  /*保存修改订单*/ 
  app.post("/order/saveORupdateOrder",  order.saveORupdateOrder);
  /*获取订单编辑页面*/ 
  app.all("/order/order",  order.order);
  /*获取订单详情*/ 
  app.all("/order/getOrderByOrderid",  order.getOrderByOrderid);
  /*删除订单*/ 
  app.post("/order/removeOrder",  order.removeOrder);
  /*关注订单*/ 
  app.post("/order/getlike",  order.getlike);


}