import './style.css';
import { addTemplate } from './todo';

function cancel() {
    const x = document.querySelector('.cancelButton');
    const y = x.closest('.todo');
    y.remove();
    return y;
}

function addDom() {
    const x = document.querySelector('#project');
    const value = addTemplate();
    x.appendChild(value);
    
    const cancelButton = document.querySelectorAll('.cancelButton');
    cancelButton.forEach((cancelButton) => {
        cancelButton.addEventListener("click",() =>{
            cancel();
        });
    })
}

const addTodobutton = document.querySelector('#todoCreate');
addTodobutton.addEventListener("click",addDom);