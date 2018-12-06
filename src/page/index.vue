<template>
  <el-container>
    <div class="calendar_lon">
      <div class="calendar">福袋</div>
      <div class="count_down">
        <div class="Holiday_tips Holiday_style">
          2018年09月24
          <br> 八月十五
          <br> 中秋节
        </div>
        <div class="Holiday_tips Holiday_info">距离中秋回家还有<span style="color:#d24343;font-size: 1rem;padding:4px;">55</span>天.
        </div>
        <div class="Holiday_tips">
          <ul>
            <li><a>火车票入口</a></li>
            <li><a>汽车票入口</a></li>
            <li><a>飞机票入口</a></li>
          </ul>
        </div>
      </div>
    </div>
    <el-main class="el-main">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="page">
            <HomePage v-show="item==0"> </HomePage>
            <div v-show="item==1" class="height_a let_padding">
              <p>页面维修中...</p>
            </div>
            <div v-show="item==2" class="height_a let_padding">
              <p>页面维修中...</p>
            </div>
            <!--手机模型触发 -->
            <div v-show="item==3" class="height_a let_padding">
              <div id="convo" class="convo">
                <div class="property_page">
                  <div class="Chat_title">与小白聊天中...</div>
                  <div class="liaotianstyle">
                    <ul class="chat-thread" id="chat">
                      <li v-for="item in items" :class="item.message==''?'noetclass':item.class">
                        <div id="showinfo">{{ item.message}} </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sent_div" @click="chatSwitch =!chatSwitch;getSmartAnswer(numberCard);" v-show="!chatSwitch">
                    <span>请输入内容... </span>
                  </div>
                </div>
                <!-- 显示面板 -->
                <div class="msg_end" id="msg_end" v-show="chatSwitch">
                  <div class="mag_content">
                    <div class="answer_tliet">说点什么... <i class="el-icon-close" @click="chatSwitch =!chatSwitch;"></i></div>
                    <div class="Answer_me" v-show="!menuSwitch">
                      <ul <li @click="getmenu()">......</li>
                      </ul>
                      <ul id="smart_answer" v-for="item in menuList">
                        <li @click="addYouStatement(item.Id,item.content)">{{item.content}}</li>
                      </ul>
                    </div>
                    <div class="ask_me" v-show="menuSwitch">
                      <div>
                        <a>学习</a>
                        <a>恋爱</a>+-
                        <a>规划</a>
                      </div>
                      <div>
                        <a>恋爱</a>
                        <a>规划</a>
                        <a>灵感</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </swiper-slide>
      </swiper>
    </el-main>
  </el-container>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import HomePage from '../components/HomePage';
  export default {
    components: {
      HomePage,
      swiper,
      swiperSlide
    },
    data() {
      return {
        list: [], //轮换列表
        index: "",
        //首页切换
        swiperOption: {
          notNextTick: true,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true,
          slidesPerView: 1,
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值fals
          mousewheelControl: true, //同上
          height: window.innerHeight, // 高度设置，占满设备高度     
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
          on: {
            //监听滑动切换事件，返回swiper对象
            slideChange: () => {
              let m = this;
              let swiper = this.$refs.mySwiper.swiper;
              if (swiper.activeIndex == 3) {
                setTimeout(function() {
                  m.items.push({
                    message: '你好',
                    class: 'me'
                  });
                  m.chatSwitch = false;
                  m.menuSwitch = false;
                }, 300);            
              } else {
                m.items = [];
              }
            },
          }
        },
        //手机模型
        chatSwitch: false,
        menuSwitch: false,
        items: [{
          message: '',
          class: ''
        }],
        numberCard: 1,
        //菜单显示
        menuList: [],
        //测试数据
        testlist: [{
            id: 0,
            menuiId: 1,
            content: '你就是石小白',
            dockingMenu: 1,
            state: true,
            remark: ''
          },
          {
            id: 0,
            menuiId: 1,
            content: '你就是石小白？',
            dockingMenu: 1,
            state: true,
            remark: ''
          },
          {
            id: 0,
            menuiId: 1,
            content: '你就是石小白？',
            dockingMenu: 1,
            state: true,
            remark: ''
          },
          {
            id: 0,
            menuiId: 1,
            content: '你就是石小白？',
            dockingMenu: 1,
            state: true,
            remark: ''
          }
        ]
      }
    },
    created() {
      this.list = [0, 1, 2, 3];
    }
    ,
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      addYouStatement: function(Id, content) {
        let _this = this;
        _this.items.push({
          message: content,
          class: 'you'
        });
        _this.chatSwitch = false;
        if (Id == 0) {
          _this.menuSwitch = true;
        } else {
          setTimeout(function() {
           
            _this.items.push({
              message: '是呀,我是小白呀。很高兴见到你',
              class: 'me'
            });
          }, 400);
        }
      //  let a= $(".liaotianstyle").scrollHeight;
      //  alert(a);
      },
      getmenu: function() {
        this.menuSwitch = true;
      },
      //获取菜单内容
      getSmartAnswer: function(number) {
        //按照数据读取值。
        this.menuList = [];
        this.menuList.push({
          Id: 1,
          content: '请问你真是石小白吗？'
        }, {
          Id: 2,
          content: '你从那里来'
        })
      }
    }
  }
</script>
<style scoped>
  @import url("../../static/css/index.css");
  @import url("../../static/css/astra");
  .height_a {
    height: 50rem;
  }
  .swiper-slide:nth-child(2n) {
    background: #fff;
  }
  .swiper-slide:nth-child(2n-1) {
    background: #f5f5f5;
  }
  @media (max-width: 500px) {
    .swiper-slide {
      height: 10rem !important;
    }
    .swiper-slide:nth-child(2n-1) {
      background: #fff;
    }
    .let_padding {
      padding: 1.5rem;
    }
  }
</style>

