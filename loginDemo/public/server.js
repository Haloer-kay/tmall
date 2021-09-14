// // server.js
// var express = require('express');
// var bodyParser=require('body-parser')

// var app = express();
// app.use(bodyParser.urlencoded({extend:false}))
// app.use(bodyParser.json())
// //解决跨域  
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE")
//   next();
// });
// var server = app.listen(8000, function () {
//   console.log('服务器已经启动，地址是http://localhost:8000')
// })
// // app.get('/', function (req, res) {
// //   res.send('这里是首页')
// // })
// app.get('/', function (req, res) {
//   res.json(getData) // 返回json
// })


// app.post('/users/register',(req,res)=>{
//   let userData=req.body
//   console.log(userData)
//   res.end(JSON.stringify(userData))

// })

// var getData={
//   data_1:[
//     data1_0={
//     title:'进口牛奶',
//     content:['进口纯牛奶','进口酸奶','进口成人牛奶','进口含乳饮料','进口有机牛奶','进口酸奶粉'],
//     },
//     data1_1={
//         title:'进口粮油/速食/调料',
//         content:['进口橄榄油','进口其他油','进口大米','进口方便面','进口意面','其他速食','进口罐头','进口调味料','进口调味酱']
//     },
//     data1_2={
//         title:'进口厨房用品',
//         content:['进口餐具/水杯','进口厨具/锅具','进口一次性用品']
//     },
//     data1_3={
//         title:'进口零食',
//         content:['进口蜜饯果干','进口薯片/膨化','进口坚果','进口糖果','进口果冻布丁','进口海产品','进口肉干','进口巧克力']
//     },
//     data1_4={
//         title:'进口母婴用品',
//         content:['进口纸尿裤','进口母婴呵护','进口婴儿奶粉','进口辅食','进口婴幼儿营养品']
//     },
//     data1_5={
//         title:'进口饼干/糕点',
//         content:['进口饼干','进口糕点','进口面包干','进口威化','进口苏打饼干','进口曲奇']
//     },
//     data1_6={
//         title:'进口酒饮',
//         content:['进口葡萄酒','进口啤酒','进口起泡酒','进口洋酒','进口果汁','进口水','进口咖啡饮料','进口碳酸饮料']
//     },
//     data1_7={
//         title:'进口冲调保健',
//         content:['进口咖啡','进口茶/蜂蜜','进口谷物冲饮','进口奶茶','进口茶叶','进口保健品','进口维生素']
//     },
//     data1_8={
//         title:'进口个人护理',
//         content:['进口洗发水','进口护发','进口沐浴','进口私处洗液','进口牙膏','进口牙刷','进口漱口水','进口面部护理']
//     },
//     data1_9={
//         title:'品牌',
//         content:['安佳牛奶','中原G7','家乐氏','巴黎水','汤姆农场','小老板']
//     },
//     data1_10={
//         title:'品牌活动',
//         content:['. 德亚牛奶','. 进口谷物冲饮']
//     }
// ],
// Address:{
//     major_address:['北京','上海','杭州','广州','天津','苏州','杭州','深圳','南京','重庆','南昌','武汉'],
//     detail_title:['ABCDE','FGHIJ','KLMNP','QRSTW','XYZ'],
//     detail_address_a:['阿坝','安顺','安庆','阿拉尔','鞍山','阿克苏','阿拉善','阿勒泰','安康','阿里','安阳'],
//     detail_address_b:['百色','巴音郭勒','滨州','保定','北屯','蚌埠','白银','巴中','白沙','保亭','包头','毕节'
//               ,'白山','宝鸡','亳州','保山','本溪','巴彦淖尔','北京','博尔塔拉','白城','北海'],
//     detail_address_c:['常德','楚雄','常州','昌吉','长沙','长治','昌江','澄迈','重庆','朝阳','崇左','长春','承德','滁州','沧州','赤峰','池州','昌都',
//           '郴州','成都','潮州'],
//     detail_address_d:['大连','东营','德宏','定安','东方','儋州','东莞','大兴安岭','迪庆','德州','大理','丹东','大庆','德阳','达州','定西','大同'],
//      detail_address_e:['恩施','鄂尔多斯','鄂州'],
//      detail_address_f:['福州','抚顺','阜新','抚州','防城港','佛山','阜阳'],
//      detail_address_g:['广元','甘南','果洛','桂林','固原','贵阳','广州','贵港','广安','甘孜','赣州'],
//      detail_address_h:['海北','葫芦岛','衡水','海西','呼和浩特','菏泽','怀化','黄南','黄冈','淮南','汉中','海东','呼伦贝尔','红河','淮安','海南藏族',
//                       '河池','衡阳,','鹤壁','黄石','邯郸','海口','淮北','惠州','鹤岗','黄山','和田','贺州','杭州','合肥','河源','哈尔滨','黑河','哈密','湖州'],
//      detail_address_j:['金昌','焦作','锦州','吉安','嘉兴','景德镇','揭阳','九江','鸡西','酒泉','晋城','佳木斯','荆州',
//                       '济南','金华','吉林','晋中','嘉峪关','济源','荆门','江门','济宁'],
//      detail_address_k:['昆玉','克拉玛依','可克达拉','开封','克孜勒苏','柯尔克孜','喀什','昆明'],
//      detail_address_l:['丽江','洛阳','临高','陵水','乐东','六盘水','聊城','六安','柳州','临夏','临汾','娄底','拉萨','临沧',
//                       '龙岩','吕梁','陇南','兰州','乐山','来宾','漯河','泸州','连云港','廊坊','莱芜','辽源','丽水','临沂','林芝','辽阳','凉山'],
//     detail_address_m:['眉山','梅州','茂名','马鞍山','牡丹江','绵阳'],
//     detail_address_n:['南宁','南阳','南充','南平','那曲','宁波','内江','南通','怒江','南京','南昌','宁德'],
//     detail_address_p:['萍乡','普洱','攀枝花','平凉','莆田','盘锦','濮阳','平顶山'],
//     detail_address_q:['潜江','齐齐哈尔','黔西南','庆阳','泉州','琼中','七台河','曲靖','琼海','衢州','秦皇岛','清远','钦州','青岛','黔东南','黔南'],
//     detail_address_r:['日照','日喀则'],
//     detail_address_s:['石家庄','三沙','神农架','汕头','汕尾','苏州','宿州','绥化','双河','石河子','三门峡','宿迁','遂宁','朔州','双鸭山','松原',
//           '三亚','深圳','商丘','石嘴山','绍兴','山南','沈阳','商洛','三明','四平','随州','上海','十堰','韶关','邵阳','上饶'],
//     detail_address_t:['天门','通化','铁门关','图木舒克','台州','屯昌','唐山','铁岭','天水','吐鲁番','太原','铜仁','泰安','泰州','铜川','塔城','天津','铜陵','通辽'],
//     detail_address_w:['吴忠','五家渠','乌鲁木齐','威海','文昌','万宁','五指山','文山','温州','乌海','乌兰察布','武汉','梧州','无锡','潍坊','芜湖','武威','渭南'],
//     detail_address_x:['仙桃','锡林郭勒','孝感','宣城','忻州','厦门','徐州','湘潭','新乡','襄阳','兴安','湘西','西宁','咸宁','咸阳','新余','西双版纳','西安','许昌','信阳','邢台'],
//     detail_address_y:['延安','运城','阳泉','雅安','扬州','玉溪','云浮','伊春','营口','盐城','岳阳','延边','朝鲜族','伊犁',
//             '宜春','宜昌','烟台','榆林','玉树','玉林','宜宾','银川','益阳','永州','阳江','鹰潭'],
//     detail_address_z:['舟山','自贡','株洲','驻马店','中山','张家口','中卫','张家界','珠海','资阳','遵义','漳州','淄博','郑州','周口','湛江','张掖','昭通','枣庄','镇江','肇庆']
// },
// Product:{
//     product_mesg0:{
//         title:'进口酒饮粮油',
//         cate:['其他食用油','调味汁/油','调味料','大米',' 橄榄油','调味酱','烘培原料','谷物冲饮','咖啡'],
//         mesg:[
//         {
//           src:'https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【原装进口，淡淡果香】11',
//           detail:'西班牙进口 歌伦初榨橄榄油1000ml/瓶',
//           price:'118'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/TB16qryLpXXXXcPXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【 茉莉香米 香糯滑软】',
//           detail:'泰国进口泰砻氏 泰国茉莉香米1kg 原装进口大米',
//           price:'35.6'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i2/TB1A6cDFFXXXXX8apXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【非转基因   自然发酵】',
//           detail:'韩国进口 膳府酿造酱油501  500ml  生蘸/凉拌',
//           price:'19'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i3/TB1oLEoIFXXXXbBXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【秋冬温润饮品】',
//           detail:'韩国进口冲饮 全南 蜂蜜柚子茶 1kg  原装进口',
//           price:'47.8'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i1/TB144QhGVXXXXb4XpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【【健康新早餐】',
//           detail:'德国进口 亨利玉米片375g/盒 早餐冲饮麦片',
//           price:'35'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/TB1Sg9AIVXXXXaUaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【好品质的白咖啡】',
//           detail:'马来西亚进口名馨榴莲粉速溶白咖啡480g南洋榴莲风味',
//           price:'49.2'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i4/T1ihPRFINXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【韩国乐天 品质保证】',
//           detail:'韩国进口 乐天爱情美女石榴果汁饮料180ml*15听礼盒',
//           price:'58'
//       },
//        {
//           src:'https://img.alicdn.com/imgextra/i1/TB1S1wGIpXXXXcGXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【24瓶实惠装】',
//           detail:'台湾进口 金牌台湾啤酒330ml*24听/箱 台啤新鲜日期',
//           price:'189'
//       },
//         ]
//     },
//     product_mesg1:{
//         title:'酒水饮料',
//         cate:['白酒','黄酒','啤酒','果蔬饮料','水','茶饮料','碳酸饮料','功能饮料','加多宝'],
//         mesg:[
//         {
//           src:'	https://img.alicdn.com/imgextra/i4/36/O1CN01gNnupJ1C8WtAMUVhJ_!!36-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'52度洋河海之蓝480ml绵柔口感浓香型白酒猫超自营商务宴请送礼',
//           price:'186'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i2/142/O1CN01tj49211Cv4s2TO50C_!!142-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'古井贡酒年份原浆献礼版50度500ml 浓香型白酒酒水酒类礼盒装送礼',
//           price:'165'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/185/O1CN01BLjqiX1DElu52VTzz_!!185-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'52度剑南春 浓香型白酒500ml酒厂直供水晶剑酒类四川国产白酒送礼',
//           price:'458'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/92/O1CN019pefRc1CYB4Hhijze_!!92-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'水井坊臻酿八号浓香高度白酒52度500ml纯粮食酒商务宴请礼盒送礼',
//           price:'359'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/163/O1CN01SOliRn1D4hBln2UCw_!!163-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'北京红星二锅头酒大二绿瓶56度500ml*12白酒（新老包装随机发货）',
//           price:'184'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/725677994/O1CN01T2P2ir28vImQpq1bF_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'农夫山泉饮用天然水4L *4/箱取自中国八大水源地整箱天然水矿泉水',
//           price:'32'
//       },
//        {
//           src:'	https://img.alicdn.com/imgextra/i1/725677994/O1CN01NO7Le828vImSyi1dP_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'山西汾酒杏花村53度青花20清香型高度白酒500ml单瓶天猫超市自营',
//           price:'559'
//       },
//         ]
//     },
//     product_mesg2:{
//         title:'米面杂粮',
//         cate:['大米','食用菌','干菜/紫菜','木耳','桂圆干','海产品','百合','粗粮','莲子'],
//         mesg:[
//         {
//           src:'https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【独特酸辣】',
//           detail:'张新成推荐农心辣白菜五连包120g*5泡面韩国泡菜方便面拉面辛拉面',
//           price:'27.5'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i1/725677994/O1CN01qdh7Lw28vImNBdUWI_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【肉质Q弹】',
//           detail:'双汇王中王火腿肠30g*8支香肠肉类休闲零食速食配泡面网红零食',
//           price:'14'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/725677994/O1CN01KEnUBI28vImPdgm1c_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【长粒香】',
//           detail:'十月稻田长粒香米5kg东北大米10斤粳米当季新米真空包装 精品官方',
//           price:'39.9'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i1/725677994/O1CN01dV9SV028vImRvXXFk_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【鱼米之乡 口感软糯】',
//           detail:'福临门大米苏软香5kg苏北粳米 软糯香醇煮粥',
//           price:'27.9'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i2/725677994/O1CN01AgZcYu28vImN8mn8E_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'雪龙瑞斯秋田小町大米 5KG/袋东北吉林大米寿司米小町米',
//           price:'38.8'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/103/O1CN01I47puw1CdDQTaO5r9_!!103-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'包邮泰金香茉莉香米10斤 长粒香米5kg大米  非大米 玉香米 稻香',
//           price:'39.9'
//       },
//        {
//           src:'https://img.alicdn.com/imgextra/i3/138/O1CN01RqB54Y1CtFHwPyXEo_!!138-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'绿帝大号虾仁干货118g野生海虾大海米金钩开洋海鲜非特级干贝虾尾',
//           price:'49.8'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i1/725677994/O1CN018kokgP28vImM4zdYr_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹',
//           price:'25.8'
//       },
//         ]
//     },
//      product_mesg3:{
//         title:'油品调味',
//         cate:['花生油','调和油','橄榄油','玉米油','酱油','腌制品','辣椒调料','调味酱','调味料'],
//         mesg:[
//         {
//           src:'https://img.alicdn.com/imgextra/i4/725677994/O1CN017jQTzP28vImVJAR3X_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用',
//           price:'42.9'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i4/725677994/O1CN01eYO8ke28vImRaf2wk_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'多力葵花籽食用油 5L/桶  加赠250ml小油 进口葵籽葵花籽油家用',
//           price:'74.9'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i2/179/O1CN01NrV2am1DC1WgKDFYv_!!179-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'鲁花 一级花生油5.436L赠900ML 5S物理压榨健康 食用油桶装油',
//           price:'189.9'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/725677994/O1CN01xzXKRN28vImQTgNx8_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'',
//           detail:'包邮金龙鱼 花生浓香型食用植物调和油 5L/桶 食用油 爆款家用',
//           price:'49.8'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i1/37/O1CN018zUCyp1C8zHjknQmW_!!37-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'海天酱油味极鲜特级酱油1280ml品质生抽炒菜凉拌厨房提鲜厨房调料',
//           price:'29.8'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/115/O1CN01qt8cfE1CiiB226O2X_!!115-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'茂德公香辣牛肉酱225g拌饭辣椒酱意大利面酱下饭拌面酱调味酱酱料',
//           price:'25.8'
//       },
//        {
//           src:'	https://img.alicdn.com/imgextra/i2/63/O1CN01K5ohc71CKta9XGXrH_!!63-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'海天酱油味极鲜特级生抽380ml酿造特级生抽炒菜凉拌火锅蘸料调味',
//           price:'14.8'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i4/146/O1CN01Q6MJ811CwuSNC9IGl_!!146-0-lubanu.jpg_160x160q90.jpg',
//           title:'',
//           detail:'鲁花自然鲜酱香酱油1.28L 特级生抽 非转基因 厨房调料调味品',
//           price:'29.9'
//       },
//         ]
//     },
//      product_mesg4:{
//         title:'美容护肤',
//         cate:['乳液面霜','面膜','进口卸妆用品','进口面膜洗护','男士控油','足膜/足霜','护手霜','身体乳','进口面部护理'],
//         mesg:[
//         {
//           src:'	https://img.alicdn.com/imgextra/i3/166/O1CN01t9Yt8L1D64N9Wcav2_!!166-0-lubanu.jpg_160x160q90.jpg',
//           title:'【超值实惠大包装】',
//           detail:'【官方】Lily Bell/丽丽贝尔经典化妆棉优质棉双层亲肤222枚/包',
//           price:'19.9'
//       },
//       {
//           src:'	https://img.alicdn.com/imgextra/i2/725677994/O1CN01aMYxMR28vImLNvSIz_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【冰爽控油深层洁净】',
//           detail:'包邮曼秀雷敦冰爽活炭洁面乳去油保湿收缩毛孔控油去黑头男洗面奶',
//           price:'44.9'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/108/O1CN01d93Gg11CfVP8pjpkG_!!108-0-lubanu.jpg_160x160q90.jpg',
//           title:'【面部精华晒后修复】',
//           detail:'包邮完美正品芦荟胶40g面霜芦荟胶补水保湿温和不刺激单支装祛痘',
//           price:'40'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/725677994/O1CN01xKhA6k28vImU40AN9_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【温和滋润 舒缓修护】',
//           detail:'Cetaphil/丝塔芙蓝朋友洗面奶洁面118ml温和保湿低刺激敏感肌适用',
//           price:'58'
//       },
//       {
//           src:'https://img.alicdn.com/imgextra/i3/725677994/O1CN01jrRd3b28vImJ8ZZn2_!!0-item_pic.jpg_160x160q90.jpg',
//           title:'【快速吸收长效滋润】',
//           detail:'大宝SOD蜜男士护肤保湿乳液补水滋润面部护理易吸收女',
//           price:'14'
//       },
      
//         ]
//     },
// },
// SearchProduct:{
//     shouji_img:[
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000001818/O1CN01iLavML1PIgkV6Oamv_!!6000000001818-0-picassoopen.jpg_160x160.jpg',
//             title:'Apple/苹果手机iPhone 12 Pro Max 手机 国行全国联保',
//             sum:'5935',
//             price:'10099.00',
//         },
//          {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000007638/O1CN01LDhmLe26IFqvFLycz_!!6000000007638-0-picassoopen.jpg_160x160.jpg',
//             title:'Apple/苹果 iPhone 12 手机国行正品5G 双卡双待全国联保',
//             sum:'116906',
//             price:'6529.00',
//         },
//          {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000007586/O1CN01D41zTy25uRFh4klDJ_!!6000000007586-0-picassoopen.jpg_160x160.jpg',
//             title:'【现货顺丰速发】Apple/苹果 iPhone 11 手机现货国行 新版',
//             sum:'51161',
//             price:'4799.00',
//         },
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000007996/O1CN01INAtRx28wDdon9ajI_!!6000000007996-0-picassoopen.jpg_160x160.jpg',
//             title:'【现货顺丰速发】Apple/苹果 iPhone 12 mini手机 国行全国联保',
//             sum:'4988',
//             price:'5899.00',
//         },
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000001255/O1CN01DxLprp1L8plONeVUP_!!6000000001255-0-picassoopen.jpg_160x160.jpg',
//             title:'【值超市卡更优惠】HONOR/荣耀50 5G手机骁龙处理器120H',
//             sum:'2053',
//             price:'2999.00',
//         },
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000005957/O1CN01jA53fx1tsM4197LUf_!!6000000005957-0-picassoopen.jpg_160x160.jpg',
//             title:'【顺丰速发】Apple/苹果手机iPhone 12 Pro 手机 国行全国联保',
//             sum:'8362',
//             price:'9299.00',
//         },
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000004183/O1CN01auYhN51glrRSlkVN8_!!6000000004183-0-picassoopen.jpg_160x160.jpg',
//             title:'顺丰包邮Huawei/华为Mate 40手机5G麒麟9000E旗舰智能手机',
//             sum:'5299',
//             price:'6999.00',
//         },
//         {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000006196/O1CN01zZwoB71vdoiqBXrpb_!!6000000006196-0-picassoopen.jpg_160x160.jpg',
//             title:'【充值超市卡更优惠】红米Note10 Pro手机redmi 10天玑1100旗',
//             sum:'17660',
//             price:'1899.00',
//         },
//         ],
//         diannao_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000000804/O1CN010qelRt1HoH8ayQzlb_!!6000000000804-0-picassoopen.jpg_160x160.jpg',
//             title:'联想ThinkPad E14锐龙R5学生轻薄便携游戏商务办公手提笔记',
//             sum:'81',
//             price:'4899.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000007334/O1CN01Bo9cuY2431RtX4txO_!!6000000007334-0-picassoopen.jpg_160x160.jpg',
//             title:'联想ThinkBook 14 15锐龙R轻薄本ThinkPad便携商务办公笔记本',
//             sum:'417',
//             price:'4899.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000008047/O1CN01cCt1vZ29JZqFFiWki_!!6000000008047-0-picassoopen.jpg_160x160.jpg',
//             title:'联想ThinkBook15酷睿i5独显15.6英寸轻薄ThinkPad商务笔记本',
//             sum:'149',
//             price:'5999.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000005747/O1CN01u9pWPw1sKAtMt38ka_!!6000000005747-0-picassoopen.jpg_160x160.jpg',
//             title:'机械革命蛟龙7X-97Q八核RTX3070锐龙R9 5900HX电竞游戏笔记',
//             sum:'4',
//             price:'11999.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000002288/O1CN01vCW4o81Slwtgw5Lkc_!!6000000002288-0-picassoopen.jpg_160x160.jpg',
//             title:'机械革命蛟龙5-76QAMD锐龙R7 RTX3060游戏本学生设计师笔记',
//             sum:'34',
//             price:'8699.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000006508/O1CN0165b1TI1xwiIYPRaYE_!!6000000006508-0-picassoopen.jpg_160x160.jpg',
//             title:'Apple/苹果MacBook PRO 13.3英寸笔记本电脑M1芯片轻薄便',
//             sum:'2',
//             price:'9999.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000005001/O1CN01iE6bU61moVQZwqq0T_!!6000000005001-0-picassoopen.jpg_160x160.jpg',
//             title:'联想ThinkPad X1 Nano i5 i7轻薄13英寸高端商务办公本笔记本',
//             sum:'11',
//             price:'9499.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000006886/O1CN0186NXrH20jq0nYuTUM_!!6000000006886-0-picassoopen.jpg_160x160.jpg',
//             title:'机械革命Z3 Pro酷睿i7-11800H学生电竞游戏本RTX3060笔记本',
//             sum:'5',
//             price:'8999.00',
//             },
//         ],
//         book_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000006772/O1CN01RuH1Si1ztcrN70n88_!!6000000006772-0-picassoopen.jpg_160x160.jpg',
//             title:'数据结构与算法之美（全彩印刷）(彩印) 王争 (@小争哥)著',
//             sum:'1',
//             price:'119.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000002022/O1CN01vsecfN1Qo7Xu5HfmB_!!6000000002022-0-picassoopen.jpg_160x160.jpg',
//             title:'C++STL--数据结构与算法实现(计算机系列教材高等学校新工',
//             sum:'5',
//             price:'24.40',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/859515618/O1CN01tmQyYu1rN5eoJoglw_!!0-item_pic.jpg_160x160.jpg',
//             title:'程序员面试金典第6版 程序员面试笔试真题库 算法与数据结构',
//             sum:'4',
//             price:'121.10',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000004649/O1CN01HrzfOA1kDI0VAwfBa_!!6000000004649-0-picassoopen.jpg_160x160.jpg',
//             title:'JAVA面向对象数据结构完全学习教程(典藏中文版) 新华书店',
//             sum:'4',
//             price:'104.25',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01oWwPzS28vImd5B1jx_!!0-item_pic.jpg_160x160.jpg',
//             title:'前端程序员面试算法宝典 程序员求职书籍 数据结构与算新华',
//             sum:'34',
//             price:'59.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/859515618/O1CN01rb1a5x1rN5d3xmU0q_!!0-item_pic.jpg_160x160.jpg',
//             title:'学习JavaScript数据结构与算法 第3版 数据结构与算法教程书籍',
//             sum:'2',
//             price:'49.10',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/859515618/O1CN01BAa1k91rN5eZNJhpI_!!0-item_pic.jpg_160x160.jpg',
//             title:'Python数据结构与算法分析 第2版',
//             sum:'11',
//             price:'59.70',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000001445/O1CN01n77Kyi1MXr0vC4d7S_!!6000000001445-0-picassoopen.jpg_160x160.jpg',
//             title:'数据结构.算法与应用C++语言描述(原书第2版)新华书店',
//             sum:'28',
//             price:'63.20',
//             },
//         ],
//          lingshi_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000000398/O1CN016XIcCo1EoKKn6ZWw5_!!6000000000398-0-picassoopen.jpg_160x160.jpg',
//             title:'奥利奥夹心饼干原味休闲食品网红零食超值12小包小吃早餐儿童',
//             sum:'1880126',
//             price:'29.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000000576/O1CN01KXfKQx1G7qpjVOUkX_!!6000000000576-0-picassoopen.jpg_160x160.jpg',
//             title:'蒙都风干牛肉干手撕原味内蒙6成风干休闲儿童零食400g×1袋',
//             sum:'166986',
//             price:'99.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000000377/O1CN018BvtQi1Eei18iWqAB_!!6000000000377-0-picassoopen.jpg_160x160.jpg',
//             title:'奥利奥巧克力味威化460.8g饼干香脆网红休闲办公室零食27+9',
//             sum:'2097063',
//             price:'25.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000000968/O1CN01WNahe31J1O5eWwIoo_!!6000000000968-0-picassoopen.jpg_160x160.jpg',
//             title:'三只松鼠猪肉脯自然片150g*1袋小吃肉脯零食网红休闲食品即',
//             sum:'6973813',
//             price:'35.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000003685/O1CN01Qei9D81d5mCaj2qVk_!!6000000003685-0-picassoopen.jpg_160x160.jpg',
//             title:'卫龙辣条香辣味魔芋爽18g*20包休闲网红麻辣零食品办公室聚',
//             sum:'176666',
//             price:'22.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000001469/O1CN01aOI7Ax1MiqWL8C1ev_!!6000000001469-0-picassoopen.jpg_160x160.jpg',
//             title:'良品铺子卤味零食大礼包405g网红麻辣休闲小吃鸭脖充饥夜宵',
//             sum:'462983',
//             price:'49.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000004803/O1CN01Z1Cbg01lLp0LFkxw9_!!6000000004803-0-picassoopen.jpg_160x160.jpg',
//             title:'三只松鼠美式原味薯条75g×3袋休闲网红零食膨化食品小吃薯片',
//             sum:'318829',
//             price:'12.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000005704/O1CN01D7R0DP1s0TrMc7B1d_!!6000000005704-0-picassoopen.jpg_160x160.jpg',
//             title:'良品铺子鸡蛋干238g酱香味素食豆干小包装办公室网红休闲零',
//             sum:'1391390',
//             price:'26.90',
//             },
//         ],
//          milk_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000002519/O1CN01NYO4m11UTkOKQH9tX_!!6000000002519-0-picassoopen.jpg_160x160.jpg',
//             title:'蒙牛特仑苏纯牛奶250ml*16包牛奶整箱高端礼盒营养早餐官方',
//             sum:'1880126',
//             price:'86.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000002673/O1CN01G6bjNY1VcHNuJip2J_!!6000000002673-0-picassoopen.jpg_160x160.jpg',
//             title:'超定制伊利金典纯牛奶24盒整箱儿童学生高端营养早餐奶批发特',
//             sum:'166986',
//             price:'119.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000000211/O1CN01b1THn61DQgGtv16P9_!!6000000000211-0-picassoopen.jpg_160x160.jpg',
//             title:'伊利金典有机纯牛奶250ml*16盒/箱牛奶学生早餐奶',
//             sum:'2097063',
//             price:'94.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000003221/O1CN01CJBJ7R1ZfGQh2L2QX_!!6000000003221-0-picassoopen.jpg_160x160.jpg',
//             title:'蒙牛低脂高钙牛奶250ml*16盒/整箱早餐牛奶',
//             sum:'6973813',
//             price:'52.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000000637/O1CN01ld3toW1GZmzsfSViO_!!6000000000637-0-picassoopen.jpg_160x160.jpg',
//             title:'伊利无菌砖纯牛奶250ml*16盒/箱常温营养纯牛奶整箱学生',
//             sum:'176666',
//             price:'51.20',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000004282/O1CN015hcU0L1hVCeic4wED_!!6000000004282-0-picassoopen.jpg_160x160.jpg',
//             title:'伊利无菌砖纯牛奶250ml*24盒/整箱营养儿童宝宝学生早餐纯奶',
//             sum:'462983',
//             price:'76.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000004612/O1CN01kLyF7m1jwLMGVcpom_!!6000000004612-0-picassoopen.jpg_160x160.jpg',
//             title:'伊利高钙低脂250ml*24盒/整箱儿童学生早餐奶富含VD促进钙',
//             sum:'318829',
//             price:'84.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000000739/O1CN01howZDW1HKVOKvk3DO_!!6000000000739-0-picassoopen.jpg_160x160.jpg',
//             title:'蒙牛低脂高钙牛奶250ml*24盒/整箱富含VD早餐牛奶',
//             sum:'1391390',
//             price:'87.00',
//             },
//         ],
//           clothes_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000001359/O1CN015Owl8y1LuSx1sds8E_!!6000000001359-0-picassoopen.jpg_160x160.jpg',
//             title:'单品包邮MOLYVIVI魔力薇薇2021年春夏冰感t恤女短袖修身短款',
//             sum:'1880126',
//             price:'86.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000002673/O1CN01G6bjNY1VcHNuJip2J_!!6000000002673-0-picassoopen.jpg_160x160.jpg',
//             title:'单品包邮MOLYVIVI魔力薇薇2021年春夏冰感t恤女短袖修身短款',
//             sum:'166',
//             price:'199.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000003369/O1CN01K71DLb1al333wCDkv_!!6000000003369-0-picassoopen.jpg_160x160.jpg',
//             title:'巴拉巴拉儿童T恤男童短袖宝宝上衣2021新款夏装童装时尚潮',
//             sum:'205',
//             price:'59.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000006162/O1CN01zQAbPm1vOFG5JdVv3_!!6000000006162-0-picassoopen.jpg_160x160.jpg',
//             title:'巴拉巴拉儿童T恤男童短袖宝宝上衣2021新款夏装童装凉感POL',
//             sum:'69',
//             price:'88.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000006869/O1CN01kwjDxT20c3HLevCu5_!!6000000006869-0-picassoopen.jpg_160x160.jpg',
//             title:'巴拉巴拉婴儿t恤宝宝打底衫女童上衣短袖2021新网纱甜美时',
//             sum:'66',
//             price:'79.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000002676/O1CN01kSdFXa1VdeZQc2NQ5_!!6000000002676-0-picassoopen.jpg_160x160.jpg',
//             title:'巴拉巴拉童装男童T恤儿童上衣宝宝短袖T恤2021新款夏装恐龙',
//             sum:'462',
//             price:'59.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000004784/O1CN0116Jt341lD7TezXhrJ_!!6000000004784-0-picassoopen.jpg_160x160.jpg',
//             title:'兰威丽洋男童卫衣儿童上衣加厚加绒秋冬宝宝保暖棉衣连帽中小',
//             sum:'58',
//             price:'75.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000002406/O1CN01c69Bhe1TdzdRGtCzN_!!6000000002406-0-picassoopen.jpg_160x160.jpg',
//             title:'巴拉巴拉童装男童卫衣儿童秋装新款宝宝上衣假两件趣味上衣男',
//             sum:'42',
//             price:'119.00',
//             },
//         ],
//         wash_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000005829/O1CN01Q6Gf711svjMvnUjMm_!!6000000005829-0-picassoopen.jpg_160x160.jpg',
//             title:'青蛙王子儿童洗发水沐浴露液500ml×2瓶正品宝宝沐浴乳洗护用',
//             sum:'144126',
//             price:'39.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000001194/O1CN01VQbYXk1KgtbQQR7Y1_!!6000000001194-0-picassoopen.jpg_160x160.jpg',
//             title:'青蛙王子婴儿沐浴露洗发水1.1L×2瓶宝宝沐浴液2合1婴儿用品',
//             sum:'30396',
//             price:'49.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000004138/O1CN01TceyaA1gRFcdLMiBC_!!6000000004138-0-picassoopen.jpg_160x160.jpg',
//             title:'红色小象幼儿洗发沐浴二合一530ml×1瓶婴儿童沐浴乳宝宝洗护',
//             sum:'93023',
//             price:'158.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i3/6000000000255/O1CN01hftYIr1DkphIcEXVc_!!6000000000255-0-picassoopen.jpg_160x160.jpg',
//             title:'Pigeon 贝亲婴幼儿童柚子沐浴露500ml*1瓶宝宝沐浴乳 洗护用',
//             sum:'218',
//             price:'79.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000001531/O1CN017UgEoD1NBF50Ki1jL_!!6000000001531-0-picassoopen.jpg_160x160.jpg',
//             title:'五羊婴儿宝宝羊奶洗发水沐浴露二合一无泪1L*1瓶婴幼儿童洗护',
//             sum:'291024',
//             price:'19.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000004833/O1CN01Q4La6D1lZYszdulxq_!!6000000004833-0-picassoopen.jpg_160x160.jpg',
//             title:'日本喜多婴婴儿沐浴露洗发水二合一幼儿新生小孩专用洗护用品',
//             sum:'39870',
//             price:'23.80',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/6000000002226/O1CN01azyIMJ1SJYLMit2FZ_!!6000000002226-0-picassoopen.jpg_160x160.jpg',
//             title:'儿童洗发水女孩男童专用1L婴儿洗护用品新生儿宝宝沐浴露二合',
//             sum:'1236',
//             price:'59.90',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01zgiv4K28vIqo4ckXi_!!0-item_pic.jpg_160x160.jpg',
//             title:'千屿压缩浴巾加厚旅行装一次性浴巾纯棉加大号旅游神器必备用',
//             sum:'49',
//             price:'15.90',
//             },
//         ],
//          js_img:[
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i4/6000000002096/O1CN01yS0bfy1RM0qvML8p3_!!6000000002096-0-picassoopen.jpg_160x160.jpg',
//             title:'零基础JavaScript从入门到精通 新华书店',
//             sum:'6',
//             price:'45.50',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/859515618/O1CN01rb1a5x1rN5d3xmU0q_!!0-item_pic.jpg_160x160.jpg',
//             title:'学习JavaScript数据结构与算法 第3版 数据结构与算法教程书籍',
//             sum:'9',
//             price:'49.70',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/6000000003940/O1CN01HdvhpG1eyZCZAFcUc_!!6000000003940-0-picassoopen.jpg_160x160.jpg',
//             title:'JavaScript指南(原书第7版)',
//             sum:'3',
//             price:'112.00',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN01G8vEWv28vImzOGDXV_!!0-item_pic.jpg_160x160.jpg',
//             title:'网页设计与开发-HTML.CSS.JavaScript实例教程(第3版)新华书',
//             sum:'21',
//             price:'39.50',
//             },
//             {
//             src:'https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01atfXsL28vInQqZn9Y_!!0-item_pic.jpg_160x160.jpg',
//             title:'JavaScript设计模式与开发实践新华书店',
//             sum:'8',
//             price:'59.90',
//             },
//         ],
// },
// Shopping:{
//     shopCar:[
//         {
//           id:'001',
//           num:0,
//           businessLogo:"https://img.alicdn.com/bao/uploaded/O1CN013btJbK1TmEkEcmzMH_!!6000000002424-0-remus.jpg_80x80.jpg",
//           commodityName:'【25日优惠30】华为Mate 40 Pro 4G麒麟曲面华为手机4g手机智能',
//           commodityNet:'网络类型：4G全网通',
//           commodityColor:'机身颜色：釉白色',
//           commodityTao:'套餐类型：官方标配',
//           commodityNei:'存储容量：8+256GB',
//           commodityPrice:'6599',
//           commodityDel1:'移入收藏夹',
//           commodityDel2:'删除'
//         },
//         {
//           id:'002',
//           num:0,
//           businessLogo:"https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN01oIV6Ls28vIqeb5pSi_!!725677994.jpg_80x80.jpg",
//           commodityName:'Apple/苹果MacBook PRO 13.3英寸笔记本电脑M1芯片轻薄便携办公本',
//           commodityNet:'颜色分类：深空灰',
//           commodityColor:'内存容量：8GB',
//           commodityTao:'套餐类型：官方标配',
//           commodityNei:'硬盘容量：256G固态硬盘',
//           commodityPrice:'9999',
//           commodityDel1:'移入收藏夹',
//           commodityDel2:'删除'
//         },
//       ],
// }

// }