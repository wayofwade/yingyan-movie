<template>
    <list class="list">
        <cell class="cell">
            <div class="B-box"  v-for="item in row1">
                <image class="B-icon" :src="item.icon" @click="goTest(item)"></image>
                <text class="B-title">{{item.title}}</text>
            </div>
        </cell>
        <cell class="cell">
            <div class="B-box"  v-for="item in row2">
                <image class="B-icon" :src="item.icon"></image>
                <text class="B-title">{{item.title}}</text>
            </div>
        </cell>
    </list>
</template>

<style scoped>
    .cell {
        flex-direction: row;
    }
    .B-box {
        width: 180px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .B-title {
        width: 180px;
        font-size: 30px;
        text-align: center;
        padding-top: 15px;
        color: #999999;
    }
    .B-icon {
        width: 140px;
        height: 140px;
        margin-left: 20px;
    }
</style>

<script>
export default {
  data () {
    return {
      row1: [{
        title: '测试vuex',
        icon: 'http://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png',
        name: '测试vuex',
        url: 'testVuex'
      }, {
        title: '测试图片',
        icon: 'http://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png',
        name: '测试图片',
        url: 'testImage'
      }, {
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png',
      }, {
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png',
      }],
      row2: [{
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1057iSXXXXXaXaVXXXXXXXXXX-140-140.png',
      }, {
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1tN6cRVXXXXbiXpXXXXXXXXXX-140-140.png',
      }, {
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1oYDaSXXXXXa7XpXXXXXXXXXX-140-140.png',
      }, {
        title: '腔调掌柜',
        icon: 'http://img.alicdn.com/tfs/TB1vRGhSpXXXXaLXpXXXXXXXXXX-140-140.png',
      }]
    }
  },
  methods: {
    goTest (item) {
      console.log(item)
    }
  }
}
</script>
