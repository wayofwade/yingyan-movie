<template>
    <div>
        <text class="buttonDiv"> 跳转效果</text>
        <scroller class="scroller">
            <div class="row" ref="item" v-for="(name, index) in rows" :key="index">
                <text class="text">{{name}}</text>
            </div>
        </scroller>
        <div class="btn-group">
            <text @click="goto(10)" class="button">Go to 10</text>
            <text @click="goto(20)" class="button">Go to 20</text>
        </div>
    </div>
</template>

<script>
const dom = weex.requireModule('dom')
export default {
  data () {
    const rows = []
    for (let i = 0; i < 30; i++) {
      rows.push('row ' + i)
    }
    return { rows }
  },
  methods: {
    goto (index) {
      dom.scrollToElement(this.$refs.item[index], {})
    }
  }
}
</script>

<style scoped>
    .scroller {
        width: 700px;
        height: 700px;
        border-width: 3px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        margin-top: 100px;
        margin-left: 25px;
    }
    .row {
        height: 100px;
        justify-content: center;
        padding-left: 30px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
    }
    .text {
        font-size: 45px;
        color: #666666;
    }
    .btn-group {
        flex-direction: row;
        justify-content: center;
        margin-top: 60px;
    }
    .button {
        width: 200px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 40px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
        color: #41B883;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
    .buttonDiv{
        font-size: 50px;
    }
</style>
