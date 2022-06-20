<template>
    <div class="layout">
        <Transition name="fade">
            <div v-show="scrollY > 100">
                <!-- @=v-on: -->

                <img src="../assets/chevron-up-solid.svg" @click="scrollTop" class="up" alt="" />
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: 0,
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },

    created() {
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY
        })
    },
}
</script>

<style scoped>
.up {
    position: fixed;
    right: 1rem;
    bottom: 3rem;
    border-radius: 100%;
    padding: 8px 10px;
    background-color: transparent;
    /* box-shadow: 1px 2px 3px black; */
    border: 3px solid rgb(8, 8, 8);
    z-index: 99999;
    cursor: pointer;
    width: 50px;
    opacity: 0.4;
}

.up:hover {
    opacity: 0.7;
}

@media screen and (max-width: 1024px) {
    .up {
        position: fixed;
        right: 0.2rem;
        bottom: 2.3rem;
        border-radius: 100%;
        padding: 11px 12px;
        background-color: transparent;
        /* box-shadow: 1px 2px 3px black; */
        border: 2px solid rgb(8, 8, 8);
        z-index: 99999;
        cursor: pointer;
        width: 45px;
        opacity: 0.7;
    }

    .up:hover {
        opacity: 1;
    }
}
.fade-leave-to {
    opacity: 0;
}
</style>
