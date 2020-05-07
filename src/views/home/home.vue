<template>
    <div>
        <nav-bar class="home-top">
            <h2 slot="nav-con">美丽购</h2>
        </nav-bar>
        <swiper ></swiper>
        <home-Recommend></home-Recommend>
        <tab-control 
        class="tab-control" 
        :titles="['流行','新款','精选']" >
        </tab-control>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
    </div>
</template>

<script>
import navBar from '@/component/common/navbar/navbar.vue'
import swiper from '@/component/common/swiper/swiper.vue'


import homeRecommend from './childcomps/homeRecommend.vue'

import tabControl from '../../component/content/tabControl/tabControl.vue'

import {getHomeMultidata} from '../../network/home.js'

export default {
    name:'home',
    components:{
        navBar,
        swiper,
        homeRecommend,
        tabControl
    },
    data() {
        return {
            banners:[],
            recommends:[]
        }
    },
    created() {
        //1.请求多个数据
        getHomeMultidata().then(res => {
            console.log(res);
            
        })
    }
}
</script>

<style scoped>
.home-top {
    color: #ffffff;
    background-color: pink;
}
.tab-control {
    position: sticky;
    top:49px;
}
</style>