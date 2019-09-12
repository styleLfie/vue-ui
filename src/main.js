import Vue from 'vue';
import App from './App.vue';
// 主入口文件 src 别名 @
import '@/assets/theme-chalk/display.scss';
// import '@/assets/theme-chalk/col.scss';
// import '@/assets/theme-chalk/row.scss';  这两个在 index.scss
import '@/assets/theme-chalk/index.scss';
 
// import Row from "@element/row";
// import Col from "@element/col"; 这样写还是比较麻烦， 可以在再使用一个index.js文件
// Vue.use(Row);
// Vue.use(Col);

// 方法一 export  default 导出
// import element from "@element";
// Vue.use(element);
// 方法2：对象， 使用export 导出
import {Row, Col} from '@element';
Vue.use(Row);
Vue.use(Col);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
