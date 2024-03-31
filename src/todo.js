import {todoCounter} from './css.js';

let todoList = [];

function Todo(title = 'Title: ', dueDate = 'Due Date: ', priority = 'Priority: ', description = 'Description: ', comments = 'Comments: ', todoId = `${todoCounter}`) {
    this.title = title;
    this.dueDate = dueDate; 
    this.priority = priority;
    this.description = description;
    this.comments = comments;
    this.todoId = todoId;
    let todo = [this.title, this.dueDate, this.priority, this.description, this.comments, this.todoId];
    this.makeTodo = function() {
        return todo;
    }
    this.addTodo = function() {
        todoList.push(todo);
    }
    this.replaceTodo = function() {
        let spot = 0;
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].includes(todoId)) {
                    spot = i;
            }
        }
        todoList[spot] = todo;
    }
    this.deleteTodo = function() {
        todoList.splice(todoId,1);
    }
}
function getId(id) {
    const buttonId = id;
    const regex = /[0-9]/g;
    const regexmatch = buttonId.match(regex);
    const todoId = regexmatch.join('');
    return todoId;
}
function getValues(todoId) {
    let title = document.getElementById(`title${todoId}`).value;
    let dueDate = document.getElementById(`dueDate${todoId}`).value;
    let priority = document.getElementById(`priority${todoId}`).value;
    let description = document.getElementById(`description${todoId}`).value;
    let comments = document.getElementById(`comments${todoId}`).value;
    let newTodo = new Todo(title, dueDate, priority, description, comments , todoId);
    return newTodo;
}
function librarySearch(todoId) {
    let spot = 0;
    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].includes(todoId)) {
            spot = i;
        }
    }
    const todo = todoList[spot];
    return todo;
}

export {Todo, getId, getValues, librarySearch};