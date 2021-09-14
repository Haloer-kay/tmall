<template>
  <div>
    <headNav></headNav>
    <div class="logo_search layer">
      <span>
      <img src="http://img.alicdn.com/imgextra/i1/O1CN015ZbpMf1Dps0oNq4dh_!!6000000000266-2-tps-181-45.png" class="fl">
      </span>
      <div class="shop_search fr">
        <span>宝贝</span>
        <input type="text" class="fl">
        <button class="fl">搜索</button>
      </div>
    </div>
     <div class="nav layer shop_lei">
        <ul class="fl">
            <li class="size"><a href="" style="color:rgb(255,68,0);">全部商品2</a></li>
            <li class="line">|</li>
            <li class="size"><a href="">降价商品0</a></li>
            <li class="line">|</li>
            <li class="size"><a href="">库存紧张0</a></li>
        </ul>
    </div>
    <div class="layer shop_border clearfix">
      
    </div>
    <div class="shpp_box layer" v-for="(item,index) in shopCar" :key='index'>

          <div class="shpp_box_img fl">
            <div class="shpp_box_img1 fl">
              <img :src="item.businessLogo" alt="">
            </div>
            <div class="shpp_box_img2 fr">
              <a href="javascript:;">
             {{item.commodityName}}
           </a>
          </div>
          </div >
          <div class="shpp_box_pro fl">
            <p>{{item.commodityColor}}</p>
            <p>{{item.commodityNet}}</p>
             <p>{{item.commodityTao}}</p>
            <p>{{item.commodityNei}}</p>
      </div>
          <div class="shpp_price fl">
          <div class="shpp_price1 fl">
            <p>￥{{item.commodityPrice}}</p>
          </div>

           <div class="shop_btn fl">
             <button  @click="shop_btn(false,index)">-</button>
             <input type="" :value="item.num" readonly>
             <button @click="shop_btn(true,index)">+</button>
           </div>
          <div class="shpp_price2 fl">
            <p>￥{{item.commodityPrice}}</p>
          </div>
          </div>

        <div class="shpp_del fr">
          <a href="">
         <p>{{item.commodityDel1}}</p>
         </a>
         <a href="">
            <p>{{item.commodityDel2}}</p>
            </a>
        </div>

    </div>

<div class="shop_footer layer">
  <div class="fl">
    <a href="">
        <p>删除</p>
    </a>
    <a href="">
      <p>移入收藏夹</p>
    </a>
  </div>
  <div class="fr shop_price">
    <p>已选商品2件</p>
    <p>合计(不含运费)：</p>
    <p>￥{{totalPrice}}</p>
    <button>结算</button>
  </div>
</div>
<descfooter></descfooter>
<mainfooter></mainfooter>
</div>

</template>

<script>
import headNav from '../components/headNav.vue'
import mainfooter from '../components/MainFooter.vue'
import descfooter from "../components/DescFooter.vue"
export default {
  components:{mainfooter,descfooter,headNav},
  data(){
    return{
      shop_arr:['tb1361875854','手机淘宝','淘宝首页','我的淘宝','购物车2','收藏夹',
      '商品分类','免费开店','千牛卖家中心','联系客服','网站导航'],
      shopCar:JSON.parse(window.sessionStorage.getItem('getData')).Shopping.shopCar,
      totalPrice:0,
    }
  },
  methods:{
    getToatlPrice(){
      let price=0
      this.shopCar.forEach((item,index)=>{
        price+=item.num*item.commodityPrice
      })
      this.totalPrice=price.toFixed(2)
    },
     shop_btn(bool,index){
      let shopIndex=this.shopCar[index]
      if(bool){
        if(shopIndex.num>=10){
          return;
        }
        shopIndex.num++
      }else{
      if(shopIndex.num<=0){
       return;
      }
         shopIndex.num--
      }
      this.getToatlPrice()
    },
  },
  mounted(){
    this.getToatlPrice()
  },
  created () {
    console.log('shopping');
  }
}
</script>

<style>
.shop_btn button,
.shop_price button
{
  cursor: pointer;
}
</style>