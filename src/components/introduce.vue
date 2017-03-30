<template>
  <div class="introduction">
    <component v-bind:is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>

    <add :isShow="isShow"></add>
    <getter :title="title"></getter>
    <input1>
    <div slot="header"><h2>表单元素绑定</h2>
    </div>
    </input1>


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
        title: "prop测试：已输出",
        detail: "computed属性",
        isShow: true,
        currentView: "add"
      }
    },
    methods: {
      getJSON(){
        let data = {
          shopId: 1,
          activityId: 1
        };
        getJson("https://sptest.mocentre.com/wxa/activity/getGoodsDetail.htm", "post", data).then(function(e) {
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
