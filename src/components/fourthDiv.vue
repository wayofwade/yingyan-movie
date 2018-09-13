<template>
    <div style="justify-content:center">
        <slider class="size">
            <div v-for="src in posters">
                <image class="size" resize="cover" :src="src"></image>
            </div>
        </slider>
    </div>
</template>

<script>
export default {
  data () {
    return {
      posters: [
        'https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg',
        'https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg',
        'https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg',
        'https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg'
      ]
    }
  }
}
</script>

<style scoped>
    .size {
        width: 750px;
        height: 1080px;
    }
</style>
