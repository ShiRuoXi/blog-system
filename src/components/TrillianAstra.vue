<template>
  <div>
    <div id="convo" class="convo">
      <div class="property_page">
        <div class="Chat_title">与小白聊天中...</div>
        <input id="test" v-bind:value='msgfromfa' >
        <ul class="chat-thread" id="chat">
          <li v-for="item in items" :class="item.message==''?'noetclass':item.class">
            <div id="showinfo">{{ item.message}} </div>
          </li>
        </ul>
        <div class="sent_div" @click="chatSwitch =!chatSwitch;" v-show="!chatSwitch">
          <span>请输入内容... </span>
        </div>
      </div>
      <div class="msg_end" id="msg_end" v-show="chatSwitch">
        <div class="mag_content">
          <div class="answer_tliet">说点什么... <i class="el-icon-close" @click="chatSwitch =!chatSwitch;"></i></div>
          <div class="Answer_me" v-show="!menuSwitch">
            <ul>
              <li @click="getmenu()">......</li>
              <li @click="addstatement()">你是谁？</li>
              <li>你职业是什么？</li>
            </ul>
          </div>
          <div class="ask_me" v-show="menuSwitch">
            <div>
              <a>学习</a>
              <a>恋爱</a>
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
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'TrillianAstra',
      props:["msgfromfa"],
    data: function() {
      return {
        chatSwitch: false,
        menuSwitch: false,
        items: [{
          message: '你好',
          class: 'me'
        }]
        // ,msg:['msgfromfa']
      }
    },
    mounted: function() {
      // this.showInfo();
    },
    methods: {
      addstatement: function() {
        this.items.push({
          message: '你是谁',
          class: 'you'
        });
        this.chatSwitch = false;
      },
      getmenu: function() {
        this.menuSwitch = true;
      }
    }
  }
</script>

<style scoped>
  .noetclass {
    display: none;
  }
  .ask_me a {
    width: 3rem;
    height: 2rem;
    display: inline-block;
    padding: 0.685rem;
    /* border: 1px solid #ccc; */
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }
  .ask_me a:hover {
    color: aquamarine;
  }
  .msg_end {
    border-left: 1px solid #dacbb9;
    position: relative;
    top: -29.05rem;
    width: 92.2%;
    margin-left: 10px;
    height: 26rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .convo {
    margin: auto;
    height: 33rem;
    width: 17rem;
    border: 1px solid #dacbb9;
    box-shadow: 0px 1px 12px 3px rgb(255, 251, 251);
    border-radius: 2rem;
    box-shadow: inset 0px -2px 10px #dad7d7;
  }
  .Chat_title {
    background-color: #555;
    color: #fff;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
  }
  .property_page {
    background-color: #fff;
    border-radius: 3px;
    height: 29rem;
    border: 1px solid #dacbb9;
    margin: 2rem .625rem;
    /* box-shadow: inset 0px -1px 30px #99dad794; */
  }
  ul.chat-thread {
    text-align: left;
    height: 21rem;
    overflow: auto;
    padding: 2rem 0.5rem;
    background-color: rgba(211, 235, 235, 0.56);
    /* background-color: #fbe1eb85; */
    list-style-type: none;
  }
  .chat-thread ::scrollbarbutton {
    display: none !important;
  }
  /*滚动条样式*/
  .chat-thread::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .sent_div {
    text-align: left;
    color: #ccc;
    padding-left: 1rem;
    padding-top: 0.2rem;
    border-top: 1px solid rgb(236, 234, 234);
    font-size: 0.8rem;
    line-height: 2rem;
  }
  .chat-thread li div {
    color: #666;
    padding: 9px 14px;
    max-width: 65%;
    overflow: hidden;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 24px;
    background: white;
    display: inline-block;
    margin-bottom: 20px;
    webkit-box-shadow: 5px 5px 15px 0 rgba(102, 102, 102, 0.1);
    box-shadow: 5px 5px 15px 0 rgba(102, 102, 102, 0.1);
    -webkit-transition: width .12s ease-out, height .12s ease-out;
    transition: width .12s ease-out, height .12s ease-out;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    /* background-color: #ded8d8; */
  }
  .me {
    text-align: left;
  }
  .you {
    text-align: right;
  }
  .me div {
    -webkit-border-radius: 0 20px 20px 20px;
    border-radius: 0 20px 20px 20px;
    animation: msgBounceIn .4s;
  }
  .you div {
    -webkit-border-radius: 20 0px 20px 20px;
    border-radius: 20px 0px 20px 20px;
    animation: msgBounceIn .4s;
  }
  .mag_content {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .Answer_me ul li {
    list-style-type: none;
    color: #666;
  }
  .answer_tliet {
    color: #bbb;
  }
  .Answer_me ul li,
  .answer_tliet {
    line-height: 1rem;
    display: block;
    height: 100%;
    text-decoration: none;
    padding: 11px 25px;
    height: 1rem;
    border-bottom: 1px solid #f3f3f3;
  }
  .answer_tliet i {
    position: absolute;
    right: 2rem;
    font-size: 1.4rem;
  }
  @keyframes msgBounceIn {
    0%,
    100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
    }
    75% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @media (max-width: 320px) {
    .convo {
      width: 100%;
      height: 30rem;
    }
    .property_page {
      height: 26rem;
    }
    ul.chat-thread {
      height: 17.5rem;
    }
  }
</style>

