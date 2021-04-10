const addBtn = document.querySelector('.add');
const inputContainer = document.querySelector('.input');

addBtn.addEventListener('click', () => {
    let inputField = document.createElement('input');
    inputContainer.append(inputField);
})