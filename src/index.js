import './style.css';
import { addTemplate, addTodo } from './todo';

function cancel() {
    const x = document.querySelector(`.todo`);
    x.remove();
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
        })
    }
}

const addTodobutton = document.querySelector('#todoCreate');
addTodobutton.addEventListener("click",addDom);