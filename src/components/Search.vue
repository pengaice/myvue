<template>
  <!--//属性值 是动态的要加冒号      onmouseover,onmouseout 进入子元素会触发out enter    -->
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search"/>
      <button>Search</button>
    </div>
  </section>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default{
//    指定接收属性的属性名，属性值的类型
   data(){
     return{
       searchName:''
     }
    },
    methods:{
      search(){
        const searchName = this.searchName.trim()
        if(searchName){
          Pubsub.publish('search')
        }
      }

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
