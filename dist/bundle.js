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
        else if(target.innerText == 'New Project'){
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addProjectTemplate)();
        }
    }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRCQUE0QixtREFBUztBQUNyQztBQUNBO0FBQ0EsWUFBWSxrREFBUztBQUNyQiwyREFBMkQsT0FBTztBQUNsRSx3QkFBd0IscURBQVk7QUFDcEMsZ0NBQWdDLG9EQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQWtCO0FBQzlCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2Nzcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgdG9kb0NvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCBlbGVtVHlwZSkge1xuICAgIGNvbnN0IGVsZW1lbnRJZHMgPSBbJ3RpdGxlJywgJ2R1ZURhdGUnLCdwcmlvcml0eScsJ2Rlc2NyaXB0aW9uJywnY29tbWVudHMnLCcwJ107XG4gICAgY29uc3QgYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYGJveCR7dG9kb0lkfWApO1xuICAgIGZvcihsZXQgaSA9IDA7aTxlbGVtZW50SWRzLmxlbmd0aC0xO2krKyl7XG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtVHlwZX1gKTtcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7ZWxlbWVudElkc1tpXX0ke3RvZG9JZH1gKTtcbiAgICAgICAgaWYoZWxlbVR5cGUgPT0gJ0lOUFVUJyl7XG4gICAgICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyx0b2RvW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdG9kb0NvbnRlbnQudGV4dENvbnRlbnQgPSBgJHt0b2RvW2ldfWA7XG4gICAgICAgIH1cbiAgICAgICAgYm94RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiBib3hFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidXR0b25NYWtlcihlbGVtZW50LCBidG5UZXh0LCB0b2RvSWQpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnRuVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2J0blRleHRbaV19YCk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxgJHtidG5UZXh0W2ldfUJ1dHRvbmApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsYCR7YnRuVGV4dFtpXX0ke3RvZG9JZH1gKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRUb0RvbShlbGVtZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldEVsZW1lbnR9YCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZG9tRGVsZXRlKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZG9vbWVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBkb29tZWRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2RvQ1NTKGNsYXNzTmFtZSwgdG9kb0lkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2NsYXNzTmFtZX0ke3RvZG9JZH1gKTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzU0MHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDU1MoY2xhc3NOYW1lLCBwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7Y2xhc3NOYW1lfSR7cHJvamVjdElkfWApO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnODAwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZHRvZG9UZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oKTtcbiAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0b2RvQ1NTKCd0b2RvJywgdG9kb0NvdW50ZXIpO1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcih0b2RvQ291bnRlciwgdG9kbywgJ0lOUFVUJyk7XG4gICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydBZGQnLCdEZWxldGUnXSx0b2RvQ291bnRlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgYWRkVG9Eb20oZWxlbWVudCk7XG4gICAgdG9kb0NvdW50ZXIgKz0gMTtcbn1cblxuZXhwb3J0IHtlbGVtZW50TWFrZXIsIGJ1dHRvbk1ha2VyLCBhZGRUb0RvbSwgZG9tRGVsZXRlLHRvZG9DU1MsYWRkdG9kb1RlbXBsYXRlLHRvZG9Db3VudGVyLCBwcm9qZWN0Q1NTfTsiLCJpbXBvcnQge3RvZG9Db3VudGVyfSBmcm9tICcuL2Nzcy5qcyc7XG5cbmxldCB0b2RvTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBUb2RvKHRpdGxlID0gJ1RpdGxlOiAnLCBkdWVEYXRlID0gJ0R1ZSBEYXRlOiAnLCBwcmlvcml0eSA9ICdQcmlvcml0eTogJywgZGVzY3JpcHRpb24gPSAnRGVzY3JpcHRpb246ICcsIGNvbW1lbnRzID0gJ0NvbW1lbnRzOiAnLCB0b2RvSWQgPSBgJHt0b2RvQ291bnRlcn1gKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xuICAgIHRoaXMudG9kb0lkID0gdG9kb0lkO1xuICAgIGxldCB0b2RvID0gW3RoaXMudGl0bGUsIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5jb21tZW50cywgdGhpcy50b2RvSWRdO1xuICAgIHRoaXMubWFrZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIHRoaXMuYWRkVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICB0aGlzLnJlcGxhY2VUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcG90ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5pbmNsdWRlcyh0b2RvSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwb3QgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvZG9MaXN0W3Nwb3RdID0gdG9kbztcbiAgICB9XG4gICAgdGhpcy5kZWxldGVUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZSh0b2RvSWQsMSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcbiAgICBjb25zdCBidXR0b25JZCA9IGlkO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1swLTldL2c7XG4gICAgY29uc3QgcmVnZXhtYXRjaCA9IGJ1dHRvbklkLm1hdGNoKHJlZ2V4KTtcbiAgICBjb25zdCB0b2RvSWQgPSByZWdleG1hdGNoLmpvaW4oJycpO1xuICAgIHJldHVybiB0b2RvSWQ7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZXModG9kb0lkKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1dGhvciR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBhZ2VzJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlYWQke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29tbWVudHMke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGNvbW1lbnRzICwgdG9kb0lkKTtcbiAgICByZXR1cm4gbmV3VG9kbztcbn1cbmZ1bmN0aW9uIGxpYnJhcnlTZWFyY2godG9kb0lkKSB7XG4gICAgbGV0IHNwb3QgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5pbmNsdWRlcyh0b2RvSWQpKSB7XG4gICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3Rbc3BvdF07XG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCB7VG9kbywgZ2V0SWQsIGdldFZhbHVlcywgbGlicmFyeVNlYXJjaH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2VsZW1lbnRNYWtlciwgYnV0dG9uTWFrZXIsIGRvbURlbGV0ZSxhZGR0b2RvVGVtcGxhdGV9IGZyb20gJy4vY3NzLmpzJztcbmltcG9ydCB7Z2V0SWQsIGdldFZhbHVlcywgbGlicmFyeVNlYXJjaCwgYWRkUHJvamVjdFRlbXBsYXRlfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbmRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnTmV3IFRvLWRvJyl7XG4gICAgICAgICAgICBhZGR0b2RvVGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBuZXdUb2RvLmRlbGV0ZVRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgndG9kbycsdG9kb0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0VkaXQnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGxpYnJhcnlTZWFyY2godG9kb0lkKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAnSU5QVVQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnU2F2ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgICAgIC8vYWRkVG9Eb20oZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgICAgICAgICBuZXdUb2RvLnJlcGxhY2VUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0FkZCcpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgICAgICAgICAgbmV3VG9kby5hZGRUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ05ldyBQcm9qZWN0Jyl7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=