<template>
    <div>
        <div>
            <text class="buttonDiv" @click="addVuex()">vuex加3</text>
            <text class="buttonDiv" @click="minusVuex()">vuex减3</text>
        </div>
        {{$store.state.testVuex.count}}
        {{msg}}
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
    font-size: 30px;
}
</style>
