<template>
    <div>
        <div class="home-recommend">
            <div class="home-con">
                <img src="//gw.alicdn.com/bao/uploaded/i1/123587071/O1CN01rW1OsA226ZAFDtXRl_!!123587071.jpg_500x500q90.jpg_.webp"/>
                <div>十点抢券</div>
            </div>
            <div class="home-con">
                <img src="//gw.alicdn.com/bao/uploaded/i2/2206824535701/O1CN019smLu61rz6YjxfGQY_!!0-item_pic.jpg_500x500q90.jpg_.webp"/>
                <div>好物特卖</div>
            </div>
            <div class="home-con">
                <img src="//gw.alicdn.com/bao/uploaded/i1/3316296853/O1CN011XMEos20UinxEvY9w_!!0-item_pic.jpg_500x500q90.jpg_.webp"/>
                <div>内部福利</div>
            </div>
            <div class="home-con">
                <img src="//gw.alicdn.com/bao/uploaded/i1/420743932/O1CN016lp2tp1eutrpj1wz3_!!420743932.jpg_500x500q90.jpg_.webp"/>
                <div>春秋上新</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeRecommend',
    components:{

    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.home-recommend {
display: flex;
width: 100%;
padding:10px 0px 16px;
border-bottom: 8px solid #eee;

}
.home-con {
flex: 1;
text-align: center;
}
.home-con img {
    width: 95px;
    height: 95px;
}
</style>