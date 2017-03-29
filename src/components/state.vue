<style>
  @import "../scss/state.scss";
</style>
<template>
  <transition name="fade">
    <div class="introduction">
      <div :model="title" :class="{active: isActive}" @click="fuck(title)">{{title}}</div>
      <input type="text" v-model="input" value="abcdefg"/>
      <div class="input-wrapper">router id: {{input}}</div>
      <div>
        <div>
          <h3>watch测试</h3>
          <input v-model="question">
        </div>
        <div>显示: {{ answer }}</div>
      </div>
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
        isActive: true,
        question: '',
        answer: '输入内容~'
      }
    },
    watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function(newVal) {
        this.answer = '正在查询...'
        this.getAnswer()
      }
    },
    methods: {
      fuck(title) {
        console.log(title);
        this.$router.push({name: 'introduce'});  //编程式写法
        //        this.$router.go(-1);                     //后退一步
      },
      getAnswer: function() {
        var self = this;
        clearTimeout(timer);
        var timer = setTimeout(function() {
          self.answer = 'just a testing...'
        }, 1000);
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
