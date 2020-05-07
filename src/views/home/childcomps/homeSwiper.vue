<template>
    <div>
        <swiper>
            <swiper-item>
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </swiper-item>
        </swiper>
        
     
    </div>
</template>
<script>
import swiper from '../../../component/common/swiper/swiper.vue'
import swiperItem from '../../../component/common/swiper/swiperItem.vue'
export default {

    name:'homeSwiper',
    components:{
        swiper,
        swiperItem
    },
    props:{
        4:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>