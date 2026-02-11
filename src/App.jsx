import React from 'react';

// React.memo impede que o item renderize se não houver mudança nele
export const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Remover</button>
    </li>
  );
});