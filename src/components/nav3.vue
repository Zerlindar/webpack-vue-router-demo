<template>
    <div class="introduction">
        <div>
            {{title}}
        </div>
        <div>
            {{detail}}
        </div>
        <div>开发时首先使用npm install安装依赖环境，安装完成之后在webstorm终端运行npm start预览页面，同时更新代码页面能够实现热加载</div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: "webpack + vue + vue-router演示demo",
                detail: "主要显示路由切换功能"
            }
        }
    }
</script>