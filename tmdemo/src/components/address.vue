<template>
<div>
  <div class="address clearfix" @mouseover="showAddress" @mouseleave="noAddress">
            <h3>
              重庆<i class="iconfont " :class="{active2:addressShow,addressIcon:!addressShow}">&#xe61f;</i>
            </h3>
            <div class="addressArea" v-show="addressShow">
                <div class="major_address">
                  <p class="head">热门城市</p>
                  <p class="hot_cities">
                    <span v-for="(item,index) in this.$store.state.getData.Address.major_address" :key='index' class="cities">
                      {{item}}
                    </span>
                  </p>
                </div>


                <div class="detail_address">
                    <p class="letters">
                      <span v-for="(item,index) in this.$store.state.getData.Address.detail_title" :key="index" @mouseover="active(index)" :class="{active1:index==ins}">
                        {{item}}
                      </span>
                    </p>

                    <div class="detail_address1 hidden" :class="{active:ins==0}">
                      <div class="wrapper">
                      <span class="letter-title">A</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_a" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>


                       <div class="wrapper">
                      <span class="letter-title">B</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_b" :key='index' class="cities">
                          {{item}}
                        </span>
                      </p>
                      </div>

                      <div class="wrapper">
                      <span class="letter-title">C</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_c" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                       <div class="wrapper">
                      <span class="letter-title">D</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_d" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                       <div class="wrapper">
                      <span class="letter-title">E</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_e" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                    </div>


                     <div class="detail_address2 hidden " :class="{active:ins==1}" >
                      <div class="wrapper">
                      <span class="letter-title">F</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_f" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                       <div class="wrapper">
                      <span class="letter-title">G</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_g" :key='index' class="cities">
                          {{item}}
                        </span>
                      </p>
                      </div>

                      <div class="wrapper">
                      <span class="letter-title">H</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_h" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                       <div class="wrapper">
                      <span class="letter-title">J</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_j" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                    </div>
                    <div class="detail_address3 hidden " :class="{active:ins==2}" >
                      <div class="wrapper">
                      <span class="letter-title">K</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_k" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                       <div class="wrapper">
                      <span class="letter-title">L</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_l" :key='index' class="cities">
                          {{item}}
                        </span>
                      </p>
                      </div>

                      <div class="wrapper">
                      <span class="letter-title">M</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_m" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                       <div class="wrapper">
                      <span class="letter-title">N</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_n" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                      <div class="wrapper">
                      <span class="letter-title">P</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_p" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                    </div>
                    <div class="detail_address4 hidden" :class="{active:ins==3}" >
                      <div class="wrapper">
                      <span class="letter-title">Q</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_q" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                       <div class="wrapper">
                      <span class="letter-title">R</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_r" :key='index' class="cities">
                          {{item}}
                        </span>
                      </p>
                      </div>

                      <div class="wrapper">
                      <span class="letter-title">S</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_s" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                       <div class="wrapper">
                      <span class="letter-title">T</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_t" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                      <div class="wrapper">
                      <span class="letter-title">W</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_w" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                    </div>

                    <div class="detail_address5 hidden" :class="{active:ins==4}" >
                      <div class="wrapper">
                      <span class="letter-title">X</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_x" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>
                       <div class="wrapper">
                      <span class="letter-title">Y</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_y" :key='index' class="cities">
                          {{item}}
                        </span>
                      </p>
                      </div>

                      <div class="wrapper">
                      <span class="letter-title">Z</span>
                      <p class="all_cities">
                        <span  v-for="(item,index) in this.$store.state.getData.Address.detail_address_z" :key='index' class="cities">
                         {{item}}
                        </span>
                      </p>
                      </div>

                    </div>



                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
     data(){
        return{
          navIsFixed:false,
          isshow:false,
          text:'',
          ins:0,
          shows:'',
          addressShow:false,
          info:['品牌手机','品牌电脑','精品书籍','休闲零食','品牌牛奶','男女上衣','洗护用品','JavaScript'],
          
          //  '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
          
        }
    },
    methods:{
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
          // var offsetTop = this.$refs.nav.offsetTop
          // console.log(offsetTop);
        if (scrollTop > 224) {
            this.navIsFixed = true
        } else {
          this.navIsFixed = false
        }
      }
    }
}
</script>
<style>

.address .active2{
  display: inline-block;
  transform: rotate(-90deg);
}
.address .active{
  display: block;
}
</style>