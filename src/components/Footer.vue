<template>
  <div class="todo-footer">
    <label>
      <slot name="check"></slot>
    </label>
    <span>
      <!--数据来源  data  props 计算属性-->
          <slot name="size"></slot>
        </span>
    <slot name="delete"></slot>
  </div>
</template>
<script>
  export default{

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
