
import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  }

  function toggleTodo(id) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div className="app">
      <h1>My TODO List</h1>

      <form onSubmit={addTodo}>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={todo.done ? "done" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
