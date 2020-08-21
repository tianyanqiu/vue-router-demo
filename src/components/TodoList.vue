<template>
  <div class="todoapp">
    <div class="header">
      <h1>todos</h1>
      <input
        placeholder="请输入内容添加待办事件"
        class="new-todo"
        autofocus
        autocomplete="off"
        @keyup.enter="addTodo"
        v-model="newTodo"
      />
    </div>
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :key="todo.id">
          <div class="view">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>{{todos.length}}</strong> items left
      </span>
      <ul class="filters">
        <li class="selected">All</li>
      </ul>
      <button class="clear-completed">取消完成</button>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: this.getTodos(),
      newTodo: '',
    };
  },
  methods: {
    getTodos() {
      const todos = Array.isArray(JSON.parse(localStorage.getItem('todos')))
        ? JSON.parse(localStorage.getItem('todos'))
        : [];
      todos.forEach((todo, index) => {
        todo.id = index;
      });
      return todos;
    },
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: this.todos.length + 1,
        title: value,
      });
      this.newTodo = '';
      this.save(this.todos);
    },
    save(todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    removeTodo(todo) {
      const idx = this.todos.findIndex(item => item.id === todo.id);
      this.todos.splice(idx, 1);
    },
  },
};
</script>
