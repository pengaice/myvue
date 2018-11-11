<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
   export default{
     data(){
       return {
         msg:'I hate you'
       }
     }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    color:yellow;
  }
</style>
