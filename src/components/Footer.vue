<template>
    <div class="layout">
        <div class="layout_grid">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: `Copyright © 2022 民視新聞網路部 社群中心`,
        }
    },
}
</script>

<style scoped>
.layout {
    margin-top: -14px;
    padding: 1.5rem;
    color: black;
    background-color: var(--footer_background);
}
.layout_grid {
    grid-template-columns: 1fr;
    padding: 0rem;
}

p {
    text-align: center;
}

img {
    position: relative;
    top: -2px;
    right: 8px;
}

@media screen and (max-width: 768px) {
    img {
        display: none;
    }
    p {
        font-size: 15px;
    }
}
</style>
