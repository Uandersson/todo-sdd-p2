# Especificação - To-Do List (Versão 2)

## Descrição Geral
Evolução da aplicação de gerenciamento de tarefas. Esta versão introduz persistência de dados, categorização por prioridade, filtros de visualização e manipulação avançada (edição e exclusão) das tarefas cadastradas, garantindo maior controle e usabilidade.

## Novas Funcionalidades e Regras de Negócio

### 1. Validação de Campos Obrigatórios
* **Descrição:** Impedir a criação de tarefas vazias.
* **Regra de Negócio:** O sistema não pode registrar uma tarefa se o campo de título contiver apenas espaços em branco ou estiver vazio.
* **Critério de Aceite:** Ao tentar adicionar uma tarefa inválida, o sistema deve exibir um alerta visual (ou mensagem de erro) e manter o estado atual da lista, sem adicionar itens em branco.

### 2. Definir Prioridade
* **Descrição:** Categorizar o nível de urgência da tarefa.
* **Regra de Negócio:** Cada tarefa deve ter uma prioridade atrelada: "Baixa", "Média" ou "Alta".
* **Critério de Aceite:** O formulário de cadastro deve conter um campo de seleção (dropdown) para a prioridade. Na listagem, a interface deve indicar visualmente a prioridade escolhida (ex: cores diferentes ou tags).

### 3. Editar Tarefas
* **Descrição:** Modificar o título de uma tarefa já existente.
* **Critério de Aceite:** Cada item da lista deve ter um botão "Editar". Ao clicar, o texto da tarefa deve se transformar em um campo de input (ou usar um `prompt`) permitindo a alteração. Ao confirmar, o novo título deve ser salvo e renderizado.

### 4. Excluir Tarefas
* **Descrição:** Remover permanentemente uma tarefa da lista.
* **Critério de Aceite:** Cada item deve possuir um botão "Excluir". Ao ser acionado, a tarefa correspondente deve ser removida da interface e da memória.

### 5. Filtrar Tarefas por Status
* **Descrição:** Alternar a visualização das tarefas com base em seu estado de conclusão.
* **Regra de Negócio:** O usuário deve poder escolher entre ver "Todas", apenas "Pendentes" ou apenas "Concluídas".
* **Critério de Aceite:** A interface deve fornecer botões ou um menu de seleção de filtros. A lista renderizada deve ser atualizada imediatamente para corresponder ao filtro ativo, sem perder os dados originais.

### 6. Persistir Dados Localmente
* **Descrição:** Manter os dados salvos mesmo após o recarregamento da página.
* **Regra de Negócio:** A aplicação deve utilizar a API `localStorage` do navegador para armazenar as tarefas.
* **Critério de Aceite / Cenário de Uso:** O usuário adiciona duas tarefas e fecha a aba do navegador. Ao reabrir a aplicação, as duas tarefas devem ser carregadas e exibidas exatamente com o mesmo status e prioridade definidos anteriormente.
