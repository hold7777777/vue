<template>
    <div>
        <!-- 顶部区域 -->
        <mt-header fixed title="吃啥啥香-看啥啥好-买就对了"></mt-header>
        <!-- 中间路由router-view区域 -->
        <router-view></router-view>
        <!-- 底部tabber区域 -->
        <nav class="mui-bar mui-bar-tab">
            <!-- <a class="mui-tab-item mui-active" href="#tabbar"> -->
            <router-link class="mui-tab-item mui-active" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <!-- </a> -->
            <!-- <a class="mui-tab-item" href="#tabbar-with-chat"> -->
            <router-link class="mui-tab-item" to="/vip">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <!-- </a> -->
            <!-- <a class="mui-tab-item" href="#tabbar-with-contact"> -->
            <router-link class="mui-tab-item" to="/gou">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">1</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <!-- </a> --><!-- 
            <a class="mui-tab-item" href="#tabbar-with-map"> -->
            <router-link class="mui-tab-item" to="/me">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
            <!-- </a> -->
        </nav>
    </div>
</template>

<script>
    
</script>

<style>
    
</style>