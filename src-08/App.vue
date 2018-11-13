<template>
  <div>
    <p>click {{count}} times count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
   export default {
     computed:{
       evenOrOdd(){
         return this.$store.getters.evenOrOdd
       },
       count(){
         return this.$store.state.count
       },
     },
     methods:{
//       increment(){
//         this.count++
//       },
//       decrement(){
//         this.count--
//       },
//       incrementIfOdd(){
//         if(this.count % 2===1){
//           this.count++
//         }
//
//       },
//       incrementAsync(){
//         setTimeout(()=>{
//           this.count++
//         },1000)
//
//       },
     increment(){
         this.$store.dispatch('increment')
       },
       decrement(){
         this.$store.dispatch('decrement')
       },
       incrementIfOdd(){
         this.$store.dispatch('incrementIfOdd')
       },
       incrementAsync(){
         this.$store.dispatch('incrementAsync')

       },
     }
  }
</script>

<style>

</style>
