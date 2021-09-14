<template>
<!-- 注册 -->
  <div class="register">
      <div class="r-header">
        <a href="https://www.tmall.com">
           <img src="https://img.alicdn.com/tfs/TB1_Gn8RXXXXXXqaFXXXXXXXXXX-380-54.png" alt="" class="r-img">
        </a>
      </div>
      <div class="r-container">
        <div class="r-inner">
        <img src="https://gw.alicdn.com/tfs/TB1kcCBSpXXXXarapXXXXXXXXXX-1190-600.png" >
        <div class="rgs-box">

          <div class="rgs-tab">
            <a href="" class="r-item">创建账户</a>
          
          </div>
          <div class="r-input r-id">
              <input type="text" class="fmr-text" placeholder="创建一个昵称" v-model="username">
               <div v-show="hefa" class="confirm">
            <p>{{nameLimit}}</p>
          </div>
              <div v-show="popular" class="confirm">
            <p>{{namePopular}}</p>
          </div>
          </div>
          <div class="r-input r-pswd">
             <input type="password" class="fmr-text" placeholder="请输入密码" v-model="userpass" ref="pass">
             <span>
               <i class="iconfont" @mousemove ='showPass' @mouseleave="coverPass" >&#xe8c7;</i>
             </span>
             <div v-show="passhefa" class="confirm">
            <p>{{passLimit}}</p>
          </div>
          </div>
           <div class="r-input r-pswd">
             <input type="password" class="fmr-text" placeholder="请再次输入密码验证" v-model="userpassAgain">
              <div v-show="diff" class="confirm">
            <p>{{difference}}</p>
          </div>
          </div>
          <div class="r-btn">
            <button class="r-button" @click="register">注册</button>
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
        userpassAgain:'',
        diff:false,
        hefa:false,
        popular:false,
        passhefa:false,
        nameLimit:'***请输入3~10位的字母或数字***',
        namePopular:'***该用户名太受欢迎，请更换一个***',
        passLimit:'***请输入6~18位的字母或数字***',
        difference:'***前后输入密码不一致***',
      }
    },
    methods:{
      register(){
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
          this.userpassAgain=''
          setTimeout(()=>{
            this.passhefa=false
          },2100)
          return false
        }
        if(this.userpass!=this.userpassAgain){
          this.diff=true
          this.userpassAgain=''
          setTimeout(()=>{
            this.diff=false
          },2100)
          
          return false;
        }

        this.$axios.post('http://localhost:8000/users/register',{
          username:this.username,
          userpass:this.userpass
        }).then(res=>{
          console.log(res);
          if(res.data.code==1){
            this.$router.replace('/login')
          }else if(res.data.code==0)
          {
            this.popular=true
             this.username=''
            setTimeout(()=>{
              this.popular=false
            },2100)
            
          }
        })
      },
      showPass(){
        this.$refs.pass.type='text'
      },
      coverPass(){
        this.$refs.pass.type='password'
      }
    }
}
</script>

<style>

</style>