// const form = document.getElementById('todo-form');
// const input = document.getElementById('todo-input');
// const todoList = document.getElementById('todo-list');

// // Function to add a new todo
// function addTodo() {
//     const todoText = input.value.trim();
//     if (todoText !== '') {
//         const todoItem = document.createElement('li');
//         todoItem.innerHTML = `
//             <span>${todoText}</span>
//             <button class="delete-btn">Delete</button>
//         `;
//         todoList.appendChild(todoItem);
//         input.value = '';
//     }
// }

// // Function to delete a todo
// function deleteTodo(event) {
//     if (event.target.classList.contains('delete-btn')) {
//         event.target.parentElement.remove();
//     }
// }

// // Event listener for form submission
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     addTodo();
// });

// Event listener for delete buttons
// todoList.addEventListener('click', function(event) {
//     deleteTodo(event);
// });
document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.querySelector('.add-task-form');
    const taskInput = document.querySelector('.task-input');
    const taskList = document.querySelector('.task-list');
  
    const tasks = [];
  
    function addTask(task) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `<span>${task}</span>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>`;
      taskList.appendChild(taskItem);
      tasks.push(taskItem);
    }
  
    function deleteTask(taskItem) {
      taskItem.remove();
      tasks.splice(tasks.indexOf(taskItem), 1);
    }

    function editTask(taskItem) {
      const span = taskItem.querySelector('span');
      const newTask = prompt('Edit task:', span.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
      }
    }
  
    addTaskForm.addEventListener('submit', e => {
      e.preventDefault();
      const newTask = taskInput.value.trim();
      if (newTask !== '') {
        addTask(newTask);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', e => {
      if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('li');
        deleteTask(taskItem);
      }
      else if (e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.closest('li');
        editTask(taskItem);
      }
    });
});


