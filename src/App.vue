<template>
    <div id="app">
        <Header />
        <Banner />
        <!-- <Intro /> -->
        <pop_news />
        <pet_news />
        <covid_news />
        <warm_news />
        <people_news />
        <world_news />
        <good_news />
        <Video />
        <Addition />
        <Bottom />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
//  import Intro from '@/components/Intro.vue'

import pop_news from '@/components/pop_news.vue'
import pet_news from '@/components/pet_news.vue'
import covid_news from '@/components/covid_news.vue'
import warm_news from '@/components/warm_news.vue'
import people_news from '@/components/people_news.vue'
import world_news from '@/components/world_news.vue'
import good_news from '@/components/good_news.vue'
import Video from '@/components/Video.vue'
import Addition from '@/components/Addition.vue'
import Bottom from '@/components/Bottom.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Banner,
        // Intro,
        // // Content,
        // Faq,
        // Topic

        pop_news,
        pet_news,
        covid_news,
        warm_news,
        people_news,
        world_news,
        good_news,
        Video,
        Addition,
        Bottom,
        Footer,
    },
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    text-decoration: none !important;
}

#app {
    font-family: 蘋果儷中黑, 微軟正黑體, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
}
</style>

<style>
:root {
    --header_background: rgb(247, 228, 228, 0.7);
    --header_box_shadow: 0px 2px 10px #1a1e30;

    --layout_background: #f3eae7;
    --layout_background1: #f2dad0;
    --layout_margin: auto;
    --layout_display: grid;
    /* --layout_max_width: 1100px; */
    --layout_gap: 20px;
    --layout_padding: 1rem;
    --layout_margin: auto;
    --layout_color: #054d8f;

    --footer_font_color: rgb(0, 0, 0);
    --footer_background: #f3eae7;

    --width: 100%;
    --font_h1: 2rem;
    --font_h2: 1.6rem;
    --font_h3: 1.4rem;
    --font_h4: 1.2rem;
    --font_h5: 1.1rem;
    --font_h6: 18px;
    --font_p: 1.2rem;
    --font_span: 1rem;
    --font_title: 55px;
    --text_line_height: 36px;

    --title_align: center;
    --text_align: left;
    --bottom_text_color: #3a3c3e;
    --bottom_color: rgb(237, 217, 217, 0.8);
    --main_color: #3a3c3e;
    --title_color: #c37c68;
    --title_icon: 63px;

    scroll-behavior: smooth;
}

h1 {
    font-size: var(--font_h1);
}

h2 {
    font-size: var(--font_h2);
    text-align: var(--title_align);
    margin: 1rem;
    padding: 2rem 0;
    font-weight: bolder;
}

h3 {
    font-size: var(--font_h3);
    text-align: var(--title_align);
    padding: 1.5rem 0;
    font-weight: bold;
}

h4 {
    font-size: var(--font_h4);
    text-align: left;
    padding: 1.5rem 0;
    font-weight: bold;
}

p {
    text-align: var(--text_align);
    line-height: var(--text_line_height);
    margin: 1rem 0;
    font-size: var(--font_p);
}

.layout {
    /* margin: 3rem var(--layout_margin) 0; */
    padding-top: 4rem;
    max-width: var(--layout_max_width);
    min-width: 320px;
}

.layout_grid {
    display: var(--layout_display);
    max-width: var(--layout_max_width);

    margin: var(--layout_margin);
    padding: var(--layout_padding);
    grid-gap: var(--layout_gap);
}

.faq-wrapper {
    margin: auto !important;
}

.accordion__title {
    background-color: var(--layout_background);
}

element.style {
}

.carousel-control-next-icon {
    height: 80px !important;
    width: 80px !important;
    background-image: url('./assets/right_arrow.png') !important;
    opacity: 1 !important;
    
}
.carousel-control-prev-icon {
    height: 80px !important;
    width: 80px !important;
    background-image: url('./assets/left_arrow.png') !important;
    opacity: 1 !important;
}

@media screen and (max-width: 768px) {
    .carousel-control-next-icon {
        display: none !important;
    }
    .carousel-control-prev-icon {
        display: none !important;
    }
    .img-fluid {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
}

/* 漢堡選單 */

#navbarBtn {
    position: fixed;
    display: none;
    margin: 1rem -1.8rem;
    cursor: pointer;
    z-index: 100;
    background-color: transparent;
    padding: 2px;
    border-radius: 10px;
    top: 3rem;
}

#navbar {
    position: fixed;
    height: 100vh;
    z-index: 99;
    background: var(--layout_background1);
    opacity: 0.99;
    margin-left: -1rem;
}

#navbarBtn {
    display: flex;
}
#navbar {
    display: none;
}

.bg-light {
    opacity: 0.94;
}

h1.layout {
    font-size: 2.6rem;
    display: flex;
}

p.layout {
    font-size: 1.8rem;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
}

/* .guideText {
    margin: 10% 0;
} */
.nav-link {
    font-size: 22px;
}

.nav-link img {
    width: 38px;
    margin-top: 0.4rem;
    margin-right: 0.5rem;
    margin-bottom: -0.8rem;
}

@media screen and (max-width: 768px) {
}
</style>
