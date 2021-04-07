window.todos = function todos() {
  return {
    todos: [{ id: 1, title: "test", isComplete: false }],
    userInput: "",
    todoId: 2,
    addTodo() {
      if(this.userInput.trim() === ''){
        return;
      }
      this.todos.push({
        id: this.todoId,
        title: this.userInput,
        isComplete: false
      });
      this.todoId++;
      this.userInput = '';
    },
    deleteTodo(todoId){
      this.todos = this.todos.filter((todosItem => todosItem.id !== todoId))
    }
  };
};
