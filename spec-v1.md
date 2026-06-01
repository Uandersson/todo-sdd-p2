# Especificação - To-Do List (Versão 1)

## Descrição Geral
Aplicação web simples para gerenciamento de tarefas diárias (To-Do List). O objetivo inicial é fornecer as operações funcionais básicas de registro e acompanhamento visual das tarefas.

## Funcionalidades e Critérios de Aceite

### 1. Cadastrar Tarefas
* **Descrição:** O usuário deve ser capaz de inserir o título de uma nova tarefa.
* **Critério de Aceite:** Ao digitar o nome da tarefa em um campo de texto e interagir com o botão de submissão (ou pressionar Enter), a tarefa deve ser salva em memória com o status inicial de "pendente". O campo de texto deve ser limpo logo em seguida.

### 2. Listar Tarefas
* **Descrição:** O usuário deve visualizar todas as tarefas cadastradas na interface.
* **Critério de Aceite:** A aplicação deve renderizar dinamicamente uma lista exibindo o nome de cada tarefa registrada.

### 3. Marcar Tarefas como Concluídas
* **Descrição:** O usuário deve poder alterar o status de uma tarefa de "pendente" para "concluída".
* **Critério de Aceite:** Ao lado de cada tarefa, deve existir um elemento interativo (como um checkbox). Ao ser acionado, o visual da tarefa deve ser alterado (ex: texto com `line-through` ou mudança de cor) para indicar visualmente a sua conclusão.
