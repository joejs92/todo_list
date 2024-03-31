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
    element.style.overflow = 'auto';
    return element;
}

function addtodoTemplate(projectId) {
    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo();
    const todo = newTodo.makeTodo();
    const element = todoCSS('todo', todoCounter);
    const box = elementMaker(todoCounter, todo, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],todoCounter);
    element.appendChild(finishedBox);
    const targetElement = `project${projectId}`;
    addToDom(element, targetElement);
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
            const id = target.id;
            const projectId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.addtodoTemplate)(projectId);
        }
        else if(target.innerText == 'Delete'){
            const id = target.id;
            const todoId = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getId)(id);
            console.log(todoId);
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
            const finishedBox = (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.buttonMaker)(box,['New To-do','Remove'],projectId);
            element.appendChild(finishedBox);
        }
    }
})
;(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addProjectTemplate)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxnRUFBa0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvLmpzJztcblxubGV0IHRvZG9Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgZWxlbVR5cGUpIHtcbiAgICBjb25zdCBlbGVtZW50SWRzID0gWyd0aXRsZScsICdkdWVEYXRlJywncHJpb3JpdHknLCdkZXNjcmlwdGlvbicsJ2NvbW1lbnRzJywnMCddO1xuICAgIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGBib3gke3RvZG9JZH1gKTtcbiAgICBmb3IobGV0IGkgPSAwO2k8ZWxlbWVudElkcy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbVR5cGV9YCk7XG4gICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2VsZW1lbnRJZHNbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGlmKGVsZW1UeXBlID09ICdJTlBVVCcpe1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsdG9kb1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRvZG9Db250ZW50LnRleHRDb250ZW50ID0gYCR7dG9kb1tpXX1gO1xuICAgICAgICB9XG4gICAgICAgIGJveEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYm94RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnV0dG9uTWFrZXIoZWxlbWVudCwgYnRuVGV4dCwgdG9kb0lkKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJ0blRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtidG5UZXh0W2ldfWApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7YnRuVGV4dFtpXX1CdXR0b25gKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke2J0blRleHRbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb20oZWxlbWVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXRFbGVtZW50fWApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRvbURlbGV0ZShjbGFzc05hbWUsIHRvZG9JZCkge1xuICAgIGNvbnN0IGRvb21lZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGFzc05hbWV9JHt0b2RvSWR9YCk7XG4gICAgZG9vbWVkRWxlbWVudC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0NTUyhjbGFzc05hbWUsIHRvZG9JZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtjbGFzc05hbWV9JHt0b2RvSWR9YCk7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICc1NDBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzRweCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW49JzhweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q1NTKGNsYXNzTmFtZSwgcHJvamVjdElkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2NsYXNzTmFtZX0ke3Byb2plY3RJZH1gKTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzgwMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzRweCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW49JzhweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZHRvZG9UZW1wbGF0ZShwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oKTtcbiAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0b2RvQ1NTKCd0b2RvJywgdG9kb0NvdW50ZXIpO1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcih0b2RvQ291bnRlciwgdG9kbywgJ0lOUFVUJyk7XG4gICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydBZGQnLCdEZWxldGUnXSx0b2RvQ291bnRlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGBwcm9qZWN0JHtwcm9qZWN0SWR9YDtcbiAgICBhZGRUb0RvbShlbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgICB0b2RvQ291bnRlciArPSAxO1xufVxuXG5leHBvcnQge2VsZW1lbnRNYWtlciwgYnV0dG9uTWFrZXIsIGFkZFRvRG9tLCBkb21EZWxldGUsdG9kb0NTUyxhZGR0b2RvVGVtcGxhdGUsdG9kb0NvdW50ZXIsIHByb2plY3RDU1N9OyIsImltcG9ydCB7cHJvamVjdENTUywgYnV0dG9uTWFrZXIsIGFkZFRvRG9tfSBmcm9tICcuL2Nzcy5qcyc7XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IHByb2plY3RDb3VudGVyID0gMDtcblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSA9ICdUaXRsZTogJywgcHJvamVjdElkID0gYCR7cHJvamVjdENvdW50ZXJ9YCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICBjb25zdCBwcm9qZWN0ID0gW3RpdGxlLCBwcm9qZWN0SWRdO1xuICAgIHRoaXMubWFrZVByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIHRoaXMuYWRkUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgICB0aGlzLnJlcGxhY2VQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcG90ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0TGlzdFtpXS5pbmNsdWRlcyhwcm9qZWN0SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwb3QgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RMaXN0W3Nwb3RdID0gcHJvamVjdDtcbiAgICB9XG4gICAgdGhpcy5kZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SWQsMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbGVtZW50c01ha2VyKHByb2plY3RJZCwgcHJvamVjdCwgZWxlbVR5cGUpIHtcbiAgICBjb25zdCBlbGVtZW50SWRzID0gWyd0aXRsZWQnLCAnMCddO1xuICAgIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGBwcm9qZWN0Qm94JHtwcm9qZWN0SWR9YCk7XG4gICAgZm9yKGxldCBpID0gMDtpPGVsZW1lbnRJZHMubGVuZ3RoLTE7aSsrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1UeXBlfWApO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtlbGVtZW50SWRzW2ldfSR7cHJvamVjdElkfWApO1xuICAgICAgICBpZihlbGVtVHlwZSA9PSAnSU5QVVQnKXtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IGAke3Byb2plY3RbaV19YDtcbiAgICAgICAgfVxuICAgICAgICBib3hFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGJveEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdC5tYWtlUHJvamVjdCgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9qZWN0Q1NTKCdwcm9qZWN0JywgcHJvamVjdENvdW50ZXIpO1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRzTWFrZXIocHJvamVjdENvdW50ZXIsIHByb2plY3QsICdJTlBVVCcpO1xuICAgIGNvbnN0IGZpbmlzaGVkRWxlbWVudCA9IGJ1dHRvbk1ha2VyKGJveCxbJ0NyZWF0ZScsJ1JlbW92ZSddLHByb2plY3RDb3VudGVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkRWxlbWVudCk7XG4gICAgYWRkVG9Eb20oZWxlbWVudCwgJ2JvZHknKTtcbiAgICBwcm9qZWN0Q291bnRlciArPSAxO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZWQocHJvamVjdElkKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlZCR7cHJvamVjdElkfWApLnZhbHVlO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQge2FkZFByb2plY3RUZW1wbGF0ZSwgZ2V0VmFsdWVkLCBlbGVtZW50c01ha2VyfTsiLCJpbXBvcnQge3RvZG9Db3VudGVyfSBmcm9tICcuL2Nzcy5qcyc7XG5cbmxldCB0b2RvTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBUb2RvKHRpdGxlID0gJ1RpdGxlOiAnLCBkdWVEYXRlID0gJ0R1ZSBEYXRlOiAnLCBwcmlvcml0eSA9ICdQcmlvcml0eTogJywgZGVzY3JpcHRpb24gPSAnRGVzY3JpcHRpb246ICcsIGNvbW1lbnRzID0gJ0NvbW1lbnRzOiAnLCB0b2RvSWQgPSBgJHt0b2RvQ291bnRlcn1gKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xuICAgIHRoaXMudG9kb0lkID0gdG9kb0lkO1xuICAgIGxldCB0b2RvID0gW3RoaXMudGl0bGUsIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5jb21tZW50cywgdGhpcy50b2RvSWRdO1xuICAgIHRoaXMubWFrZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIHRoaXMuYWRkVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICB0aGlzLnJlcGxhY2VUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcG90ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5pbmNsdWRlcyh0b2RvSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwb3QgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvZG9MaXN0W3Nwb3RdID0gdG9kbztcbiAgICB9XG4gICAgdGhpcy5kZWxldGVUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZSh0b2RvSWQsMSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcbiAgICBjb25zdCBidXR0b25JZCA9IGlkO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1swLTldL2c7XG4gICAgY29uc3QgcmVnZXhtYXRjaCA9IGJ1dHRvbklkLm1hdGNoKHJlZ2V4KTtcbiAgICBjb25zdCB0b2RvSWQgPSByZWdleG1hdGNoLmpvaW4oJycpO1xuICAgIHJldHVybiB0b2RvSWQ7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZXModG9kb0lkKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHVlRGF0ZSR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eSR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbiR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb21tZW50cyR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29tbWVudHMgLCB0b2RvSWQpO1xuICAgIHJldHVybiBuZXdUb2RvO1xufVxuZnVuY3Rpb24gbGlicmFyeVNlYXJjaCh0b2RvSWQpIHtcbiAgICBsZXQgc3BvdCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRvZG9MaXN0W2ldLmluY2x1ZGVzKHRvZG9JZCkpIHtcbiAgICAgICAgICAgIHNwb3QgPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdFtzcG90XTtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IHtUb2RvLCBnZXRJZCwgZ2V0VmFsdWVzLCBsaWJyYXJ5U2VhcmNofTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7ZWxlbWVudE1ha2VyLCBidXR0b25NYWtlciwgZG9tRGVsZXRlLGFkZHRvZG9UZW1wbGF0ZX0gZnJvbSAnLi9jc3MuanMnO1xuaW1wb3J0IHtnZXRJZCwgZ2V0VmFsdWVzLCBsaWJyYXJ5U2VhcmNofSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHthZGRQcm9qZWN0VGVtcGxhdGUsIGdldFZhbHVlZCwgZWxlbWVudHNNYWtlcn0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Jyk7XG5kaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmKHRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKSB7XG4gICAgICAgIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ05ldyBUby1kbycpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBhZGR0b2RvVGVtcGxhdGUocHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGdldFZhbHVlcyh0b2RvSWQpO1xuICAgICAgICAgICAgbmV3VG9kby5kZWxldGVUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ3RvZG8nLHRvZG9JZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdFZGl0Jyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBsaWJyYXJ5U2VhcmNoKHRvZG9JZCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ0lOUFVUJyk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ1NhdmUnXSx0b2RvSWQpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgICAgICAgICBuZXdUb2RvLnJlcGxhY2VUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0FkZCcpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgICAgICAgICAgbmV3VG9kby5hZGRUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ05ldyBQcm9qZWN0Jyl7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ1JlbW92ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZ2V0VmFsdWVkKHByb2plY3RJZCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgncHJvamVjdCcscHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0NyZWF0ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZ2V0VmFsdWVkKHByb2plY3RJZCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdC5tYWtlUHJvamVjdCgpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ3Byb2plY3RCb3gnLHByb2plY3RJZCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3Qke3Byb2plY3RJZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGVsZW1lbnRzTWFrZXIocHJvamVjdElkLCBwcm9qZWN0LCAncCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydOZXcgVG8tZG8nLCdSZW1vdmUnXSxwcm9qZWN0SWQpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuYWRkUHJvamVjdFRlbXBsYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9