import Vue from 'vue'
import App from './App.vue'
import './styles/global.css'; // 全局样式
import router from './router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
