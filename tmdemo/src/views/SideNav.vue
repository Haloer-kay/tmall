<template>
    <div class="firstScreen clearfix layer">
        <div class="firstLeft fl">
            <div class="sideNav fl">
        <ul class="sideNavUl">
            <li v-for="(item,index) in this.$store.state.getData.sideData" :key="index">
                <h3>
                    <span class="iconfont navFont" v-html="item.icon"></span>
                    <a>{{item.title}}</a>
                </h3>
                <p>
                    <a href="javasctipt:;" v-for="(item0,index0) in item.content" :key="index0">{{item0}}</a>
                </p>
                <i class="iconfont navDir">&#xe61f;</i>
          <!-- 七个，竖着的 -->
                <div class="box1">   
                    <!-- 四个，横排的 -->
                  <div class="box1_1" v-for="(item1,index1) in item.detail" :key="index1">
                    <!-- 三个 ，竖排的-->
                    <div class="box1_11" v-for="(item2,index2) in item1" :key="index2">
                        <span>{{item2.title}}</span>
                        <ul>
                          <li v-for="(item3,index3) in item2.content" :key="index3">{{item3}}</li>
                        </ul>
                    </div>
                  </div>  
              </div>
            </li>
              <li>
                <h3>
                    <span class="iconfont navFont">&#xe638;</span>
                    <a>生活服务</a>
                </h3>
                <p>
                    <a href="javasctipt:;">信用卡还款</a>
                    <a href="javasctipt:;">转账</a>
                    <a href="javasctipt:;">充话费</a>
                    <a href="javasctipt:;">点券</a>
                </p>
                <i class="iconfont navDir">&#xe61f;</i>
            </li>
            
        </ul> 
    </div> 
    <div class="img1Box fr">
<lunbo></lunbo>
    </div>
    <div class="img2Box fr">
        <a href="" v-for="(item,index) in ImgBox" :key="index">
            <img :src="ImgBox[index]" class="img2" >
        </a>
    </div>
    </div>
    <div class="firstRight fr">
        <img src="../assets/img/sideRight1.jpg" alt="">
        <img src="../assets/img/sideRight2.jpg" alt="">
    </div>
</div>
</template>
<script>
import lunbo from "../components/lunbo.vue"
export default {
  components:{lunbo},
    data(){
      return{
      ImgBox:[
          require('../assets/img/centerImg1.jpg'),
          require('../assets/img/centerImg2.jpg'),
          require('../assets/img/centerImg3.jpg'),
          require('../assets/img/centerImg4.jpg'),
          require('../assets/img/centerImg5.jpg'),
          require('../assets/img/centerImg6.jpg'),
      ]
      }
    },
    methods: {
  },
  computed: {
  },
  mounted() {
  },  
}
</script>

<style>

</style>