import Vue from 'vue';
import VueRouter from "vue-router";
import styles from './index.scss';         //导入css样式表
import dpr from "./plugin/dpr";
import routes from "./router/router"
import store from './store/'
//import './index.css';         //导入css样式表
//import dpr from "./plugin/dpr";    //不加括号相当于为整个模块起了一个别名，加括号直接引用模块内的方法/对象
//dpr.dpr();
console.log("store import top: ", store);
dpr.dpr();
Vue.use(VueRouter)
const router  = new VueRouter({
  routes
})

new Vue({
  router,
  store,
}).$mount('#app')
console.log("VUEDDDDD: ", new Vue({
  router,
  store,
}))
