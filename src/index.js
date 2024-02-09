import './style.css';
import { addTemplate } from './todo';

function addDom() {
    const x = document.querySelector('#project');
    const value = addTemplate();
    x.appendChild(value);
}

const addTodobutton = document.querySelector('#todoCreate');
addTodobutton.addEventListener("click",addDom);