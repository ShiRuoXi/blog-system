<template>
  <div class="layout_f">
    <el-row >
      <el-col :span="16" :xs="24">
        <div class="grid-content bg-purple">
          <ul>
            <li>
              <el-row v-for="article in article_list">
                <el-col :span="10" :xs="24">
                  <router-link to="/list">
                    <img class="_img" src="../assets/2.jpg">
                  </router-link>
                </el-col>
                <el-col :span="14" :xs="24" class="ys_a">
                  <div class="src_a">
                    <router-link :to="{path:'/list',query:{id:article.id}}">
                      <h3>{{article.articleTitle}} <span>{{article.author}}</span></h3>
                    </router-link>
                    <p>{{article.articleContentShort}}</p>
                    <div class="zs_l">
                      {{article.createDate}}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="6" class="display_">
        <div class="grid-content bg-purple-light">
          <ul class="cd_sy">
            <li>经典</li>
            <li>插花</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "notes",
    data(){
      return{
        article_list:null
      }
    },
    mounted:function(){
      this.getList();
    },
    methods: {
      getList(){
        this.$axios.post('/SRXBlogService/ArticleController/getArticlePages',this.$qs.stringify({pageNum:1,pageSize:10}))
        .then(res =>{
          debugger
          this.article_list = res.data
          console.log(this.article_list)
        })
        .catch(function(res){
          console.log(res.data)
        })
      }
    }
  };
</script>
<style scoped>
  @import url("../../static/css/notes.css");
</style>
