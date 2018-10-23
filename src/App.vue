<template>
  <div id="app">
    <el-header class="menu_home">
      <mymenu></mymenu>
    </el-header>
    <router-view/>
    <div class="backtop" id="backtop" v-on:click="backHead()">
      <i class="fa"></i>
    </div>
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
        <!-- <p>子欲养而亲不待.有空多回家看看。</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  import mymenu from "../src/components/mymenu";
  import $ from 'jquery'
  export default {
    name: 'App',
    components: {
      mymenu
    },
    mounted() {
      window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
          document.getElementById("backtop").style.top = "-270px"; //下垂的高度
        } else {
          document.getElementById("backtop").style.top = "-900px"; //上拉的高度
        }
      })
    },
    methods: {
      backHead: function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        $('html,body').animate({
          scrollTop: 0
        }, 300)
      }
    }
  }
</script>

<style>
  @import '../static/css/empty.css';
  .menu_home {
    height: 5rem !important;
    /* line-height: 6rem; */
    padding: 0px !important;
    border-bottom: 1px solid rgb(238, 235, 235);
    background-color: transparent;
  }
  .active {
    top: -270px !important;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    padding: 0;
    margin: 0;
  }
  .count_down {
    display: none;
    background-color: #a4a4a4;
    position: absolute;
    height: 4rem;
    border: 1px solid#e8e4e4;
    padding: 1rem;
    right: 1rem;
    top: 0rem;
    z-index: 999;
    color: #fff;
    width: 22.9375rem;
  }
  .Holiday_tips {
    display: inline-block!important;
  }
  .Holiday_style {
    border-right: 1px solid #ccc;
    width: 7rem;
    height: 4rem;
  }
  .Holiday_info {
    padding: 0rem 1rem;
    border-right: 1px solid #ccc;
    height: 4rem;
    line-height: 4rem;
    vertical-align: top;
  }
  .Holiday_tips li a {
    text-decoration: none;
    padding-left: 1rem;
    color: #c1c9d6;
  }
  .Holiday_tips li a:hover {
    color: #fff;
  }
  .backtop {
    cursor: pointer;
    position: fixed;
    right: 50px;
    top: -900px;
    z-index: 888;
    width: 70px;
    height: 900px;
    background: url("../src/assets/ll.png");
    transition: all .5s ease-in-out;
    opacity: 1;
  }
  .fa {
    font-family: FontAwesome!important;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }
  .calendar_lon {
    position: absolute;
    z-index: 999;
    top: 27rem;
    right: 1rem;
  }
  .calendar {
    width: 1rem;
    height: 6rem;
    line-height: 3rem;
    background-color: #ccc;
    color: #fff;
  }
  .calendar_lon:hover {
    background-color: #a4a4a4;
  }
  .calendar_lon:hover .count_down {
    display: block;
  }
  @media (max-width: 500px) {
    /* .menu_home{position:fixed;} */
    .backtop {
      display: none !important;
    }
    .list_layout {
      padding: 2rem!important;
    }
    .article {
      margin: 0.5rem 0!important;
    }
    .article dt {
      font-size: 0.7rem !important;
    }
    /* .menu_home{padding:0px;} */
  }
</style>
