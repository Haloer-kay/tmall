<template>
  <div >
    <div class="short-cut layer clearfix">
      <ul>
        <li v-for="(item,index) in shortCut" :key="index" >
          <h3>
            <i class="iconfont" v-html="item.icon"></i>
            {{item.title}}
          </h3>
          <p>
            <a href="javascript:;" v-for="(item1,index1) in item.content" :key="index1">{{item1}}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      shortCut:{
        cut1:{
          title:'活动',
          icon:'&#xe6b3;',
          content:['新人活动','一站式购齐']
        },
        cut2:{
          title:'价格',
           icon:'&#xe507;',
          content:['0-10元','10-30元','30-70元','70元以上']
        },
        cut3:{
          title:'日用百货',
          icon:'&#x3483;',
          content:['纸品争霸','时尚买手','美容江湖','巾彩秀'],
        },
        cut4:{
           title:'食品',
           icon:'&#xe778;',
          content:['酒水活动','疯狂厨房','零食欢乐','购淘零食'],
        },
        cut5:{
          title:'进口食品',
          icon:"&#xe623;",
          content:['进口洋货','进口饼干','进口零食','进口牛奶'],
        }
      }
    }
  }
}
</script>

<style>
.short-cut{
  height: 146px;
 background-color: #efefef;
    border-top: 1px solid #e4e4e4;
    padding: 20px 0;
    font-size: 12px;
    line-height: 1.5;
}
.short-cut li{
    float: left;
    height: 95px;
    width: 197px;
    padding: 20px;
    background-color: #efefef;
    border-left: 1px solid #e4e4e4;
    margin-left: -1px;
    list-style: none;
}
.short-cut li h3{
    font-size: 16px;
    color: #e8394e;
}
.short-cut li h3 i{
 margin-right: 2px;
    font-size: 22px;
    vertical-align: -2px;
    font-weight: normal;
}
.short-cut li p a{
    margin-bottom: 5px;
    float: left;
    width: 50%;
    color: #444;
    text-decoration: none;
}
.short-cut li p a:hover{
  color: #e8394e;
}
</style>