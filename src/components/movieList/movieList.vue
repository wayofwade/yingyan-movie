<template>
    <list @loadmore="fetch" loadmoreoffset="10">
        <header>
            <text class="banner">电影库</text>
        </header>
        <cell v-for="(num, i) in lists" :key="i">
            <div class="panel">
                <div class="moviePic">
                    <image style="width:180px;height:250px;" src="../../../imgs/licha.jpg"></image>
                </div>
                <div class="movieDetail" @click="watchDetail">
                    <div class="topDetail">
                    <text class="text">{{text}}</text>
                    </div>
                    <div class="bottomDetail">
                        <text class="bottomDetail-text" @click="watchDetail">查看更多</text></div>
                </div>
                <!--<text class="text">{{num}}</text>-->
            </div>
        </cell>
    </list>
</template>

<script>
const modal = weex.requireModule('modal')
const LOADMORE_COUNT = 4

export default {
  data () {
    return {
      text: '《李茶的姑妈》改编自开心麻花同名爆笑舞台剧。李茶（宋阳 饰）是个穷小子，姑妈（卢靖姗 饰）却是全球女首富，' +
      '自打李茶出生后二人便未曾谋面。' +
      '为了娶到“势利眼富商”的女儿，李茶恳请姑妈出面牵线搭桥，可各怀鬼胎。',
      lists: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    fetch (event) {
      modal.toast({ message: 'loadmore', duration: 1 })
      setTimeout(() => {
        const length = this.lists.length
        for (let i = length; i < length + LOADMORE_COUNT; ++i) {
          this.lists.push(i + 1)
        }
      }, 800)
    },
    watchDetail () {
      this.$router.push('/movieDetail')
      console.log('查看电影详情--路由跳转')
    }
  }
}
</script>

<style scoped>
    .banner {
        width: 750px;
        padding: 25px;
        font-size: 60px;
        text-align: center;
        font-weight: bold;
        color: #41B883;
        background-color: rgb(162, 217, 192);
    }
    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        box-sizing: border-box;
        flex-direction: column;
        /*justify-content: center;*/
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .text {
        font-size: 23px;
        text-align: left;
        word-break:break-all;
        width:400px;
        color: #41B883;
    }
    .moviePic{
        width: 180px;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
    }
    .movieDetail{
        height: 260px;
        flex: 1;
        padding-left: 5px;
        box-sizing: border-box;
        padding-bottom: 5px;
        width:calc(100% - 180px);
    }
    .topDetail{
        height:210px;
    }
    .bottomDetail{
        height:45px;
    }
    .bottomDetail-text{
        text-align: right;
        width:400px;
        font-size: 22px;
        line-height: 45px;
    }
</style>
