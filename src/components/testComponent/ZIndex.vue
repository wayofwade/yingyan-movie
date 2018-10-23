<template>
    <div>
        <text style="fontSize: 50px;">{{msg}}</text>
        <div class="firstDiv">
            <div class="secondDiv">
            </div>
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
      msg: '测试ZIndex是没有用的'
    }
  },
  component: {
    // someComponent
  }
}
</script>

<style scoped>
.firstDiv{
    background-color: #afddff;
    width: 300px;
    height:300px;
    z-index: 30;
}
.secondDiv{
    background-color: yellow;
    width: 200px;
    height:200px;
}
</style>
