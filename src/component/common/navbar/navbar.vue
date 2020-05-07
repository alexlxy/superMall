<template>
    <div class="navbar">
        <div class="left"><slot name="nav-left"></slot></div>
        <div class="con"><slot name="nav-con"></slot></div>
        <div class="right"><slot name="nav-right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'navbar',
    components:{

    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.navbar {
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 49px;
    display: flex;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}
.navbar .left , .right {
    width: 60px;
    height: 49px;
    
}
.navbar .con {
    flex: 1;
    height: 49px;
    line-height: 49px;
    text-align: center;
    
}
</style>