// 入口js
import Vue from 'vue';
// 添加mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 添加mui样式
import '../lib/mui-master/dist/css/mui.css';
// 导入根组件/路由
import App from './app.vue';
// 路由相关配置
Vue.use(VueRouter);
import routes from './routes.js';
const router = new VueRouter({
    routes
});

import VueRouter from 'vue-router';

const vm = new Vue({
    el:'.vm',
    router,
    render:c => c(App)
})