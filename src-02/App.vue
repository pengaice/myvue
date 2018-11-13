<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo= "addTodo"/>
      <!--组件对象的属性通过标签属性传过去-->
      <TodoMain :todos="todos" :deleteTodo = "deleteTodo"/>
      <TodoFooter :todos="todos"
                    :deleteCompleteTodos="deleteCompleteTodos"
                    :selectAllTodos="selectAllTodos"
                     />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import storageUtils from './utils/storageUtils'

export default {
  data(){
    return{

      todos:[
        {title:'吃',complete:false},
        {title:'睡',complete:true},
        {title:'敲代码',complete:false},
      ]
    }
  },
  methods:{
     addTodo(todo){
        this.todos.unshift(todo)
     },
    deleteTodo(index){
       this.todo.splice(index,1)
    },
//    删除已经完成的
    deleteCompleteTodos(){
         this.todos = this.todos.filter(todo => !todo.complete)
    },
//    全选或全不选
    selectAllTodos(isCheck){
       this.todos.forEach(todo=>todo.complete = isCheck)
    }
  },
  watch:{
    todos:{
      deep:true,
      handler:storageUtils.saveTodos()
    }
  },
  components:{
    TodoHeader:Header,
    TodoMain:Main,
    TodoFooter:Footer
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
