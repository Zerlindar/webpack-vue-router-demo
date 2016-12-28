<template>
    <div class="introduction">
        state页面
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: "webpack + vue + vue-router演示demo",
                detail: "主要显示路由切换功能"
            }
        },
        ready: function(){
            console.log('deviceid: ' + this.$route.params.id);
        }
    }
</script>