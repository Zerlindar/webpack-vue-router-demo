<template>
    <div class = "styles.hello">
        <h2>vuex使用</h2>
        <button class = "btn" @click='increment'>点击按钮加1</button>
    </div>
</template>

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