# 🚀 Lista de Afazares c/ React Avançado e Arq. Escalável

Projeto desenvolvido como parte da trilha de **Engenheiro Front-End**, focado em entregar uma aplicação que simula os padrões de qualidade exigidos em grandes produtos digitais. 

**🔗 [Acesse o projeto ao vivo aqui](https://marciors92.github.io/todo-list-react-advanced/)**

---

## 🔍 Demonstração prática

![lista de afazeres](https://github.com/user-attachments/assets/205ccf60-cf40-4110-8adc-e8e7a0b19221)


*Obs.: O GIF acima demonstra a fluidez das transições e a reatividade instantânea da interface ao filtrar tarefas, resultado das técnicas de Memoization aplicadas.*

---

## 🎯 Diferenciais técnicos

### ⚛️ Arquitetura de Estado e Performance
- **Gerenciamento Global com Context API**: Implementação de um `TodoProvider` no `main.jsx` para centralizar o estado e evitar o *prop drilling*, garantindo uma árvore de componentes limpa.
- **Memoization Estratégica**: Uso de `React.memo`, `useMemo` e `useCallback` para evitar re-renderizações desnecessárias, mantendo o FPS constante mesmo sob carga.
- **Hooks Customizados**: Abstração da lógica de persistência com `useLocalStorage`, desacoplando a lógica de negócio da UI.

### 🎨 Design System e Responsividade
- **Glassmorphism UI**: Interface moderna com transparências e desfoques, elevando o enquadramento visual da aplicação.
- **Mobile-First Workflow**: Layout totalmente adaptável que garante uma experiência de usuário impecável do smartphone ao desktop.

### ⚙️ CI/CD e Infraestrutura
- **Build Automatizado**: Configuração de scripts de deploy utilizando o pacote `gh-pages` para integração contínua com o GitHub Pages.
- **Vite Configuration**: Ajuste fino do `base path` no `vite.config.js` para garantir o carregamento correto de assets em subdiretórios de produção.

---

## 🛠️ Tecnologias utilizadas
- **React 18+** (Hooks, Context, Fragments)
- **Vite** (Build Tooling)
- **CSS3** (Variáveis, Flexbox, Grid e Glassmorphism)
- **Git/GitHub** (Conventional Commits e Versionamento Semântico)

---

## 🚀 Como executá-lo localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/marciors92/todo-list-react-advanced.git](https://github.com/marciors92/todo-list-react-advanced.git)
