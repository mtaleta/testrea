export function addTodo(text){
  return{
    type: 'ADD_TODO',
    text: text
  }
}
export function deleteTodo(id){
  return{
    type: 'DELETE_TODO',
    id: id
  }
}
export function editTodo(id, text){
  return{
    type: 'EDIT_TODO',
    id: id,
    text: text
  }
}
export function completeTodo(id){
  return{
    type: 'COMPLETE_TODO',
    id: id
  }
}
export function completeAll(){
  return{
    type: 'COMPLETE_ALL',
    id: id
  }
}
export function clearCompleted(){
  return{
    type: 'CLEAR_COMPLETED',

  }
}
