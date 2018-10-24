<template>
    <div>
        <text class="title">{{msg}}</text>
        <button @click="addChild()" style="background-color:yellow"><text class="title">给子组件添加</text></button>
        <text class="title">{{counts}}</text>
        <div style="width:750px;height:80px;background-color: #dddddd"></div>
        <children ref="c1" @addFather="addFather" :toSon="fromFather"></children>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
import Children from './children.vue'
export default {
  name: '',
  data () {
    return {
      msg: '父组件加3',
      counts: 20,
      fromFather: '来自父组件的内容'
    }
  },
  components: {
    Children
  },
  methods: {
    add () {
      this.counts += 3
    },
    addChild () {
      this.$refs.c1.add()
    },
    addFather () {
      this.add()
    }
  }
}
</script>

<style scoped>
.title{
    font-size: 50px;
}
</style>
