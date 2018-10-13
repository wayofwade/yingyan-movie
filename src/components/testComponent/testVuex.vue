<template>
    <div>
        <div>
            <text class="title">测试vuex</text>
        </div>
        <div>
            <text class="buttonDiv" @click="addVuex()">vuex加3</text>
            <text class="buttonDiv" @click="minusVuex()">vuex减3</text>
        </div>
        <div>
            <text class="buttonDiv">{{count}}</text>
            <text class="buttonDiv">{{msg}}</text>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
// todo
export default {
  name: '',
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  computed: {
    count () {
      return this.$store.getters.getCount
    }
  },
  mounted () {
    // 可以打印count属性
    console.log(this.$store.state.testVuex.count)
  },
  methods: {
    addVuex () {
      this.$store.dispatch('addVuex', 3)
    },
    minusVuex () {
      this.$store.dispatch('minusVuex', 3)
    }
  },
  component: {
    // someComponent
  }
}
</script>

<style scoped>
.buttonDiv{
    font-size: 35px;
}
.title{
    font-size: 40px;
    font-weight: 400;
}
</style>
