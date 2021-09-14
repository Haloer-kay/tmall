<template>
<!-- 登陆页面 -->
  <div class="login">
      <div class="l-header">
        <a href="https://www.tmall.com">
           <img src="https://img.alicdn.com/tfs/TB1_Gn8RXXXXXXqaFXXXXXXXXXX-380-54.png" alt="" class="l-img">
        </a>
      </div>
      <div class="l-container">
        <div class="l-inner">
        <img src="https://gw.alicdn.com/tfs/TB1kcCBSpXXXXarapXXXXXXXXXX-1190-600.png" >
        <div class="login-box">

          <div class="login-tab">
            <a href="" class="l-item">密码登录</a>
            <a href="" class="l-item">短信登录</a>
          </div>
          <div class="l-input l-id">
              <input type="text" class="fm-text" placeholder="会员名/邮箱/手机号" v-model="username">
              <div v-show="hefa" class="confirm">
            <p>{{nameLimit}}</p>
          </div>
          </div>
          
          <div class="l-input l-pswd">
             <input type="password" class="fm-text" placeholder="请输入登录密码" v-model="userpass">
             <div v-show="correct" class="confirm">
            <p>{{err}}</p>
          </div>
          <div v-show="passhefa" class="confirm">
            <p>{{passLimit}}</p>
          </div>
          </div>
          <div class="l-btn">
            <input class="l-button" @click="login"  value="登录" type="submit">
          </div>
          <div class="l-tips">
            <span class="l-tip">忘记密码</span>
            <span class="l-tip" >忘记用户名</span>
            <span class="l-tip" ><a href="/register"> 免费注册</a></span>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {

    data(){
      return {
        username: '',
        userpass:'',
        isLogin:false,
        isUser:false,
        isPass:false,
        correct:false,
        hefa:false,
        passhefa:false,
        nameLimit:'***请输入3~10位的字母或数字***',
        err:'***用户名或密码输入错误***',
        passLimit:'***请输入6~18位的字母或数字***'
      }
    },
    methods:{
      login(){

           let userReg=/^\w{3,10}$/g
        let passReg=/^\w{6,18}$/g
        if(!userReg.test(this.username)){
          this.hefa=true
          this.username=''
          setTimeout(()=>{
            this.hefa=false
          },2100)
          return false;
        }
        if(!passReg.test(this.userpass)){
          this.passhefa=true
          this.userpass=''
          setTimeout(()=>{
            this.passhefa=false
          },2100)
          return false
        }
        this.$axios.post('http://localhost:8000/users/login',{
          username:this.username,
          userpass:this.userpass
        }).then(res=>{
          console.log(res)
          if(res.data.code==0){
          this.correct=true
          this.userpass=''
          setTimeout(()=>{
            this.correct=false
          },2100)
          }
          else if(res.data.code==1){
          this.$store.state.user=res.data.username
          window.sessionStorage.setItem('user',res.data.username)
          window.sessionStorage.setItem('isLogin',true)
          window.sessionStorage.setItem('score',res.data.score)
            this.$router.replace('/')
          }
        })
      }
    },
}
</script>

<style>



</style>