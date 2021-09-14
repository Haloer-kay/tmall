const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/login')
.then(()=>{
  console.log('数据库连接成功');
})
.catch((err)=>{
  console.log('数据库连接失败');
  console.log(err);
})

const userSchema= new mongoose.Schema({
  username:String,
  userpass:String
})
const user =mongoose.model('user',userSchema);
module.exports=user