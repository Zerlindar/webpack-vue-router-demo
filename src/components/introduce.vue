<template>
  <div class="introduction">
    <loading></loading>

    <add :isAdd="true" :isComp="false"></add>
    <div ref="profile">
      <getter :title="title"></getter>
    </div>
    <component v-bind:is="currentView" :isAdd="false" :isComp="true">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
    <div ref="shopheader" @click="hit">切换显示input</div>

    <transition name="slide-fade">
      <div v-show="isShow">
        <input1>
          <div slot="header"><h2>表单元素绑定</h2>
          </div>
        </input1>
      </div>
    </transition>
  </div>
</template>
<style lang="scss">

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
<script type="text/ecmascript-6">
  import add from './add.vue'
  import getter from './display.vue'
  import input1 from './input1.vue'
  import loading from './common/loading.vue'

  import {getJson} from '../../util/util'

  export default {
    computed: {
      title: function() {
        return this.detail;
      },

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
      },
      hit(){
        console.log("ref: ", this.$refs.profile.clientHeight)
        this.isShow = !this.isShow;
      }
    },
    components: {
      add: add,
      getter: getter,
      input1: input1,
      loading: loading,

    },
  }
</script>
