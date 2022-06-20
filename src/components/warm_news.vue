/* eslint-disable no-undef */
<template>
    <div class="layout" id="warm">
        <div class="layout">
            <div class="title_row">
                <img src="../assets/title3.png" alt="" class="title_icon" />
                <h2 class="title_text">{{ title }}</h2>
            </div>
            <div class="layout_grid aaa">
                <div class="layout_grid_news" v-for="(news, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank" v-if="index <= 3">
                        <div class="grid_cover">
                            <img :src="news.Image" />
                        </div>
                        <div class="grid_info">
                            <h4>{{ news.Title }}</h4>
                            <p class="time">{{ news.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <span id="dots"></span
        ><span id="more3">
            <div class="layout">
                <div class="layout_grid" style="margin-top: -150px">
                    <div class="layout_grid_news" v-for="(news, index) of newsInfo" :key="index">
                        <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank" v-if="index > 3">
                            <div class="grid_cover">
                                <img :src="news.Image" />
                            </div>
                            <div class="grid_info">
                                <h4 class="content">{{ news.Title }}</h4>
                                <p class="time">{{ news.CreateDate }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </span>
        <button v-on:click="myFunction" id="myBtn3">閱讀<br />更多</button>
    </div>
</template>
<script>
export default {
    name: 'Intro',
    data() {
        return {
            newsInfo: [],
            title: '暖心故事',
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=暖心故事&Page=1&sp=20')
            .then((response) => {
                let data = response.data.ITEM
                data.forEach((item) => {
                    this.newsInfo.push(item)
                })
            })
            .catch((error) => {
                console.log('error' + error)
            })
    },
    methods: {
        test: function () {
            this.getElementByClass('readmore').toggle('show')
        },

        myFunction: function () {
            var dots = document.getElementById('dots')
            var moreText = document.getElementById('more3')
            var btnText = document.getElementById('myBtn3')

            if (dots.style.display === 'none') {
                dots.style.display = 'inline'
                btnText.innerHTML = '閱讀<br>更多'
                moreText.style.display = 'none'
            } else {
                dots.style.display = 'none'
                btnText.innerHTML =
                    ' <a href="https://www.ftvnews.com.tw/tag/暖心故事/" target="_blank" style="color: black">更多<br>新聞</a>'
                moreText.style.display = 'inline'
            }
        },
    },
}
</script>

<style scoped>

button {
    margin-top: 0px;
    font-size: 20px;
    border-radius: 100%;
    background-color: rgb(243, 191, 199);
    border: transparent 1px solid;
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    color: black;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

button:hover {
    background-color: rgb(243, 191, 199);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color: black;
    transform: translateY(-7px);
}
#more3 {
    display: none;
}

.layout {
    background-color: var(--layout_background1);
}

.layout_grid {
    width: 1000px;
    border-radius: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.layout_grid_news img {
    width: 100%;
    height: 150px;
    border-radius: 5px 5px 0px 0px;
}

@media screen and (max-width: 1024px) {
    .layout_grid {
    width: 700px;
        grid-template-columns: 1fr 1fr;
    }

    .layout_grid_news img {
        width: 100%;
        height: 190px;
        border-radius: 5px 5px 0px 0px;
    }
}

@media screen and (max-width: 768px) {
    .layout_grid {
        width: 280px;
        grid-template-columns: 1fr;
    }
    .layout_grid_news img {
        width: 100%;
        height: 135px;
        border-radius: 5px 5px 0px 0px;
    }
    .aaa {
        margin-bottom: -300px;
    }
}

.layout_grid_news {
    box-shadow: 1px 2px 1px #bcb9b9;
    background-color: white;
    border-radius: 5px;
}

.layout_grid_news .grid_info h4 {
    background-color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    max-height: 80px;
    line-height: 2.3rem;
    padding: 10px 1rem 25px;
    font-size: 20px;
    text-decoration: none;
}

.layout_grid_news .grid_info {
    margin: 0;
    color: #0a0a09;
}
max-height: 55px;
.layout_grid_news .grid_info p {
    margin: 0;
    color: #0a0a0a;
}

.layout_grid_news .grid_cover img {
    width: 100%;
}

.layout_grid_news .grid_cover {
    max-height: 400px;
    overflow: hidden;
}

a {
    color: black;
}

p {
    text-align: right;
    padding-right: 1rem;
}

button {
    margin-top: 0px;
    font-size: 20px;
    border-radius: 100%;
    background-color: rgb(243, 191, 199);
    border: transparent 1px solid;
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    color: black;
    text-decoration: none;
}

.title_text {
    margin-bottom: 0px;
    color: var(--title_color);
    font-size: var(--font_title);
}

h4 {
    font-size: 20px;
}

.time {
    color: #9a9898;
    font-size: 18px;
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
    margin-top: -5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
    .title_icon {
        margin-top: 2rem;
    }
    .title_text {
        margin-top: 20px;
        margin-bottom: -20px;
        color: var(--title_color);
        font-size: 45px;
    }
    .title_row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-bottom: 1rem;
    }
    .aaa {
        margin-bottom: -100px;
    }
}
@media screen and (max-width: 768px) {
    .title_icon {
        margin-top: 3rem;
    }
    .title_text {
        margin-top: 30px;
        margin-bottom: -20px;
        color: var(--title_color);
        font-size: 36px;
    }
    .title_row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .aaa {
        margin-bottom: -300px;
    }
}
</style>
