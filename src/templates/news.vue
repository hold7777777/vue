<template>
    <main>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
                <router-link :to="'/index/details/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{ item.title }}
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{ item.add_time | data}}</span>
                            <span>点击:{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </main>
</template>

<script>
export default{
    data(){
        return{
            news:null
        }
    },
    methods:{
        getNews(){
            this.$http.get('api/getnewslist').then(res=>{
                if(status){
                        return
                    }
                this.news = res.body.message;
            })
        }
    },
    created(){
        this.getNews();
    }
}

</script>

<style scoped>
    .mui-ellipsis{
        display: flex;
        justify-content:space-between;
    }
</style>