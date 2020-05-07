<template>
    <div class="block">
        <el-carousel height="150px">
            <el-carousel-item v-for="(item,index) in list" :key="index">
                    <!-- <h3 class="small">{{ item }}</h3> -->
                    <img :src="item.src" alt="">
                </el-carousel-item>
        </el-carousel>
  </div>
</template>
<script>
export default {
    name:'swiper',
    components:{

    },
    data() {
        return {
            list: [
                {
                    src: 'http://www.meinvtu.net/uploads/image/20200418/20200418094506_16429.jpg',
                },
                {
                    src: 'http://www.meinvtu.net/uploads/image/20200418/20200418094506_16429.jpg',
                },
                {
                    src: 'http://www.meinvtu.net/uploads/image/20200418/20200418094506_16429.jpg',
                },

            ]
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