<template>
          <div class="search layer clearfix">
            <input type="text" placeholder="搜索天猫超市商品" class="input" 
            v-model.trim="text"
            @blur="blur"
            @focus='focus'
            ref="search">
            <button class="btn" type="submit"  @click="searchTwo">搜索</button>

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
</template>

<script>
export default {
       data(){
        return{
          navHead:true,
          isshow:false,
          text:'',
          info:['品牌手机','品牌电脑','精品书籍','休闲零食','品牌牛奶','男女上衣','洗护用品','JavaScript']
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
        // console.log(this.$store.state.getData);
        // console.log(JSON.parse(window.sessionStorage.getItem('getData')));
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
        this.$emit('itemclick')


        // this.$refs.search.value=e.target.innerHTML
        // this.$store.state.product= this.$refs.search.value.trim()
        
        console.log(1, window.sessionStorage.getItem('product'));
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
      //  this.$store.state.product=this.$refs.search.value.trim()
       window.sessionStorage.setItem('product',this.$refs.search.value.trim())
      //  this.$refs.search.value=this.searchResult
      //  this.$store.state.product=this.$refs.search.value.trim()
          setTimeout(()=>{
          this.$router.push('/searchProduct')
          // console.log(2,this.$store.state.product);
        },200)
        }
      },
    },
}
</script>

<style>

.search{
  width: 545px;
  height: 30.5px;
  border: 3px solid rgb(255,0,54);
  margin: 0 auto;
  margin-top: 20px;
}
.search button{
  background-color: rgb(255,0,54);
}
</style>