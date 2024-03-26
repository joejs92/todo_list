import {elementMaker, buttonMaker, addToDom, domDelete,todoCSS,addtodoTemplate} from './css.js';
import {getId, getValues, librarySearch} from './todo.js';

const div = document.querySelector('div');
div.addEventListener('click', event => {
    const target = event.target;
    if(target.tagName == 'BUTTON') {
        if(target.innerText == 'New To-do'){
            addtodoTemplate();
        }
        else if(target.innerText == 'Delete'){
            const id = target.id;
            const todoId = getId(id);
            const newTodo = getValues(todoId);
            newTodo.deleteTodo();
            domDelete('todo',todoId);
        }
        else if(target.innerText == 'Edit'){
            const id = target.id;
            const todoId = getId(id);
            const todo = librarySearch(todoId);
            domDelete('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = elementMaker(todoId, todo, 'INPUT');
            const finishedBox = buttonMaker(box,['Save'],todoId);
            element.appendChild(finishedBox);
            addToDom(element);
        }
        else if(target.innerText == 'Save' || target.innerText == 'Add'){
            const id = target.id;
            const todoId = getId(id);
            const newTodo = getValues(todoId);
            const todo = newTodo.makeTodo();
            newTodo.replaceTodo();
            domDelete('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = elementMaker(todoId, todo, 'p');
            const finishedBox = buttonMaker(box,['Edit','Delete'],todoId);
            element.appendChild(finishedBox);
            addToDom(element);
        }
    }
})
//Some issues with the 'edit' and 'save' functionalities