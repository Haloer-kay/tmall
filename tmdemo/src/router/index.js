import Vue from 'vue'
import VueRouter from 'vue-router'
import HeadNav from "../views/HeadNav.vue"
import Search from "../views/Search.vue"
import SideNav from "../views/SideNav.vue"
import Product from "../views/Product.vue"
import ShortCut from "../views/ShortCut.vue"
import Mainfooter from '../components/MainFooter.vue'
import Descfooter from '../components/DescFooter.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    components:{
      'head-nav':HeadNav,
      'search':Search,
      'side-nav':SideNav,
      'product':Product,
      'short-cut':ShortCut,
      'main_footer':Mainfooter,
      'desc_footer':Descfooter
    } 
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue'),
  },
  {
    path:'/register',
    component:()=>import('../views/Register.vue')
  },
  {
    path:'/shopping',
    component:()=>import('../views/Shopping.vue')
  },
  {
    path:'/searchProduct',
    component:()=>import('../views/SearchProduct.vue')
  },
  {
    path:"*",
    redirect: "/"
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  let isLogin=window.sessionStorage.getItem('isLogin')
console.log('router',isLogin);
  // next()
  if(isLogin!='true'&&from.path=='/'&&to.path=='/shopping')
  {
    next('/login')
  }
  else if(isLogin!='true'&&from.path=='/searchProduct'&&to.path=='/shopping'){
    next('/login')
  }
  else {
  next()
  }
})

export default router
