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
/* harmony export */   todoCSS: () => (/* binding */ todoCSS),
/* harmony export */   todoCounter: () => (/* binding */ todoCounter)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


let todoCounter = 0;

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

function addtodoTemplate() {
    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo();
    const todo = newTodo.makeTodo();
    const element = todoCSS('todo', todoCounter);
    const box = elementMaker(todoCounter, todo, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],todoCounter);
    element.appendChild(finishedBox);
    addToDom(element);
    todoCounter += 1;
    //Problem might be here.
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

function Todo(title = 'Author: ', dueDate = 'Title: ', priority = 'Pages: ', description = 'Is read: ', comments = 'Comments: ', todoId = `${_css_js__WEBPACK_IMPORTED_MODULE_0__.todoCounter}`) {
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



const div = document.querySelector('div');
div.addEventListener('click', event => {
    const target = event.target;
    if(target.tagName == 'BUTTON') {
        if(target.innerText == 'New To-do'){
            (0,_css_js__WEBPACK_IMPORTED_MODULE_0__.addtodoTemplate)();
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
            //addToDom(element);
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
    }
})
//Some issues with the 'edit' and 'save' functionalities
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsa0JBQWtCLHNCQUFzQjtBQUN4QyxzREFBc0QsU0FBUztBQUMvRCx5Q0FBeUMsY0FBYyxFQUFFLE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0Esc0RBQXNELFdBQVc7QUFDakUsb0NBQW9DLFdBQVc7QUFDL0MsaUNBQWlDLFdBQVcsRUFBRSxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsVUFBVSxFQUFFLE9BQU87QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxFQUFFLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVxQzs7QUFFckM7O0FBRUEsNklBQTZJLGdEQUFXLENBQUM7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RCxrREFBa0QsT0FBTztBQUN6RCxtREFBbUQsT0FBTztBQUMxRCxxREFBcUQsT0FBTztBQUM1RCxzREFBc0QsT0FBTztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN4REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0c7QUFDdEM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBSztBQUNoQyw0QkFBNEIsbURBQVM7QUFDckM7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBSztBQUNoQyx5QkFBeUIsdURBQWE7QUFDdEMsWUFBWSxrREFBUztBQUNyQiwyREFBMkQsT0FBTztBQUNsRSx3QkFBd0IscURBQVk7QUFDcEMsZ0NBQWdDLG9EQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQUs7QUFDaEMsNEJBQTRCLG1EQUFTO0FBQ3JDO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCLDJEQUEyRCxPQUFPO0FBQ2xFLHdCQUF3QixxREFBWTtBQUNwQyxnQ0FBZ0Msb0RBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQUs7QUFDaEMsNEJBQTRCLG1EQUFTO0FBQ3JDO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCLDJEQUEyRCxPQUFPO0FBQ2xFLHdCQUF3QixxREFBWTtBQUNwQyxnQ0FBZ0Msb0RBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2Nzcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgdG9kb0NvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCBlbGVtVHlwZSkge1xuICAgIGNvbnN0IGVsZW1lbnRJZHMgPSBbJ2F1dGhvcicsICd0aXRsZScsJ3BhZ2VzJywncmVhZCcsJ2NvbW1lbnRzJywnMCddO1xuICAgIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGBib3gke3RvZG9JZH1gKTtcbiAgICBmb3IobGV0IGkgPSAwO2k8ZWxlbWVudElkcy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbVR5cGV9YCk7XG4gICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2VsZW1lbnRJZHNbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGlmKGVsZW1UeXBlID09ICdJTlBVVCcpe1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsdG9kb1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRvZG9Db250ZW50LnRleHRDb250ZW50ID0gYCR7dG9kb1tpXX1gO1xuICAgICAgICB9XG4gICAgICAgIGJveEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYm94RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnV0dG9uTWFrZXIoZWxlbWVudCwgYnRuVGV4dCwgdG9kb0lkKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJ0blRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtidG5UZXh0W2ldfWApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7YnRuVGV4dFtpXX1CdXR0b25gKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke2J0blRleHRbaV19JHt0b2RvSWR9YCk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb20oZWxlbWVudCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRvbURlbGV0ZShjbGFzc05hbWUsIHRvZG9JZCkge1xuICAgIGNvbnN0IGRvb21lZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGFzc05hbWV9JHt0b2RvSWR9YCk7XG4gICAgZG9vbWVkRWxlbWVudC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0NTUyhjbGFzc05hbWUsIHRvZG9JZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtjbGFzc05hbWV9JHt0b2RvSWR9YCk7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICc1NDBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzRweCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW49JzhweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGR0b2RvVGVtcGxhdGUoKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKCk7XG4gICAgY29uc3QgdG9kbyA9IG5ld1RvZG8ubWFrZVRvZG8oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gdG9kb0NTUygndG9kbycsIHRvZG9Db3VudGVyKTtcbiAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0NvdW50ZXIsIHRvZG8sICdJTlBVVCcpO1xuICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnQWRkJywnRGVsZXRlJ10sdG9kb0NvdW50ZXIpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgIGFkZFRvRG9tKGVsZW1lbnQpO1xuICAgIHRvZG9Db3VudGVyICs9IDE7XG4gICAgLy9Qcm9ibGVtIG1pZ2h0IGJlIGhlcmUuXG59XG5cbmV4cG9ydCB7ZWxlbWVudE1ha2VyLCBidXR0b25NYWtlciwgYWRkVG9Eb20sIGRvbURlbGV0ZSx0b2RvQ1NTLGFkZHRvZG9UZW1wbGF0ZSx0b2RvQ291bnRlcn07IiwiaW1wb3J0IHt0b2RvQ291bnRlcn0gZnJvbSAnLi9jc3MuanMnO1xuXG5sZXQgdG9kb0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gVG9kbyh0aXRsZSA9ICdBdXRob3I6ICcsIGR1ZURhdGUgPSAnVGl0bGU6ICcsIHByaW9yaXR5ID0gJ1BhZ2VzOiAnLCBkZXNjcmlwdGlvbiA9ICdJcyByZWFkOiAnLCBjb21tZW50cyA9ICdDb21tZW50czogJywgdG9kb0lkID0gYCR7dG9kb0NvdW50ZXJ9YCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlOyBcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgICB0aGlzLnRvZG9JZCA9IHRvZG9JZDtcbiAgICBsZXQgdG9kbyA9IFt0aGlzLnRpdGxlLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHksIHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuY29tbWVudHMsIHRoaXMudG9kb0lkXTtcbiAgICB0aGlzLm1ha2VUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3BvdCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uaW5jbHVkZXModG9kb0lkKSkge1xuICAgICAgICAgICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2RvTGlzdFtzcG90XSA9IHRvZG87XG4gICAgfVxuICAgIHRoaXMuZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UodG9kb0lkLDEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldElkKGlkKSB7XG4gICAgY29uc3QgYnV0dG9uSWQgPSBpZDtcbiAgICBjb25zdCByZWdleCA9IC9bMC05XS9nO1xuICAgIGNvbnN0IHJlZ2V4bWF0Y2ggPSBidXR0b25JZC5tYXRjaChyZWdleCk7XG4gICAgY29uc3QgdG9kb0lkID0gcmVnZXhtYXRjaC5qb2luKCcnKTtcbiAgICByZXR1cm4gdG9kb0lkO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVzKHRvZG9JZCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdXRob3Ike3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZSR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwYWdlcyR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWFkJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnRzJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjb21tZW50cyAsIHRvZG9JZCk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG59XG5mdW5jdGlvbiBsaWJyYXJ5U2VhcmNoKHRvZG9JZCkge1xuICAgIGxldCBzcG90ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uaW5jbHVkZXModG9kb0lkKSkge1xuICAgICAgICAgICAgc3BvdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0W3Nwb3RdO1xuICAgIHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQge1RvZG8sIGdldElkLCBnZXRWYWx1ZXMsIGxpYnJhcnlTZWFyY2h9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtlbGVtZW50TWFrZXIsIGJ1dHRvbk1ha2VyLCBhZGRUb0RvbSwgZG9tRGVsZXRlLHRvZG9DU1MsYWRkdG9kb1RlbXBsYXRlfSBmcm9tICcuL2Nzcy5qcyc7XG5pbXBvcnQge2dldElkLCBnZXRWYWx1ZXMsIGxpYnJhcnlTZWFyY2h9IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudGFnTmFtZSA9PSAnQlVUVE9OJykge1xuICAgICAgICBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdOZXcgVG8tZG8nKXtcbiAgICAgICAgICAgIGFkZHRvZG9UZW1wbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnRGVsZXRlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIG5ld1RvZG8uZGVsZXRlVG9kbygpO1xuICAgICAgICAgICAgZG9tRGVsZXRlKCd0b2RvJyx0b2RvSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnRWRpdCcpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbGlicmFyeVNlYXJjaCh0b2RvSWQpO1xuICAgICAgICAgICAgZG9tRGVsZXRlKCdib3gnLHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8ke3RvZG9JZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcih0b2RvSWQsIHRvZG8sICdJTlBVVCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydTYXZlJ10sdG9kb0lkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgICAgICAgICAgLy9hZGRUb0RvbShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ1NhdmUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGdldFZhbHVlcyh0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ld1RvZG8ubWFrZVRvZG8oKTtcbiAgICAgICAgICAgIG5ld1RvZG8ucmVwbGFjZVRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAncCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydFZGl0JywnRGVsZXRlJ10sdG9kb0lkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnQWRkJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgICAgICAgICBuZXdUb2RvLmFkZFRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAncCcpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydFZGl0JywnRGVsZXRlJ10sdG9kb0lkKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmluaXNoZWRCb3gpO1xuICAgICAgICB9XG4gICAgfVxufSlcbi8vU29tZSBpc3N1ZXMgd2l0aCB0aGUgJ2VkaXQnIGFuZCAnc2F2ZScgZnVuY3Rpb25hbGl0aWVzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9