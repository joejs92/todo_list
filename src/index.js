import './style.css';
import { addTemplate, addTodo } from './todo';

function cancel() {
    const x = document.querySelector(`.todo`);
    x.remove();
}

function deleteFunction(todoId) {
    const x = document.querySelector(`#todoCard${todoId}`);
    x.remove();
}

function getElement(editId) {
    console.log(editId);
}

function addDom() {
    const project = document.querySelector('#project');
    const todoNumber = document.querySelectorAll('.todo');
    const todoArray = Array.from(todoNumber);
    const number = todoArray.length;
    if(number == 0){
        const value = addTemplate();
        project.appendChild(value);
        
        const cancelButton = document.querySelectorAll('.cancelButton');
        cancelButton.forEach((cancelButton) => {
            cancelButton.addEventListener("click",() =>{
                const buttonId = cancelButton.id;
                const regex = /[0-9]/g;
                const regexmatch = buttonId.match(regex);
                const todoId = regexmatch.join('');
                cancel();
            });
        })
        const addButton = document.querySelector('.addButton');
        addButton.addEventListener("click",() => {
            const completeTodo = addTodo();
            cancel();
            project.appendChild(completeTodo);
            
        const deleteButton = document.querySelectorAll('.deleteButton');
        deleteButton.forEach((deleteButton) => {
            deleteButton.addEventListener("click",() =>{
                const buttonId = deleteButton.id;
                const regex = /[0-9]/g;
                const regexmatch = buttonId.match(regex);
                const todoId = regexmatch.join('');
                deleteFunction(todoId);
            });
        })
        const editButton = document.querySelectorAll('.editButton');
        for (let i=0; i<editButton.length; i++) {
            editButton[i].addEventListener('click',() => {
                const buttonId = editButton[i].id;
                const regex = /[0-9]/g;
                const regexmatch = buttonId.match(regex);
                const editId = regexmatch.join('');
                getElement(editId);
            });
        }
        })
    }
}

const addTodobutton = document.querySelector('#todoCreate');
addTodobutton.addEventListener("click",addDom);