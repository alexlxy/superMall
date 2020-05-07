<template>
    <div class="tab-control">
        <div class="tab-controlItem" 
        @click="controlItem(index)"
        :class="{active: index === currentIndex}"
        v-for="(item,index) in titles" 
        :key="index">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabControl',
    components:{

    },
    props:{
        titles:{
            type: Array,
            default(){
                return[]
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods:{
        controlItem(index){
            this.currentIndex = index
        }
    }
}
</script>
<style scoped>
.tab-control {
    display: flex;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #ffffff;
   
   
}
.tab-controlItem {
    flex: 1;
}
.tab-controlItem span {
    padding: 5px;
}
.active {
    color: pink;
}
.active span {
    border-bottom: 3px solid pink;
}
</style>