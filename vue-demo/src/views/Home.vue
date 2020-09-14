<template>
    <div class="home-page">
        <h1>VUE-DEMO BY ROOTOFECHORD</h1>
        <div class="menu">
            <div v-for="item in routes" :key="item.path" class="item">
                <router-link :to="item.path">{{
                    item.meta.title || '啊脑袋～'
                }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { routes } from '../router'

export default {
    name: 'home-page',
    components: {},
    data() {
        return {
            routes
        }
    }
}
</script>

<style lang="less" scoped>
.home-page {
    .menu {
        line-height: 30px;
        text-align: center;
    }
}
</style>
