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
    }
  }
</script>
