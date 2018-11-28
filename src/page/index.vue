<template>
  <el-container>
    <div class="calendar_lon">
      <div class="calendar">福袋</div>
      <div class="count_down">
        <div class="Holiday_tips Holiday_style">
          2018年09月24
          <br> 八月十五
          <br> 中秋节
        </div>
        <div class="Holiday_tips Holiday_info">距离中秋回家还有<span style="color:#d24343;font-size: 1rem;padding:4px;">55</span>天.
        </div>
        <div class="Holiday_tips">
          <ul>
            <li><a>火车票入口</a></li>
            <li><a>汽车票入口</a></li>
            <li><a>飞机票入口</a></li>
          </ul>
        </div>
      </div>
    </div>
    <el-main class="el-main">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="page">
            <HomePage v-show="item==0"></HomePage>
            <HomeArticle v-show="item==1" class="let_padding bott" style="text-align:left;"></HomeArticle>
            <PictureAdaptation v-show="item==2" class="let_padding"></PictureAdaptation>
            <TrillianAstra v-show="item==3" :msgfromfa="msgfromfa" style="padding:3rem;"></TrillianAstra> 
          </div>
        </swiper-slide>
      </swiper>
    </el-main>
  </el-container>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import HomeArticle from '../components/HomeArticle';
  import PictureAdaptation from '../components/PictureAdaptation';
  import HomePage from '../components/HomePage';
  import TrillianAstra from '../components/TrillianAstra';
  export default {
    components: {
      HomeArticle,
      PictureAdaptation,
      HomePage,
      TrillianAstra,
      swiper,
      swiperSlide
    },
    data() {
      return {
        msgfromfa: 0,//传值
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
          on: {
            //监听滑动切换事件，返回swiper对象
            slideChange: () => {
               let swiper = this.$refs.mySwiper.swiper;
               this.msgfromfa=swiper.activeIndex;
              // if (swiper.activeIndex == 3) {
              //   //  this.items.push({
              //   //  message: '你好',
              //   //    class: 'you'
              //   //  });
              //   console.log(swiper.activeIndex);
              // }
            }
            // ,
            // slideChangeTransitionEnd: function() {
            //  this.index = this.activeIndex;
            // }
          }
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
    },
    mounted() {}
  }
</script>
<style scoped>
  @import url("../../static/css/index.css");
  /* .el-main {
    overflow: hidden;
  } */
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
    .let_padding {
      padding: 1.5rem;
    }
  }
  body {
    overflow: hidden;
  }
</style>

