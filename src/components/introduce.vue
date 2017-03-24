<template>
    <div class="introduction">
        <h3 @click='getJSON'>{{title}}</h3>
        <div>开发时首先使用npm install安装依赖环境，安装完成之后在webstorm终端运行npm start预览页面，同时更新代码页面能够实现热加载</div>
        <!--<child></child>-->
        <!--<getter></getter>-->
        <!--<input1></input1>-->
    </div>
</template>

<script type="text/ecmascript-6">
//    import child from './add.vue'
//    import getter from './display.vue'
//    import input1 from './input1.vue'
    import {getJson} from '../../util/util'

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
        methods: {
            getJSON(){
                let data = {
                    shopId:1,
                    activityId:1
                };
                getJson("https://sptest.mocentre.com/wxa/activity/getGoodsDetail.htm", "post", data).then(function(e){
                    console.log("getData", e);
                })
            }
        },
//        components: {
//            child: child,
//            getter: getter,
//            input1: input1
//        },
    }
</script>
