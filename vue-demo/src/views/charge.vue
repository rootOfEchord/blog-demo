<template>
    <div class="charge">
        <div class="g-container">
            <div class="g-number">98.7%</div>
            <div class="g-contrast">
                <div class="g-circle"></div>
                <ul class="g-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'charge',
    components: {},
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.charge {
    .g-number {
        position: absolute;
        width: 300px;
        top: 27%;
        text-align: center;
        font-size: 32px;
        z-index: 10;
        color: #fff;
    }

    .g-container {
        position: relative;
        width: 300px;
        height: 400px;
        margin: auto;
    }

    .g-contrast {
        filter: contrast(15) hue-rotate(0);
        width: 300px;
        height: 400px;
        background-color: #000;
        overflow: hidden;
        animation: hueRotate 10s infinite linear;
    }

    .g-circle {
        position: relative;
        width: 300px;
        height: 300px;
        box-sizing: border-box;
        filter: blur(8px);

        &::after {
            content: '';
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0);
            width: 200px;
            height: 200px;
            background-color: #00ff6f;
            border-radius: ~'42% 38% 62% 49% / 45%';
            animation: rotate 10s infinite linear;
        }

        &::before {
            content: '';
            position: absolute;
            width: 176px;
            height: 176px;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #000;
            z-index: 10;
        }
    }

    .g-bubbles {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 40px;
        transform: translate(-50%, 0);
        border-radius: 100px 100px 0 0;
        background-color: #00ff6f;
        filter: blur(5px);
    }

    li {
        position: absolute;
        border-radius: 50%;
        background: #00ff6f;
    }

    li:nth-child(1) {
        left: 74px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        animation: moveToTop 6s ease-in-out -3.242s infinite;
    }

    li:nth-child(2) {
        left: 53px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        animation: moveToTop 9s ease-in-out -0.616s infinite;
    }

    li:nth-child(3) {
        left: 76px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 21px;
        height: 21px;
        animation: moveToTop 4s ease-in-out -3.716s infinite;
    }

    li:nth-child(4) {
        left: 28px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        animation: moveToTop 9s ease-in-out -2.947s infinite;
    }

    li:nth-child(5) {
        left: 48px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 23px;
        height: 23px;
        animation: moveToTop 4s ease-in-out -1.362s infinite;
    }

    li:nth-child(6) {
        left: 76px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        animation: moveToTop 5s ease-in-out -2.457s infinite;
    }

    li:nth-child(7) {
        left: 70px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 17px;
        height: 17px;
        animation: moveToTop 6s ease-in-out -0.77s infinite;
    }

    li:nth-child(8) {
        left: 57px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 29px;
        height: 29px;
        animation: moveToTop 8s ease-in-out -2.75s infinite;
    }

    li:nth-child(9) {
        left: 35px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        animation: moveToTop 9s ease-in-out -0.002s infinite;
    }

    li:nth-child(10) {
        left: 49px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        animation: moveToTop 5s ease-in-out -3.171s infinite;
    }

    li:nth-child(11) {
        left: 59px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        animation: moveToTop 9s ease-in-out -4.519s infinite;
    }

    li:nth-child(12) {
        left: 26px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 23px;
        height: 23px;
        animation: moveToTop 5s ease-in-out -0.184s infinite;
    }

    li:nth-child(13) {
        left: 35px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        animation: moveToTop 9s ease-in-out -4.658s infinite;
    }

    li:nth-child(14) {
        left: 63px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 23px;
        height: 23px;
        animation: moveToTop 5s ease-in-out -4.522s infinite;
    }

    li:nth-child(15) {
        left: 16px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        animation: moveToTop 9s ease-in-out -4.165s infinite;
    }

    @keyframes rotate {
        50% {
            border-radius: ~'45% / 42% 38% 58% 49%';
        }
        100% {
            transform: translate(-50%, -50%) rotate(720deg);
        }
    }

    @keyframes moveToTop {
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0.1;
            transform: translate(-50%, -180px);
        }
    }

    @keyframes hueRotate {
        100% {
            filter: contrast(15) hue-rotate(360deg);
        }
    }
}
</style>
