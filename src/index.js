// 此js是入口js
import Vue from 'vue';
// 添加mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 添加mui样式
import '../lib/mui-master/dist/css/mui.css';
import '../lib/mui-master/dist/css/icons-extra.css';
// 导入根组件/路由
import App from './app.vue';
// 导入resourec
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;
// 路由相关配置
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes.js';
const router = new VueRouter({
    routes,
    linkActiveClass:'mui-active'
});
// 导入日期格式化插件
import moment from 'moment';
// 全局过滤器
Vue.filter('data',function(data){
   return moment(data).format('YYYY-MM-D h:mm:ss')
});
// 全局共用组件
import pinglun from './templates/pinglun.vue';
Vue.component('ping',pinglun);
// 创建vue实例
const vm = new Vue({
    el:'#qqq',
    router,
    render:c => c(App),
})