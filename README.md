# 🏆 Copa do Mundo 2026 - Tabela Interativa

Este projeto é uma aplicação web desenvolvida em React para acompanhar a Copa do Mundo de 2026. Ele oferece uma interface interativa para visualizar grupos, estatísticas, jogos e a fase de mata-mata.

https://jeancarlos88.github.io/Copa26/

## ✨ Funcionalidades

-   **🏠 Página Inicial**: Apresentação com o logo oficial e título do evento.
-   **📊 Tabela de Grupos**:
    -   Visualização de todos os grupos em formato de grid.
    -   Detalhes de cada grupo via modal (jogos, pontuação detalhada).
    -   Barra lateral com lista de países classificados.
-   **🥅 Fase de Mata-Mata**: Visualização da árvore de jogos das fases eliminatórias.
-   **🔎 Detalhes por País**: Modal com informações e partidas de um país específico ao selecioná-lo.
-   **📱 Design Responsivo**: Interface adaptada para diferentes tamanhos de tela com tema escuro e moderno.

## 🛠️ Tecnologias Utilizadas

-   **React** (v19)
-   **Vite** (Build Tool)
-   **CSS3** (Estilização customizada)
-   **ESLint** (Linting e padronização de código)
-   **GitHub Actions** (CI/CD)

## 🚀 Como rodar o projeto localmente

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/JeanCarlos88/Copa26.git
    cd Copa26
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação:**
    Abra o navegador em `http://localhost:5173`.

## ⚙️ Integração Contínua (CI)

Este projeto possui um workflow de CI configurado com **GitHub Actions**.
Sempre que um *push* ou *pull request* é feito para a branch `main`, o workflow executa automaticamente:

1.  Instalação de dependências (`npm ci`).
2.  Verificação de código (`npm run lint`).
3.  Build da aplicação (`npm run build`).

Isso garante a qualidade e integridade do código antes de qualquer alteração ser integrada.

## 📄 Licença

Este projeto está sob a licença MIT.
