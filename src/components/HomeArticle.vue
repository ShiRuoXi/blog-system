<template>
  <el-row>
    <el-col :span="13" :xs="24">
      <div class="grid-content bg-purple-dark" >
        <div>
          <h4>最新文章列表</h4>
          <div class="article">
            <dl>
              <dt>PS の 技巧大全《高手奥义操作方法总结》 <span class="dt_text">2018-7-18</span></dt>
              <dd>当我们选择了裁剪工具，准备对图片进行裁剪的时候，PS小公举贴心地提供了“设置裁剪工具的叠加选项”的功能，嗯，不用理这个不够直接的官翻，它的作用其实就是在构图上为裁剪提供了参考线，主要包括三等分、网格、对角、三角形、黄金比例、金色螺线六种构图原则，选择的操作也很简单，直接右键单击然后就可以在下拉菜单中选择，或者也可以直接按键盘快捷键字母O来顺序选择，如下动图所示：
              </dd>
            </dl>
          </div>
          <div class="article">
            <dl>
              <dt>关于PS裁剪工具，不得不知的十大隐藏独门武器 <span class="dt_text">2018-7-18</span></dt>
              <dd>如今每个人都拥有多个屏幕，设计所面临的使用场景也愈发的丰富，所以很多时候面临着横图该竖图，或者竖图改横图的需求，而这在裁剪工具中，只需要通过键盘快捷键字母X，即可在保持比例的情况下改变裁剪方向，如下动图所示：
              </dd>
            </dl>
          </div>
          <div class="article">
            <dl>
              <dt>计算机 <span class="dt_text">2018-7-18</span></dt>
              <dd>在PS的默认情况下，我们进行裁剪操作时，裁剪掉的部分会以减淡的形式显示在画布上，而如果我们不需要它显示时，可以通过点击选项栏的“小齿轮”按钮来激活下拉菜单，取消勾选“显示裁剪区域”即可，或者通过按键盘快捷键字母H来切换显示或是隐藏裁剪区域，如下动图所示：
              </dd>
            </dl>
          </div>
          <div class="article">
            <dl>
              <dt>计算机 <span class="dt_text">2018-7-18</span></dt>
              <dd>在PS的默认情况下，我们进行裁剪操作时，裁剪掉的部分会以减淡的形式显示在画布上，而如果我们不需要它显示时，可以通过点击选项栏的“小齿轮”按钮来激活下拉菜单，取消勾选“显示裁剪区域”即可，或者通过按键盘快捷键字母H来切换显示或是隐藏裁剪区域，如下动图所示：
              </dd>
            </dl>
          </div>
          <div class="article">
            <dl>
              <dt>计算机 <span class="dt_text">2018-7-18</span></dt>
              <dd>在PS的默认情况下，我们进行裁剪操作时，裁剪掉的部分会以减淡的形式显示在画布上，而如果我们不需要它显示时，可以通过点击选项栏的“小齿轮”按钮来激活下拉菜单，取消勾选“显示裁剪区域”即可，或者通过按键盘快捷键字母H来切换显示或是隐藏裁剪区域，如下动图所示：
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="10" :xs="24">
      <div class="grid-content bg-purple-dark layout_a" >
        <el-row>
          <el-col style="text-align: center;" :span="12" :xs="12">
            <ul class="category_listings">
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>jQuery<span>（7）</span><span style="color:#f96f6f"></span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>jQuery<span>（7）</span><span style="color:#f96f6f"></span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
            </ul>
          </el-col>
          <el-col style="text-align: center;" :span="12" :xs="12">
            <ul class="category_listings">
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>jQuery<span>（7）</span><span style="color:#f96f6f"></span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>jQuery<span>（7）</span><span style="color:#f96f6f"></span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
              <li>JavaScript<span>（110）</span><span style="color:#f96f6f">+4</span></li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: "HomeArticle",
    data() {
      return {
        tabPosition: 'left'
      };
    }
  }
</script>
<style scoped>
  /* .category_listings{background-color: red;height: 22rem;} */
  .category_listings li {
    list-style-type: none;
    margin: 1rem;
    border: 1px solid #ebeef5;
    line-height: 3rem;
    height: 3rem;
    text-align: center;
    width: 85%;
    border-radius: 1px;
    color: #303133;
    transition: .3s;
    font-weight: 400;
  }
  .category_listings li:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    background-color: #ccc;
    border: 0;
    color: #fff;
  }
  .layout_a {
    text-align: left;
    margin-left: 4rem;
    margin-right: 1rem;
    padding-top: 0rem;
  }
  .dt_text {
    padding-left: 1rem;
    color: #888;
  }
  .article {
    margin: 1.5rem 0rem;
  }
  .article dt {
    text-decoration: none;
    font-weight: 400;
    position: relative;
    color: #34495e;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .article dd {
    text-decoration: none;
    margin-top: 0.5rem;
    height: 2rem;
    overflow: hidden;
    line-height: 1.1rem;
    color: #999;
  }
  .article dd:hover {
    color: #34495e;
  }
  @media (max-width: 500px) {
    .layout_a {
      text-align: left;
      margin-left: 0rem;
      margin-right: 0rem;
      padding-top: 1rem;
    }
    .article dd {
      margin-bottom: 1.2rem;
    }
    .category_listings li {
      line-height: 2rem;
      height: 2rem;
    }
  }
</style>
