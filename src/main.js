import Vue from "vue";
import VueRouter from "vue-router";
import styles from './index.scss';         //导入css样式表
import dpr from "./plugin/dpr";
//import './index.css';         //导入css样式表
//import dpr from "./plugin/dpr";    //不加括号相当于为整个模块起了一个别名，加括号直接引用模块内的方法/对象
//dpr.dpr();

dpr.dpr();
Vue.use(VueRouter);
var App    = Vue.extend({});
var router = new VueRouter();
router.map({
  '/': {
    component: function(resolve) {
      require(['./components/login.vue'], resolve)
    }
  },
  '/login': {
    name: "login",
    component: function(resolve) {
      require(['./components/login.vue'], resolve)
    }
  },
  '/admin': {
    name: "admin",
    component: function(resolve) {
      require(['./components/admin.vue'], resolve)
    },
    subRoutes: {
      'nav1': {
        name: "nav1",
        component: function(resolve) {
          require(['./components/nav1.vue'], resolve)
        }
      },
      'nav2': {
        name: "nav2",
        component: function(resolve) {
          require(['./components/nav2.vue'], resolve)
        }
      },
      '/': {
        component: function(resolve) {
          require(['./components/introduce.vue'], resolve)
        }
      },
      'state/:id': {
        name: "state",
        component: function(resolve) {
          require(['./components/state.vue'], resolve)
        }
      },
    }
  }

})
router.start(App, '#app')