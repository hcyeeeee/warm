/* eslint-disable no-undef */
<template>
    <div class="layout" id="part_news4">
        <h2><i class="fa-solid fa-heart"></i> {{ title }}</h2>
        <div class="layout_grid">
            <div class="layout_grid_news" v-for="(news, index) of newsInfo" :key="index">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank">
                    <div class="grid_cover">
                        <img :src="news.Image" />
                    </div>
                    <div class="grid_info">
                        <h4>{{ news.Title }}</h4>
                        <p>{{ news.Title }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Intro',
    data() {
        return {
            newsInfo: [],
            title: '國際暖聞',
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=國際暖聞&Page=1&sp=4')
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
}
</script>

<style scoped>
.layout_grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 1024px) {
    .layout_grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .layout_grid {
        grid-template-columns: 1fr;
    }
}

.layout_grid_news img {
    width: 100%;
}

.layout_grid_news {
    box-shadow: 1px 2px 3px #bcb9b9;
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
    max-height: 55px;
    line-height: 2.3rem;
    padding: 10px 1rem 25px;
}

.layout_grid_news .grid_info {
    margin: 0;
    color: #737059;
}
max-height: 55px;
.layout_grid_news .grid_info p {
    margin: 0;
    color: #737059;
}

.layout_grid_news .grid_cover img {
    width: 100%;
    filter: saturate(0.3);
    transition: 0.3s;
}

.layout_grid_news .grid_cover {
    max-height: 400px;
    overflow: hidden;
}

a {
    color: black;
}

a:hover .grid_cover img {
    filter: saturate(1);
}

p {
    text-align: right;
    padding-right: 1rem;
}
</style>
