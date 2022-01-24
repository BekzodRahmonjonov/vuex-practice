<template>
  <div id="app">
    <div class="row">
      <div class="col-8 offset-2 mt-5">
        <h3 class="text-center">Todo App</h3>
        <div class="card p-3">
          <Todos />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style>
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  } 
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
