<template>
    <div>
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
    </div>
</template>


<script>
import mainTabBar from '../component/content/mainTabbar.vue'
export default {
    name:'index',
    components:{
        mainTabBar,
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>

</style>