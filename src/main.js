// Array para guardar as tarefas em memória (Critério de Aceite 1)
let tasks = [];

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Função para renderizar as tarefas (Critério de Aceite 2 e 3)
function renderTasks() {
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(index));
    
    const span = document.createElement('span');
    span.textContent = task.title;
    if (task.completed) {
      span.className = 'completed';
    }
    
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}

// Função para adicionar nova tarefa (Critério de Aceite 1)
function addTask() {
  const title = taskInput.value.trim();
  if (title) {
    tasks.push({ title: title, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Função para marcar como concluída (Critério de Aceite 3)
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Event Listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});