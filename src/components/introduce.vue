<template>
  <div class="introduction">
    <div>{{detail}}</div>
    <!--<loading></loading>-->

    <!--<add :isAdd="true" :isComp="false"></add>-->
    <component :isAdd="true" :isComp="false" v-bind:is="currentView">
    </component>
    <div ref="profile">
      <getter :title="title" ref="p"></getter>
    </div>

    <div>动态配置v-model</div>
    <currency-input ></currency-input>

    <div class="parent">
        <currency-input  v-model="price">
          <template scope="props">
            <span>hello from parent</span>
            <span>{{ props.text }}</span>
          </template>
        </currency-input>
    </div>
    <div ref="shopheader" @click="hit">切换显示input</div>

    <transition name="slide-fade">
      <div v-show="isShow">
        <input-wrapper>
          <div slot="header" @click = "foo"><h2>表单元素绑定{{obj}}</h2>
          </div>
        </input-wrapper>
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
  import cuInput from './cuInput.vue'
  import loading from './common/loading.vue'
  import {test} from "./mixin"
  import {getJson} from '../../util/util'
  import bus from "../bus"
  export default {
    created: function(){
      var self = this;
      bus.$on("edit", function(e){
        self.detail = e;
      })
      this.$nextTick(function(){
      })
      this.$set(this.obj, "a", 3)

      this.$nextTick(function(){
      })
    },
    mixins: [test],
    computed: {
      title: function() {
        return this.detail;
      },
    },
    data() {
      return {
        currentView: add,
        title: "prop测试：已输出",
        detail: "",
        isShow: true,
        obj: {},
        price: "11111",
      }
    },
    methods: {
      conflicting(){
        console.log("from self")
      },
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
        this.conflicting();
        var a = this.isShow;
        console.log("ref: ", this.$refs.profile)
        this.obj.a = 333;
        this.isShow = !this.isShow;
        this.$emit("eee");
        console.log("ref: ", this.$refs.p);
      }
    },
    components: {
      getter: getter,
      "input-wrapper": input1,
      loading: loading,
      "currency-input": cuInput,
    },
  }
</script>
