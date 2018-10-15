<template class="backgroundCode">
  <el-row>
    <el-col :span="12" :xs="24">
      <div class="grid-content bg-purple" style="width: 100%;">
        <el-col :span="24" :xs="24"> <img src="../assets/1.jpg.png" class="assets_img"></el-col>
        <el-col :span="24" :xs="24">
          <div class="texe-style">
            <p>为人诚恳，吃苦耐劳，乐观积极，适应能力强；具有较好的组织领导能力；认识问题有超出年龄阶段的深度，注重团队的学习和进步；善于与人相处，交际口才较好，具有有效的交际能力并保持良好的人际关系；生活阅历较浅，希望在实践中不断完善自我，提高自身素养。</p>
          </div>
        </el-col>
      </div>
    </el-col> 
  </el-row>
</template>
<script>
  export default {
    name: "HomeContent"
  }
</script>
<style scoped>
  .texe-style {
    padding: 2rem 5rem;
  }
  .assets_img {
    margin: 0 auto;
    display: block;
    border-radius: 1rem;
    width: 16rem;
    margin-top: 4rem;
    -webkit-transform: rotate(360deg);
    animation: rotation 30s linear infinite;
    -moz-animation: rotation 30s linear infinite;
    -webkit-animation: rotation 30s linear infinite;
    -o-animation: rotation 30s linear infinite;
  }
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @media (max-width: 500px) {
    .assets_img[data-v-45a4cf9a] {
      margin: 0;
      width: 12rem;
      margin: auto;
      padding: 2rem;
    }
    .texe-style {
      padding: 1rem;
      
    }
  }
</style>
