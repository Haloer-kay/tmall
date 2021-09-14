<template>
  
<!-- 主页面中的产品界面 -->
  <div >
    <div class="details clearfix layer"  v-for="(item,index) in this.$store.state.getData.Product" :key="index">

    <div class="d-header">
        <h2>{{item.title}}</h2>
    </div>
    <div class="d-main fl">
        <div class="words fl">
            <a href="javascript:;" class="outer" v-for="(item0,index0) in item.cate" :key='index0'> 
                <span class="inner">
                    <b class="text">
                       {{item0}}
                    </b>
                </span>
            </a>
        </div>
        <div class="d-img fr">
            
            <a href="javascript:;" class="item-price" v-for="(item1,index1) in item.mesg" :key='index1'>
                <div class="wrap">
                      <img :src="item1.src" alt="" >
                     <h3>{{item1.title}}</h3>
                     <p class="title">{{item1.detail}}</p>
                     <p class="o-price">
                         <span class="yuan">￥</span>
                         <span>{{item1.price}}</span>
                     </p>
                     <a href="javascript:;" class="product_car iconfont">&#xe507;</a>
                </div>
            </a>
            
        </div>
    </div>
    <div class="youhui">
        <img src="https://img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png" alt="">
    </div>
</div>

 <div class="navBarFixed" v-show="navBar">
        <ul class="navArr" >
          <li v-for="(item,index) in navArr" @click="toDes(index)" :key="index" class="navBarLi" :class="{active:index==ins}">
              {{item}}
             <i class="iconfont  navFixed">&#xe61f;</i>
          </li>
        </ul>
        <img src="https://img.alicdn.com/tps/i1/T1dC1wFIVcXXcI6BY_-280-280.png" alt="">
        <ul class="navArr"> 
          <li>
            在线咨询
            <i class="iconfont  navFixed">&#xe61f;</i>
          </li> 
        </ul>
      </div>
  </div>
</template>

<script>
export default {
      data(){
        return{
          navBar:false,
            redLi:'',
            ins:0,
          navArr:['进口酒饮',"酒水饮料","米面杂粮","油品调料","美容护肤",],
        }
    },
    created(){
      
    },
    mounted () {
        
         window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll(){
        var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>='750'){
          this.navBar=true
        }else{
          this.navBar=false
        };
         if(scrollTop>=3194){
            this.ins=4
         }
         else if(scrollTop>=2494){
            this.ins=3
         }
         else if(scrollTop>=1894){
             this.ins=2
         }
         else if(scrollTop>1194){
             this.ins=1
         }
          else if(scrollTop>594){
            this.ins=0
         }
      },
      toDes:function(num){
        
       switch(num){
           case 0:
               window.scrollTo(0,796)
               break
            case 1:
                window.scrollTo(0,1475)
                break
            case 2:
                window.scrollTo(0,2155)
                break
            case 3:
                window.scrollTo(0,2833)
                break
            case 4:
                window.scrollTo(0,3513)
                break
            default:
                 window.scrollTo(0,0)
       }
      }

    },
 destroyed(){
        window.removeEventListener("scroll",this.handleScroll)
    }
}
</script>

<style>
</style>