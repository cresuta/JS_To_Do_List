const addBtn = document.querySelector('.add');
const userInput = document.querySelector('#input');
const listContainer = document.querySelector('.todo-list')

const icons = document.querySelector('.icons');
const todo = document.querySelector('.todo');



addBtn.addEventListener('click', () => {
    const deleteIcon = document.createElement('i');
    const editIcon = document.createElement('i');
    const completedIcon = document.createElement('i');

    completedIcon.classList.add('far', 'fa-check-square', 'icons');
    editIcon.classList.add('fas', 'fa-edit', 'icons');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icons');

    const paragraph = document.createElement('li');
    paragraph.classList.add('todo-item');
    paragraph.innerText = userInput.value;


    listContainer.prepend(paragraph);

    listContainer.prepend(deleteIcon);
    listContainer.prepend(editIcon);
    listContainer.prepend(completedIcon);


    paragraph.addEventListener('click', () => {
        paragraph.classList.toggle('crossed-out');
    });

});