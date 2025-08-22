import TodoItem from './TodoItem';
import { useTodo } from '../context/TodoContext';

function TodoList() {
  // Acessa a lista de tarefas filtrada do contexto
  const { tarefas } = useTodo();

  return (
    <ul className="todo-list">
      {/* Mapeia a lista filtrada, passando a tarefa para o componente TodoItem */}
      {tarefas.map((tarefa) => (
        <TodoItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default TodoList;