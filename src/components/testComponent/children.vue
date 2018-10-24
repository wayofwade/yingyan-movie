<template>
    <div>
        <text class="title">{{msg}}</text>
        <text class="title">{{counts}}</text>
        <text class="title">{{toSon}}</text>
        <button @click="addFather()" style="background-color:yellow"><text class="title">给父组件添加</text></button>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
// import someComponent from './someComponent'
export default {
  name: 'Children',
  props: ['toSon'],
  data () {
    return {
      msg: '子组件加2',
      counts: 100
    }
  },
  component: {
    // someComponent
  },
  methods: {
    add () {
      this.counts += 2
    },
    addFather () {
      this.$emit('addFather')
    }
  }
}
</script>

<style scoped>
    .title{
        font-size: 50px;
    }
</style>
