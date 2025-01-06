import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo">
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default TodoItem;
