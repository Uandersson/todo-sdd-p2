# To-Do List - Spec Driven Development (SDD)

Este projeto é uma aplicação de lista de tarefas (To-Do) desenvolvida como parte da avaliação de estruturação e testes guiados por especificação (SDD). O sistema evoluiu de uma versão básica para uma versão completa com filtros, prioridades, persistência local e testes automatizados.

## ✨ Funcionalidades Implementadas (V2)

1. **✅ Validação para impedir tarefas vazias** - Rejeita títulos vazios ou com apenas espaços
2. **✅ Edição de tarefas existentes** - Modo inline com Enter/Escape para salvar ou cancelar
3. **✅ Exclusão de tarefas** - Remove permanentemente com botão "Excluir"
4. **✅ Definição de prioridade** - Categorias Alta (vermelho), Média (laranja), Baixa (verde)
5. **✅ Filtro de exibição por status** - Visualizar Todas, Pendentes ou Concluídas
6. **✅ Persistência local dos dados** - localStorage para recuperar dados entre sessões

## 🚀 Como executar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório e acesse a pasta do projeto.
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Acesse a aplicação no navegador através do link `http://localhost:5173`.

## 🧪 Como rodar os testes

**Testes Unitários (Vitest):**
Para validar as regras de negócio de forma isolada:
```bash
npx vitest run
```

**Testes de Comportamento E2E (Cypress):**
Para simular as ações do usuário na interface (necessário que o servidor do Vite esteja rodando simultaneamente):
```bash
npx cypress open
```

## 📝 Documentação das Especificações
- [Especificação Versão 1](./spec-v1.md)
- [Especificação Versão 2](./spec-v2.md)

---

## 🧠 Reflexão Exigida

**Como a evolução da especificação impactou o desenvolvimento do projeto e os resultados obtidos com o uso da IA?**

A evolução estruturada da especificação foi o grande diferencial deste projeto. Na Versão 1, com requisitos simples, o código foi direto, mas aberto a inconsistências. Ao evoluir para a Versão 2 criando primeiro a documentação (regras para campos obrigatórios, filtros e prioridades) antes de codificar, o Spec Driven Development (SDD) eliminou a ambiguidade. 

Isso impactou diretamente a eficácia do uso da IA: ao invés de usar prompts genéricos que gerariam códigos que precisariam de muitas refatorações, a IA recebeu a `spec-v2.md` como contexto absoluto. O resultado foi a geração de um código altamente assertivo, limpo e que já contemplava todas as regras de negócio de primeira. Além disso, a especificação detalhada forneceu o roteiro exato para a criação dos cenários de testes no Cypress e Vitest, provando que uma boa documentação transforma a IA de um simples "gerador de código" em uma ferramenta precisa de engenharia de software.
