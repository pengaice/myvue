<template>
  <h2 v-show="firstView">请输入关键字进行搜索</h2>
  <h2 v-show="loading">请求中。。。</h2>
  <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row">
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
      </a>
      <p class="card-text">reactjs</p>
    </div>
  </div>
</template>
<script>
  import Item from './Item.vue'
  export default{
       return{
         firstView:true,
         loading:true,
       }
  }
  mounted(){
    PubSub.subscribe('search',(msg,searchName)=>{
        this.firstView=true
        this.loading=true

    })
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
