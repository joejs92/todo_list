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
    }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDM0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvLmpzJztcblxubGV0IHRvZG9Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgZWxlbVR5cGUpIHtcbiAgICBjb25zdCBlbGVtZW50SWRzID0gWydhdXRob3InLCAndGl0bGUnLCdwYWdlcycsJ3JlYWQnLCdjb21tZW50cycsJzAnXTtcbiAgICBjb25zdCBib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgYm94JHt0b2RvSWR9YCk7XG4gICAgZm9yKGxldCBpID0gMDtpPGVsZW1lbnRJZHMubGVuZ3RoLTE7aSsrKXtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1UeXBlfWApO1xuICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtlbGVtZW50SWRzW2ldfSR7dG9kb0lkfWApO1xuICAgICAgICBpZihlbGVtVHlwZSA9PSAnSU5QVVQnKXtcbiAgICAgICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLHRvZG9baV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0b2RvQ29udGVudC50ZXh0Q29udGVudCA9IGAke3RvZG9baV19YDtcbiAgICAgICAgfVxuICAgICAgICBib3hFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGJveEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbk1ha2VyKGVsZW1lbnQsIGJ0blRleHQsIHRvZG9JZCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBidG5UZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7YnRuVGV4dFtpXX1gKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLGAke2J0blRleHRbaV19QnV0dG9uYCk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtidG5UZXh0W2ldfSR7dG9kb0lkfWApO1xuICAgICAgICBidG4uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG9tKGVsZW1lbnQpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkb21EZWxldGUoY2xhc3NOYW1lLCB0b2RvSWQpIHtcbiAgICBjb25zdCBkb29tZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xhc3NOYW1lfSR7dG9kb0lkfWApO1xuICAgIGRvb21lZEVsZW1lbnQucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZG9DU1MoY2xhc3NOYW1lLCB0b2RvSWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7Y2xhc3NOYW1lfSR7dG9kb0lkfWApO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnNTQwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICc0cHgnO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luPSc4cHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsYWNrJztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkdG9kb1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbygpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IHRvZG9DU1MoJ3RvZG8nLCB0b2RvQ291bnRlcik7XG4gICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9Db3VudGVyLCB0b2RvLCAnSU5QVVQnKTtcbiAgICBjb25zdCBmaW5pc2hlZEJveCA9IGJ1dHRvbk1ha2VyKGJveCxbJ0FkZCcsJ0RlbGV0ZSddLHRvZG9Db3VudGVyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICBhZGRUb0RvbShlbGVtZW50KTtcbiAgICB0b2RvQ291bnRlciArPSAxO1xuICAgIC8vUHJvYmxlbSBtaWdodCBiZSBoZXJlLlxufVxuXG5leHBvcnQge2VsZW1lbnRNYWtlciwgYnV0dG9uTWFrZXIsIGFkZFRvRG9tLCBkb21EZWxldGUsdG9kb0NTUyxhZGR0b2RvVGVtcGxhdGUsdG9kb0NvdW50ZXJ9OyIsImltcG9ydCB7dG9kb0NvdW50ZXJ9IGZyb20gJy4vY3NzLmpzJztcblxubGV0IHRvZG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUgPSAnVGl0bGU6ICcsIGR1ZURhdGUgPSAnRHVlIERhdGU6ICcsIHByaW9yaXR5ID0gJ1ByaW9yaXR5OiAnLCBkZXNjcmlwdGlvbiA9ICdEZXNjcmlwdGlvbjogJywgY29tbWVudHMgPSAnQ29tbWVudHM6ICcsIHRvZG9JZCA9IGAke3RvZG9Db3VudGVyfWApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTsgXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gICAgdGhpcy50b2RvSWQgPSB0b2RvSWQ7XG4gICAgbGV0IHRvZG8gPSBbdGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5LCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLmNvbW1lbnRzLCB0aGlzLnRvZG9JZF07XG4gICAgdGhpcy5tYWtlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgdGhpcy5hZGRUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNwb3QgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmluY2x1ZGVzKHRvZG9JZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BvdCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0xpc3Rbc3BvdF0gPSB0b2RvO1xuICAgIH1cbiAgICB0aGlzLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKHRvZG9JZCwxKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRJZChpZCkge1xuICAgIGNvbnN0IGJ1dHRvbklkID0gaWQ7XG4gICAgY29uc3QgcmVnZXggPSAvWzAtOV0vZztcbiAgICBjb25zdCByZWdleG1hdGNoID0gYnV0dG9uSWQubWF0Y2gocmVnZXgpO1xuICAgIGNvbnN0IHRvZG9JZCA9IHJlZ2V4bWF0Y2guam9pbignJyk7XG4gICAgcmV0dXJuIHRvZG9JZDtcbn1cbmZ1bmN0aW9uIGdldFZhbHVlcyh0b2RvSWQpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXV0aG9yJHt0b2RvSWR9YCkudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFnZXMke3RvZG9JZH1gKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVhZCR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb21tZW50cyR7dG9kb0lkfWApLnZhbHVlO1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY29tbWVudHMgLCB0b2RvSWQpO1xuICAgIHJldHVybiBuZXdUb2RvO1xufVxuZnVuY3Rpb24gbGlicmFyeVNlYXJjaCh0b2RvSWQpIHtcbiAgICBsZXQgc3BvdCA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRvZG9MaXN0W2ldLmluY2x1ZGVzKHRvZG9JZCkpIHtcbiAgICAgICAgICAgIHNwb3QgPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdFtzcG90XTtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IHtUb2RvLCBnZXRJZCwgZ2V0VmFsdWVzLCBsaWJyYXJ5U2VhcmNofTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7ZWxlbWVudE1ha2VyLCBidXR0b25NYWtlciwgZG9tRGVsZXRlLGFkZHRvZG9UZW1wbGF0ZX0gZnJvbSAnLi9jc3MuanMnO1xuaW1wb3J0IHtnZXRJZCwgZ2V0VmFsdWVzLCBsaWJyYXJ5U2VhcmNofSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbmRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnTmV3IFRvLWRvJyl7XG4gICAgICAgICAgICBhZGR0b2RvVGVtcGxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0RlbGV0ZScpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBuZXdUb2RvLmRlbGV0ZVRvZG8oKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgndG9kbycsdG9kb0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0VkaXQnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGxpYnJhcnlTZWFyY2godG9kb0lkKTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyx0b2RvSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvJHt0b2RvSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIodG9kb0lkLCB0b2RvLCAnSU5QVVQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnU2F2ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgICAgIC8vYWRkVG9Eb20oZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdTYXZlJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBnZXRWYWx1ZXModG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvLm1ha2VUb2RvKCk7XG4gICAgICAgICAgICBuZXdUb2RvLnJlcGxhY2VUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhcmdldC5pbm5lclRleHQgPT0gJ0FkZCcpe1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBnZXRJZChpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gZ2V0VmFsdWVzKHRvZG9JZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kby5tYWtlVG9kbygpO1xuICAgICAgICAgICAgbmV3VG9kby5hZGRUb2RvKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsdG9kb0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kbyR7dG9kb0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKHRvZG9JZCwgdG9kbywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLHRvZG9JZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=