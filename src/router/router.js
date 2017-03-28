/**
 * Created by Administrator on 2017/3/21.
 */
import App from '../App'

export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue}
      {
        path: '/',
        redirect: '/login',
      }, {
        path: '/login',
        name: "login",
        component: function(resolve) {
          require(['../components/login.vue'], resolve)
        },
      }, {
        path: '/admin',
        name: "admin",
        component: function(resolve) {
          require(['../components/admin.vue'], resolve)
        },
        children: [
          {
            path: '/nav1',
            name: "nav1",
            component: function(resolve) {
              require(['../components/nav1.vue'], resolve)
            },
            children: []
          },
          {
            path: '/nav2', name: "nav2",
            component: function(resolve) {
              require(['../components/nav2.vue'], resolve)
            }
          },
          {
            path: '/', name: 'introduce',
            component: function(resolve) {
            require(['../components/introduce.vue'], resolve)
          }
          },{
            path: '/state/:id', name: "state",
            component: function(resolve) {
              require(['../components/state.vue'], resolve)
            }
          }

        ]
      }
    ]
  }


]



