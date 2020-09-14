<template>
    <div class="streamline">
        streamline
    </div>
</template>

<script>
export default {
    name: 'streamline',
    components: {},
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.initclip(@w, @h) {
    @keyframes clipMe {
        0%,
        100% {
            clip: rect(0px, @w + 2px, 3px, 0px);
        }
        25% {
            clip: rect(0px, 3px, @h + 2px, 0px);
        }
        50% {
            clip: rect(@h - 2px, @w + 2px, @w + 2px, 0px);
        }
        75% {
            clip: rect(0px, @w + 2px, @w + 2px, @w - 2px);
        }
    }
}
.streamline {
    .initclip(200px, 200px);
    width: 200px;
    height: 200px;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    color: blue;
    box-shadow: 0 0 0 1px red inset;
    position: relative;
    background: rgba(255, 190, 114, 0.1);
    border-radius: 8px;
    padding: 20px;
    &::after {
        border-radius: 8px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        /* z-index: -1; */
        margin: -1px;
        box-shadow: inset 0 0 0 3px;
        animation: clipMe 8s linear infinite;
    }
    &:hover {
        &::after {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
}
</style>
