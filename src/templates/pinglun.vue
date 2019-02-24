<template>
    <div class="ping">
        <h3 class="pingHeader">发表评论</h3>
        <div class="pingHeaderBom"></div>
        <textarea placeholder="请输入评论内容(最多99字)"  maxlength="99" v-model="content"></textarea>
        <button @click="setPing">发表评论</button>
        <ul>
            <li v-for="(item,i) in ping" :key="i">
                <p class='mui-ellipsis'>
                    <span>第{{ i }}楼用户：{{ item.user_name }}</span> &nbsp;
                    <span>发表时间：{{ item.add_time | data }}</span>
                </p>
                <p>{{ item.content }}</p>
            </li>
        </ul>
        <button add @click="addping">加载更多</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                id:this.$route.params.id,
                pageindex:1,
                ping:'',
                content:''
            }
        },
        methods:{
            getPing(){
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res=>{
                    if(res.body.status){
                        return
                    }
                    if(!this.ping){
                        var ping = []
                    }else{
                        ping = this.ping;
                    }
                    res.body.message.some(function(e){
                        ping.push(e);
                        return !e.content.replace(' ','')
    
                    })
                    this.ping = ping
                })
            },
            setPing(){
                if(!this.content.replace(' ','')){
                    alert('评论内容不能为空')
                    return
                }
                this.$http.post('api/postcomment/'+this.id,{content:this.content}).then(res=>{
                    if(res.body.status){
                       alert('评论提交失败，请重新提交')
                    }else{
                       alert(res.body.message);
                       this.content = '';
                    }
                })
            },
            addping(){
                this.pageindex++;
                this.getPing();
            }
        },
        created(){
            this.getPing()
        }
    }
</script>

<style scoped>
    .pingHeader{
        margin-left: 10px;
    }
    .pingHeaderBom{
        border: .5px solid #ccc;
        margin-bottom: 5px;
    }
    textarea{
        height: 100px;
        margin-bottom: 0;
    }
    .ping>button{
        width: 100%;
        height: 40px;
        margin-bottom: 5px;
        background-color: #26a2ff;
        color: #fff;
    }
    .ping>button:active{
        background-color: rgb(88,88,88);
    }
    .ping>[add]{
        background-color: #fff;
        color: red;
        border-color: red;
    }
</style>