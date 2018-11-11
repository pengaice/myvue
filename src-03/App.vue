<template>
  <div class="container">
    <Search/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  data(){
    return{
      todos:[
        {title:'吃饭',isComplete:false},
        {title:'睡觉',isComplete:true},
        {title:'coding',isComplete:false},
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
       this.todos.forEach(todo=>todo.complete)
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
