<template>
    <div class="main-container">
        <div class="login-body">
            <div class="login">
                <div class="input-wrapper">
                    <div class="left-label pull-left">用户名</div>
                    <div class="right-input pull-right">
                        <input type = "text" value = "{{ title }}" placeholder="用户名"/>
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="left-label pull-left">密码</div>
                    <div class="right-input pull-right">
                        <input type = "text" value = "{{ password }}" placeholder="密码"/>
                    </div>
                </div>
                <div class="input-wrapper">
                    <div class="input-wrapper">
                        <input id = "submit" type = "submit" v-on:click="golist()"/>
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
                title: "用户名"
            }
        },
        methods :{
            golist () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({path:"/admin"});
            }
        }
    }
</script>