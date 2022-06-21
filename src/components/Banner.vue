<template class="container">
    <div class="banner">
        <div class="row">
            <a href="https://www.ftvnews.com.tw/"><img src="../assets/LOGO-01.png" alt="" class="logo" /></a>
            <!-- <h3><a href="">民視新聞網</a></h3> -->
        </div>
        <div class="row content">
            <div class="title col-12 col-lg-6">
                <h1>暖新聞專區</h1>
                <h5 class="mo">每日一篇暖新聞&nbsp;傳遞療癒正能量</h5>
                <h5 class="momo">每日一篇暖新聞&nbsp;傳遞療癒正能量</h5>
                <hr />
                <p class="hi col-10 col-lg-11">
                    近日身處在疫情延燒、俄烏戰爭未見停歇、通膨風暴席捲全球的生活中，是否令你感到焦慮不安？或是高壓忙碌的工作，讓你感覺身心俱疲？<br /><br />
                    雖然日常生活裡，我們偶爾會低潮、憂鬱，但別忘了這個世界還是有很多好事發生！民視新聞網替大家精選療癒、正向暖新聞，希望為世界帶來一點正能量，鼓舞每個人帶著溫暖的心，繼續向前行。
                </p>
            </div>

            <div class="subtitle1 col-lg-5 ml-5">
                <h2>熱門精選Top4</h2>
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="3000"
                    indicators
                    background="transparent"
                    img-width=""
                    img-height=""
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Text slides with image -->
                    <!-- control -->
                    <!-- Slides with custom text -->
                    <!-- <b-carousel-slide img-src="../assets/公益神力女團.jpg"><a href="#pop1"></a> </b-carousel-slide>
                    <b-carousel-slide img-src="../assets/萌主好可愛.jpg"><a href="#pop2"></a> </b-carousel-slide>
                    <b-carousel-slide img-src="../assets/難民運動員.jpg"> <a href="#pop3"></a></b-carousel-slide>
                    <b-carousel-slide img-src="../assets/點燈謝醫護.jpg"><a href="#pop4"></a> </b-carousel-slide> -->

                    <a href="#pop"> <b-carousel-slide img-src="../assets/24厭世喵星人.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/24小兄弟感謝警-02.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/24生命小鬥士-03.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/24暖心嬤赤腳-03-04.jpg"> </b-carousel-slide></a>
                </b-carousel>
            </div>
            <div>
                <a href="https://lihi1.com/mYIAu">
                    <img src="../assets/angle-down-solid.svg" class="godown1" alt=""
                /></a>
            </div>

            <div class="subtitle">
                <h2>熱門精選Top4</h2>
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="2800"
                    img-width="300"
                    img-height="300"
                    background="transparent"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Text slides with image -->
                    <!-- control -->
                    <!-- Slides with custom text -->
                    <!-- <b-carousel-slide img-src="../assets/公益神力女團.jpg"><a href="#pop1"></a> </b-carousel-slide>
                    <b-carousel-slide img-src="../assets/萌主好可愛.jpg"><a href="#pop2"></a> </b-carousel-slide>
                    <b-carousel-slide img-src="../assets/難民運動員.jpg"> <a href="#pop3"></a></b-carousel-slide>
                    <b-carousel-slide img-src="../assets/點燈謝醫護.jpg"><a href="#pop4"></a> </b-carousel-slide> -->

                    <a href="#pop"> <b-carousel-slide img-src="../assets/手機-厭世喵星人_工作區域 1.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/手機-小兄弟感謝警-02-02.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/手機-生命小鬥士-03-03.jpg"> </b-carousel-slide></a>
                    <a href="#pop"> <b-carousel-slide img-src="../assets/手機-暖心嬤赤腳-03-04-04.jpg"> </b-carousel-slide></a>
                </b-carousel>
            </div>
        </div>

        <!-- <source media="(max-width: 450px)" :srcset="banner_img.mobile" class="bg" />
            <source media="(max-width: 768px)" :srcset="banner_img.tablet_ver"  class="bg"/>
            <source media="(max-width: 1024px)" :srcset="banner_img.tablet_hor"  class="bg"/> 
         <img :src="banner_img.desktop" class="bg" />   -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // banner_img: {
            //     desktop: require(`../assets/banner1920x1080.jpg`),
            //     tablet_hor: require(`../assets/banner1024x500 .jpg`),
            //     tablet_ver: require(`../assets/banner700x1920.jpg`),
            //     mobile: require(`../assets/banner700x1920.jpg`),
            // },
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
            slide: 0,
            sliding: null,
        }
    },
}
</script>

<!-- 閉包 -->
<style scoped>
.n {
    display: none;
}
h5 {
    font-size: 20px;
}
.banner {
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-image: url('../assets/banner1920x1080.jpg');
}

hr {
    width: 100px;
    border: 1px solid black;
    margin-bottom: 30px;
}
h1 {
    font-size: 80px;
    font-weight: bolder;
    text-align: center;
}

h2 {
    font-size: 48px;
}

.logo {
    margin-top: -1.9rem;
    margin-left: 29px;
    height: 140px;
}

h3 {
    margin-top: -3px;
    color: black;
    font-size: 30px;
}

h3 a {
    margin-top: -5px;
    color: rgb(6, 59, 138);
    font-size: 28px;
}

.title {
    margin: auto;
    /* margin-top: 6%; */
    font-size: 48px;
    line-height: 70px;
}

.subtitle1 {
    margin-right: 60px;
    /* margin: auto; */
    margin-top: -1rem;
    line-height: 40px;
    font-size: 30px;
    text-align: center;
}

.subtitle {
    display: none;
}

p {
    font-size: 16px;
    /* color: var(--main_color); */
    line-height: 28px;
    color: black; 
    margin: auto;
}

.logo img {
    display: flex;
    font-size: 30px;
    margin-top: 1.4rem;
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
        transform: translate(0, 0);
    }

    40% {
        transform: translate(0, -20px);
    }

    60% {
        transform: translate(0, -10px);
    }
}
.godown1 {
    position: absolute;
    bottom: 12%;
    right: 49%;
    border-radius: 100%;
    padding: 12px 14px;
    border: 2px solid rgb(8, 8, 8);
    z-index: 99;
    cursor: pointer;
    width: 45px;
}
.godown1:hover {
    animation: bounce2 1.5s ease infinite;
}

@media screen and (max-width: 1024px) {
    .title {
        margin-top: -1rem;
        font-size: 16px;
        height: 1000px;
    }
    .title h1 {
        font-size: 50px;
    }

    .subtitle1 h2 {
        margin-top: 4rem;
        margin-bottom: -1rem;
        font-size: 32px;
    }

    hr {
        width: 100px;
        border: 1px solid black;
        margin-bottom: 30px;
        margin-top: 10px;
    }

    .banner {
        height: 98vh;
        width: 100%;
        background-size: cover;
        background-image: url('../assets/banner1024x500.jpg');
    }

    .subtitle1 {
        margin: auto;
        margin-top: -47rem;
        margin-right: 3rem;
        margin-left: 3rem;
        padding: 2.5rem;
        line-height: 40px;
        font-size: 30px;
        text-align: center;
    }

    .subtitle {
        display: none;
    }

    .godown1 {
        position: absolute;
        bottom: 4.5rem;
        right: 48%;
        border-radius: 100%;
        padding: 12px 14px;
        border: 2px solid rgb(8, 8, 8);
        z-index: 99;
        cursor: pointer;
        width: 45px;
    }
    .godown1:hover {
        animation: bounce2 1.5s ease infinite;
    }
}

.momo {
    display: none;
}
.mo {
    display: block;
    font-size: 27.5px;
}

@media screen and (max-width: 768px) {
    .momo {
        color: #333;
        display: block;
        line-height: 30px;
    }

    .mo {
        display: none;
    }

    .title {
        margin-top: -1rem;
        font-size: 16px;
    }
    hr {
        display: none;
    }
    h2 {
        font-size: 26px;
    }
    .title h1 {
        font-size: 48px;
    }
    s .title h5 {
        line-height: 35px;
        font-size: 20.5px;
    }

    .godown1 {
        position: absolute;

        border-radius: 100%;
        padding: 12px 14px;
        border: 2px solid #080808;
        z-index: 99;
        cursor: pointer;
        width: 45px;
        margin-top: 100px;
        bottom: 0.2rem;
        left: 46%;
    }

    .subtitle {
        width: 280px;

        margin: auto;
        display: block;
        margin-top: -910px;
    }

    .subtitle h2 {
        margin-bottom: -1rem;
    }

    .subtitle1 {
        display: none;
    }

    .godown1:hover {
        animation: bounce2 1.5s ease infinite;
    }

    .banner {
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-image: url('../assets/banner700x1920.jpg');
    }
    .hi {
        display: none;
    }
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

.bg {
    width: 100%;
    position: fixed;
    z-index: -9999;
    top: 0;
    right: 0;
}

.fa-angle-down {
    border-radius: 100%;
    padding: 10px 13px;
    text-decoration: none;
    color: black;
    /* box-shadow: 1px 2px 3px black; */
    border: 2px solid rgb(0, 0, 0);
    z-index: 99999;
    cursor: pointer;
    font-size: 40px;
}
</style>
