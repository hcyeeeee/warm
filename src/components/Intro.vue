<template>
    <div id="intro" class="layout">
        <h1>兵役延長yes or no？</h1>
        <div class="layout_grid" v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            content: `
            <p>
            近日身處在疫情延燒、俄烏戰爭未見停歇、通膨風暴席捲全球的生活中，是否令你感到焦慮不安？或是高壓忙碌的工作，讓你感覺身心俱疲？
            </p>
            <p>
雖然日常生活裡，我們偶爾會低潮、憂鬱，但別忘了這個世界還是有很多好事發生！民視新聞網替大家精選療癒、正向暖新聞，希望為世界帶來一點正能量，鼓舞每個人帶著溫暖的心，繼續向前行。
            </p>`,
        }
    },
}
</script>

<style scoped>

h1 {
    opacity: 0;
    position: absolute;
}

.layout_grid {
    width: 700px;
}

@media screen and (max-width: 768px) {
    .layout_grid {
        width: 100%;
        box-sizing: border-box;
    }
}

/*style in plugins */
.layout p {
    text-align: right;
}
</style>
