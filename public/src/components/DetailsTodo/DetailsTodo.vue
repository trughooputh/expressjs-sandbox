<template>
  <div>
    <h2>Create a Todo List</h2>
    <form @submit.prevent>
      <div class="form-group">
        <input type="text" class="form-control" @keypress="typing=true" placeholder="What do you want to do?" v-model="todo" @keyup.enter="addTodo($event)">
        <span class="help-block small text-center" v-show="typing">Hit enter to save</span>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';  
  import bus from "./../bus.js";

  import mongoApi from './../api/mongoApi.js';

  export default {
    data() {
      return {
        todo: '',
        typing: false,
      }
    },
    methods: {
      addTodo(event) {
        if (event) event.preventDefault();
        let param = {
            name: this.todo,
            done: 0
        };
        mongoApi
            .addTodo(param)
                .then((response) => {
                    console.log(response);
                    this.clearTodo();
                    this.refreshTodo();
                    this.typing = false;
                }).catch((error) => {
                    console.log(error);
                })
      },
      clearTodo() {
        this.todo = '';
      },
      refreshTodo() {
        bus.$emit("refreshTodo");
      }
    }
  }
</script>