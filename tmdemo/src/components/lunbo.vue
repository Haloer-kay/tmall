<template>
    <div class="lunbo" @mouseover="enterBanner" @mouseleave="leaveBanner">
        <transition-group tag="ul" name="image">
            <li v-for="(item,index) in lunboImg" :key="index" v-show="lunboIndex === index" ><img :src="lunboImg[index]" alt="#"></li>
        </transition-group>
        <!-- <ul class="allbtn">
             <li v-for="(item,index) in lunboImg" :key="index" :class="{btncolor:btnNum===index}" @click="changemark(index)"></li>
        </ul> -->
        <div class="leftbtn lunbobtn" @click="lunboJian()" v-show="bannerShow">
             <i class="iconfont bannerIcon1">&#xe61f;</i>
        </div>
        <div class="rightbtn lunbobtn" @click="lunboAdd()" v-show="bannerShow">
                <i class="iconfont bannerIcon2">&#xe61f;</i>
        </div>
        <div class="banner-points">
    <a class="banner-point"  v-for="(item, index) in lunboImg.length" 
    :key="index"
    :class="{active:btnNum===index}"
     >{{index +1}}</a>
  </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        bannerShow:false,
      lunboImg:[
     require("../assets/img/lunbo1.jpg"),
       require("@/assets/img/lunbo2.jpg"),
       require("@/assets/img/lunbo3.jpg"),
       require("@/assets/img/lunbo4.jpg"),
       require("@/assets/img/lunbo5.jpg"),
       require("@/assets/img/lunbo6.jpg"),
    ],
      lunboIndex: 0,
      timer: null,
      btnNum: 0,
      jieliu: null
    }
  },
  methods: {
    stoplunbo () {
      clearInterval(this.timer)
      this.timer = null
    },
    changemark (index) {
      this.stoplunbo()
      this.lunboIndex = index
      this.btnNum = index
      this.runlunbo()
    },
    lunboJian() { 
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex--
          this.btnNum--
          if (this.lunboIndex === -1) {
            this.lunboIndex = 5
            this.btnNum = 5
          }
          this.jieliu = null
          this.runlunbo()
        }, 50)
      }
    },
    lunboAdd () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex++
          this.btnNum++
          if (this.lunboIndex === 6) {
            this.lunboIndex = 0
            this.btnNum = 0
          }
          this.jieliu = null
          this.runlunbo()
        }, 50)
      }
    },
    runlunbo () {
      this.timer = setInterval(() => {
        this.lunboIndex++
        this.btnNum++
        if (this.lunboIndex === 6) {
          this.lunboIndex = 0
          this.btnNum = 0
        }
      }, 3000)
    },
    enterBanner(){
      this.bannerShow=true
    },
    leaveBanner(){
        this.bannerShow=false
    },
   
  },
  components: {
  },
  mounted () {
    this.runlunbo()
  }
}
</script>

<style >

.lunbo {
    position: relative;
    width: 750px;
    height: 291px;
    overflow: hidden; 
}
.allbtn {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 80px);
        
      
    }
    
.allbtn  li{
    width: 20px;
            height: 20px;
            margin-right: 20px;
            background: #333;
            float: left;
            border-radius: 50%;
            opacity: 0.8;
            cursor: pointer;
}
.allbtn .btncolor{
background: #fff;
}
.lunbo  img {
        display: block;
        width: 750px;
        height: 291px;
        position: absolute;
    }
.lunbobtn {
        position: absolute;
        width: 40px;
        height: 60px;
        font-size: 40px;
        line-height: 40px;
        color: #fff;
        background: #333;
        opacity: 0.5;
        top: 115px;
        text-align: center;
        cursor: pointer;
    }
.rightbtn {
        right: 0;
    }
    
.image-enter-active {  
        
        transition: all 0.5s ease;
    }
 .image-leave-active { 
         transform: translateX(-100%);
        transition: all 0.5s ease;
    }
.image-enter { 
        transform: translateX(100%);
    }
 .image-leave-to {   
        transform: translateX(-100%);
    }
</style>
