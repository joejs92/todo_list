import './style.css';
import { addTemplate } from './todo';

function cancel(todoId) {
    const x = document.querySelector(`#todo${todoId}`);
    x.remove();
}

function addDom() {
    const project = document.querySelector('#project');
    const value = addTemplate();
    project.appendChild(value);
    
    const cancelButton = document.querySelectorAll('.cancelButton');
    cancelButton.forEach((cancelButton) => {
        cancelButton.addEventListener("click",() =>{
            const buttonId = cancelButton.id;
            const regex = /[0-9]/g;
            const regexmatch = buttonId.match(regex);
            const todoId = regexmatch.join('');
            cancel(todoId);
        });
    })
}

const addTodobutton = document.querySelector('#todoCreate');
addTodobutton.addEventListener("click",addDom);