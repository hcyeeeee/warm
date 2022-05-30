<template>
    <div class="layout">
        <Transition name="fade">
            <div v-show="scrollY > 100">
                <!-- @=v-on: -->
                <i @click="scrollTop" class="fad fa-2x fa-angle-up"></i>
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
.fa-angle-up {
    position: fixed;
    right: 1rem;
    bottom: 5rem;
    border-radius: 80%;
    padding: 10px;
    background-color: transparent;
    color: black;
    box-shadow: 1px 2px 3px black;
    z-index: 99999;
    cursor: pointer;
    font-size: 40px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
