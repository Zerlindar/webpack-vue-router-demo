<template>
  <div class="main-container">
    <div class="login-body">
      <div class="login">
        <div class="input-wrapper">
          <div class="left-label pull-left">用户名</div>
          <div class="right-input pull-right">
            <input type="text" v-model="title" placeholder="用户名"/>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="left-label pull-left">密码</div>
          <div class="right-input pull-right">
            <input type="text" v-model="password" placeholder="密码"/>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-wrapper">
            <input id="submit" type="submit" @click="golist()"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        title: "用户名",
        password: "ddd"
      }
    },
    methods: {
      golist () {//方法，定义路由跳转，注意这里必须使用this，不然报错
        this.$router.push({path: "/admin"})
      }
    }
  }
</script>
