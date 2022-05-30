<template>
    <div class="layout">
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
                test
            </p>
            <p>
                不過延長兵役、增加役男人數，就能夠強化國防安全嗎？面對現代化戰爭，武器越來越複雜，台灣應該採取怎樣的戰略？
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
