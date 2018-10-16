<template>
  <div id="all_user">
    <div class="search_box">
      <input type="text" placeholder="请输入编号或名称"><button><i class="tt tt-quanburen"></i>搜索</button>
    </div>
    <vueWaterfallEasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
    </vueWaterfallEasy>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    data() {
      return {
        imgsArr: [],
        fetchImgsArr: []
      }
    },
    components: {
      vueWaterfallEasy
    },
    methods: {
      // 假数据
      initImgsArr(n, m) { //num 图片数量      
        var arr = []
        for (var i = n; i < m; i++) {
          console.log(n, m);
          arr.push({
            id: i,
            src: require("../assets/img/" + (i + 1) + ".png"),
            link: 'https://www.baidu.com',
            info: '这是一张片'
          })
        }
        return arr
      },
      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      }
    },
    created() {
      this.imgsArr = this.initImgsArr(0, 3)
      this.fetchImgsArr = this.initImgsArr(3, 6) // 模拟每次请求的新的图片的数据数据
    },
  }
</script>