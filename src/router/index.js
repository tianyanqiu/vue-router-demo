/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Vue from 'vue';
import Router from 'vue-router';
import Foo from '@/components/Foo';
import Bar from '@/components/Bar';
import TodoList from '@/components/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/todo-list',
      component: TodoList
    }
  ]
});
