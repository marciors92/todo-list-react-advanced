import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
  const [input, setInput] = useState('');
  // Acessa a função adicionarTarefa do contexto
  const { adicionarTarefa } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    adicionarTarefa(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;