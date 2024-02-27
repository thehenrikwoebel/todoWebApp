<template>
  <body>
    <todo-input @updateList="updateList($event)"></todo-input>
    <div id="container-todo-container">
      <div id="sub-container">
        <div id="todo-container" v-for="todo in todos" :key="todo.name">
          <todo :text="todo" @update="getTodos()"></todo>
        </div>
      </div>
    </div>
  </body>
</template>

<script>

import todo from './components/todo-container.vue';
import TodoInput from './components/todo-input.vue';

export default {
  name: 'App',
  components: {
    todo,
    TodoInput,
  },
  data() {
    return {
      todos: [],
      async getTodos() {
        let data = await fetch("/api/db/todos");
        this.todos = [];
        let data2 = await data.json();
        for(let i = 0; i < data2.length; i++) {
          this.todos[i] = data2[i].text;
        }
        console.log(this.todos);
      },
      updateList(text) {
        fetch("/api/db/insertTodo/" + text);
        this.getTodos();
      }
    }
  },
  mounted() {
    this.getTodos();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#todo-container {
  display: flex;
}
body {
  background-color: #2c3e50;
}
#container-todo-container {
  display: flex;
  flex-direction: column;
}
#sub-container {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
}
</style>
