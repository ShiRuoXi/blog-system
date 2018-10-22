<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <button @click="isCollapse=!isCollapse" class="but_isCollapse">菜单</button>
          <el-submenu index="1">
            <template slot="title">
                             <i class="el-icon-location"></i>
                             <span slot="title">导航一</span>
</template>
    <el-menu-item-group class="side">
     <el-menu-item index="1-1">JavaScript指南</el-menu-item>
       <el-menu-item index="1-1">JavaScript指南</el-menu-item>
        <el-menu-item index="1-1">JavaScript指南</el-menu-item>
         <el-menu-item index="1-1">JavaScript指南</el-menu-item>
          <el-menu-item index="1-1">JavaScript指南</el-menu-item>
           <el-menu-item index="1-1">JavaScript指南</el-menu-item>
            <el-menu-item index="1-1">JavaScript指南</el-menu-item>
             <el-menu-item index="1-1">JavaScript指南</el-menu-item>
              <el-menu-item index="1-1">JavaScript指南</el-menu-item>
               <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                 <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                  <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                   <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                    <el-menu-item index="1-1">JavaScript指南</el-menu-item>
                     <el-menu-item index="1-1">JavaScript指南</el-menu-item> 
                     <el-menu-item index="1-1">JavaScript指南</el-menu-item>
    </el-menu-item-group>   
  </el-submenu>
   <el-submenu index="2">
<template slot="title">
  <i class="el-icon-location"></i>
  <span slot="title">导航二</span>
</template>
    <el-menu-item-group>
     <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>   
  </el-submenu>
  
</el-menu>
      </el-col>
      <el-col :span="12" :xs="18" class="buju_e">
        <div class="grid-content bg-purple-light">
        <h3 class="biaoti">npm 安装</h3>  
        <div class="wenzhang">
  <p>
    推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
  </p>
  <pre class="hljs">
  npm i element-ui -S
¶ CDN
</pre>
<p>目前可以通过 unpkg.com/element-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
  我们提供了通用的项目模板，你可以直接使用。对于 Laravel 用户，我们也准备了相应的模板，同样可以直接下载使用。
如果不希望使用我们提供的模板，请继续阅读
</p>
<div class="tip">
  注意：这里是必须仔细阅读
  </div>
        </div>

<div class="liuyanban_a">
    <!-- <div class="libyan_title">活捉4条留言</div> -->
    <!-- <div class="liuyan_content">
      <ul>
        <li>
           <span>张小王</span>
          <span>2018/10/18</span>
           <p>额,(⊙﹏⊙)   怎么感觉页面都是静态的。</p>
        </li>
        <li>
            <span>风中摇曳的水仙花</span>
          <span>2018/9/24</span>
           <p>过来看一眼,加油。</p>
        </li>
      </ul>
      <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
    </div> -->
  </div>

        </div>


      </el-col>
    </el-row>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  @import url("../../static/css/desultory.css");
</style>
