import {elementMaker, buttonMaker, domDelete,addtodoTemplate} from './css.js';
import {getId, getValues, librarySearch} from './todo.js';
import {addProjectTemplate, getValued, elementsMaker} from './project.js';

const div = document.querySelector('div');
div.addEventListener('click', event => {
    const target = event.target;
    if(target.tagName == 'BUTTON') {
        if(target.innerText == 'New To-do'){
           // addtodoTemplate();
           console.log('works');
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
        }
        else if(target.innerText == 'Save'){
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
        }
        else if(target.innerText == 'Add'){
            const id = target.id;
            const todoId = getId(id);
            const newTodo = getValues(todoId);
            const todo = newTodo.makeTodo();
            newTodo.addTodo();
            domDelete('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = elementMaker(todoId, todo, 'p');
            const finishedBox = buttonMaker(box,['Edit','Delete'],todoId);
            element.appendChild(finishedBox);
        }
        else if(target.innerText == 'New Project'){
            addProjectTemplate();
        }
        else if(target.innerText == 'Remove'){
            const id = target.id;
            const projectId = getId(id);
            const newProject = getValued(projectId);
            newProject.deleteProject();
            domDelete('project',projectId);
        }
        else if(target.innerText == 'Create'){
            const id = target.id;
            const projectId = getId(id);
            const newProject = getValued(projectId);
            const project = newProject.makeProject();
            newProject.addProject();
            domDelete('projectBox',projectId);
            const element = document.querySelector(`#project${projectId}`);
            const box = elementsMaker(projectId, project, 'p');
            const finishedBox = buttonMaker(box,['New To-do'],projectId);
            element.appendChild(finishedBox);
        }
    }
})
