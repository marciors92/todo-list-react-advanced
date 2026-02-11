import React, { createContext, useState, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('todos-v1', []);
    const [filter, setFilter] = useState('all');

    // Adicionar tarefa (useCallback para evitar recriação da função)
    const addTodo = useCallback((text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos((prev) => [...prev, newTodo]);
    }, [setTodos]);

    // Alternar conclusão
    const toggleTodo = useCallback((id) => {
        setTodos((prev) => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, [setTodos]);

    // Remover tarefa
    const deleteTodo = useCallback((id) => {
        setTodos((prev) => prev.filter(todo => todo.id !== id));
    }, [setTodos]);

    // Memoization: Filtra a lista apenas quando 'todos' ou 'filter' mudar
    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'completed': return todos.filter(t => t.completed);
            case 'pending': return todos.filter(t => !t.completed);
            default: return todos;
        }
    }, [todos, filter]);

    return (
        <TodoContext.Provider value={{ filteredTodos, filter, setFilter, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
}