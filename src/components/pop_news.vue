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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0243'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                   <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0243'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/2c01d02e-e588-4eae-9aae-ba29591eb8ff.jpg"
                                        alt=""
                                /></a>
                              
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022630W0243'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>
                                       「歐告」怕曬黑全身包緊成採茶妹！騎車戴墨鏡「專業3裝備」笑翻網
                                 
                                       
                                    </h4>
                                    <p>
                                       夏天到了要做好防曬以免被曬傷，一名網友近期分享一張搞笑照片，一名騎士載著愛犬出門，只見這隻「歐告」全身包緊緊，乍看就像採茶妹，牠戴著墨鏡、遮陽帽，以及薄上衣，3樣專業的防曬裝備瞬間成為路上焦點，坐在腳踏墊上也不忘緊盯前方，看起來相當有自信，照片曝光後，笑翻網友。
                                    </p>
                                </div>
                            </a>

                            <!-- </a> -->
                        </div>
                        <button id="show">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0243'" target="blank">閱讀更多</a>
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022624W0164'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                               <a :href="'https://www.ftvnews.com.tw/news/detail/2022624W0164'" target="_blank"> <img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/7e660982-e658-48d5-bde9-00290075dada.jpg"
                                        alt=""
                                /></a>
                                   
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022624W0164'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                
                                    <h4>10歲台裔小女孩廚藝節目奪冠！征服「地獄廚神」抱走300萬獎金</h4>
                                    <p>
                                        美國節目《小小頂級廚師美國版》（MasterChef Junior USA），邀請8到13歲的小朋友參與廚藝競賽，角逐頂級廚師頭銜和10萬美金（約新台幣300萬元）的豐厚獎金。在第8季節目中，有位父母皆來自台灣的10歲小女孩莉亞（Liya）表現突出，每每端出的料理都讓評審驚艷，就連地獄廚神戈登（Gordon Ramsay）都對她讚譽有加。如今節目結果出爐，莉亞打敗各路好手，順利奪得冠軍。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show1">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022624W0164'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal1">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022624W0164"
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0095'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                 <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0095'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/7798e46b-ee60-4af8-8f39-196ffcbe5d91.jpg"
                                        alt=""
                                /></a>
                               
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022630W0095'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>15歲少年徒步環島有洋蔥！他「揹阿嬤」風吹日曬：祂一直都在</h4>
                                    <p>
                                      許多人為了完成自己的夢想，一輩子中至少會環島一次，但最近有一名15歲少年卻是為了「已經過世的阿嬤」開始徒步環島，過程中有許多民眾捕捉到他的身影，在得知背後有洋蔥非常感動，故事曝光後更是逼哭大批網友。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show2">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022630W0095'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal2">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022630W0095"
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022625W0077'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
  <a :href="'https://www.ftvnews.com.tw/news/detail/2022625W0077'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/28b54367-1a07-4bae-88ea-afe81233df95.jpg"
                                        alt=""
                                /></a>
                             
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022625W0077'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>台語歌后霸氣「一刀斬斷30公分」！暖心原因曝光楊繡惠嗨喊4字</h4>
                                    <p>
                                        41歲台語歌后孫淑媚，過去在歌唱節目中脫穎而出，年僅14歲的她就成功與經紀公司簽約，正式踏入歌壇。出道後，孫淑媚一直都有捐髮的習慣，因此在做舞台造型時，非必要都會堅持不染不燙，盡量讓頭髮保持最原始的狀態，只為了要蓄髮捐給癌症病友。她6月23日在臉書曬出自己的剪髮過程，只見她俐落地一把剪去30公分長髮，暖心舉動讓網友大受感動，就連藝人楊繡惠也現身留言回應。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show3">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022625W0077'" target="_blank"
                                >閱讀更多
                            </a>
                        </button>
                        <!-- <dialog id="infoModal3">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022625W0077"
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
