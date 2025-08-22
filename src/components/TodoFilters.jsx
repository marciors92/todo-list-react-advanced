import { useTodo } from '../context/TodoContext';

function TodoFilters() {
  // Acessa o filtro atual e a função para mudá-lo
  const { filtro, setFiltro } = useTodo();

  return (
    <div className="todo-filters">
      <button
        onClick={() => setFiltro('todas')}
        className={filtro === 'todas' ? 'active' : ''}
      >
        Todas
      </button>
      <button
        onClick={() => setFiltro('pendentes')}
        className={filtro === 'pendentes' ? 'active' : ''}
      >
        Pendentes
      </button>
      <button
        onClick={() => setFiltro('concluidas')}
        className={filtro === 'concluidas' ? 'active' : ''}
      >
        Concluídas
      </button>
    </div>
  );
}

export default TodoFilters;