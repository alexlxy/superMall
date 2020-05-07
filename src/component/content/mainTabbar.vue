<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <!-- <span class="el-icon-house"></span> -->
                <img slot="item-icon" />
                <img class="el-icon-s-home" slot="item-icon-active"/>
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="item-icon"/>
                <img slot="item-icon-active"/>
                <div slot="item-text">分类</div><img/>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img slot="item-icon"/>
                <img slot="item-icon-active"/>
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="item-icon"/>
                <img slot="item-icon-active"/>
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import tabBar from '../common/tabbar/tabBar.vue'
import tabBarItem from '../common/tabbar/tabBarItem.vue'
export default {
    name:'mainTabbar',
    components:{
        tabBar,
        tabBarItem,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>

</style>