import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do List</h1>
      </header>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
