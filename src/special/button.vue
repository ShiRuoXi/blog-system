<template>
  <el-main>
    <div style="margin-top:5rem;">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <button class="but1">button</button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <button class="but2">button</button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <button class="butt3">button</button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <button>123456</button>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>
<script>
  export default {
    data() {}
  }
</script>

<style scoped>
  button {
    border: 1px solid #000;
    background-color: #fff;
    width: 10rem;
    height: 3rem;
    letter-spacing: 2px
  }
  /* but1 样式 */
  .but1 {
    position: relative;
    /* 不隐藏 面积会很大 */
    overflow: hidden;
  }
  .but1:after {
    /* 在每个实例连接后加入 内容 */
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    /* background-repeat: no-repeat;
            background-position: 50%; */
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
  }
  .but1:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  /* but2 样式 */
  .but2 {
    position: relative;
  }
  .but2:focus {
    outline: none;
  }
  .but2:after {
    content: "";
    display: block;
    position: absolute;
    /* 扩大伪类元素4个方向各10px */
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
  }
  .but2:active:after {
    opacity: .3;
    /* 设置初始状态 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
  }
  /* but3 样式 */
  .but3 {
    position: relative;
  }
  .but3:active {
   margin-top:1rem;
  }
</style>
