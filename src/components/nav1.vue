<template>
  <transition name="fade">
    <div>
      <ul class="nav1-list">
        <li v-for="data in datas" @click = "golist(data.id)">
          <router-link :to="{ name: 'state', params: {id: data.id} }">{{data.title|filter}}</router-link>
        </li>
      </ul>
      <!--<div class = "computed" :class = "{active: isActive}">computed: {{now}}</div>-->
      <div class = "computed" :class = "[isActive? 'active': '']">computed: {{now}}</div>
      <div>methods{{getNow()}}</div>
      <div class="toggle" @click = "toggle"><div v-for = "n in even(numbers)">{{n}}</div></div>
      <div v-if = "isIf">isIf</div>
      <div v-show = "isShow">isShow</div>
    </div>

  </transition>
</template>


<script type="text/javascript">
  export default {
    computed: {
      now: function () {
        return Date.now()
      }
    },
    data() {
      return {
        isActive: true,
        isIf: false,
        isShow: false,
        numbers: [0,1,2,3,56,4,8],
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
      getNow () {
        return Date.now()
      },
      toggle(){
        this.isIf = !this.isIf;
        this.isShow = !this.isShow;
      },
      golist (id) {//方法，定义路由跳转，注意这里必须使用this，不然报错
        console.log("this.router", this.$route);
      },
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
    }
  }
</script>
<style>
  .computed{
    font-size: 26px;
  }
</style>
