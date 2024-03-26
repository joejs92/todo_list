
//todo
let todoList = [];
//todo
let todoCounter = 0;
//todo
function Todo(title = 'Author: ', dueDate = 'Title: ', priority = 'Pages: ', description = 'Is read: ', comments = 'Comments: ', todoId = 'template') {
    this.title = title;
    this.dueDate = dueDate; 
    this.priority = priority;
    this.description = description;
    this.comments = comments;
    let todo = [this.title, this.dueDate, this.priority, this.description, this.comments, `${todoCounter}`];
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
//todo
function getId(id) {
    const buttonId = id;
    const regex = /[0-9]/g;
    const regexmatch = buttonId.match(regex);
    const todoId = regexmatch.join('');
    return todoId;
}
//todo
function getValues(todoId) {
    let title = document.getElementById(`author${todoId}`).value;
    let dueDate = document.getElementById(`title${todoId}`).value;
    let priority = document.getElementById(`pages${todoId}`).value;
    let description = document.getElementById(`read${todoId}`).value;
    let comments = document.getElementById(`comments${todoId}`).value;
    let newTodo = new Todo(title, dueDate, priority, description, comments);
    return newTodo;
}
//CSS
function elementMaker(todoId, todo, elemType) {
    const elementIds = ['author', 'title','pages','read','comments','0'];
    const boxElement = document.createElement('div');
    boxElement.setAttribute('id',`box${todoId}`);
    for(let i = 0;i<elementIds.length-1;i++){
        const todoContent = document.createElement(`${elemType}`);
        todoContent.setAttribute('id',`${elementIds[i]}${todoId}`);
        if(elemType == 'INPUT'){
            todoContent.setAttribute('type','text');
            todoContent.setAttribute('value',todo[i]);
        }
        else{
            todoContent.textContent = `${todo[i]}`;
        }
        boxElement.appendChild(todoContent);
    }
    return boxElement;
}
//CSS
function buttonMaker(element, btnText, todoId) {
    for(let i = 0; i < btnText.length; i++) {
        const btn = document.createElement('button');
        const buttonText = document.createTextNode(`${btnText[i]}`);
        btn.setAttribute('class',`${btnText[i]}Button`);
        btn.setAttribute('id',`${btnText[i]}${todoId}`);
        btn.appendChild(buttonText);
        element.appendChild(btn);
    }
    return element;
}
//CSS
function addToDom(element) {
    const body = document.querySelector('#project');
    body.appendChild(element);
    todoCounter += 1;
}
//CSS
function domDelete(className, todoId) {
    const doomedElement = document.querySelector(`#${className}${todoId}`);
    doomedElement.remove();
}
//CSS
function todoCSS(className, todoId) {
    const element = document.createElement('div');
    element.setAttribute('class',className);
    element.setAttribute('id',`${className}${todoId}`);
    element.style.width = '540px';
    element.style.padding = '4px';
    element.style.margin='8px';
    element.style.borderWidth = '1px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'black';
    return element;
}
//todo
function librarySearch(todoId) {
    let spot = 0;
    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].includes(todoId)) {
            spot = i;
        }
    }
    return spot;
}
//CSS
function addtodoTemplate() {
    const newTodo = new Todo();
    const todo = newTodo.makeTodo();
    const element = todoCSS('todo', todoCounter);
    const box = elementMaker(todoCounter, todo, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],todoCounter);
    element.appendChild(finishedBox);
    addToDom(element);
}
//Stays
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
            const spot = librarySearch(todoId);
            const todo = todoList[spot];
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