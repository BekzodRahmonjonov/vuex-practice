<template>
  <div class="row">
    <!-- Header todo -->
    <div class="col">
      <div class="input-group input-group-lg mb-3">
        <input v-model="inputValue" @keypress.enter="addNewTodo" type="text" class="form-control" placeholder="Write Todo" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span @click="addNewTodo" class="btn input-group-text btn-primary text-white" id="basic-addon2">Add Todo</span>
      </div> 
    </div>   
    <hr class="my-3">

    <!-- Body Todo -->
    <div v-if="$store.state.todos.length">
      <TodoItem 
        class="mx-auto" 
        v-for="(item, index) in todoItem" 
        :key="index" :index="index"
        :title="item.todo" :id="item.id" 
      />
    </div>
    <!-- Body Else -->
    <h4 v-else class="text-center">Add Todo</h4>

    <hr class="my-3">
    <!-- Footer Todo -->
    <div class="row">
      <div class="d-flex justify-content-between align-items-center p-3 py-1 bg-secondary rounded-3 text-white offset-7 col-2">All Todos <span class="p-2 py-0 text-dark rounded-3 bg-white">{{ allTodo }}</span></div>
      <div class="d-flex justify-content-between align-items-center p-3 py-1 bg-secondary rounded-3 text-white mx-3 col-2">Finished <span class="p-2 py-0 text-dark rounded-3 bg-white">0</span></div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
name: 'Todos',
components: {
  TodoItem
},
data() {
  return {
    inputValue: ''
  }
},
computed: {
  todoItem () {
    return this.$store.state.todos
  },
  allTodo () {
    return this.$store.state.todos.length
  },
  // inputValue () {
  //   return this.$store.state.inputValue
  // }
},
methods: {
  addNewTodo () {
    if (this.inputValue !== '') {
      this.$store.dispatch('addTodo', {
        todo: this.inputValue,
        id: this.$store.state.todos.length + 1
      })
    }
    this.inputValue = ''
  }
}
}
</script>