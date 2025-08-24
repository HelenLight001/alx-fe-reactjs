import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React", completed: false }]);
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Toggle todo completion
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            className={todo.completed ? "completed" : ""}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); handleDelete(todo.id); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
