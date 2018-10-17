
           
<template>
  <div id="all_user" style="height: 42rem;">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData">
      <div slot="waterfall-head" class="watergall"></div>
      <template slot-scope="props">
                    <div class="player_info">
                         <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>
                        <div class="ticket">
                        2018/10/17
                        </div>               
                      </div>
</template>
       <div slot="waterfall-over">waterfall-over</div>
    </vue-waterfall-easy>

    <!-- <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData"></vueWaterfallEasy>  -->
    
    <div style="">
    </div  height: 1rem;width: 2rem;>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    name: 'app',
    components: {
      vueWaterfallEasy
    },
    data() {
      return {
        imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
        fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
      }
    },
    　methods: {　　　 // 获取图片
      initImgsArr(n, m) {
        var arr = [];
        for (var i = n; i < m; i++) {
          // src 为加载的图片的地址、link为超链接的链接地址
          // info 为自定义的图片展示信息，请根据自己的情况自行填写
          arr.push({
            src: require(`../assets/img/${i + 1}.jpg`),
            link: "",
            info: "这是一张风景照"
          });
        }
        return arr;
      },
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr);
      }　
    },
    　created() {　　　 //初始化第一次（即页面加载完毕时）要加载的图片数据
      this.imgsArr = this.initImgsArr(0, 13);
      // 模拟每次请求的下一批新的图片的数据  　　
      this.fetchImgsArr = this.initImgsArr(5, 10);　
    }
  }
</script>
<style scoped>
  .player_info {
    border-top: 1px solid #F2F2F2;
    padding: 0.5rem;
    color: #9E7E6B;
  }
  .player_info:hover,
  .player_info:link {
    text-decoration: none !important;
  }
  .watergall
  {
    width: 100%;
    padding: 1rem;
  }
</style>
