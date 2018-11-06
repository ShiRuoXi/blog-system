<template>
  <div class="layout_f">
    <el-row class="_padding">
      <el-col :span="6" :xs="10"> <img class="_img" src="../assets/w.jpg">
      </el-col>
      <el-col :span="16" :xs="14" style="text-align:left;">
        <h1 style="padding-left:1rem;font-size:1rem;">万水千山总是情</h1>
        <div class="exhibition">
          <div class="haun">换</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        articleDetail:null
      }
    },
    mounted:function(){
      this.fetchData()
    },
    methods:{
      fetchData(){
        var articleId = this.$route.query.id
         this.$axios.post('/SRXBlogService/ArticleController/getArticleById',this.$qs.stringify({id:articleId}))
        .then(res =>{
          debugger
          this.articleDetail = res.data
          console.log(this.article_list)
        })
        .catch(function(res){
          console.log(res.data)
        })
      }
    }
  }
</script>
<style scoped>
  @import url("../../static/css/notes.css");
</style>