<template>
    <div class="flip">
        <div class="back">反</div>
        <div class="front">正</div>
    </div>
</template>

<script>
export default {
    name: 'flip',
    components: {},
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.flip {
    transition: 1.6s;
    transform-style: preserve-3d;
    position: relative;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 40px;
    margin: 0 auto;
    .back,
    .front {
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: pink;
    }
    .back {
        transform: rotateY(180deg);
    }
    &:hover {
        transform: rotateY(180deg);
    }
}
</style>
