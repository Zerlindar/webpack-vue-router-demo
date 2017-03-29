/**
 * Created by Administrator on 2017/3/21.
 */
import App from '../App'
const login = resolve => {require(['../components/login.vue'], resolve)}
const admin = resolve => {require(['../components/admin.vue'], resolve)}
const nav1 = resolve => {require(['../components/nav1.vue'], resolve)}
const nav2 = resolve => {require(['../components/nav2.vue'], resolve)}
const state = resolve => {require(['../components/state.vue'], resolve)}
const introduce = resolve => {require(['../components/introduce.vue'], resolve)}


/*<!-- to -->
<router-link to="home">Home</router-link>
  渲染结果
  <a href="home">Home</a>

  使用 v-bind 的 JS 表达式
<router-link v-bind:to="'home'">Home</router-link>
  不写 v-bind 也可以，就像绑定别的属性一样
<router-link :to="'home'">Home</router-link>
  同上
  <router-link :to="{ path: 'home' }">Home</router-link>
  命名的路由
  <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

  带查询参数，下面的结果为 /register?plan=private
  <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
*/

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
        component: login,
      }, {
        path: '/admin',
        name: "admin",
        component: admin,
        children: [
          {
            path: '/nav1',
            name: "nav1",
            component: nav1,
            children: []
          },
          {
            path: '/nav2', name: "nav2",
            component: nav2
          },
          {
            path: '/', name: 'introduce',
            component: introduce
          },{
            path: '/state/:id', name: "state",
            component: state
          }

        ]
      }
    ]
  }


]



