<template>
  <transition name="fade">
    <div class="nav2">
      {{title}}
      <div v-for = "text in arr"><span>{{text}}</span></div>
      <div class="center" @click = "push">

      </div>
    </div>
  </transition>
</template>
<script type="text/javascript">
  import bus from "../bus"
  export default {
    data() {
      return {
        title: "webpack + vue + vue-router演示demo",
        detail: "主要显示路由切换功能",
        arr: [1, 2, 3, 4],
      }
    },
    methods: {
      push(){
        this.arr.pop();
      },
    },
    created(){
      bus.$on("edit", function(e){
        this.title = e;
      })
    },
    beforeRouteEnter (to, from, next) {
      console.log("come in to link", to);
      next(vm => {
        console.log("vm: ", vm);   //获取vue实例
      });
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    },
  }
</script>
