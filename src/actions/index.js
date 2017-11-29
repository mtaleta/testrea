export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

// search

// Main
export function addTodo (text) {
  console.log('addTodo')
  return {
    type: 'ADD_TODO',
    text: text
  }
}

export function deleteTodo (id) {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}
export function editTodo (id, text) {
  return {
    type: 'EDIT_TODO',
    id: id,
    text: text
  }
}
export function completeTodo (id) {
  return {
    type: 'COMPLETE_TODO',
    id: id
  }
}
export function completeAll () {
  return {
    type: 'COMPLETE_ALL'
  }
}
export function clearCompleted () {
  return {
    type: 'CLEAR_COMPLETED'

  }
}
