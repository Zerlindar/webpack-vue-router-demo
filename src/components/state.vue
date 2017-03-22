<style>
    @import "../scss/state.scss";
</style>
<template>
    <div class="introduction">
        <div :model = "title" :class = "{active: isActive}" @click = "fuck(title)">{{title}}</div>
        <input type="text" v-model = "input" value = "abcdefg"/>
        <div class = "input-wrapper">{{input}}</div>
    </div>
</template>

<script type="text/javascript">

    export default {
        data() {
            return {
                title: "webpack + vue + vue-router演示demo",
                detail: "显示路由切换功能",
                input: "cccccc",
                isActive: true
            }
        },
        methods: {
            fuck(title) {
                console.log(this.input);
                console.log(title);
            }
        },
        ready: function(){
            console.log('deviceid: ' + this.$route.params.id);
        }
    }
</script>
