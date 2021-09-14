<template>
   <div class="topMessage">
        <div class="layer">
        <ul class="fl topMessageUl"> 
            <li>
                <span class="iconfont f6">&#xe502;</span><a href="/">天猫首页</a>
            </li>
            <li>
                <span :name='miao'>{{miao}}</span>
            </li>
            <li>
                <a href="javascript:;" :name='login' @click='flag&&toLogin()'>{{login}}</a>
            </li>
            <li>
                <a  href="javascript:;" :name="register" @click='toRegister()'>{{register}}</a>
            </li>
        </ul>
        <ul class="fr topMessageUl">
            <li @mouseover="mouseover(1)" @mouseleave="mouseleave(1)">
                <a href="#" >我的淘宝</a>
                <div class="drop1" v-show="show1">
                    <a href="#">已买到的宝贝</a>
                    <br>
                    <a href="#">已卖出的宝贝</a>
                </div>
            </li>
            <li>
                <span class="iconfont f6">&#xe507;</span><a href="javascript:;" @click="toShopping">购物车</a>
            </li>
            <li  @mouseover="mouseover(2)" @mouseleave="mouseleave(2)">
                <a href="#" >收藏夹</a>
                <div class="drop2" v-show="show2">
                    <a href="#">收藏的宝贝</a>
                    <br>
                    <a href="#">收藏的店铺</a>
                </div>
            </li>
            <li @mouseover="mouseover(3)" @mouseleave="mouseleave(3)">
                <span class="iconfont f6">&#xe6b3;</span>
                <a href="#" >手机版</a>
                <div class="drop3" v-show="show3">
                    <img src="http://gw.alicdn.com/imgextra/i1/O1CN01p7gvna1wNcJUZjbyI_!!6000000006296-2-tps-175-175.png" alt="">
                    <img src="https://img.alicdn.com/tfs/TB1W.19bG67gK0jSZFHXXa9jVXa-145-30.jpg" alt="">
                </div>
            </li>
            <li>
                <a href="#">淘宝网</a>
            </li>
            <li @mouseover="mouseover(4)" @mouseleave="mouseleave(4)">
                <a href="#"  >商家支持</a>
                <div  class="drop4" v-show="show4">
                    <div>
                        <p>商家:</p>
                        <ul>
                           <li v-for="(item,index) in businessLi" :key="index">
                               <a href="javascript:;">
                                   {{item}}
                               </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>帮助:</p>
                        <ul>
                            <li>
                                <a href="">商家服务大厅</a>
                            </li>
                             <li>
                                <a href="">问商友</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li @mouseover="mouseover(5)"  @mouseleave="mouseleave(5)">
                <span class="iconfont f6">&#xe501;</span>
                <a href="javascript:;">网站导航</a>
                <div class="drop5 clearfix" v-show="show5">
                    <div class="netNav1 fl site-cont">
                        <h2>
                            热点推荐
                            <span>Hot</span>
                        </h2>
                        <ul class="site-list">
                            <li v-for="(item,index) in siteList1" :key=index>
                                <a href="">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="netNav2 fl site-cont">
                        <h2>
                            行业市场
                            <span>Market</span>
                        </h2>
                        <ul class="site-list">
                            <li v-for="(item,index) in siteList2" :key=index>
                                <a href="">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="netNav3 fr">
                        <h2>
                            服务指南
                            <span>Help</span>
                            
                        </h2>
                         <ul class="site-list">
                            <li v-for="(item,index) in siteList3" :key=index>
                                <a href="">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
       data(){
        return {
           
            miao:'喵，欢迎来天猫',
            login:'请登录',
            register:'免费注册',
            flag:true,
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            businessLi:['商家中心','天猫规则','商家入驻','运营服务','商家品控','商家工具','天猫智库','喵言喵语'],
            siteList1:['天猫超市','喵鲜生','科技新品','女装新品','酷玩街','内衣新品','试美妆','运动新品','时尚先生','精明妈咪','吃乐会','企业采购',
            '会员积分','天猫国际','品质频道'],
            siteList2:['美妆','电器','女装','男装','女鞋','男鞋','内衣','箱包','运动','母婴','家装','医药','食品','配饰','汽车'],
            siteList3:['帮助中心','品质保障','特色服务','7天退换货']
        }
    },
    methods:{
        toLogin(){
            this.$router.replace('/login')
        },
        toRegister(){
            if(window.sessionStorage.getItem('isLogin')!='true'){
                this.$router.replace('/register')
            }
            else{
                window.sessionStorage.setItem('isLogin',false)
                this.flag=true
                this.miao='喵，欢迎来天猫'
                this.login='请登录'
                this.register='免费注册'
            }
        },
        toShopping(){
            this.$router.replace('/shopping')
        },
        mouseover(num){
        switch (num) {
            case 1:
                this.show1=true
                break;
            case 2:
                this.show2=true
                break;
            case 3:
                this.show3=true
                break;
            case 4:
                this.show4=true
                break;
            case 5:
                this.show5=true
                break;   
            default:
                break;
        }
        },
         mouseleave(num){
             switch (num) {
            case 1:
                this.show1=false
                break;
            case 2:
                this.show2=false
                break;
            case 3:
                this.show3=false
                break;
            case 4:
                this.show4=false
                break;
             case 5:
                this.show5=false
                break;
            default:
                break;
        }
           
        }

    },
    mounted(){
        if(sessionStorage.getItem('isLogin')=='true'){
            this.flag=false,
            this.miao='Hi,'+ '  '+sessionStorage.getItem('user'),
            this.login='积分'+sessionStorage.getItem('score'),
            this.register='退出'
        }
      
    },

}
</script>

<style>

</style>