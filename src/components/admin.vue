<template>
    <div class="main-container">
        <header class="head">
            <h1>{{ title }}</h1>
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
                            <li class="list-detail"><a class = "v-link-active" v-link="{ path: '/login'}">返回登录</a></li>
                            <li class="list-detail"><a v-link="{ name: 'nav1'}">导航1</a></li>
                            <li class="list-detail"><a v-link="{ path: '/admin/nav2'}">导航2</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: "webpack vue demo演示"
            }
        }
    }
</script>