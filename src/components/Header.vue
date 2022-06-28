<template>
    <div class="layout_header">
        <div class="progress"></div>
        <div class="container layout_grid">
            <div class="slide" :class="{ fixed: active }">
                <!-- <ScaleDown>
                    <a href="https://www.ftvnews.com.tw/">
                        <img src="../assets/LOGO-01.png" alt="" class="logo" />
                    </a>

                    <div class="sub">
                        <a href="#pop"> <img src="../assets/title.png" alt="" class="titleicon" />&nbsp;熱門精選</a>

                        <a href="#pet"> <img src="../assets/title1.png" alt="" class="titleicon" />&nbsp;療癒毛孩</a>

                        <a href="#covid"> <img src="../assets/title2.png" alt="" class="titleicon" />&nbsp;齊心抗疫</a>
                        <a href="#warm"> <img src="../assets/title3.png" alt="" class="titleicon" />&nbsp;暖心故事</a>
                        <a href="#people"> <img src="../assets/title4.png" alt="" class="titleicon" />&nbsp;勵志人物</a>
                        <a href="#world"> <img src="../assets/title5.png" alt="" class="titleicon" />&nbsp;國際暖聞</a>
                        <a href="#good"> <img src="../assets/title6.png" alt="" class="titleicon" />&nbsp;公益送暖</a>
                        <a href="#video"> <img src="../assets/title7.png" alt="" class="titleicon" />&nbsp;精選影音</a>
                    </div>
                </ScaleDown> -->

                <nav id="navbarBtn"><i id="switcher" class="fas fa-bars fa-2x"></i></nav>
                <nav id="navbar" class="navbar">
                    <nav class="nav nav-pills flex-column">
                        <img src="../assets/LOGO-01.png" style="margin-top: -100px; margin-bottom: -20px; width: 200px" alt="" />

                        <a class="nav-link" href="#pop"><img src="../assets/title.png" alt="" />熱門精選</a>
                        <a class="nav-link" href="#pet"><img src="../assets/title1.png" alt="" />療癒毛孩</a>
                        <a class="nav-link" href="#covid"><img src="../assets/title2.png" alt="" />齊心抗疫</a>
                        <a class="nav-link" href="#warm"><img src="../assets/title3.png" alt="" />暖心故事</a>
                        <a class="nav-link" href="#people"> <img src="../assets/title4.png" alt="" />勵志人物</a>
                        <a class="nav-link" href="#world"><img src="../assets/title5.png" alt="" />國際暖聞</a>
                        <a class="nav-link" href="#good"><img src="../assets/title6.png" alt="" />公益送暖</a>
                        <a class="nav-link" href="#video"><img src="../assets/title7.png" alt="" />精選影音</a>
                    </nav>
                </nav>
            </div>
        </div>

        <div id="icon" :class="{ fixed: active }">
            <!-- line -->
            <a
                href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/warm/"
                target="_blank"
            >
                <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/warm/">
                    <img src="../assets/LINE.png" alt="" width="60px"
                /></span>
            </a>
            <br />
            <!-- facebook -->
            <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Fwarm%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
            >
                <img src="../assets/Facebook.png" alt="" width="60px"
            /></a>
            <br />
            <!-- localUrl -->
            <a target="_blank" @click="getLocalUrl" class="fb-xfbml-parse-ignore">
                <img src="../assets/share.png" alt="" width="60px"
            /></a>
            <br />
        </div>
    </div>
</template>

<script>
// import { ScaleDown } from 'vue-burger-menu'

export default {
    name: 'Header',
    components: {
        // ScaleDown,
    },
    data() {
        return {
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
            active: true,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        scroll() {
            window.addEventListener('scroll', () => {
                this.moveBar('transparent')
            })
        },

        moveBar(color = 'transparent') {
            let bar = document.querySelector('.progress')
            let w = Math.ceil(
                (Math.round(window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100
            )
            bar.style.width = w + '%'
            bar.style.background = color
        },

        linkToHome() {
            window.open('https://www.ftvnews.com.tw/', '_blank')
        },

        getLocalUrl() {
            let e = document.createElement('input'),
                // t = window.location.href + '?utm_source=topicpage&utm_medium=copybutton'
                 t = window.location.href
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功!')
        },
        handleScroll() {
            this.active = window.scrollY < 700 ? true : false
        },

        burger() {
            document.querySelector('#navbarBtn').addEventListener('click', o)
            let e = document.querySelectorAll('.nav-link')
            var t = !0
            function o() {
                let e = document.querySelector('#switcher'),
                    o = document.querySelector('#navbar')
                t
                    ? (e.classList.remove('fa-bars'), e.classList.add('fa-times'), (t = !1), (o.style.display = 'flex'))
                    : (e.classList.remove('fa-times'), e.classList.add('fa-bars'), (t = !0), (o.style.display = 'none'))
            }
            for (let t = 0; t < e.length; t++)
                e[t].addEventListener('click', function () {
                    o()
                })
        },
    },

    mounted() {
        this.burger()
        this.scroll()
        this.moveBar()
    },
}
</script>

<style scoped>
.layout_header {
    width: 100%;
    --layout_max_width: 100vw;
    z-index: 222 !important;
    position: fixed;
    margin-top: -10px;
    top: 3rem;
}

.fixed {
    display: none;
}

.layout_grid {
    padding: var(--layout_padding);
    height: 100px;
    margin: 0;
    margin-top: -1.3rem;
    z-index: -100 !important;
    /* background-color: var(--header_background); */
}

p {
    font-size: var(--font_h2);
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
}

p img {
    width: 32px;
}

/* 進度條 */
/* .progress {
    position: fixed;
    bottom: 53px;
    width: 0.5%;
    height: 10px;
    z-index: 999;
} */

/* 社群分享 */

i {
    color: var(--main_color);
    display: block;
    margin: 20px;
    font-size: 45px;
}

#icon {
    margin-top: -3rem;
    z-index: 999;
    position: fixed;
    right: 0;
    margin-right: 0rem;
}

span {
    color: rgb(10, 50, 110);
    margin-top: -2.4rem;
    font-size: 30px;
}

.logo {
    margin-top: -1rem;

    height: 140px;
}

a {
    text-decoration: none;
    color: black;
}
.sub {
    display: flex;
    flex-direction: column;
    color: #232020;
    text-align: center;
    margin-top: -2rem;
    margin-left: -3rem;
}

.sub a {
    color: #1d1d1d;
    font-size: 23px;

    line-height: 44px;
    text-decoration: none;
}
.sub img {
    margin-top: -2px;
    width: 44px;
}

#social_link {
    margin-top: -1px;
}

@media screen and (max-width: 768px) {
    .fixed {
        margin-top: -3rem;
        z-index: 999;
        position: fixed;
        right: 0;
        margin-right: 0rem;
    }
}

.titleicon {
    margin-bottom: -16px;
}
</style>
