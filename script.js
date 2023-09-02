const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task !== '') {
    addTask(task);
    todoInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <span class="delete-btn">Delete</span>
  `;
  todoList.appendChild(li);

  const deleteButton = li.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(li);
  });
}
