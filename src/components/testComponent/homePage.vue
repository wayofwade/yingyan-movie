<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <cell class="myPageDiv">
            <!--<my-page></my-page>-->
            <cell :style="contentStyle1">
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                hh即可方便就忘记北京俄文办法部分基本阿福举步维艰飞奔去解放碑文件微博软件为背景
                erqjhgrihiqwhgrhgejkhkjgrehjergqhjrteqhrjekwhtrejkhtrwjktrhew
            </cell>
        </cell>

        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle">
            <!--<text>特别推荐</text>-->
            <hello-world></hello-world>
        </div>

        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

        <!-- 第四个页面内容-->
        <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
<!--
        <div slot="tab-title-0"><text>111</text></div>
        <div slot="tab-title-1"><text>222</text></div>
        <div slot="tab-title-2"><text>333</text></div>-->
    </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, Utils } from 'weex-ui'

// import Config from 'https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js'
import Config from '../../config/config' // 引入css和配置文件
import MyPage from './myPage/myPage.vue'
import helloWorld from './HelloWorld.vue'

export default {
  components: { WxcTabBar, MyPage, helloWorld },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    contentStyle: ''
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = Utils.env.deviceHeight / Utils.env.deviceWidth * 750;
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
    this.contentStyle1 = { height: (tabPageHeight - tabStyles.height) + 'px', fontSize: '30px' }
    // this.contentStyle = { height: '2000' + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      // const index = e.page;
    }
  }
}
</script>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
    .myPageDiv{
        width: 750px;
        background-color: floralwhite;
        height:2000px;
    }
</style>
