/**
 * Created by Administrator on 2017/3/21.
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
var router = new VueRouter();
router.map({
  '/': {
    component: function(resolve) {
      require(['../components/login.vue'], resolve)
    }
  },
  '/login': {
    name: "login",
    component: function(resolve) {
      require(['../components/login.vue'], resolve)
    }
  },
  '/admin': {
    name: "admin",
    component: function(resolve) {
      require(['../components/admin.vue'], resolve)
    },
    subRoutes: {
      'nav1': {
        name: "nav1",
        component: function(resolve) {
          require(['../components/nav1.vue'], resolve)
        }
      },
      'nav2': {
        name: "nav2",
        component: function(resolve) {
          require(['../components/nav2.vue'], resolve)
        }
      },
      '/': {
        component: function(resolve) {
          require(['../components/introduce.vue'], resolve)
        }
      },
      'state/:id': {
        name: "state",
        component: function(resolve) {
          require(['../components/state.vue'], resolve)
        }
      },
    }
  }

});
export default router
console.log("router: ", router);

