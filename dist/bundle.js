/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*This is the code from Constructor Experiments Source2.
You have to go through and change all the variables to 
make sense with the project, such as splitting off the 
CSS and changing the variable names.*/

let todoList = [];

let todoCounter = 0;

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

function getId(id) {
    const buttonId = id;
    const regex = /[0-9]/g;
    const regexmatch = buttonId.match(regex);
    const todoId = regexmatch.join('');
    return todoId;
}

function getValues(todoId) {
    let title = document.getElementById(`author${todoId}`).value;
    let dueDate = document.getElementById(`title${todoId}`).value;
    let priority = document.getElementById(`pages${todoId}`).value;
    let description = document.getElementById(`read${todoId}`).value;
    let comments = document.getElementById(`comments${todoId}`).value;
    let newTodo = new Todo(title, dueDate, priority, description, comments);
    return newTodo;
}

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

function addToDom(element) {
    const body = document.querySelector('#project');
    body.appendChild(element);
    todoCounter += 1;
}

function domDelete(className, todoId) {
    const doomedElement = document.querySelector(`#${className}${todoId}`);
    doomedElement.remove();
}

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

function librarySearch(todoId) {
    let spot = 0;
    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].includes(todoId)) {
            spot = i;
        }
    }
    return spot;
}

function addtodoTemplate() {
    const newTodo = new Todo();
    const todo = newTodo.makeTodo();
    const element = todoCSS('todo', todoCounter);
    const box = elementMaker(todoCounter, todo, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],todoCounter);
    element.appendChild(finishedBox);
    addToDom(element);
}

//addtodoTemplate();

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLFlBQVk7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsT0FBTztBQUN4RCxrREFBa0QsT0FBTztBQUN6RCxtREFBbUQsT0FBTztBQUMxRCxxREFBcUQsT0FBTztBQUM1RCxzREFBc0QsT0FBTztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsa0JBQWtCLHNCQUFzQjtBQUN4QyxzREFBc0QsU0FBUztBQUMvRCx5Q0FBeUMsY0FBYyxFQUFFLE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0Esc0RBQXNELFdBQVc7QUFDakUsb0NBQW9DLFdBQVc7QUFDL0MsaUNBQWlDLFdBQVcsRUFBRSxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxVQUFVLEVBQUUsT0FBTztBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLEVBQUUsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlRoaXMgaXMgdGhlIGNvZGUgZnJvbSBDb25zdHJ1Y3RvciBFeHBlcmltZW50cyBTb3VyY2UyLlxuWW91IGhhdmUgdG8gZ28gdGhyb3VnaCBhbmQgY2hhbmdlIGFsbCB0aGUgdmFyaWFibGVzIHRvIFxubWFrZSBzZW5zZSB3aXRoIHRoZSBwcm9qZWN0LCBzdWNoIGFzIHNwbGl0dGluZyBvZmYgdGhlIFxuQ1NTIGFuZCBjaGFuZ2luZyB0aGUgdmFyaWFibGUgbmFtZXMuKi9cblxubGV0IHRvZG9MaXN0ID0gW107XG5cbmxldCB0b2RvQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUgPSAnQXV0aG9yOiAnLCBkdWVEYXRlID0gJ1RpdGxlOiAnLCBwcmlvcml0eSA9ICdQYWdlczogJywgZGVzY3JpcHRpb24gPSAnSXMgcmVhZDogJywgY29tbWVudHMgPSAnQ29tbWVudHM6ICcsIHRvZG9JZCA9ICd0ZW1wbGF0ZScpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTsgXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gICAgbGV0IHRvZG8gPSBbdGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5LCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmNvbW1lbnRzLCBgJHt0b2RvQ291bnRlcn1gXTtcbiAgICB0aGlzLm1ha2VUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3BvdCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uaW5jbHVkZXModG9kb0lkKSkge1xuICAgICAgICAgICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2RvTGlzdFtzcG90XSA9IHRvZG87XG4gICAgfVxuICAgIHRoaXMuZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UodG9kb0lkLDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcbiAgICBjb25zdCBidXR0b25JZCA9IGlkO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1swLTldL2c7XG4gICAgY29uc3QgcmVnZXhtYXRjaCA9IGJ1dHRvbklkLm1hdGNoKHJlZ2V4KTtcbiAgICBjb25zdCB0b2RvSWQgPSByZWdleG1hdGNoLmpvaW4oJycpO1xuICAgIHJldHVybiB0b2RvSWQ7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlcyh0b2RvSWQpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXV0aG9yJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFnZXMke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVhZCR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb21tZW50cyR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29tbWVudHMpO1xuICAgIHJldHVybiBuZXdUb2RvO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCBlbGVtVHlwZSkge1xuICAgIGNvbnN0IGVsZW1lbnRJZHMgPSBbJ2F1dGhvcicsICd0aXRsZScsJ3BhZ2VzJywncmVhZCcsJ2NvbW1lbnRzJywnMCddO1xuICAgIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGBib3gke3RvZG9JZH1gKTtcbiAgICBmb3IobGV0IGkgPSAwO2k8ZWxlbWVudElkcy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbVR5cGV9YCk7XG4gICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2VsZW1lbnRJZHNbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGlmKGVsZW1UeXBlID09ICdJTlBVVCcpe1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsdG9kb1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRvZG9Db250ZW50LnRleHRDb250ZW50ID0gYCR7dG9kb1tpXX1gO1xuICAgICAgICB9XG4gICAgICAgIGJveEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYm94RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnV0dG9uTWFrZXIoZWxlbWVudCwgYnRuVGV4dCwgdG9kb0lkKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJ0blRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtidG5UZXh0W2ldfWApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7YnRuVGV4dFtpXX1CdXR0b25gKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke2J0blRleHRbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb20oZWxlbWVudCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgdG9kb0NvdW50ZXIgKz0gMTtcbn1cblxuZnVuY3Rpb24gZG9tRGVsZXRlKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZG9vbWVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBkb29tZWRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2RvQ1NTKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzU0MHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGxpYnJhcnlTZWFyY2godG9kb0lkKSB7XG4gICAgbGV0IHNwb3QgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5pbmNsdWRlcyh0b2RvSWQpKSB7XG4gICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3BvdDtcbn1cblxuZnVuY3Rpb24gYWRkdG9kb1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbygpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IHRvZG9DU1MoJ3RvZG8nLCB0b2RvQ291bnRlcik7XG4gICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9Db3VudGVyLCB0b2RvLCAnSU5QVVQnKTtcbiAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ0FkZCcsJ0RlbGV0ZSddLHRvZG9Db3VudGVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICBhZGRUb0RvbShlbGVtZW50KTtcbn1cblxuLy9hZGR0b2RvVGVtcGxhdGUoKTtcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Jyk7XG5kaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmKHRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKSB7XG4gICAgICAgIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ05ldyBUby1kbycpe1xuICAgICAgICAgICAgYWRkdG9kb1RlbXBsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdEZWxldGUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGdldFZhbHVlcyh0b2RvSWQpO1xuICAgICAgICAgbmV3VG9kby5kZWxldGVUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ3RvZG8nLHRvZG9JZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdFZGl0Jyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHNwb3QgPSBsaWJyYXJ5U2VhcmNoKHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0xpc3Rbc3BvdF07XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ0lOUFVUJyk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ1NhdmUnXSx0b2RvSWQpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgICAgICAgICBhZGRUb0RvbShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ1NhdmUnIHx8IHRhcmdldC5pbm5lclRleHQgPT0gJ0FkZCcpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgICAgICAgICAgbmV3VG9kby5yZXBsYWNlVG9kbygpO1xuICAgICAgICAgICAgZG9tRGVsZXRlKCdib3gnLHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8ke3RvZG9JZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcih0b2RvSWQsIHRvZG8sICdwJyk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ0VkaXQnLCdEZWxldGUnXSx0b2RvSWQpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgICAgICAgICBhZGRUb0RvbShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9