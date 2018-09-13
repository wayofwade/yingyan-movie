<template>
    <div>
        <div class="topDiv" :style="contentStyle">
        <!--<div class="topDiv" style="height:1000px">-->
            <hello-world :height="listHeight" v-if="first === true"></hello-world>
            <second-div :height="listHeight" v-if="second === true"></second-div>
            <third-div :height="listHeight" v-if="third === true"></third-div>
            <fourth-div :height="listHeight" v-if="four === true"></fourth-div>
            <!--<div v-if="third === true">fdhsufefehjefhjqh</div>
            <div v-if="second === true">第二个</div>
            <div v-if="four === true">第44444个</div>-->
        </div>
        <div class="bottomDiv" :style="tabStyles">
            <div class="div-son" @click="firstDiv('first')">one</div>
            <div class="div-son" @click="firstDiv('second')">two</div>
            <div class="div-son" @click="firstDiv('third')">threeddd</div>
            <div class="div-son" @click="firstDiv('four')">four</div>
        </div>
    </div>
</template>
<script>
import { Utils } from 'weex-ui'
import helloWorld from './HelloWorld.vue'
import secondDiv from './secondDiv.vue'
import thirdDiv from './thirdDiv.vue'
import fourthDiv from './fourthDiv.vue'
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
        this.first = true
        this.second = false
        this.third = false
        this.four = false
      } else if (value === 'second') {
        this.first = false
        this.second = true
        this.third = false
        this.four = false
      } else if (value === 'third') {
        this.first = false
        this.second = false
        this.third = true
        this.four = false
      } else {
        this.third = false
        this.first = false
        this.second = false
        this.four = true
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
        background-color: #afddff;
        margin-left: 2px;
        margin-right: 2px;
    }
</style>
