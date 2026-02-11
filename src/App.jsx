import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import './styles/App.css';

export default function App() {
  const { filteredTodos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="app-container">
      <header>
        <h1>Minha Lista de Afazeres</h1>
        <TodoForm />
      </header>

      <main>
        <TodoFilters />
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
        {filteredTodos.length === 0 && <p className="empty">Nenhuma tarefa encontrada.</p>}
      </main>
    </div>
  );
}