import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
