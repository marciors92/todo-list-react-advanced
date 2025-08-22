import { useState, useEffect } from 'react';

// Hook customizado para persistir o estado no localStorage
export function useLocalStorage(chave, valorInicial) {
  // useState para armazenar o valor do estado
  const [valor, setValor] = useState(() => {
    try {
      // Tenta obter o valor do localStorage na inicialização
      const valorArmazenado = window.localStorage.getItem(chave);
      // Se existir, retorna o valor parseado; caso contrário, retorna o valor inicial
      return valorArmazenado ? JSON.parse(valorArmazenado) : valorInicial;
    } catch (error) {
      console.error('Erro ao ler do localStorage', error);
      return valorInicial;
    }
  });

  // useEffect para salvar o valor no localStorage sempre que ele mudar
  useEffect(() => {
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  }, [chave, valor]); // O efeito depende da chave e do valor

  // Retorna o valor e a função para atualizá-lo
  return [valor, setValor];
}