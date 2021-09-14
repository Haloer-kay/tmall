<template>
<!-- 搜索框周围 -->
    <div>
    <div class="headSearch">
        <div class="logo">
           <a href="">
               <s></s>
           </a>
        </div>
        <nowAddress></nowAddress>
        <div class="main-search">
            <input type="text" placeholder="搜索天猫超市商品"
            class="mainInput"
            v-model.trim="text"
            @blur="blur"
            @focus='focus'
            ref="search"
            >
            <button class="btn" type="submit" @click="searchTwo">搜索</button>
        <div class="searchBox" v-show="isshow">
            <p>提供以下商品搜索:</p>
            <ul>
            <li v-for="(item,index) in searchResult" :key='index'>
              <a href="javascript:;"  @click="searchOne">
                {{item}}
                </a>
              </li>
            </ul>
        </div>
        </div>
        <div class="baoyou">
            <span>一站式购齐</span>
            <span>满88包邮</span>
        </div>
    </div>
    <div class="nav clearfix" :class="{mainNavFixed:navIsFixed,layer:!navIsFixed}" ref="nav">
      <div class="layer">
        <h2 class="fl lei"> 所有产品分类</h2>
        <ul class="fl">
            <li class="size"><a href="">首页</a></li>
            <li class="line">|</li>
            <li class="size"><a href="javascript:;">企业采购</a></li>
        </ul>
        <div class="fr navShopCar">
          <i class="iconfont">&#xe507;</i>
          <b>￥0.00</b>元
          <span>0kg</span>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import nowAddress from '../components/address.vue'
export default {
  components:{nowAddress},
    data(){
        return{
          navIsFixed:false,
          isshow:false,
          text:'',
          ins:0,
          shows:'',
          addressShow:false,
          info:['品牌手机','品牌电脑','精品书籍','休闲零食','品牌牛奶','男女上衣','洗护用品','JavaScript'],
        }
    },
    computed:{
      searchResult() {
                  var list = [];
                  var _this = this;
                   this.info.map(function(item){
                      if(item.indexOf(_this.text) > -1){
                          return list.push(item)
                      }
                   }) 
                   return list    
                }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll)
       
      this.$axios.get('http://localhost:8000/')
      .then(res=>{
        this.$store.state.getData=res.data
        window.sessionStorage.setItem('getData',JSON.stringify(res.data))
        console.log(JSON.parse(window.sessionStorage.getItem('getData')));
      })
      .catch(err=>{
        console.log(err);
      })
    },
    methods:{
      handleScroll(){
        var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>='500'){
          this.navHead=true
        }else{
          this.navBar=false
        }
      },
      blur(){
          setTimeout(()=>{
            this.isshow=false
          },400)
      },
      focus(){
        this.isshow=true
      },
      searchOne(e){   
        this.$refs.search.value=e.target.innerHTML
         window.sessionStorage.setItem('product',this.$refs.search.value.trim())
          setTimeout(()=>{
          this.$router.push('/searchProduct')
        },200)
      },
      searchTwo(e){
        if(this.$refs.search.value==''){
          return ;
        }
        else{
       this.$refs.search.value=this.searchResult
       window.sessionStorage.setItem('product',this.$refs.search.value.trim())
          setTimeout(()=>{
          this.$router.push('/searchProduct')
          console.log(1,this.$store.state.product);
        },200)
        }
      },
      active(num){
        this.ins=num
      },
      showAddress(){
        this.addressShow=true
      },
      noAddress(){
        this.addressShow=false
      },
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          
        if (scrollTop > 224) {
            this.navIsFixed = true
        } else {
          this.navIsFixed = false
        }
      }
    },

}
</script>

<style>
.address{
  left: -59px;
}
.addressArea{
  z-index: 99999;
  position: relative;
  left: 10px;
  width: 480px;
  height: 770px;
  background-color: #fff;
  border: 1px solid #ccc;
}

.detail_address li{
  float: left;
  width: 95px;
  line-height: 30px;
}
.detail_address4{
  background-color: #fff;
  border-bottom:1px solid #ccc;
}
.addressIcon{
  display: inline-block;
  transform: rotate(90deg);
}
.mainNavFixed{
  z-index: 9999;
  position:fixed!important;
  background-color: #fff;
  top: 0;
  width: 100%;
  border-bottom: 1px solid black ;
}
.detail_address .active{
  display: block;
}
.hidden{
  display: none;
}
.navShopCar{
  width: 210px;
  height: 33px;
  background-color: rgb(191,0,0);
  /* color: #fff; */
  color: #fcff00;
}

.navShopCar i{
  position: relative;
  display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 30px;
    line-height: 32px;
    font-size: 24px;
    background-color: #333;
    /* transform: rotate(0deg); */
    z-index: 2;
    left: -25px;
    top: -3px;
    color: #fff;
    border: 3px solid #fff;
    text-align: center;
}

.navShopCar b{
    line-height: 34px;
  font-size: 22px;
    font-weight: bolder;
    /* vertical-align: middle; */
    margin: 0 2px;
    color: #fcff00;
   padding-bottom: 2px;
}
.navShopCar span{
  color: #fff;
   padding: 0 18px;
}
.mainInput{
  width: 447px;
    height: 20px;
    line-height: 20px;
    padding: 6px 3px 5px 5px;
    outline: 0;
    border: none;
    margin: 0;
    font-weight: 900;
}
</style>