import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export function TodoForm() {
    const [text, setText] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nova tarefa..."
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}