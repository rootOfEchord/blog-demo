<template>
    <div class="container">
        <div class="wave"></div>
    </div>
</template>

<script>
export default {
    name: 'waves',
    components: {},
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: rgb(118, 218, 255);
    border-radius: 50%;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;
        left: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 45%;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 6s linear infinite;
        z-index: 10;
    }

    &::after {
        border-radius: 47%;
        background-color: rgba(255, 255, 255, 0.9);
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 10s linear -5s infinite;
        z-index: 20;
        // background-color: #000;
    }
}

@keyframes rotate {
    50% {
        transform: translate(-50%, -70%) rotate(180deg);
        border-radius: 48%;
    }
    100% {
        transform: translate(-50%, -70%) rotate(360deg);
        border-radius: 47%;
    }
}
</style>
