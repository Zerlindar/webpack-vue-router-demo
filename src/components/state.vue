<style>
  @import "../scss/state.scss";
</style>
<template>
  <transition name="fade">
    <div class="introduction">
      <div class="swiper-container">
        <swiper :imageSwiper = "image"></swiper>
      </div>
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
<style>
  .swiper-container{
    width: 100%;
    height: 6rem;
  }
</style>
<script type="text/javascript">
  import router from '../router/router'
  import swiper from './common/swiper.vue'
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
      },
      image: function(){
        return ['http://img2.imgtn.bdimg.com/it/u=2297030857,2574563492&fm=214&gp=0.jpg','http://pic6.huitu.com/res/20130116/84481_20130116142820494200_1.jpg', 'http://img02.tooopen.com/images/20140504/sy_60294738471.jpg']
      },
    },
    ready: function() {
      console.log('deviceid: ');
    },
    components: {
      swiper: swiper,
    }
  }
</script>
