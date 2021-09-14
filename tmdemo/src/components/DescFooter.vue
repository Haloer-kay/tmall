<template>
  <div class="desc_footer clearfix">
      <div class="layer">
      <img src="https://gw.alicdn.com/tfs/TB1wr5SmUY1gK0jSZFMXXaWcVXa-336-120.png" alt="" class="desc_logo fl">

      <div class="fl desc_text" v-for="(item,index) in desc_footer" :key="index">
        <span>
            <a href="javascript:;" >{{item.title}}</a>
        </span>
        <p v-for="(item1,index1) in item.service" :key="index1"><a href="javascript:;">{{item1}}</a></p>
      </div>

        <div class="fl desc_text">
        <span>
            <a href="javascript:;" >随时随地逛</a>
        </span>
       <img src="https://gtms03.alicdn.com/tps/i3/T1zuSAFRJbXXaSJVsE-115-115.png" alt="">
      </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            desc_footer:[
                {
                    title:'购物指南',
                    service:['购物流程','配送时效声明','配送区域及费用','购买生鲜须知','发票流程','商品限购说明']
                },
                {
                    title:'售后服务',
                    service:['退货规则','退货指南','保质期说明','联系客服']
                },
                {
                    title:'自助服务',
                    service:['订单物流查询','我的购物车','我的现金券','购物常见问题','建议反馈']
                },
                 {
                    title:'商家服务',
                    service:['关于天猫超市','入住天猫超市','商家常见问题','淘鲜达招商']
                },

            ]
        }
    }
}
</script>

<style>

.desc_footer{

     width: 990px;
    margin-top: 50px;
    float: left;
    width: 100%;
    height: 175px;
    border-top: 2px solid  #ededed;
    padding: 22px 0;
}
.desc_logo{
    margin-right: 80px;
    width: 112px;
    height: 40px;
    position: relative;
    left: 0;
}
.desc_text{
    width: 165px;
    margin-left: 30px;
}
.desc_text span{
    height: 20px;
    line-height: 20px;
    color: #646464;
    font-size: 16px;
    font-weight: 700;
    
}
.desc_text span a{
    display: block;
    margin-bottom: 15px;
}
.desc_footer p a{
      height: 20px;
    line-height: 20px;
    color: #8b8b8b;
}
.desc_text img{
    width: 105px;
    height: 105px;
}

</style>