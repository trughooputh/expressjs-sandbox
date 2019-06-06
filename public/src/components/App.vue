<template>
  <div id="app">
    <div class="container">
      <div class="row col-md-12 d-flex justify-content-center">
        <CreateTodo />
        <div class="row col-md-12 d-flex justify-content-center">
        <ListTodo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CreateTodo from './CreateTodo/CreateTodo.vue';
  import ListTodo from './ListTodo/ListTodo.vue';

  export default {
    name: 'app',
    components: {
      CreateTodo,
      ListTodo
    },
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>