/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDom: () => (/* binding */ addToDom),
/* harmony export */   addtodoTemplate: () => (/* binding */ addtodoTemplate),
/* harmony export */   buttonMaker: () => (/* binding */ buttonMaker),
/* harmony export */   domDelete: () => (/* binding */ domDelete),
/* harmony export */   elementMaker: () => (/* binding */ elementMaker),
/* harmony export */   projectCSS: () => (/* binding */ projectCSS),
/* harmony export */   todoCSS: () => (/* binding */ todoCSS),
/* harmony export */   todoCounter: () => (/* binding */ todoCounter)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


let todoCounter = 0;

function elementMaker(todoId, todo, elemType) {
    const elementIds = ['title', 'dueDate','priority','description','comments','0'];
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

function addToDom(element, targetElement) {
    const body = document.querySelector(`#${targetElement}`);
    body.appendChild(element);
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

function projectCSS(className, projectId) {
    const element = document.createElement('div');
    element.setAttribute('class',className);
    element.setAttribute('id',`${className}${projectId}`);
    element.style.width = '800px';
    element.style.height = '200px';
    element.style.padding = '4px';
    element.style.margin='8px';
    element.style.borderWidth = '1px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'black';
    return element;
}

function addtodoTemplate() {
    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo();
    const todo = newTodo.makeTodo();
    const element = todoCSS('todo', todoCounter);
    const box = elementMaker(todoCounter, todo, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],todoCounter);
    element.appendChild(finishedBox);
    addToDom(element);
    todoCounter += 1;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectTemplate: () => (/* binding */ addProjectTemplate),
/* harmony export */   elementsMaker: () => (/* binding */ elementsMaker),
/* harmony export */   getValued: () => (/* binding */ getValued)
/* harmony export */ });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./src/css.js");


let projectList = [];
let projectCounter = 0;

function Project(title = 'Title: ', projectId = `${projectCounter}`) {
    this.title = title;
    this.projectId = projectId;
    const project = [title, projectId];
    this.makeProject = function() {
        return project;
    }
    this.addProject = function() {
        projectList.push(project);
    }
    this.replaceProject = function() {
        let spot = 0;
        for(let i = 0; i < projectList.length; i++) {
            if(projectList[i].includes(projectId)) {
                    spot = i;
            }
        }
        projectList[spot] = project;
    }
    this.deleteProject = function() {
        projectList.splice(projectId,1);
    }
}

function elementsMaker(projectId, project, elemType) {
    const elementIds = ['titled', '0'];
    const boxElement = document.createElement('div');
    boxElement.setAttribute('id',`projectBox${projectId}`);
    for(let i = 0;i<elementIds.length-1;i++){
        const projectContent = document.createElement(`${elemType}`);
        projectContent.setAttribute('id',`${elementIds[i]}${projectId}`);
        if(elemType == 'INPUT'){
            projectContent.setAttribute('type','text');
            projectContent.setAttribute('value',project[i]);
        }
        else{
            projectContent.textContent = `${project[i]}`;
        }
        boxElement.appendChild(projectContent);
    }
    return boxElement;
}

function addProjectTemplate() {
    const newProject = new Project();
    const project = newProject.makeProject();
    const element = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.projectCSS)('project', projectCounter);
    const box = elementsMaker(projectCounter, project, 'INPUT');
    const finishedElement = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['Create','Remove'],projectCounter);
    element.appendChild(finishedElement);
    (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.addToDom)(element, 'body');
    projectCounter += 1;
}

function getValued(projectId) {
    let title = document.getElementById(`titled${projectId}`).value;
    let newProject = new Project(title);
    return newProject;
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   getId: () => (/* binding */ getId),
/* harmony export */   getValues: () => (/* binding */ getValues),
/* harmony export */   librarySearch: () => (/* binding */ librarySearch)
/* harmony export */ });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./src/css.js");


let todoList = [];

function Todo(title = 'Title: ', dueDate = 'Due Date: ', priority = 'Priority: ', description = 'Description: ', comments = 'Comments: ', todoId = `${_css_js__WEBPACK_IMPORTED_MODULE_0__.todoCounter}`) {
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
    let title = document.getElementById(`author${todoId}`).value;
    let dueDate = document.getElementById(`title${todoId}`).value;
    let priority = document.getElementById(`pages${todoId}`).value;
    let description = document.getElementById(`read${todoId}`).value;
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./src/css.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




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
            const todoId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getValues)(todoId);
            newTodo.deleteTodo();
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('todo',todoId);
        }
        else if(target.innerText == 'Edit'){
            const id = target.id;
            const todoId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.librarySearch)(todoId);
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)(todoId, todo, 'INPUT');
            const finishedBox = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['Save'],todoId);
            element.appendChild(finishedBox);
        }
        else if(target.innerText == 'Save'){
            const id = target.id;
            const todoId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getValues)(todoId);
            const todo = newTodo.makeTodo();
            newTodo.replaceTodo();
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)(todoId, todo, 'p');
            const finishedBox = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['Edit','Delete'],todoId);
            element.appendChild(finishedBox);
        }
        else if(target.innerText == 'Add'){
            const id = target.id;
            const todoId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getValues)(todoId);
            const todo = newTodo.makeTodo();
            newTodo.addTodo();
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('box',todoId);
            const element = document.querySelector(`#todo${todoId}`);
            const box = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)(todoId, todo, 'p');
            const finishedBox = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['Edit','Delete'],todoId);
            element.appendChild(finishedBox);
        }
        else if(target.innerText == 'New Project'){
            (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addProjectTemplate)();
        }
        else if(target.innerText == 'Remove'){
            const id = target.id;
            const projectId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getValued)(projectId);
            newProject.deleteProject();
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('project',projectId);
        }
        else if(target.innerText == 'Create'){
            const id = target.id;
            const projectId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getValued)(projectId);
            const project = newProject.makeProject();
            newProject.addProject();
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.domDelete)('projectBox',projectId);
            const element = document.querySelector(`#project${projectId}`);
            const box = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.elementsMaker)(projectId, project, 'p');
            const finishedBox = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['New To-do'],projectId);
            element.appendChild(finishedBox);
        }
    }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgdG9kb0NvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCBlbGVtVHlwZSkge1xuICAgIGNvbnN0IGVsZW1lbnRJZHMgPSBbJ3RpdGxlJywgJ2R1ZURhdGUnLCdwcmlvcml0eScsJ2Rlc2NyaXB0aW9uJywnY29tbWVudHMnLCcwJ107XG4gICAgY29uc3QgYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYGJveCR7dG9kb0lkfWApO1xuICAgIGZvcihsZXQgaSA9IDA7aTxlbGVtZW50SWRzLmxlbmd0aC0xO2krKyl7XG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtVHlwZX1gKTtcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7ZWxlbWVudElkc1tpXX0ke3RvZG9JZH1gKTtcbiAgICAgICAgaWYoZWxlbVR5cGUgPT0gJ0lOUFVUJyl7XG4gICAgICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyx0b2RvW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQudGV4dENvbnRlbnQgPSBgJHt0b2RvW2ldfWA7XG4gICAgICAgIH1cbiAgICAgICAgYm94RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiBib3hFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidXR0b25NYWtlcihlbGVtZW50LCBidG5UZXh0LCB0b2RvSWQpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnRuVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2J0blRleHRbaV19YCk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxgJHtidG5UZXh0W2ldfUJ1dHRvbmApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7YnRuVGV4dFtpXX0ke3RvZG9JZH1gKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRUb0RvbShlbGVtZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldEVsZW1lbnR9YCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZG9tRGVsZXRlKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZG9vbWVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBkb29tZWRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2RvQ1NTKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzU0MHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDU1MoY2xhc3NOYW1lLCBwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7Y2xhc3NOYW1lfSR7cHJvamVjdElkfWApO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnODAwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZHRvZG9UZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oKTtcbiAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0b2RvQ1NTKCd0b2RvJywgdG9kb0NvdW50ZXIpO1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcih0b2RvQ291bnRlciwgdG9kbywgJ0lOUFVUJyk7XG4gICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydBZGQnLCdEZWxldGUnXSx0b2RvQ291bnRlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgYWRkVG9Eb20oZWxlbWVudCk7XG4gICAgdG9kb0NvdW50ZXIgKz0gMTtcbn1cblxuZXhwb3J0IHtlbGVtZW50TWFrZXIsIGJ1dHRvbk1ha2VyLCBhZGRUb0RvbSwgZG9tRGVsZXRlLHRvZG9DU1MsYWRkdG9kb1RlbXBsYXRlLHRvZG9Db3VudGVyLCBwcm9qZWN0Q1NTfTsiLCJpbXBvcnQge3Byb2plY3RDU1MsIGJ1dHRvbk1ha2VyLCBhZGRUb0RvbX0gZnJvbSAnLi9jc3MuanMnO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcbmxldCBwcm9qZWN0Q291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUgPSAnVGl0bGU6ICcsIHByb2plY3RJZCA9IGAke3Byb2plY3RDb3VudGVyfWApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgY29uc3QgcHJvamVjdCA9IFt0aXRsZSwgcHJvamVjdElkXTtcbiAgICB0aGlzLm1ha2VQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICB0aGlzLmFkZFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3BvdCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocHJvamVjdExpc3RbaV0uaW5jbHVkZXMocHJvamVjdElkKSkge1xuICAgICAgICAgICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0TGlzdFtzcG90XSA9IHByb2plY3Q7XG4gICAgfVxuICAgIHRoaXMuZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdElkLDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudHNNYWtlcihwcm9qZWN0SWQsIHByb2plY3QsIGVsZW1UeXBlKSB7XG4gICAgY29uc3QgZWxlbWVudElkcyA9IFsndGl0bGVkJywgJzAnXTtcbiAgICBjb25zdCBib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgcHJvamVjdEJveCR7cHJvamVjdElkfWApO1xuICAgIGZvcihsZXQgaSA9IDA7aTxlbGVtZW50SWRzLmxlbmd0aC0xO2krKyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtVHlwZX1gKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7ZWxlbWVudElkc1tpXX0ke3Byb2plY3RJZH1gKTtcbiAgICAgICAgaWYoZWxlbVR5cGUgPT0gJ0lOUFVUJyl7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0W2ldfWA7XG4gICAgICAgIH1cbiAgICAgICAgYm94RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiBib3hFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QubWFrZVByb2plY3QoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gcHJvamVjdENTUygncHJvamVjdCcsIHByb2plY3RDb3VudGVyKTtcbiAgICBjb25zdCBib3ggPSBlbGVtZW50c01ha2VyKHByb2plY3RDb3VudGVyLCBwcm9qZWN0LCAnSU5QVVQnKTtcbiAgICBjb25zdCBmaW5pc2hlZEVsZW1lbnQgPSBidXR0b25NYWtlcihib3gsWydDcmVhdGUnLCdSZW1vdmUnXSxwcm9qZWN0Q291bnRlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEVsZW1lbnQpO1xuICAgIGFkZFRvRG9tKGVsZW1lbnQsICdib2R5Jyk7XG4gICAgcHJvamVjdENvdW50ZXIgKz0gMTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVkKHByb2plY3RJZCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZWQke3Byb2plY3RJZH1gKS52YWx1ZTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZXhwb3J0IHthZGRQcm9qZWN0VGVtcGxhdGUsIGdldFZhbHVlZCwgZWxlbWVudHNNYWtlcn07IiwiaW1wb3J0IHt0b2RvQ291bnRlcn0gZnJvbSAnLi9jc3MuanMnO1xuXG5sZXQgdG9kb0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gVG9kbyh0aXRsZSA9ICdUaXRsZTogJywgZHVlRGF0ZSA9ICdEdWUgRGF0ZTogJywgcHJpb3JpdHkgPSAnUHJpb3JpdHk6ICcsIGRlc2NyaXB0aW9uID0gJ0Rlc2NyaXB0aW9uOiAnLCBjb21tZW50cyA9ICdDb21tZW50czogJywgdG9kb0lkID0gYCR7dG9kb0NvdW50ZXJ9YCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlOyBcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgICB0aGlzLnRvZG9JZCA9IHRvZG9JZDtcbiAgICBsZXQgdG9kbyA9IFt0aGlzLnRpdGxlLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuY29tbWVudHMsIHRoaXMudG9kb0lkXTtcbiAgICB0aGlzLm1ha2VUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3BvdCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uaW5jbHVkZXModG9kb0lkKSkge1xuICAgICAgICAgICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2RvTGlzdFtzcG90XSA9IHRvZG87XG4gICAgfVxuICAgIHRoaXMuZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UodG9kb0lkLDEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldElkKGlkKSB7XG4gICAgY29uc3QgYnV0dG9uSWQgPSBpZDtcbiAgICBjb25zdCByZWdleCA9IC9bMC05XS9nO1xuICAgIGNvbnN0IHJlZ2V4bWF0Y2ggPSBidXR0b25JZC5tYXRjaChyZWdleCk7XG4gICAgY29uc3QgdG9kb0lkID0gcmVnZXhtYXRjaC5qb2luKCcnKTtcbiAgICByZXR1cm4gdG9kb0lkO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVzKHRvZG9JZCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdXRob3Ike3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZSR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwYWdlcyR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWFkJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnRzJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb21tZW50cyAsIHRvZG9JZCk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG59XG5mdW5jdGlvbiBsaWJyYXJ5U2VhcmNoKHRvZG9JZCkge1xuICAgIGxldCBzcG90ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uaW5jbHVkZXModG9kb0lkKSkge1xuICAgICAgICAgICAgc3BvdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0W3Nwb3RdO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQge1RvZG8sIGdldElkLCBnZXRWYWx1ZXMsIGxpYnJhcnlTZWFyY2h9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtlbGVtZW50TWFrZXIsIGJ1dHRvbk1ha2VyLCBkb21EZWxldGUsYWRkdG9kb1RlbXBsYXRlfSBmcm9tICcuL2Nzcy5qcyc7XG5pbXBvcnQge2dldElkLCBnZXRWYWx1ZXMsIGxpYnJhcnlTZWFyY2h9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQge2FkZFByb2plY3RUZW1wbGF0ZSwgZ2V0VmFsdWVkLCBlbGVtZW50c01ha2VyfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbmRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnTmV3IFRvLWRvJyl7XG4gICAgICAgICAgIC8vIGFkZHRvZG9UZW1wbGF0ZSgpO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBuZXdUb2RvLmRlbGV0ZVRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgndG9kbycsdG9kb0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0VkaXQnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGxpYnJhcnlTZWFyY2godG9kb0lkKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAnSU5QVVQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnU2F2ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ1NhdmUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGdldFZhbHVlcyh0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvZG8ubWFrZVRvZG8oKTtcbiAgICAgICAgICAgIG5ld1RvZG8ucmVwbGFjZVRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAncCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydFZGl0JywnRGVsZXRlJ10sdG9kb0lkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnQWRkJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgICAgICAgICBuZXdUb2RvLmFkZFRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAncCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydFZGl0JywnRGVsZXRlJ10sdG9kb0lkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnTmV3IFByb2plY3QnKXtcbiAgICAgICAgICAgIGFkZFByb2plY3RUZW1wbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnUmVtb3ZlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBnZXRWYWx1ZWQocHJvamVjdElkKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgZG9tRGVsZXRlKCdwcm9qZWN0Jyxwcm9qZWN0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnQ3JlYXRlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBnZXRWYWx1ZWQocHJvamVjdElkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXdQcm9qZWN0Lm1ha2VQcm9qZWN0KCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgncHJvamVjdEJveCcscHJvamVjdElkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdCR7cHJvamVjdElkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudHNNYWtlcihwcm9qZWN0SWQsIHByb2plY3QsICdwJyk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ05ldyBUby1kbyddLHByb2plY3RJZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=