<template>
    <div class="tabbar">
            <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabBar',
    components:{

    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.tabbar {
    display: flex;
    width: 100%;
    height: 10vh;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: silver;
}
/* .tabbar-footer {
    flex: 1;
} */

</style>