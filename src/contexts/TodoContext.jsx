import { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Criação do contexto
const TodoContext = createContext();

// Hook customizado para usar o contexto
export function useTodo() {
  return useContext(TodoContext);
}

// Provedor do contexto
export function TodoProvider({ children }) {
  // Gerencia o estado da lista de tarefas usando o hook customizado
  const [tarefas, setTarefas] = useLocalStorage('tarefas', []);
  const [filtro, setFiltro] = useState('todas');

  // Adiciona uma nova tarefa à lista
  const adicionarTarefa = (texto) => {
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      { id: Date.now(), texto, concluida: false },
    ]);
  };

  // Alterna o estado de "concluída" de uma tarefa
  const alternarConclusao = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  // Remove uma tarefa da lista
  const removerTarefa = (id) => {
    setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Memoiza a lista de tarefas filtrada para evitar renderizações desnecessárias
  const tarefasFiltradas = useMemo(() => {
    console.log('Filtrando tarefas...'); // Para verificar a memoização
    switch (filtro) {
      case 'concluidas':
        return tarefas.filter((tarefa) => tarefa.concluida);
      case 'pendentes':
        return tarefas.filter((tarefa) => !tarefa.concluida);
      case 'todas':
      default:
        return tarefas;
    }
  }, [tarefas, filtro]); // O cálculo só é refeito se tarefas ou filtro mudarem

  // O valor do contexto é memoizado para evitar que o provedor renderize desnecessariamente
  const valorContexto = useMemo(() => ({
    tarefas: tarefasFiltradas,
    filtro,
    setFiltro,
    adicionarTarefa,
    alternarConclusao,
    removerTarefa,
  }), [tarefasFiltradas, filtro]);

  return (
    <TodoContext.Provider value={valorContexto}>
      {children}
    </TodoContext.Provider>
  );
}