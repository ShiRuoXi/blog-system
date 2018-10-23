<template>
  <div id="all_user" style="height: 42rem;">
    <el-row>
      <el-col :span="24" :xs="24">
        <div class="grid-content bg-purple-dark pin_view_layer" v-show="showstate">
          <div class="close-layer">
            <i class="el-icon-close" @click="showstate=false"></i>
          </div>
          <el-row>
            <el-col :span="20" :xs="24">
              <div class="grid-content bg-purple main-part">
                <div class="image-piece">
                  <div class="image_title">{{titlebar}}</div>
                  <img :src="showimg"></img>
                  <div class="image_navigation">
                    <i class="el-icon-arrow-left"></i>
                    <i class="el-icon-arrow-right let" ></i>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="4" :xs="24" >
              <div class="grid-content bg-purple-light">
                <div class="pin-view">
                  <p>未开发区域...</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- <div class="main-part">
         
         
        </div> -->
        </div>
      </el-col>
    </el-row>
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData" @click="clickFn">
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
        fetchImgsArr: [], //存放每次滚动时下一批要加载的图片的数组 
        // showimg: "/static/img/1.84c6b56.jpg"
        showimg: "/static/img/2.9cdbf0b.jpg",
        showstate: false,
        titlebar: ''
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
      }　,
      clickFn(event, {
        index,
        value
      }) {
        // 阻止a标签跳转
        event.preventDefault()
        // 只有当点击到图片时才进行操作
        if (event.target.tagName.toLowerCase() == 'img') {
          console.log(value.src);
          this.showimg = value.src;
          this.showstate = true;
          this.titlebar = value.info;
        }
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
  @import url("../../static/css/picture.css");
</style>
