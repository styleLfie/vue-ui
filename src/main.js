import Vue from 'vue';
import App from './App.vue';
// 主入口文件 src 别名 @
import '@/assets/theme-chalk/display.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
