<template>
    <div class="introduction">
        <add></add>
        <getter></getter>
        <input1></input1>
    </div>
</template>

<script type="text/ecmascript-6">
    import add from './add.vue'
    import getter from './display.vue'
    import input1 from './input1.vue'
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
        components: {
            add: add,
            getter: getter,
            input1: input1
        },
    }
</script>
