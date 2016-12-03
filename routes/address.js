var address=require('../controllers').address;

/* GET users listing. */

module.exports= function(app){
  /*获取省市县列表*/ 
  app.all("/address/getAreaList",  address.getAreaList);
  /*保存修改地址*/ 
  app.all("/address/saveORupdateAddress",  address.saveORupdateAddress);
  /*删除地址*/ 
  app.all("/address/deleteAddress",  address.deleteAddress);
}
