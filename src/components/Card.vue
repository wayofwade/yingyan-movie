<template recyclable>
    <div class="card">
        <text class="text">{{char}}</text>
    </div>
</template>

<script>
export default {
  props: ['char']
}
</script>

<style scoped>
    .card {
        width: 650px;
        height: 320px;
        justify-content: center;
        border-width: 4px;
        border-style: solid;
        border-color: rgb(79, 192, 141);
        background-color: rgba(79, 192, 141, 0.2);
    }
    .text {
        font-size: 160px;
        text-align: center;
        color: #41B883;
    }
</style>
