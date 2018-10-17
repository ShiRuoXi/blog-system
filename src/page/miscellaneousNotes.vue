<template>
  <div class="layout_f">
    <el-row >
      <el-col :span="16" :xs="24">
        <div class="grid-content bg-purple">
          <ul>
            <li>
              <el-row>
                <el-col :span="10" :xs="24">
                  <router-link to="/list">
                    <img class="_img" src="../assets/2.jpg">
                  </router-link>
                </el-col>
                <el-col :span="14" :xs="24" class="ys_a">
                  <div class="src_a">
                    <router-link to="/list">
                      <h3>万水千山总是情 <span>三毛</span></h3>
                    </router-link>
                    <p>有时候，我多么希望能有一双睿智的眼睛能够看穿我，能够明白了解我的一切，包括所有的斑斓和荒芜。那双眼眸能够穿透我的最为本质的灵魂，直抵我心灵深处那个真实的自己，她的话语能解决我所有的迷惑，或是对我的所作所为能有一针见血的评价。</p>
                    <div class="zs_l">
                      2018-18-08
                    </div>
                  </div>
                </el-col>
              </el-row>
            </li>
            <li>
              <el-row>
                <el-col :span="10" :xs="24">
                  <router-link to="/list">
                    <img class="_img" src="../assets/2.jpg">
                  </router-link>
                </el-col>
                <el-col :span="14" :xs="24" class="ys_a">
                  <div class="src_a">
                    <router-link to="/list">
                      <h3>万水千山总是情 <span>三毛</span></h3>
                    </router-link>
                    <p>有时候，我多么希望能有一双睿智的眼睛能够看穿我，能够明白了解我的一切，包括所有的斑斓和荒芜。那双眼眸能够穿透我的最为本质的灵魂，直抵我心灵深处那个真实的自己，她的话语能解决我所有的迷惑，或是对我的所作所为能有一针见血的评价。</p>
                    <div class="zs_l">
                      2018-18-08
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
    name: "notes"
  };
</script>
<style scoped>
  @import url("../../static/css/notes.css");
</style>
