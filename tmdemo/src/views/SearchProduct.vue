<template>
<!-- 搜索后的产品展示 -->
  <div>
     <headAd></headAd>
     <headNav></headNav>
     <headSearch @itemclick='fClick'></headSearch>
     <div class="layer clearfix ">
         <div class="search_product fr">
             <div class="searchImgBox fl" v-for="(item,index) in img_box" :key='index' >
               <img :src="item.src" alt="" >
               <h6 class="product_title">
                   <a href="javascript:;">
                   {{item.title}}
                    </a>
                </h6>
                <div class="item-summary">
                    <div class="item-sum">
                        <span>总销量：</span>
                        <strong>{{item.sum}}</strong>
                    </div>

                    <div class="item-price">
                        <span class="ui-price">
                            <strong class="price-icon">￥</strong>
                            <span>{{item.price}}</span>
                        </span>
                    </div>
                   <a href="javascript:;" class="addCart iconfont">&#xe507;</a>
                </div>
             </div>
         </div>
     </div>
     <descfooter></descfooter>
    <mainfooter></mainfooter>
  </div>
</template>
<script>
import headAd from '../components/headAd.vue'
import headNav from '../components/headNav.vue'
import headSearch from "../components/headSearch.vue"
import mainfooter from '../components/MainFooter.vue'
import descfooter from "../components/DescFooter.vue"

export default {
components:{headAd,headNav,headSearch,mainfooter,descfooter},
    data(){
        return{
            img_box:'',
        }
    },
    methods:{
      fClick(){
           switch(window.sessionStorage.getItem('product')){
          case '品牌手机':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.shouji_img
            break
          case '品牌电脑':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.diannao_img
            break
          case '精品书籍':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.book_img
            break 
          case '休闲零食':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.lingshi_img
            break  
         case '品牌牛奶':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.milk_img
             break
         case '男女上衣':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.clothes_img
             break
         case '洗护用品':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.wash_img
             break
         case 'JavaScript':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.js_img
      }  
    },
    },
    created(){
      switch(window.sessionStorage.getItem('product')){
          case '品牌手机':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.shouji_img
            break
          case '品牌电脑':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.diannao_img
            break
          case '精品书籍':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.book_img
            break 
          case '休闲零食':
            this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.lingshi_img
            break  
         case '品牌牛奶':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.milk_img
             break
         case '男女上衣':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.clothes_img
             break
         case '洗护用品':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.wash_img
             break
         case 'JavaScript':
             this.img_box=JSON.parse(window.sessionStorage.getItem('getData')).SearchProduct.js_img
      }
}
}
</script>

<style>


</style>