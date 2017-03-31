<template>
  <div class="hello">
    <div v-show = "isAdd">
      <h2>vuex使用</h2>
      <button class="add-btn" @click='getCount'>点击按钮加1</button>
    </div>
    <div v-show = "isComp">
      这一行是动态加载的组件
    </div>
  </div>
</template>
<!--<style>-->
<!--@import'../scss/add.scss';-->
<!--</style>-->
<script>
  import styles from '../scss/add.scss';         //导入css样式表
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: {
      isAdd: Boolean,
      isComp: Boolean
    },
    methods: {
      ...mapActions([
        'getCount'
      ])
  }
  ,
  }
</script>
