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

    const titleContainer = document.createElement('div');
    titleContainer.className = 'task-title-container';
    
    if (task.editing) {
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = task.title;
      editInput.className = 'edit-input';
      editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEditedTask(originalIndex, editInput.value);
        if (e.key === 'Escape') cancelEdit(originalIndex);
      });
      titleContainer.appendChild(editInput);
    } else {
      const titleSpan = document.createElement('span');
      titleSpan.textContent = task.title;
      titleSpan.className = 'task-title';
      titleContainer.appendChild(titleSpan);
    }
    
    // Prioridade (Critério 2)
    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = `[${task.priority}]`;
    prioritySpan.className = `priority-${task.priority}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    if (task.editing) {
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Salvar';
      saveBtn.addEventListener('click', () => {
        const input = li.querySelector('.edit-input');
        if (input) saveEditedTask(originalIndex, input.value);
      });

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancelar';
      cancelBtn.addEventListener('click', () => cancelEdit(originalIndex));

      actionsDiv.appendChild(saveBtn);
      actionsDiv.appendChild(cancelBtn);
    } else {
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
    }

    li.appendChild(checkbox);
    li.appendChild(titleContainer);
    li.appendChild(prioritySpan);
    li.appendChild(actionsDiv);
    
    taskList.appendChild(li);
  });
}

function saveEditedTask(index, newTitle) {
  const trimmedTitle = newTitle.trim();
  if (!trimmedTitle) {
    alert('O título não pode ficar vazio!');
    return;
  }

  tasks[index].title = trimmedTitle;
  delete tasks[index].editing;
  saveTasks();
  renderTasks();
}

function cancelEdit(index) {
  delete tasks[index].editing;
  renderTasks();
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
  tasks = tasks.map((task, i) => ({
    ...task,
    editing: i === index
  }));
  renderTasks();
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