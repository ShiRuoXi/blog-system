<template>
  <el-row :gutter="15">
    <el-col :span="7" :xs="24">
      <div class="grid-content bg-purple best_layout " id="showImg">
        <!-- <h4>一周美图</h4> -->
        <img id="bestPictures" src="../assets/4.jpg" class="bestPictures" style=" width: 72%; padding: 3rem;" >
        <div id="comment">
          <div class="best_texe">满满的绿色,一大片一大片,都是欢喜的颜色,绿得和阶梯一样,如果可以躺着,那是不是可以睡个安稳.</div>
          <div class="like"><img @click="like=!like;count=like?count+1:count-1" :src="like?img2:img1"><span>{{count}}</span></div>
        </div>
      </div>
    </el-col>
    <el-col :span="17" :xs="24">
      <div class="grid-content bg-purple-light">
        <div class="best_layout bestPictures sty_con" style="margin-top:0rem;">
          <p class="sty_con_p">{{name}}</p>
          <div style="text-align: right;padding-top:1rem;">______ 《万水千山总是情》 三毛</div>
        </div>
        <div class="best_layout bestPictures sty_con">
          <p class="sty_con_p">{{name}}</p>
          <div style="text-align: right;padding-top:1rem;">______ 《万水千山总是情》 三毛</div>
        </div>
        <div class="best_layout bestPictures sty_con">
          <p class="sty_con_p">{{name}}</p>
          <div style="text-align: right;padding-top:1rem;">______ 《万水千山总是情》 三毛</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import imgSrc1 from "../assets/criticism.png";
  import imgSrc2 from "../assets/praise.png";
  export default {
    name: 'PictureAdaptation',
    data() {
      return {
        like: false,
        img1: imgSrc1,
        img2: imgSrc2,
        count: 250,
        state: false,
        name: "多少年离家，这明日又天涯的一刹那间的感触和疼痛，要控制起来仍是相当的困难，好在也只有那么短短的一刹那，不然这世上大半的人会是什么情形，真是只有天知道了。世上的事情，真要看它个透彻，倒也没有意思，能哭，总是好事情",
      }
    }
  }
</script>

<style scoped>
  @import url("../../static/css/PictureAdaptation");
</style>

