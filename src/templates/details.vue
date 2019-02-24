<template>
    <main>
        <div class="header">
            <p>{{ det.title }}</p>
            <p class='mui-ellipsis'>
                <span>发表时间:{{ det.add_time | data}}</span>
                <span>点击:{{ det.click }}次</span>
            </p>
        </div>
        <div class="content" v-html="det.content">
        </div>
        <ping></ping>
    </main>
</template>

<script>
    export default{
        data(){
            return {
                det:{}
            }
        },
        methods:{
            getDetail(){
                var id = location.hash.split('/')[location.hash.split('/').length-1]
                this.$http.get('api/getnew/'+id).then(res=>{
                    if(status){
                        return
                    }
                    this.det = res.body.message[0]
                })
            }
        },
        created(){
            this.getDetail()
        }
    }
</script>

<style scoped lang="less">
     .mui-ellipsis{
        display: flex;
        justify-content:space-between;
        color:skyblue;
    }
    .header{
        text-align: center;
        padding-top:10px;
        border-bottom: 1px solid #ccc;
        >p:nth-child(1){
            color:red;
            font-size:16px;
            font-weight: 700;
        }
    }
    .content{
        width:100%;
        >img{width:100%;}
    }
</style>