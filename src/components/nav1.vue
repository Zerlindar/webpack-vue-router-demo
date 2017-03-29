<template>
  <transition name="fade">
    <ul class="nav1-list">
      <li v-for="data in datas" @click = "golist(data.id)">
        <router-link :to="{ name: 'state', params: {id: data.id} }">{{data.title|filter}}</router-link>
      </li>
    </ul>
  </transition>
</template>


<script type="text/javascript">
  export default {
    data() {
      return {
        datas: [
          {
            title: "二级导航1",
            id: 1
          },
          {
            title: "二级导航2",
            id: 2
          },
          {
            title: "二级导航3",
            id: 3
          },
          {
            title: "二级导航4",
            id: 4
          }
        ]
      }
    },
    filters : {
      filter: function(value) {
        return "test child componet filter：" + value;
      }
    },
    methods: {
      golist (id) {//方法，定义路由跳转，注意这里必须使用this，不然报错
        console.log("this.router", this.$route);
      }
    }
  }
</script>
