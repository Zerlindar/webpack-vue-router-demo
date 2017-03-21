<template>
    <div class = "hello">
        <h2>vuex使用</h2>
        <button class = "styles.btn" @click='increment'>点击按钮加1</button>
    </div>
</template>
<!--<style>-->
    <!--@import'../scss/add.scss';-->
<!--</style>-->
<script>
    import styles from '../scss/add.scss';         //导入css样式表
    import {incrementCounter} from '../vuex/actions'
    export default {
        vuex: {
            actions: {
                increment: incrementCounter
            }
        },
    }
</script>