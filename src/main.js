import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/fontawesome'
import App from './App.vue'
import  Slide from 'vue-burger-menu'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default {
    components: {
        Slide, // Register your component
    },
}
