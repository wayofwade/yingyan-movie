<template>
    <div>
        <div>
            <text style="font-size: 50px;text-align: center">{{msg}}</text>
            <text style="font-size: 50px;text-align: center">{{textFont}}</text>
        </div>
        <div style="font-size: 50px;text-align: center">{{divFont}}</div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '真机的时候div标签里面写文字相关的样式失效',
      divFont: '测试div标签',
      textFont: '测试text标签'
    }
  },
  methods: {
    fetch (event) {
      console.log(0)
    }
  }
}
</script>

<style scoped>
</style>
