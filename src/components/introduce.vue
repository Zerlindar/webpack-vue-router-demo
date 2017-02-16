<template>
    <div class="introduction">
        <h3>{{title}}</h3>
        <div>开发时首先使用npm install安装依赖环境，安装完成之后在webstorm终端运行npm start预览页面，同时更新代码页面能够实现热加载</div>
        <child></child>
        <getter></getter>
        <input1></input1>
    </div>
</template>

<script type="text/ecmascript-6">
    import child from './add.vue'
    import getter from './display.vue'
    import input1 from './input1.vue'

    export default {
        computed: {
            title: function() {
                return this.detail;
            }
        },
        data() {
            return {
                detail: "computed属性"
            }
        },
        components: {
            child: child,
            getter: getter,
            input1: input1
        },
    }
</script>