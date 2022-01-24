import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        todo: 'Shavkat',
        id: 1
      },
      {
        todo: 'Oybek',
        id: 2
      },
      {
        todo: 'Bekzod',
        id: 3
      },
    ],
    todoEditing: false,
    updateTodo: ''
  },
  mutations: {
    delete(state, id) {
      state.todos.splice(id, 1)
    },
    add (state, data) {
      state.todos.push(data)
    },
    editTodoValue (state, newValue, index ) {
      state.todos[index] = newValue
    }
  },
  getters: {
     
  },
  actions: {
    deleteTodo (context, payload) {
      context.commit('delete', payload)
    },
    addTodo (context, payload) {
      context.commit('add', payload)
    },
    updateTodoValue (context, payload) {
      context.commit('editTodoValue', payload)
    }
  }
})

export default store