<template class="container">
    <div class="banner">
        <div class="row">
            <img src="../assets/LOGO-01.png" alt="" class="logo" />
            <!-- <h3><a href="">民視新聞網</a></h3> -->
        </div>
        <div class="row">
            <div class="title col-12">
                <h1>暖新聞專區</h1>
                <!-- <h4>暖新聞專區</h4> -->
            </div>
            <div class="subtitle col-12">
                <h5>——<br />本週暖文關鍵字</h5>
            </div>
        </div>
        <div class="row hashtag">
            <a href="#part_news"
                ><img src="../assets/hashtag1.png" alt="" style="width: 120px; height: 100%" class=""
            /></a>
            <a href="#part_news"
                ><img src="../assets/hashtag2.png" alt="" class="" style="width: 120px; height: 100%"
            /></a>
            <a href="#part_news"
                ><img src="../assets/hashtag3.png" alt="" class="" style="width: 120px; height: 100%"
            /></a>
        </div>

        <div>
            <a href="#pop"><img src="../assets/godown.png" alt="" class="godown" /></a>
        </div>
        <picture>
            <!-- <source media="(max-width: 450px)" :srcset="banner_img.mobile" />
            <source media="(max-width: 768px)" :srcset="banner_img.tablet_ver" />
            <source media="(max-width: 1024px)" :srcset="banner_img.tablet_hor" /> -->
            <!-- <img :src="banner_img.desktop" /> -->
        </picture>
    </div>
</template>

<script>
export default {
    data() {
        return {
            banner_img: {
                // desktop: require(`../assets/testttt.jpg`),
                // tablet_hor: require(`../assets/banner1024_500.jpg`),
                // tablet_ver: require(`../assets/banner768_500.jpg`),
                // mobile: require(`../assets/banner450_500.jpg`),
            },
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
        }
    },
}
</script>

<!-- 閉包 -->
<style scoped>
.banner {
    height: 100vh;
    width: 100%;
    background-size: cover;
    /* background-image: url(../assets/banner1920x1080.jpg); */
}

h1 {
    font-size: 50px;
    text-align: center;
}

h2 {
    font-size: 40px;
}

.logo {
    margin-top: 20px;
    width: 40px;
    margin-left: 3rem;
}

h3 {
    margin-top: -3px;
    color: black;
    font-size: 28px;
}

h3 a {
    margin-top: -5px;
    color: rgb(6, 59, 138);
    font-size: 28px;
}
.title {
    margin: auto;
    margin-top: 25vh;
    font-size: 50px;
    line-height: 75px;
}

.subtitle {
    margin: auto;
    line-height: 40px;
    font-size: 24px;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .title {
        margin-top: 30vh;
    }

    .subtitle {
        margin-top: 20vh;
    }
}

p {
    font-size: 80px;
    /* color: var(--main_color); */
    color: black;
}

a {
    /* border: 1px solid var(--main_color); */
    /* border-radius: 1px;
    padding: 1rem 2rem;
    position: absolute;
    font-size: 20px;
    bottom: 20%;
    left: 50%; */
    /* 偏離原始位置 */
    /* transform: translateX(-50%);
    color: var(--main_color); */
}
img {
    height: 30px;
    margin-right: 5px;
}

.logo img {
    display: flex;
    font-size: 30px;
}

span {
    display: flex;
    font-size: 30px;
}

@keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translate(-50%, 0);
    }
    40% {
        transform: translate(-50%, -30px);
    }
    60% {
        transform: translate(-50%, -15px);
    }
}

.godown:hover {
    animation: bounce2 1.5s ease infinite;
}
.godown {
    height: 3.5rem;
    position: absolute;
    bottom: 5em;
    transform: translateX(-50%);
}

.hashtag {
    display: flex;
    margin: auto;
    justify-content: center;
    cursor: pointer;
}

.hashtag {
    display: flex;
    margin: auto;
    justify-content: center;
    cursor: pointer;
}
</style>
