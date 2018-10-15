
<template>
  <el-row style="height:6rem;">
    <el-col :span="8" :lg="8" :xs="12">
      <div class="grid-content bg-purple">
        <img src="../../src/assets/logo.png">
      </div>
    </el-col>
    <el-col :span="10" :lg="10" :xs="12">
      <div class="menu_a" v-html="name?'菜单':''" v-on:click="name=!name"></div>
      <div class="grid-content bg-purple-light menu_b">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><a href="/" target="_blank">首页</a></el-menu-item>
          <el-menu-item index="2"><a href="/" target="_blank">随笔</a></el-menu-item>
          <el-menu-item index="3">读书杂记</el-menu-item>
          <el-menu-item index="4">
            <router-link to="/info">
              <a class="btn btn-default" target="_blank">个人</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5"><a href="./index" target="_blank">美食</a></el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <div class="menu_c" v-if="!name" :xs="24">
      <div v-on:click="name=!name">
        <img src="../assets/criticism.png">
      </div>
      <div>
        <ul style="padding-top:2rem;">
          <li>首页</li>
          <li>随笔</li>
          <li>留言</li>
          <li>心情</li>
        </ul>
      </div>
    </div>
    <el-col :span="4" :lg="4" :xs="24">
      <div class="grid-content bg-purple">
        <div style="height:3.5rem;" class="menu_b">
          <i class="el-icon-search"></i>
          <input class="input_search">
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "mymenu",
    data() {
      return {
        name: true,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  img {
    height: 2.5rem;
    margin-top: 1rem;
  }
  .input_search {
    border: none;
    padding-left: 2rem;
    border-bottom: 1px solid #ccc;
    height: 2rem;
    line-height: 2rem;
    outline: none;
    position: relative;
    top: -1.2rem;
    margin-top: 2rem;
  }
  i {
    position: relative;
    left: 1.5rem;
    font-size: 1rem;
    top: -1.2rem;
    color: #ccc;
    z-index: 999;
  }
  .el-menu--horizontal {
    border: none;
  }
  .menu_a,
  .menu_c {
    display: none;
  }
  .menu_c {
    background-color: #b5acacf0;
    -webkit-tap-highlight-color: #b5acacf0;
  }
  .menu_c li {
    list-style: none;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    letter-spacing: 1rem;
  }
  .menu_c li :hover {
    background-color: #efe4fc;
  }
  @media (max-width: 500px) {
    .menu_a {
      display: block;
      width: 3rem;
      line-height: 5rem;
      font-size: 1rem;
      text-decoration-style: none !important;
    }
    .menu_b {
      display: none;
    }
    .menu_c {
      display: block;
      position: fixed;
      z-index: 999;
      /* top: 5rem; */
      padding-top: 3rem;
      height: 100vh;
      width: 100%;
      color: #fff;
    }
  }
</style>


