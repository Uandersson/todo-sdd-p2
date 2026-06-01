// Persistência de Dados (Critério 6)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'Todas';

const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const filterInput = document.getElementById('filterInput');

// Função para salvar no LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Renderização baseada em Filtros (Critério 5)
function renderTasks() {
  taskList.innerHTML = '';
  
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'Pendentes') return !task.completed;
    if (currentFilter === 'Concluídas') return task.completed;
    return true; 
  });
  
  filteredTasks.forEach((task) => {
    // Pegar índice real para garantir edição e exclusão no item certo durante o filtro
    const originalIndex = tasks.indexOf(task);

    const li = document.createElement('li');
    if (task.completed) li.className = 'completed';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(originalIndex));
    
    const titleSpan = document.createElement('span');
    titleSpan.textContent = task.title;
    titleSpan.className = 'task-title';
    
    // Prioridade (Critério 2)
    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = `[${task.priority}]`;
    prioritySpan.className = `priority-${task.priority}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    // Editar (Critério 3)
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.addEventListener('click', () => editTask(originalIndex));

    // Excluir (Critério 4)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => deleteTask(originalIndex));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(titleSpan);
    li.appendChild(prioritySpan);
    li.appendChild(actionsDiv);
    
    taskList.appendChild(li);
  });
}

// Validação de Campos Obrigatórios (Critério 1)
function addTask() {
  const title = taskInput.value.trim();
  if (!title) {
    alert('A tarefa não pode estar vazia!');
    return;
  }
  
  const priority = priorityInput.value;
  
  tasks.push({ title, completed: false, priority });
  taskInput.value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Exclusão (Critério 4)
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Edição (Critério 3)
function editTask(index) {
  const newTitle = prompt('Edite o nome da tarefa:', tasks[index].title);
  if (newTitle !== null) {
    const trimmedTitle = newTitle.trim();
    if (trimmedTitle) {
      tasks[index].title = trimmedTitle;
      saveTasks();
      renderTasks();
    } else {
      alert('O título não pode ficar vazio!');
    }
  }
}

// Listeners de Eventos
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
filterInput.addEventListener('change', (e) => {
  currentFilter = e.target.value;
  renderTasks();
});

// Renderização inicial
renderTasks();