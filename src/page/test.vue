<template>
  <el-main>
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="page">
          <div v-show="item==0" style=" height: 100hv">
           123456789
          </div>
           <div v-show="item==1"  style=" height: 100hv">
           9874621
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </el-main>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        list: [], //轮换列表
        index: "",
        swiperOption: {
          notNextTick: true,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true,
          slidesPerView: 1,
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值fals
          mousewheelControl: true, //同上
          height: window.innerHeight, // 高度设置，占满设备高度     
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新         
        }
      }
    },
    created() {
      this.list = [0, 1, 2, 3];
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style scoped>

.el-main{margin: 0;padding: 0;overflow: hidden;}
  .swiper-slide:nth-child(2n) {
    background: #fff;
  }
  .swiper-slide:nth-child(2n-1) {
    background: #f5f5f5;
  }
  @media (max-width: 500px) {
    .swiper-slide {
      height: 10rem !important;
    }
    .swiper-slide:nth-child(2n-1) {
      background: #fff;
    }
  }
</style>
