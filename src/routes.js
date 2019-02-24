// 导入单文件模板

import index from './templates/shou.vue';
import vip from './templates/vip.vue';
import gou from './templates/car.vue';
import me from './templates/myself.vue';
import news from './templates/news.vue';
import details from './templates/details.vue'

// 到处/暴露出 roudes
export default[
 {path:'/',redirect:'/index'},
 {path:'/index',component:index},
 {path:'/vip',component:vip},
 {path:'/gou',component:gou},
 {path:'/me',component:me},
 {path:'/index/news',component:news},
 {path:'/index/details/:id',component:details}
];