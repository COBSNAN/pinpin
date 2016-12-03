var crypto = require('crypto'),
  fs = require('fs'),
  path = require("path");


/**
 * 发送 text/html的json数据，避免IE6-8不识别Json数据。
 *
 * send type text/html Json data.
 */
exports.sendHJ = function(res, data) {
  res.charset = 'utf-8';
  res.type('html');
  if(data){
    res.send(data);
  }else{
    res.send({err:"sendHJ()返回数据为空！"})
  }
}

/**
 * hash加密字符串。
 *
 */
exports.hashStr = function(str) {
  var hash = crypto.createHash('sha1');
  return hash.update(str).digest('hex');
}
/**
 * 验证文件目录，不存在则创建
 */
var mkdirSync = exports.mkdir = function(url, mode, cb) {
  // url=path.normalize(url);
  var arr = url.split("/");
  mode = mode || 0755;
  cb = cb || function() {};
  if (arr[0] === ".") { //处理 ./aaa
    arr.shift();
  }
  if (arr[0] == "..") { //处理 ../ddd/d
    arr.splice(0, 2, arr[0] + "/" + arr[1])
  }

  function inner(cur) {
    if (!fs.existsSync(cur)) { //不存在就创建一个
      fs.mkdirSync(cur, mode)
    }
    if (arr.length) {
      inner(cur + "/" + arr.shift());
    } else {
      cb();
    }
  }
  arr.length && inner(arr.shift());
}

/**
 *  获取文件后缀名
 *
 *  filePath 文件名或文件路径,不带带分隔符【.】
 */
exports.fileExtension = function(filePath) {
  filePath = path.normalize(filePath);
  var arrfn = filePath.split(".");
  return arrfn[arrfn.length - 1];
}
/**
 *  获取文件后缀名
 *
 *  filePath 文件名或文件路径,不带带分隔符【.】
 */
exports.fileFullName = function(filePath) {
  filePath = path.normalize(filePath);
  //console.log(filePath);
  var arrfn = filePath.split("\\");
  return arrfn[arrfn.length - 1];
}
/**
 *  获取文件后缀名
 *
 *  filePath 文件名或文件路径,不带带分隔符【.】
 */
exports.fileName = function(filePath) {
  filePath = path.normalize(filePath);
  var arrfn = filePath.split("\\");
  return arrfn[arrfn.length - 1].split('.')[0];
}

/**
 *  将字符串分割并存储在数组中
 *
 *  splString 选择的分割字符
 *  str 需要分割的字符串
 */
exports.splitString = function(splString,str){
  var strr = str.split(splString);
  return strr;
}
/**
 *  ObjectID
 */
//exports.ObjectID = require('bson').ObjectID;
/**
 * trim 删除左右两端的空格
 * @param  {String} str
 * @return {String}
 */
var trim =function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
exports.trim=trim;
/**
 * ltrim 删除左边的空格
 * @param  {String} str
 * @return {String}
 */
function ltrim(str) {
  return str.replace(/(^\s*)/g, "");
}
exports.ltrim=ltrim;
/**
 * rtrim 删除右边的空格
 * @param  {String} str
 * @return {String}
 */
function rtrim(str) {
  return str.replace(/(\s*$)/g, "");
}


exports.rtrim=rtrim;

/**
 * 格式化日期时间
 * @param format
 * @returns
 */
Date.prototype.format = function(format) {
  if (isNaN(this.getMonth())) {
    return '';
  }
  if (!format) {
    format = "yyyy-MM-dd hh:mm:ss";
  }
  var o = {
    /* month */
    "M+" : this.getMonth() + 1,
    /* day */
    "d+" : this.getDate(),
    /* hour */
    "h+" : this.getHours(),
    /* minute */
    "m+" : this.getMinutes(),
    /* second */
    "s+" : this.getSeconds(),
    /* quarter */
    "q+" : Math.floor((this.getMonth() + 3) / 3),
    /* millisecond */
    "S" : this.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for ( var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};
exports.formatDate=function(date,format){
  return date.format(format);
}

/**
 * json格式转树状结构
 * @param   {json}      json数据
 * @param   {String}    id的字符串
 * @param   {String}    父id的字符串
 * @param   {String}    children的字符串
 * @return  {Array}     数组
 */
exports.transArrayToTree=function(a, idStr, pidStr, chindrenStr){
    var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;
    for(; i < len; i++){
        hash[a[i][id]] = a[i];
    }
    for(; j < len; j++){
        var aVal = a[j], hashVP = hash[aVal[pid]];
        if(hashVP){
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(aVal);
        }else{
            r.push(aVal);
        }
    }
    return r;
}
/*压缩图片*/
exports.cpmpassImg=function(dir,path,tampName,cb){
  mkdirSync(dir,777,function(){
    imageMagick(path)
    .resize(160)
    .quality(70) //降低图片质量为原来的70%！
    .autoOrient()
    .write(dir+'/mini_'+tampName, function(err) {
      if (err) {
        cb(err);
      }else{
        imageMagick(path)
        .resize(800) //加('!')强行把图片缩放成对应尺寸！
        .autoOrient()
        .write(dir+'/normal_'+tampName, function(err) {
          if (err) {
            cb(err);
          }else{
            imageMagick(path)
            .resize(1024) //加('!')强行把图片缩放成对应尺寸！
            .autoOrient()
            .write(dir+'/big_'+tampName, function(err) {
              if (err) {
                cb(err);
              }else{
                cb(err);
              }
            });
          }
        });
      }
    });
  });
}
/*转移文件*/
exports.moveFile=function(dir,path,fileName,cb){
  utils.mkdir(dir, 777, function(err) {
    fs.rename(path, dir+'/'+fileName, function(err) {
      if(err){
        cb(err);
      }else{
        cb(err,dir+'/'+fileName);
      }
    });
  });
}



/*验证码*/
exports.verifyPin=function(){
              var a='';
              for(var i=0;i<=5;i++){
                  a+=Math.floor(Math.random()*10);
              }
              return a;
}