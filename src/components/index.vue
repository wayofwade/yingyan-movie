<!--
1-电影列表-电影详情
2-电影圈子类似朋友圈评论。评论发表
3-测试的组件
4-我的电影，收藏，评论等等
-->
<template>
    <div>
        <div class="topDiv" :style="contentStyle">
        <!--<div class="topDiv" style="height:1000px">-->
           <!-- <hello-world :height="listHeight" v-if="first === true"></hello-world>
            <second-div :height="listHeight" v-if="second === true"></second-div>
            <third-div :height="listHeight" v-if="third === true"></third-div>
            <fourth-div :height="listHeight" v-if="four === true"></fourth-div>
            &lt;!&ndash;<div v-if="third === true">fdhsufefehjefhjqh</div>-->
           <!-- <div v-if="second === true">第二个</div>
            <div v-if="four === true">第44444个</div>&ndash;&gt;-->
            <router-view/>
        </div>
        <div class="navbarDiv" :style="tabStyles">
            <div class="detail" @click="firstDiv('first')">
                <image style="width: 50px;height: 50px;" src="../../../imgs/index1.png"></image>
                <text class="detail-text">主页</text>
            </div>
            <div class="detail" @click="firstDiv('second')">
                <image style="width: 50px;height: 50px;" src="../../../imgs/movie2.png"></image>
                <text class="detail-text">电影</text>
            </div>
            <div class="detail"  @click="firstDiv('third')">
                <image style="width: 50px;height: 50px;" src="../../../imgs/circle3.png"></image>
                <text class="detail-text">评论</text>
            </div>
            <div class="detail" @click="firstDiv('four')">
                <image style="width: 50px;height: 50px;" src="../../../imgs/my4.png"></image>
                <text class="detail-text">我的</text>
            </div>
          <!--  <div class="div-son" @click="firstDiv('first')">
                <text class="cell">电影库</text>
            </div>
            <div class="div-son" @click="firstDiv('second')"><text class="cell">电影圈</text></div>
            <div class="div-son" @click="firstDiv('third')"><text class="cell">GOGO</text></div>
            <div class="div-son" @click="firstDiv('four')"><text class="cell">我</text></div>-->
        </div>
    </div>
</template>
<script>
import { Utils } from 'weex-ui'
import helloWorld from './testComponent/TextAndDiv.vue'
import secondDiv from './testComponent/studyPage.vue'
import thirdDiv from './testComponent/jumpDiv.vue'
import fourthDiv from './testComponent/pictureCircle.vue'
import Config from '../config/config' // 引入css和配置文件

export default {
  components: { helloWorld, secondDiv, thirdDiv, fourthDiv, Config },
  data () {
    return {
      contentStyle: '',
      listHeight: '',
      tabStyles: {
        height: '100'
      },
      first: false,
      second: true,
      third: false,
      four: false
    }
  },
  created () {
    this.$router.push('/movieList')
    this.first = false
    this.second = true
    this.third = false
    this.four = false
    const tabPageHeight = Utils.env.getPageHeight()
    console.log(tabPageHeight)
    this.contentStyle = { height: (tabPageHeight - this.tabStyles.height - 20) + 'px' }
    this.listHeight = tabPageHeight - this.tabStyles.height - 20
    console.log(this.contentStyle.height)
  },
  methods: {
    firstDiv (value) {
      console.log(value)
      console.log('first')
      if (value === 'first') {
        this.$router.push('/movieList')
        /* this.first = true
        this.second = false
        this.third = false
        this.four = false */
      } else if (value === 'second') {
        this.$router.push('/movieCircle')
        /* this.first = false
        this.second = true
        this.third = false
        this.four = false */
      } else if (value === 'third') {
        this.$router.push('/studyPage')
        /* this.first = false
        this.second = false
        this.third = true
        this.four = false */
      } else {
        this.$router.push('/myMovies')
        /* this.third = false
        this.first = false
        this.second = false
        this.four = true */
      }
      /* switch (value) {
        case 'first':
          this.first = true
          this.second = false
          this.third = false
          break
        case 'second':
          this.second = true
          this.first = false
          this.third = false
          break
        case 'third':
          this.third = true
          this.first = false
          this.second = false
          break
        default:
          this.first = false
          this.second = false
          this.third = false
          break
      } */
    }
  }
}
</script>

<style scoped>
    .topDiv{
    }
    .bottomDiv{
        width: 750px;
        height:100px;
        background-color: lightyellow;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        flex-direction: row;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
    }
    .div-son{
        width: 180px;
        height: 100px;
        color: white;
        background-color: #41B883;
        margin-left: 2px;
        margin-right: 2px;
        padding: 10px;
        box-sizing: border-box;
    }
    .cell{
        position: absolute;
        top: 50%;
        text-align: center;
        font-size: 38px;
        line-height: 40px;
        height:40px;
        margin-top: -20px;
    }
    .detail{
        width:187px;
        height:130px;
        background-color: rgba(162, 217, 192, 0.2);
        padding-top: 15px;
        padding-left: 50px;
        box-sizing: border-box;
    }
    .navbarDiv{
        height:130px;
        width:750px;
        background-color: white;
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .detail-text{
        margin-top: 5px;
        text-align: left;
    }
</style>
