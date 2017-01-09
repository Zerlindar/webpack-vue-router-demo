<template>
   <ul class = "nav1-list" v-for = "data in datas">
       <li v-link="{ name: 'state', params: {id: data.id} }">{{data.title}}</li>
   </ul>
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
        methods :{
            golist (id) {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({path:"/admin/state", params: { id: id}});
            }
        }
    }
</script>