const addBtn = document.querySelector('.add');
const userInput = document.querySelector('#input');
const listContainer = document.querySelector('.todo-list')

const icons = document.querySelector('.icons');
const todo = document.querySelector('.todo');

addBtn.addEventListener('click', () => {
    const deleteIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const completedIcon = document.createElement('i');
    const textLine = document.createElement('span');

    completedIcon.classList.add('far', 'fa-check-square', 'icons');
    editIcon.classList.add('fas', 'fa-edit', 'icons');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icons');

    const paragraph = document.createElement('li');
    paragraph.classList.add('todo-item');
    const text = paragraph.appendChild(textLine);
    text.innerText = userInput.value;
    text.classList.add('text-item');
    // input field resets after each todo added
    userInput.value = null;

    // add todo item line
    listContainer.prepend(paragraph);

    // Add item's buttons
    paragraph.prepend(deleteIcon);
    paragraph.prepend(editIcon);
    paragraph.prepend(completedIcon);

    // Delete line item
    deleteIcon.addEventListener('click', () => {
        paragraph.remove();
    });

    // Edit line item
    editIcon.addEventListener('click', () => {
        // Add edit functionality here...
        null;
    });

    completedIcon.addEventListener('click', () => {
        text.classList.toggle('crossed-out');
    });

});