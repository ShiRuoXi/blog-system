<template>
  <el-carousel indicator-position="outside" :height="imgHeight"  style="padding-top:5rem;">
    <el-carousel-item v-for="item in items" :key="item" class="carousel">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        imgHeight: "500px",
        items: [
          require("../assets/100.png"),
          require("../assets/400.png"),
          require("../assets/500.png")
        ]
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: transparent;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
  }
  @media (max-width: 500px) {
    .el-carousel {
      height: 8rem;
    }
 
  }
</style>
