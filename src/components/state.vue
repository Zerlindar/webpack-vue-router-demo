<style>
  @import "../scss/state.scss";
</style>
<template>
  <transition name="fade">
    <div class="introduction">
      <div :model="title" :class="{active: isActive}" @click="fuck(title)">{{title}}</div>
      <input type="text" v-model="input" value="abcdefg"/>
      <div class="input-wrapper">router id: {{input}}</div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  import router from '../router/router'
  export default {
    data() {
      return {
        title: "webpack + vue + vue-router演示demo",
        detail: "显示路由切换功能",
        isActive: true
      }
    },
    methods: {
      fuck(title) {
        console.log(title);
        this.$router.push({name: 'introduce'});  //编程式写法
//        this.$router.go(-1);                     //后退一步
      }
    },
    computed: {
      input: function() {
        return this.$route.params.id
      }
    },
    ready: function() {
      console.log('deviceid: ');
    }
  }
</script>
