<template>
    <div class="appContent">
        <!-- 顶部区域 -->
        <mt-header fixed title="吃啥啥香-看啥啥好-买就对了"></mt-header>
        <!-- 中间路由router-view区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部tabber区域 -->
        <nav class="mui-bar mui-bar-tab">
            <!-- <a class="mui-tab-item mui-active" href="#tabbar"> -->
            <router-link class="mui-tab-item" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <!-- </a> -->
            <!-- <a class="mui-tab-item" href="#tabbar-with-chat"> -->
            <router-link class="mui-tab-item" to="/vip">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <!-- </a> -->
            <!-- <a class="mui-tab-item" href="#tabbar-with-contact"> -->
            <router-link class="mui-tab-item" to="/gou">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <!-- </a> --><!-- 
            <a class="mui-tab-item" href="#tabbar-with-map"> -->
            <router-link class="mui-tab-item" to="/me">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
            <!-- </a> -->
        </nav>
    </div>
</template>

<script>
    
</script>

<style>
    *{
        margin:0;
        padding: 0;
    }
    body{
        background-color: #fff;
    }
    li{
        list-style: none;
    }
    .appContent{
        padding: 40px 0 52px 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    main{
        overflow: hidden;
    }
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item::nth-child(1){
        background-color: red;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all .5s ease;
    }
</style>