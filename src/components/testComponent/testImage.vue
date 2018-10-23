<template>
    <div>
        <text style="fontSize: 50px;">
            测试图片的页面
        </text>
        <div>
            <text style="fontSize: 30px;">
            {{msg}}
            </text>
        </div>
       <div>
        <image src="../../../../imgs/index1.png"></image>
       </div>
        <div>
            <text style="font-size: 30px;">{{msg1}}</text>
        </div>
        <image style="width: 80px;height: 80px;" src="../../../../imgs/index1.png"></image>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
export default {
  name: '',
  data () {
    return {
      msg: 'image标签设置宽高',
      msg1: 'image标签不设置宽高'
    }
  },
  component: {
    // someComponent
  },
  mounted () {
    console.log('000000000')
  }
}
</script>

<style scoped>

</style>
