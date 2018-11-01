<template>
    <list @loadmore="fetch" loadmoreoffset="10">
        <header>
            <text class="banner">电影圈todo</text>
        </header>
        <slider class="size">
            <div v-for="src in posters">
                <image class="size" resize="cover" :src="src"></image>
            </div>
        </slider>
        <cell v-for="(num, i) in lists" :key="i">
            <div class="panel">
                <div class="moviePic">
                    <image style="width:50px;height:50px;" src="../../../imgs/licha.jpg"></image>
                </div>
                <div class="movieDetail">
                    <div class="bottomDetail">
                        <text class="bottomDetail-text">{{userMessage}}</text>
                    </div>
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
      lists: [1, 2, 3, 4, 5],
      userName: '用户名字',
      userMessage: '用户发的朋友圈信息哈哈哈哈这个电影还不错的哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      posters: [
        'https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg',
        'https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg',
        'https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg',
        'https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg'
      ]
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
        width: 680px;
        margin-left: 25px;
        margin-top: 35px;
        margin-bottom: 35px;
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
    .moviePic{
        width: 80px;
        padding: 10px;
        box-sizing: border-box;
        text-align: right;
    }
    .movieDetail{
        flex: 1;
        padding-left: 5px;
        box-sizing: border-box;
        width:calc(100% - 50px);
    }
    .bottomDetail{
    }
    .bottomDetail-text{
        font-size: 23px;
        text-align: left;
        word-break:break-all;
        color: #41B883;
    }
    .size {
        width: 750px;
        height: 300px;
    }
</style>
