<template>
  <div>
    <h2>About</h2>
    <h3>接收外部数据:{{msg}}</h3>
    <input type="text"/>
  </div>
</template>
<script>
  export default{
    props:{
      msg:String
    }
  }
</script>

<style scoped>
</style>
