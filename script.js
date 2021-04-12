const addBtn = document.querySelector('.add');
const inputContainer = document.querySelector('.input');
const icons = document.querySelector('.icons');
const todo = document.querySelector('.todo');

const deleteIcon = document.createElement('i');
const editIcon = document.createElement('i');
const completedIcon = document.createElement('i');

addBtn.addEventListener('click', () => {
    deleteIcon.classList.add('far', 'fa-trash-alt', 'icons');
    editIcon.classList.add('far', 'fa-edit', 'icons');
    completedIcon.classList.add('far', 'fa-check-square', 'icons');
    icons.appendChild(deleteIcon);
    icons.appendChild(editIcon);
    icons.appendChild(completedIcon);
    // let inputField = document.createElement('input');
    // inputContainer.append(inputField);
})