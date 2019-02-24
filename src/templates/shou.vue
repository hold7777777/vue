<template>
    <main>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbo" :key="item.id"><img :src="item.img"></mt-swipe-item>
        </mt-swipe>
        <ul class="liugong">
         <li><router-link to="/index/news"><img src="../images/menu1.png" > <p>新闻资讯</p></router-link> </li>
         <li><router-link to="/"><img src="../images/menu2.png" > <p>图片分享</p></router-link> </li>
         <li><router-link to="/"><img src="../images/menu3.png" > <p>商品购买</p></router-link> </li>
         <li><router-link to="/"><img src="../images/menu4.png" > <p>留言反馈</p></router-link> </li>
         <li><router-link to="/"><img src="../images/menu5.png" > <p>视频专区</p></router-link> </li>
         <li><router-link to="/"><img src="../images/menu6.png" > <p>联系我们</p></router-link> </li>
        </ul>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                lunbo:null
            }
        },
        methods:{
            getLunbo(){
                this.$http.get('api/getlunbo').then(res=>{
                    if(status){
                        return
                    }
                    this.lunbo = res.body.message
                })
            }
        },
        created(){
            this.getLunbo()
        }
    }
</script>

<style scoped>
    .mint-swipe-item>img{
        width: 100%;
        height: 100%;
    }
    .liugong{
        padding-left: 0;
        margin: 0;
        width: 100%;
        text-align: center;
        background-color: #fff;
    }
    .liugong>li{
        display: inline-block;
        padding: 5%;
        width: 30%;
        box-sizing: border-box;
    }
    .liugong img{
        width: 100%;
        height: 100%;
        display: block;
        margin-bottom: 10px;
    }
</style>