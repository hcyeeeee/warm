<template>
    <div class="layout" id="pop">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            indicators
            background="transparent"
            img-width="404"
            img-height="480"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <div class="title_row">
                <img src="../assets/title.png" alt="" class="title_icon" />
                <h2 class="title_text">{{ title }}</h2>
            </div>
            <!-- 1 -->
            <b-carousel-slide>
                <template #img>
                    <div class="layout_grid">
                        <div class="layout_grid_news" id="pop1">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0215'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                   <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0215'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/522f19ad-1c9c-494a-8e34-1b66d6088eb0.jpg"
                                        alt=""
                                /></a>
                              
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022616W0215'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>
                                        厭世喵星人抬頭「是把拔」1秒變臉軟萌萌&nbsp;網敲碗：快出表情包！
                                       
                                    </h4>
                                    <p>
                                        這隻貓根本能出表情包！在日本四國愛媛縣松山市的一處草莓農場裡，有隻名字叫做「小太郎（コタロー）」的2歲虎斑貓，最近飼主在推特上分享一段短片，短短15秒就能看出小太郎的超級反差萌，超可愛的表情變化也讓全球百萬網友融化！
                                    </p>
                                </div>
                            </a>

                            <!-- </a> -->
                        </div>
                        <button id="show">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0215'" target="blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022605W0093"
                                frameborder="0"
                                width="900px"
                                height="900px"
                                name="aaa"
                            ></iframe>
                            <button id="close" class="close_btn">x</button>
                        </dialog> -->
                    </div>
                </template>
            </b-carousel-slide>
            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <template #img>
                    <div class="layout_grid">
                        <div class="layout_grid_news" id="pop2">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022617W0179'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                               <a :href="'https://www.ftvnews.com.tw/news/detail/2022617W0179'" target="_blank"> <img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/a9544f55-ddf6-430e-b46b-6ba599fcbdc5.jpg"
                                        alt=""
                                /></a>
                                   
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022617W0179'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>感謝警察付出！台中小兄弟檔掏零用錢&nbsp;送飲料慰勞「心目中的英雄」</h4>
                                    <p>
                                        為感謝辛苦守護市民的警察，台中一對小兄弟檔拿出積攢的零用錢，購買飲料慰勞「心目中的英雄」。6月15日警察節當天下午，兩兄弟提著一大袋飲料前往台中市警局后里分駐所，父親轉述2名孩童的來意，讓在場員警大為感動，所長李建興更回贈警察勤務帽，與兄弟倆留下值得紀念的開心合影。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show1">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022617W0179'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal1">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022617W0179"
                                frameborder="0"
                                width="900px"
                                height="900px"
                                name="aaa"
                            ></iframe>
                            <button id="close1" class="close_btn">x</button>
                        </dialog> -->
                    </div>
                </template>
            </b-carousel-slide>
            <!-- 3 -->
            <b-carousel-slide>
                <template #img>
                    <div class="layout_grid">
                        <div class="layout_grid_news" id="pop3">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0288'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                 <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0288'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/eb52e337-6839-402d-931b-2789864e6b3a.jpg"
                                        alt=""
                                /></a>
                               
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022616W0288'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>車禍癱瘓9年！生命小鬥士珣珣「用嘴控筆寫作業」國小畢業獲校長獎</h4>
                                    <p>
                                       嘉義市宣信國小畢業生「珣珣」，在9年前發生車禍，導致她頸部以下癱瘓。不過，珣珣還是像一般孩子一樣每天上學，努力的用「嘴」寫字完成學業，今年12歲的她已經從國小畢業，還以優秀的成績拿下校長獎，嘉義市長黃敏惠也到場獻上祝福，珣珣也坦言，自己畢業了雖然開心，但要與同學們分開還是有點捨不得，期待能上同一所國中。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show2">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022616W0288'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal2">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022616W0288"
                                frameborder="0"
                                width="900px"
                                height="900px"
                                name="aaa"
                            ></iframe>
                            <button id="close2" class="close_btn">x</button>
                        </dialog> -->
                    </div>
                </template>
            </b-carousel-slide>
            <!--  -->
            <b-carousel-slide>
                <template #img>
                    <div class="layout_grid">
                        <div class="layout_grid_news" id="pop4">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022615W0135'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
  <a :href="'https://www.ftvnews.com.tw/news/detail/2022615W0135'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/7f92ce7f-3f08-49e8-9a61-47ba61266491.jpg"
                                        alt=""
                                /></a>
                             
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022615W0135'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>腳踏墊有「拖鞋」真相曝光！暖心嬤怕踩髒地板赤腳逛超商</h4>
                                    <p>
                                        日前彰化縣一名網友至芳苑鄉三合村的一家便利超商取貨，進店門前忽然發現地墊上竟散落一雙粉紅色的拖鞋，原以為是民眾不要亂丟，隨後入內結帳才發現一位赤腳的阿嬤，她趕忙上前詢問，這才知道原來阿嬤擔心弄髒店員清潔乾淨的地板，而把拖鞋擺放在外，事後她也上網分享此事，不少網友直呼阿嬤實在太可愛，為店員著想的心意令人溫暖。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show3">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022615W0135'" target="_blank"
                                >閱讀更多
                            </a>
                        </button>
                        <!-- <dialog id="infoModal3">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022615W0135"
                                frameborder="0"
                                width="900px"
                                height="900px"
                                name="aaa"
                            ></iframe>
                            <button id="close3" class="close_btn">x</button>
                        </dialog> -->
                    </div>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            newsInfo: [],
            title: '熱門精選Top4',
            slide: 0,
            sliding: null,
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get
            // "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=暖心故事&Page=2&sp=1"
            ()
            .then((response) => {
                let data = response.data.ITEM
                data.forEach((item) => {
                    this.newsInfo.push(item)
                })
            })
            .catch((error) => {
                console.log('error' + error)
            })
        let btn = document.querySelector('#show')
        let infoModal = document.querySelector('#infoModal')
        btn.addEventListener('click', function () {
            infoModal.showModal()
        })
        let close = document.querySelector('#close')
        close.addEventListener('click', function () {
            infoModal.close()
        })

        let btn1 = document.querySelector('#show1')
        let infoModal1 = document.querySelector('#infoModal1')
        btn1.addEventListener('click', function () {
            infoModal1.showModal()
        })
        let close1 = document.querySelector('#close1')
        close1.addEventListener('click', function () {
            infoModal1.close()
        })

        let btn2 = document.querySelector('#show2')
        let infoModal2 = document.querySelector('#infoModal2')
        btn2.addEventListener('click', function () {
            infoModal2.showModal()
        })
        let close2 = document.querySelector('#close2')
        close2.addEventListener('click', function () {
            infoModal2.close()
        })
        let btn3 = document.querySelector('#show3')
        let infoModal3 = document.querySelector('#infoModal3')
        btn3.addEventListener('click', function () {
            infoModal3.showModal()
        })
        let close3 = document.querySelector('#close3')
        close3.addEventListener('click', function () {
            infoModal3.close()
        })
    },
}
</script>

<style scoped>
.layout {
    background-color: var(--layout_background);
}

.layout_grid {
    width: 800px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    margin-top: 3rem;
    padding: 1.5rem;
    margin-bottom: 4rem;
    border-radius: 10px;
}

.layout_grid_news img {
    width: 100%;
    height: 450px;
    border-radius: 10px;
}

.layout_grid_news .grid_info h4 {
    background-color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-size: 29px;
    -webkit-box-orient: vertical;
    white-space: normal;
    max-height: 95px;
    line-height: 2.4rem;
    padding: 20px 1rem 20px;
}

.layout_grid_news .grid_info p {
    margin: 0;
    color: #161615;
    background-color: white;
    text-align: start;
    padding: 20px 1rem 20px;
}

.layout_grid_news .grid_cover img {
    width: 100%;

    background-color: white;
}

.layout_grid_news .grid_cover {
    max-height: 400px;
    overflow: hidden;
    background-color: white;
}

a {
    color: black;
    font-size: px;
    line-height: 150%;
}

p {
    text-align: right;
    padding-right: 1rem;
}

button {
    margin-top: -10px;
    height: 70px;
    font-size: 20px;
    background-color: rgb(248, 216, 221);
    border: transparent 1px solid;
}

.show {
    display: none;
}

.title_icon {
    height: var(--title_icon);
    margin-top: 3rem;
}
.title_text {
    margin-top: 30px;
    margin-bottom: -20px;
    color: var(--title_color);
    font-size: var(--font_title);
}
.title_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .title_icon {
        margin-top: 3rem;
        width: 50px;
        height: 50px;
    }
    .title_text {
        margin-top: 30px;
        margin-bottom: -20px;
        color: var(--title_color);
        font-size: 34px;
    }
    .title_row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
dialog {
    border: none;
    box-shadow: 0 2px 6px #ccc;
    border-radius: 10px;

    width: 60vw;
    height: 90vh;
}

.close_btn {
    color: rgb(13, 13, 13);
    font-size: 30px;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
}

@media screen and (max-width: 1024px) {
    button {
        display: none;
    }

.layout {
    background-color: var(--layout_background);
margin-top:-2.5rem ;
height:1100px;
}
    .layout_grid {
        width: 550px;
        height: fit-content;
        background-color: rgb(255, 255, 255);
        margin-top: 2rem;
        margin-bottom: 4rem;
        border-radius: 10px;
        text-decoration: none;
    }
    .layout_grid p {
        display: flex;
        align-items: center;
        margin-bottom: -1rem;
    }
    .h4 {
        font-size: 90px;
        line-height: 60px;
        text-decoration: none;
    }

    .layout_grid_news img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
    }
    dialog {
        border: none;
        box-shadow: 0 2px 6px #ccc;
        border-radius: 10px;
        scrollbar-color: transparent;
        width: 90vw;
        height: 90vh;
    }


}

@media screen and (max-width: 768px) {

    .layout {
margin-top:0rem ;
height:100%;
}
    dialog {
        display: none;
    }

    button {
        display: none;
    }

    .layout_grid {
        width: 280px;
        height: 280px;
        background-color: rgb(255, 255, 255);
        margin-top: 2rem;
        margin-bottom: 4rem;
        border-radius: 10px;
        padding: 0.8rem;
    }

    .layout_grid_news img {
        width: 100%;
        height: 180px;
        border-radius: 10px;
    }

    .layout_grid_news .grid_info h4 {
        font-size: 20px;
        -webkit-box-orient: vertical;
        white-space: normal;

        padding: 0;
    }

    .layout_grid_news .grid_info p {
        display: none;
    }
}

.layout_grid a {
    text-decoration: none;
}
/* @media screen and (max-width: 768px) {
    .carousel-control-next-icon {
        height: 80px !important;
        width: 80px !important;

        opacity: 1 !important;
    }
    .carousel-control-prev-icon {
        height: 80px !important;
        width: 80px !important;
    }
} */
</style>
