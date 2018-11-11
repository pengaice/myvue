<template>
  <!--//属性值 是动态的要加冒号      onmouseover,onmouseout 进入子元素会触发out enter    -->
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>
<script>
  export default{
//    指定接收属性的属性名，属性值的类型
    props:{
      todo:Object,
      deleteTodo:Function,
      index:Number

    },
//
  data(){
      return{
        bgColor:'write',
        isShow:false
      }
  },
    methods:{
      handleEnter(isEnter){
        if(isEnter){
          this.bgColor = '#ccc'
          this.isShow = true
        }else {
          this.bgColor = '#fff'
          this.isShow = false
        }
//        this.bgColor = isEnter ? '#ccc' : '#fff'
      },
      deleteItem(){
        const {todo,deleteTodo}=this
        if(conform)
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
