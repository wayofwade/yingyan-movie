<template>
    <div>{{msg}}
        <div @click="back">返回</div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
export default {
  name: '',
  data () {
    return {
      msg: '电影评论圈子'
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

</style>
