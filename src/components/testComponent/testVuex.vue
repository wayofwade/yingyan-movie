<template>
    <div>
        <text class="buttonDiv"> {{msg}}</text>
        <div>
            <text class="buttonDiv" @click="addVuex()">vuex加3</text>
            <text class="buttonDiv" @click="minusVuex()">vuex减3</text>
        </div>
        <text class="buttonDiv">{{$store.state.testVuex.count}}</text>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
export default {
  name: '',
  data () {
    return {
      msg: '测试vuex的功能'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
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
        font-size: 50px;
    }
</style>
