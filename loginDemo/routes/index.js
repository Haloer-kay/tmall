var express = require('express');
var bodyParser=require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())
var router = express.Router();
var user=require('../model/db');
const { log } = require('debug');
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE")
  next();
});
var server = app.listen(8000, function () {
  console.log('服务器已经启动，地址是http://localhost:8000')
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.post('/users/register',(req,res)=>{
  let userData=req.body


  user.find({username:userData.username})
  .then(data=>{
    if(data.length>0){
      res.send({code:0,msg:'此用户太受欢迎，请更换！'})
    }
    else {
      user.create(userData)
      .then(()=>{
        res.send({code:1,msg:'注册成功'})
      })
    }
  })
})
app.post('/users/login',(req,res)=>{
  let userData=req.body
  user.find({username:userData.username,userpass:userData.userpass})
  .then(data=>{
    console.log(data)
    // res.send(data)r
    if(data.length>0){
      mathScore=Math.ceil(1000*Math.random())
      res.send({code:1,msg:'登陆成功',username:userData.username,
          userpass:userData.userpass,score:mathScore})
    }else{
      res.send({code:0,msg:'用户名或密码错误，请重新输入！'})
    }
  })
})
app.get('/',(req,res)=>{
  res.json(getData)
})
var  SearchProduct=require('./searchProduct')
var  Shopping=require('./shopping')
var Product=require('./product')
var Address=require('./Address')
var sideData=require('./sideData')

var getData={

  sideData,
  Address,
  Product,
  SearchProduct,
  Shopping,

}

module.exports = router;
 