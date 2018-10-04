<template>
    <div>
        <div class="backTo" @click="back">
            <text class="banner">返回</text>
        </div>
        <div class="moviePic">
            <div class="picDiv"><image style="width:300px;height:450px;" src="../../../imgs/licha.jpg"></image></div>
            <div class="textDiv">
                <text class="textDetail">电影名称：李茶的姑妈</text>
                <text class="textDetail">导演：吴昱翰</text>
                <text class="textDetail">类型: 喜剧</text>
                <text class="textDetail">上映日期: 2018-09-30</text>
                <text class="textDetail">片长: 113分钟</text>
            </div>
        </div>
        <div class="movieDesc">
            <text class="movieDesc-text">
              {{movieDesc}}
            </text>
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
      msg: 'Hello Vue.js',
      movieDesc: '《李茶的姑妈》改编自开心麻花同名爆笑舞台剧。李茶（宋阳 饰）是个穷小子，姑妈（卢靖姗 饰）' +
      '却是全球女首富，自打李茶出生后二人便未曾谋面。为了娶到“势利眼富商”的女儿，李茶恳请姑妈出面牵线搭桥，' +
      '可各怀鬼胎的一行人却误将男员工黄沧海（黄才伦 饰）认作姑妈。为了各自的利益，黄沧海、李茶连同梁杰瑞（艾伦 饰）' +
      '三个人将计就计组团来“假扮姑妈”，' +
      '正当众人纷纷讨好这位“假姑妈”时，神秘的“真姑妈”现身了，一连串的爆笑故事也发生了......'
    }
  },
  component: {
    // someComponent
  },
  methods: {
    back () {
      this.$router.go(-1)
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
    margin-bottom: 20px;
}
.moviePic{
    width: 750px;
    height: 450px;
    padding: 0 30px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: rgba(162, 217, 192, 0.2);
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.picDiv{
    width:320px;
}
.textDiv{
    font-size: 30px;
    padding-top: 30px;
    box-sizing: border-box;
    color: #41B883;
}
.textDetail{
    font-size: 30px;
    line-height: 40px;
}
.movieDesc-text{
    padding: 0 30px;
    box-sizing: border-box;
}
</style>
