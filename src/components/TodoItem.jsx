import React from 'react';

export const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => onToggle(todo.id)}>
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.text}</span>
            </div>
            <button onClick={() => onDelete(todo.id)}>Excluir</button>
        </li>
    );
});