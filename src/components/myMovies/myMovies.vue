<template>
    <div>
        <div class="myPicDiv">
            <div class="leftPic">
                <image src="../../../imgs/sunOnSea.jpg"
                       style="width:120px;height: 120px;border-radius:60px;">
                </image>
            </div>
            <div class="rightText">
                <text class="username">德玛西亚</text>
            </div>
        </div>
        <div class="navbarDiv">
            <div class="detail">
                <image style="width: 80px;height: 80px;" src="../../../imgs/movie.png"></image>
                <text class="detail-text">电影票</text>
            </div>
            <div class="detail">
                <image style="width: 80px;height: 80px;" src="../../../imgs/cheap.png"></image>
                <text class="detail-text">优惠券</text>
            </div>
            <div class="detail">
                <image style="width: 80px;height: 80px;" src="../../../imgs/card.png"></image>
                <text class="detail-text">权益卡</text>
            </div>
            <div class="detail">
                <image style="width: 80px;height: 80px;" src="../../../imgs/ticket.png"></image>
                <text class="detail-text">演出票</text>
            </div>
        </div>
        <div class="tips">
            <div class="oneTip"><text class="tip-text">想看的电影</text></div>
            <div class="oneTip"><text class="tip-text">看过的电影</text></div>
            <div class="oneTip"><text class="tip-text">我的小剧场</text></div>
            <div class="oneTip"><text class="tip-text">发起的讨论</text></div>
            <div class="oneTip"><text class="tip-text">银行卡特惠</text></div>
            <div class="oneTip"><text class="tip-text">帮助与反馈</text></div>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
export default {
  name: '',
  data () {
    return {
      msg: '我的电影，我的收藏。我的评论等'
    }
  },
  component: {
    // someComponent
  }
}
</script>

<style scoped>
.myPicDiv {
    width: 750px;
    height: 200px;
    background-color: pink;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.leftPic{
    width:200px;
    height:200px;
    padding-left: 30px;
    padding-top: 40px;
    box-sizing: border-box;
}
.rightText{
    width:550px;
    height:200px;
}
.username {
    position: absolute;
    line-height: 30px;
    font-size: 28px;
    top: 85px;
}
.navbarDiv{
    height:180px;
    width:750px;
    background-color: white;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
/**/
.detail{
    width:187px;
    height:180px;
    background-color: whitesmoke;
    padding-top: 25px;
    padding-left: 40px;
    box-sizing: border-box;
}
.detail-text{
    margin-top: 12px;
}
.tips{
    margin-top: 10px;
    width: 750px;
    height:900px;
    background-color: white;
}
.oneTip {
    margin-top: 1px;
    height:130px;
    width:750px;
    background-color: whitesmoke;
    padding-left: 40px;
    padding-top: 50px;
}
.tip-text{
    font-size: 25px;
    line-height: 30px;
}
</style>
