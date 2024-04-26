const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${input.value.trim()}</span>`;
    li.appendChild(createButton('Edit'));
    li.appendChild(createButton('Delete'));
    list.appendChild(li);
    input.value = '';
  }
});

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const text = li.querySelector('span');
    if (e.target.textContent === 'Edit') {
      const inputField = document.createElement('input');
      inputField.value = text.textContent;
      li.replaceChild(inputField, text);
      inputField.focus();
      inputField.addEventListener('blur', () => {
        text.textContent = inputField.value;
        li.replaceChild(text, inputField);
      });
      inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          text.textContent = inputField.value;
          li.replaceChild(text, inputField);
        }
      });
    } else if (e.target.textContent === 'Delete') {
      li.remove();
    }
  }
});
