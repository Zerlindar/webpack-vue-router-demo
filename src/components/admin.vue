<template>
    <div class="main-container">
        <header class="head">
            <h1>vue-demo演示</h1>
        </header>
        <section class = "section">
            <div class="section-inner">
                <router-view></router-view>
            </div>
        </section>
        <footer>
            <div>
                <div class="nav-container">
                    <nav class = "nav">
                        <ul class = "list">
                            <router-link :to = "{ path: '/login'}" class="list-detail">返回登录</router-link>
                            <router-link :to = "{ name: 'nav1'}" class="list-detail">导航1</router-link>
                            <router-link :to = "{ name: 'nav2'}" class="list-detail">导航2</router-link>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript">
    export default {

    }
</script>
