<template>
    <div class="tabbar-item" @click="itemclick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tabBarItem',
    components:{

    },
    props:{
         path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    // mounted(){
    //     console.log(this.$route.path.indexOf(this.path));
    // },
    methods:{
        itemclick(){
            this.$router.push(this.path)
            // this.isActive = false
        }
    }
}
</script>

<style scoped>
.tabbar-item {
    flex: 1;
    text-align: center;
}
</style>