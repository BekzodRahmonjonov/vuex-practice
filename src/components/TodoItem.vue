<template>
  <div class="row">
    <div class="card my-1 p-2">
      <div class="card-item d-flex align-items-center justify-content-between">
        <h5 class="mt-1" v-if="!editing">{{id}}. {{ title }}</h5>
        <div v-else class="input-group d-flex align-items-center">
          <h5 class="mt-1">{{ id }}.</h5>
          <input type="text" v-model="this.$store.state.updateTodo" class="form-control mx-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="col-3 d-flex justify-content-end">
          <button class="btn btn-primary mx-1" @click="editTodo">{{ !editing ? 'Edit' : 'Update' }}</button>
          <button class="btn btn-danger mx-1" @click="deleteTodoItem(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['title', 'id', 'index'],
data() {
  return {
    editing: this.$store.state.todoEditing,
  }
},
methods: {
  deleteTodoItem (todoId) {
    this.$store.dispatch('deleteTodo', todoId)
    this.editing = false
  },
  editTodo () {
    this.editing = !this.editing
    this.$store.dispatch('updateTodoValue', this.title)
  }
}
}
</script>

<style>

</style>