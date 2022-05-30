<template>
    <div class="layout_addition">
        <div class="layout_bottom">
            <div>
                <a v-for="(title, index) of titles" :key="index" :href="title.link">{{ title.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [
               
                {
                    name: `暖心故事`,
                    link: `#part_news1`,
                },
                {
                    name: `齊心抗疫`,
                    link: `#part_news2`,
                },
                {
                    name: `勵志人物`,
                    link: `#part_news3`,
                },
                 {
                    name: `國際新聞`,
                    link: `#part_news4`,
                },
                {
                    name: `療癒毛孩`,
                    link: `#part_news5`,
                },
                {
                    name: `精選影音`,
                    link: `#part_news6`,
                },
            ],
        }
    },
}
</script>

<style>


/* @media screen and (max-width: 1024px) {
 .layout_bottom div {
    display: flex;
    position: fixed;
    top: 0;
    padding: 1rem 0;
    background-color:rgb(216, 226, 200);
    z-index: 999;
    width: 100%;
    height: 60px;
}
} */


.layout_bottom div {
    display: flex;
    position: fixed;
    bottom: 0;
    padding: 1rem 0;
    background-color:rgb(216, 226, 200);
    z-index: 999;
    width: 100%;
    height: 60px;
   
}
.layout_bottom a {
   display: flex;
    margin: auto;
    text-align: center;
    color: var(--main_color);
    
}

/* .layout_bottom a:nth-child(1),
.layout_bottom a:nth-child(2) {
    border-right: 1px solid var(--main_color);
    margin-bottom: 50px;
} */
</style>
