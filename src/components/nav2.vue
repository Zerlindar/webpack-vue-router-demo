<template>
  <transition name="fade">
    <div class="nav2">
      这里是第二个导航显示的内容
      <div class="center"></div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        title: "webpack + vue + vue-router演示demo",
        detail: "主要显示路由切换功能"
      }
    },
    mounted(){
      console.log("this: ", this);
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
