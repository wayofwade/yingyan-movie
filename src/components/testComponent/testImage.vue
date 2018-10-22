<template>
    <div>
    <div>{{msg}}</div>
        <div>
    <image width="50px" height=50px; src="../../../../imgs/index1.png"></image>
        </div>
    <div>{{msg1}}</div>
    <image style="width: 50px;height: 50px;" src="../../../../imgs/index1.png"></image>
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
