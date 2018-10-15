
<template>
  <el-container> 
    <el-main class="el-main">    
      <div class="backgroundCode backgroundCode_a list_layout  slideshow ">    
     <HomePage></HomePage>
      </div>
      <div class="backgroundCode backgroundCode_b list_layout">
        <HomeArticle class=""></HomeArticle>
      </div>
      <div class="backgroundCode backgroundCode_a list_layout " style="height:100%;">
        <PictureAdaptation></PictureAdaptation>
      </div>
       <div class="backgroundCode backgroundCode_b list_layout">
        <TrillianAstra></TrillianAstra>
      </div>
    </el-main>
    <el-footer style="padding-top:1rem">京ICP证030173号</el-footer>
  </el-container>
</template>
<script>
 
  import HomeArticle from '../components/HomeArticle';
  import PictureAdaptation from '../components/PictureAdaptation';
  import HomePage from '../components/HomePage';
  import TrillianAstra from '../components/TrillianAstra';
  export default {
    components: {    
      HomeArticle,
      PictureAdaptation,
      HomePage,
      TrillianAstra
    }
  }
</script>
<style scoped>
  @import url("../../static/css/index.css");
  
</style>

