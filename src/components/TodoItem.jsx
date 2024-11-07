import React from "react";

function TodoItem({ todo, deleteTodo, editTodo }) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.details}</p>
      <p>Due: {todo.dueDate}</p>
      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
