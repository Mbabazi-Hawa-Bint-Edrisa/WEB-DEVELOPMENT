document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.getElementById('add-task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
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
        deleteTask(e.target.parentElement);
      } else if (e.target.tagName === 'LI') {
        toggleDone(e.target);
      }
    });
  
    function addTask(task) {
      const taskItem = document.createElement('li');
      taskItem.textContent = task;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    }
  
    function deleteTask(taskItem) {
      taskItem.remove();
    }
  
    function toggleDone(taskItem) {
      taskItem.classList.toggle('done');
    }
  });
  