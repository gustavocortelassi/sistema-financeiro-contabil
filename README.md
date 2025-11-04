# Sistema Contábil/Financeiro Integrado (Projeto Integrador)

## 🎯 Visão Geral do Projeto

Este projeto é um **Sistema de Contabilidade e Finanças** completo, desenvolvido como um **Projeto Integrador** acadêmico. Seu objetivo principal é demonstrar a implementação de um sistema financeiro robusto, com foco na **automação do princípio das partidas dobradas (débito/crédito)** para todos os lançamentos financeiros.

A arquitetura do sistema é **multi-empresa (multi-tenant)**, garantindo que múltiplas entidades possam gerenciar suas finanças de forma isolada e segura dentro da mesma aplicação.

## ✨ Principais Funcionalidades

O sistema foi construído para atender a requisitos essenciais de um software de gestão financeira e contábil:

| Funcionalidade | Descrição |
| :--- | :--- |
| **Gestão Multi-Empresa (Multi-Tenant)** | Isolamento completo de dados por empresa. Cada empresa opera com seu próprio conjunto de dados, garantindo segurança e privacidade. |
| **Plano de Contas Hierárquico** | Cada empresa pode personalizar seu próprio plano de contas em uma estrutura de árvore, utilizando a biblioteca `django-mptt`. |
| **Lançamentos Financeiros Automatizados** | **Cadastro de Títulos (Contas a Pagar/Receber)**: Gera automaticamente lançamentos contábeis de **provisão** (ex: Débito em Despesa, Crédito em Contas a Pagar). |
| **Baixa de Títulos (Pagamento/Recebimento)** | A baixa do título gera automaticamente a segunda partida contábil, zerando a provisão e movimentando a conta de **Caixa/Banco**. |
| **Controle de Acesso** | Sistema de autenticação robusto baseado em **JWT** e autorização granular por grupos de usuários e permissões configuráveis. |
| **Cadastros Auxiliares** | Gestão de Fornecedores e Clientes, vinculados individualmente a cada empresa. |
| **Relatórios Contábeis** | Geração de relatórios essenciais para análise financeira, como **Demonstração do Resultado do Exercício (DRE)** e **Balanço Patrimonial**. |

## 🛠️ Stack de Tecnologias

Este projeto utiliza uma arquitetura moderna e desacoplada, dividida em Backend (API) e Frontend (Interface do Usuário).

| Componente | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Backend (API)** | **Python 3.x, Django, Django Rest Framework (DRF)** | Responsável pela lógica de negócios, persistência de dados e automação contábil. |
| **Frontend (UI)** | **React (com Vite)** | Interface de usuário rápida e reativa. Utiliza `axios` para comunicação com a API e `react-router-dom` para navegação. |
| **Autenticação** | **JSON Web Tokens (JWT)** | Implementado com `django-rest-framework-simplejwt` para um sistema de autenticação stateless e seguro. |
| **Estrutura de Dados** | **`django-mptt`** | Utilizado para modelar a estrutura hierárquica do Plano de Contas. |
| **Ambiente** | **Docker e Docker Compose** | Planejado para facilitar a configuração e o desenvolvimento do ambiente. |

## 📂 Estrutura do Repositório

O projeto está organizado em duas pastas principais na raiz:

```
.
├── backend/        # Projeto Django/DRF (API)
├── frontend/       # Projeto React/Vite (Interface do Usuário)
└── README.md
```

## ⚙️ Instruções de Instalação e Execução

As instruções a seguir detalham como configurar e rodar o projeto em seu ambiente de desenvolvimento.

### 1. Backend (API)

O Backend é o coração do sistema, responsável pela lógica contábil.

1.  **Navegue para a pasta do Backend:**
    ```bash
    cd backend/
    ```

2.  **Crie e Ative um Ambiente Virtual:**
    É altamente recomendado usar um ambiente virtual para isolar as dependências do projeto.
    ```bash
    # Cria o ambiente virtual
    python -m venv .venv
    
    # Ativa o ambiente virtual (Linux/macOS)
    source .venv/bin/activate
    
    # Ativa o ambiente virtual (Windows - PowerShell)
    # .venv\Scripts\Activate.ps1
    ```

3.  **Instale as Dependências:**
    Certifique-se de que o arquivo `requirements.txt` esteja presente na pasta `backend/`.
    ```bash
    pip install -r requirements.txt
    ```

4.  **Execute as Migrações do Banco de Dados:**
    Isso criará as tabelas necessárias, incluindo as estruturas do `django-mptt`.
    ```bash
    python manage.py migrate
    ```

5.  **Crie um Superusuário:**
    Necessário para acessar o painel administrativo do Django e para o primeiro login no sistema.
    ```bash
    python manage.py createsuperuser
    ```

6.  **Inicie o Servidor:**
    O servidor da API estará disponível em `http://127.0.0.1:8000/`.
    ```bash
    python manage.py runserver
    ```

### 2. Frontend (Interface do Usuário)

O Frontend é a aplicação React que consome a API do Backend.

1.  **Navegue para a pasta do Frontend:**
    ```bash
    cd ../frontend/
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Servidor de Desenvolvimento:**
    O servidor de desenvolvimento do React (Vite) será iniciado, geralmente em `http://localhost:5173/` (ou outra porta disponível).
    ```bash
    npm run dev
    ```

Certifique-se de que o Backend esteja rodando antes de acessar o Frontend, pois a aplicação React dependerá da API para carregar os dados.

## 🤝 Contribuição

Este é um projeto acadêmico. Contribuições, sugestões e *pull requests* são bem-vindos para aprimorar o sistema e as práticas de desenvolvimento.

---
