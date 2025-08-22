import React from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ tarefa }) {
  // Acessa as funções do contexto
  const { alternarConclusao, removerTarefa } = useTodo();

  return (
    <li className={`todo-item ${tarefa.concluida ? 'concluida' : ''}`}>
      <p onClick={() => alternarConclusao(tarefa.id)}>{tarefa.texto}</p>
      <button onClick={() => removerTarefa(tarefa.id)} className="remover">
        &times;
      </button>
    </li>
  );
}

// React.memo evita que o componente seja renderizado se as props não mudarem
export default React.memo(TodoItem);