import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export function TodoFilters() {
    const { filter, setFilter } = useContext(TodoContext);

    return (
        <div className="filters">
            {['all', 'pending', 'completed'].map((f) => (
                <button
                    key={f}
                    className={filter === f ? 'active' : ''}
                    onClick={() => setFilter(f)}
                >
                    {f === 'all' ? 'Todas' : f === 'pending' ? 'Pendentes' : 'Concluídas'}
                </button>
            ))}
        </div>
    );
}