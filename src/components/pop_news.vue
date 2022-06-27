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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0168'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                   <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0168'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/98917929-4c71-4cfb-9df3-da081e45fcc5.jpg"
                                        alt=""
                                /></a>
                              
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022621W0168'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>
                                        我家柴柴是「狗頭神」轉世？下半身消失噴聖光&nbsp;網友膜拜喊現代神蹟
                                 
                                       
                                    </h4>
                                    <p>
                                       古埃及神話中的「狗頭神」阿努比斯，難道在現代出現了嗎？原來是日本有網友最近在IG上傳一段短片，可以看到一隻柴犬坐在窗邊曬太陽，不過或許因為陽光太強、狗狗身體又會反光的緣故，讓在屋內的飼主看出去時就像一顆「狗頭」飄在空中，彷彿神明現身，讓飼主實在哭笑不得。
                                    </p>
                                </div>
                            </a>

                            <!-- </a> -->
                        </div>
                        <button id="show">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0168'" target="blank">閱讀更多</a>
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0073'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                               <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0073'" target="_blank"> <img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/5d3e9683-3dd4-46f8-a54a-9d29bb670b9a.jpg"
                                        alt=""
                                /></a>
                                   
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022621W0073'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                
                                    <h4>9年擦亮19萬片！「反光鏡菩薩」張秀雄逝世網友不捨感念：謝謝阿伯</h4>
                                    <p>
                                        新北市有一名「反光鏡菩薩」張秀雄先生，因過去曾目睹車禍，發現路上的反光鏡沒有好好維護，所以開啟了他擦拭反光鏡之旅。長達9年的時間，張秀雄騎著機車穿梭在北台灣，默默擦拭了至少19萬片路邊反光鏡。日前有網友PO文說張秀雄先生日前已離世，而親友也證實了他已於6月初過世，享壽80歲。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show1">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0073'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal1">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022621W0073"
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022618W0087'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
                                 <a :href="'https://www.ftvnews.com.tw/news/detail/2022618W0087'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/3d5ff04d-e832-4efb-94e0-c3057a260add.jpg"
                                        alt=""
                                /></a>
                               
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022618W0087'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>超狂！82歲阿嬤「24小時跑125公里」刷新世界紀錄　嗨喊：完全不累</h4>
                                    <p>
                                      法國一名高齡82歲的阿嬤熱衷參加馬拉松賽事，日前以24小時跑完78英里（約125公里），一舉打破世界紀錄。她透露，在跑步的過程中會進入冥想狀態，因此完全不覺得累。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show2">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022618W0087'" target="_blank">閱讀更多</a>
                        </button>

                        <!-- <dialog id="infoModal2">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022618W0087"
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
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0080'" target="_blank"></a>
                            <div class="grid_cover">
                                <!-- <img :src="news.Image" /> -->
  <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0080'" target="_blank"><img
                                        src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/cf678474-a300-4f82-a878-87ed8856ce0e.jpg"
                                        alt=""
                                /></a>
                             
                            </div>
                            <a
                                :href="'https://www.ftvnews.com.tw/news/detail/2022621W0080'"
                                target="_blank"
                                class="mobile_grid_info"
                            >
                                <div class="grid_info">
                                    <h4>台北地下街驚見「金鐘視帝」梁修身　變身街頭藝人吹薩克斯風、折氣球！</h4>
                                    <p>
                                        74歲的梁修身，除了是知名演員、製作人、導演，還曾得過金鐘視帝，近幾年來鮮少出現螢光幕前，（19日）被目擊現身台北地下街第二廣場，他事後證實已考取「新北市街頭藝人證」，表演項目除了吹薩克斯風還有折氣球，梁修身透露，自己曾去育幼院、偏鄉小學、醫院等進行公益演出「有機會都會去，我就是做讓大家開心的！」。
                                    </p>
                                </div>
                            </a>
                            <!-- </a> -->
                        </div>
                        <button id="show3">
                            <a :href="'https://www.ftvnews.com.tw/news/detail/2022621W0080'" target="_blank"
                                >閱讀更多
                            </a>
                        </button>
                        <!-- <dialog id="infoModal3">
                            <iframe
                                src="https://www.ftvnews.com.tw/news/detail/2022621W0080"
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
