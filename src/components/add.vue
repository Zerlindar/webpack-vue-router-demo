<template>
  <div class="hello">
    <h2>vuex使用</h2>
    <button class="styles.btn" @click='addNum'>点击按钮加1</button>
  </div>
</template>
<!--<style>-->
<!--@import'../scss/add.scss';-->
<!--</style>-->
<script>
  import styles from '../scss/add.scss';         //导入css样式表
  import { mapGetters, mapActions } from 'vuex'
  export default {
    methods: mapActions([{
      addNum: 'getCount'
    }
    ]),
  }
</script>
