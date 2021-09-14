import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        user:'',
        isLogin:false,
        score:'',
        product:'',
        getData:'',
    },
    mutations:{
        set_token:(state,data)=>{
            state.token=data;
            window.sessionStorage.setItem('token',data)
        },
        get_user:(state,data)=>{
            state.user=data
            window.sessionStorage.setItem('user',data)
        },
        set_isLogin:(state,value)=>{
            state.isLogin=value;
            window.sessionStorage.setItem('isLogin',value)
        }
    }
    
})
 export default store