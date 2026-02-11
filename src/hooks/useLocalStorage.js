import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    // Inicializa o estado buscando do localStorage ou usando o valor padrão
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Erro ao ler localStorage", error);
            return initialValue;
        }
    });

    // Sempre que storedValue mudar, atualiza o localStorage
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}