/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*This is the code from Constructor Experiments Source2.
You have to go through and change all the variables to 
make sense with the project, such as splitting off the 
CSS and changing the variable names.*/

let library = [];

let libraryCounter = 0;

function Book(author = 'Author: ', title = 'Title: ', pages = 'Pages: ', read = 'Is read: ', comments = 'Comments: ', bookId = 'template') {
    this.author = author;
    this.title = title; 
    this.pages = pages;
    this.read = read;
    this.comments = comments;
    let book = [this.author, this.title, this.pages, this.read, this.comments, `${libraryCounter}`];
    this.makeBook = function() {
        return book;
    }
    this.addBook = function() {
        library.push(book);
    }
    this.replaceBook = function() {
        let spot = 0;
        for(let i = 0; i < library.length; i++) {
            if(library[i].includes(bookId)) {
                    spot = i;
            }
        }
        library[spot] = book;
    }
    this.deleteBook = function() {
        library.splice(bookId,1);
    }
}

function getId(id) {
    const buttonId = id;
    const regex = /[0-9]/g;
    const regexmatch = buttonId.match(regex);
    const bookId = regexmatch.join('');
    return bookId;
}

function getValues(bookId) {
    let author = document.getElementById(`author${bookId}`).value;
    let title = document.getElementById(`title${bookId}`).value;
    let pages = document.getElementById(`pages${bookId}`).value;
    let read = document.getElementById(`read${bookId}`).value;
    let comments = document.getElementById(`comments${bookId}`).value;
    let newBook = new Book(author, title, pages, read, comments);
    return newBook;
}

function elementMaker(bookId, book, elemType) {
    const elementIds = ['author', 'title','pages','read','comments','0'];
    const boxElement = document.createElement('div');
    boxElement.setAttribute('id',`box${bookId}`);
    for(let i = 0;i<elementIds.length-1;i++){
        const bookContent = document.createElement(`${elemType}`);
        bookContent.setAttribute('id',`${elementIds[i]}${bookId}`);
        if(elemType == 'INPUT'){
            bookContent.setAttribute('type','text');
            bookContent.setAttribute('value',book[i]);
        }
        else{
            bookContent.textContent = `${book[i]}`;
        }
        boxElement.appendChild(bookContent);
    }
    return boxElement;
}

function buttonMaker(element, btnText, bookId) {
    for(let i = 0; i < btnText.length; i++) {
        const btn = document.createElement('button');
        const buttonText = document.createTextNode(`${btnText[i]}`);
        btn.setAttribute('class',`${btnText[i]}Button`);
        btn.setAttribute('id',`${btnText[i]}${bookId}`);
        btn.appendChild(buttonText);
        element.appendChild(btn);
    }
    return element;
}

function addToDom(element) {
    const body = document.querySelector('#project');
    body.appendChild(element);
    libraryCounter += 1;
}

function domDelete(className, bookId) {
    const doomedElement = document.querySelector(`#${className}${bookId}`);
    doomedElement.remove();
}

function bookCSS(className, bookId) {
    const element = document.createElement('div');
    element.setAttribute('class',className);
    element.setAttribute('id',`${className}${bookId}`);
    element.style.width = '540px';
    element.style.padding = '4px';
    element.style.margin='8px';
    element.style.borderWidth = '1px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'black';
    return element;
}

function librarySearch(bookId) {
    let spot = 0;
    for(let i = 0; i < library.length; i++) {
        if(library[i].includes(bookId)) {
            spot = i;
        }
    }
    return spot;
}

function addBookTemplate() {
    const newBook = new Book();
    const book = newBook.makeBook();
    const element = bookCSS('book', libraryCounter);
    const box = elementMaker(libraryCounter, book, 'INPUT');
    const finishedBox = buttonMaker(box,['Add','Delete'],libraryCounter);
    element.appendChild(finishedBox);
    addToDom(element);
}

//addBookTemplate();

const div = document.querySelector('div');
div.addEventListener('click', event => {
    const target = event.target;
    if(target.tagName == 'BUTTON') {
        if(target.innerText == 'New To-do'){
            /*const newBook = getValues('template');
            const book = newBook.makeBook();
            newBook.addBook();
            const bookId = book[book.length -1];
            const className = 'book';
            const element = bookCSS(className, bookId);
            const box = elementMaker(libraryCounter,book,'p');
            const finishedBox = buttonMaker(box,['Edit','Delete'],bookId);
            element.appendChild(finishedBox);
            addToDom(element);
            libraryCounter += 1;*/
            addBookTemplate();
        }
        else if(target.innerText == 'Delete'){
            const id = target.id;
            const bookId = getId(id);
            const newBook = getValues(bookId);
            newBook.deleteBook();
            domDelete('book',bookId);
        }
        else if(target.innerText == 'Edit'){
            const id = target.id;
            const bookId = getId(id);
            const spot = librarySearch(bookId);
            const book = library[spot];
            domDelete('box',bookId);
            const element = document.querySelector(`#book${bookId}`);
            const box = elementMaker(bookId, book, 'INPUT');
            const finishedBox = buttonMaker(box,['Save'],bookId);
            element.appendChild(finishedBox);
            addToDom(element);
        }
        else if(target.innerText == 'Save' || target.innerText == 'Add'){
            const id = target.id;
            const bookId = getId(id);
            const newBook = getValues(bookId);
            const book = newBook.makeBook();
            newBook.replaceBook();
            domDelete('box',bookId);
            const element = document.querySelector(`#book${bookId}`);
            const box = elementMaker(bookId, book, 'p');
            const finishedBox = buttonMaker(box,['Edit','Delete'],bookId);
            element.appendChild(finishedBox);
            addToDom(element);
        }
    }
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGVBQWU7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsT0FBTztBQUN6RCxnREFBZ0QsT0FBTztBQUN2RCxnREFBZ0QsT0FBTztBQUN2RCw4Q0FBOEMsT0FBTztBQUNyRCxzREFBc0QsT0FBTztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsa0JBQWtCLHNCQUFzQjtBQUN4QyxzREFBc0QsU0FBUztBQUMvRCx5Q0FBeUMsY0FBYyxFQUFFLE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0Esc0RBQXNELFdBQVc7QUFDakUsb0NBQW9DLFdBQVc7QUFDL0MsaUNBQWlDLFdBQVcsRUFBRSxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxVQUFVLEVBQUUsT0FBTztBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLEVBQUUsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlRoaXMgaXMgdGhlIGNvZGUgZnJvbSBDb25zdHJ1Y3RvciBFeHBlcmltZW50cyBTb3VyY2UyLlxuWW91IGhhdmUgdG8gZ28gdGhyb3VnaCBhbmQgY2hhbmdlIGFsbCB0aGUgdmFyaWFibGVzIHRvIFxubWFrZSBzZW5zZSB3aXRoIHRoZSBwcm9qZWN0LCBzdWNoIGFzIHNwbGl0dGluZyBvZmYgdGhlIFxuQ1NTIGFuZCBjaGFuZ2luZyB0aGUgdmFyaWFibGUgbmFtZXMuKi9cblxubGV0IGxpYnJhcnkgPSBbXTtcblxubGV0IGxpYnJhcnlDb3VudGVyID0gMDtcblxuZnVuY3Rpb24gQm9vayhhdXRob3IgPSAnQXV0aG9yOiAnLCB0aXRsZSA9ICdUaXRsZTogJywgcGFnZXMgPSAnUGFnZXM6ICcsIHJlYWQgPSAnSXMgcmVhZDogJywgY29tbWVudHMgPSAnQ29tbWVudHM6ICcsIGJvb2tJZCA9ICd0ZW1wbGF0ZScpIHtcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7IFxuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICB0aGlzLnJlYWQgPSByZWFkO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgICBsZXQgYm9vayA9IFt0aGlzLmF1dGhvciwgdGhpcy50aXRsZSwgdGhpcy5wYWdlcywgdGhpcy5yZWFkLCB0aGlzLmNvbW1lbnRzLCBgJHtsaWJyYXJ5Q291bnRlcn1gXTtcbiAgICB0aGlzLm1ha2VCb29rID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBib29rO1xuICAgIH1cbiAgICB0aGlzLmFkZEJvb2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlicmFyeS5wdXNoKGJvb2spO1xuICAgIH1cbiAgICB0aGlzLnJlcGxhY2VCb29rID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcG90ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGxpYnJhcnlbaV0uaW5jbHVkZXMoYm9va0lkKSkge1xuICAgICAgICAgICAgICAgICAgICBzcG90ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaWJyYXJ5W3Nwb3RdID0gYm9vaztcbiAgICB9XG4gICAgdGhpcy5kZWxldGVCb29rID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpYnJhcnkuc3BsaWNlKGJvb2tJZCwxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldElkKGlkKSB7XG4gICAgY29uc3QgYnV0dG9uSWQgPSBpZDtcbiAgICBjb25zdCByZWdleCA9IC9bMC05XS9nO1xuICAgIGNvbnN0IHJlZ2V4bWF0Y2ggPSBidXR0b25JZC5tYXRjaChyZWdleCk7XG4gICAgY29uc3QgYm9va0lkID0gcmVnZXhtYXRjaC5qb2luKCcnKTtcbiAgICByZXR1cm4gYm9va0lkO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoYm9va0lkKSB7XG4gICAgbGV0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdXRob3Ike2Jvb2tJZH1gKS52YWx1ZTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke2Jvb2tJZH1gKS52YWx1ZTtcbiAgICBsZXQgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFnZXMke2Jvb2tJZH1gKS52YWx1ZTtcbiAgICBsZXQgcmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWFkJHtib29rSWR9YCkudmFsdWU7XG4gICAgbGV0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnRzJHtib29rSWR9YCkudmFsdWU7XG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhhdXRob3IsIHRpdGxlLCBwYWdlcywgcmVhZCwgY29tbWVudHMpO1xuICAgIHJldHVybiBuZXdCb29rO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIoYm9va0lkLCBib29rLCBlbGVtVHlwZSkge1xuICAgIGNvbnN0IGVsZW1lbnRJZHMgPSBbJ2F1dGhvcicsICd0aXRsZScsJ3BhZ2VzJywncmVhZCcsJ2NvbW1lbnRzJywnMCddO1xuICAgIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGBib3gke2Jvb2tJZH1gKTtcbiAgICBmb3IobGV0IGkgPSAwO2k8ZWxlbWVudElkcy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjb25zdCBib29rQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbVR5cGV9YCk7XG4gICAgICAgIGJvb2tDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2VsZW1lbnRJZHNbaV19JHtib29rSWR9YCk7XG4gICAgICAgIGlmKGVsZW1UeXBlID09ICdJTlBVVCcpe1xuICAgICAgICAgICAgYm9va0NvbnRlbnQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICAgICAgYm9va0NvbnRlbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsYm9va1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJvb2tDb250ZW50LnRleHRDb250ZW50ID0gYCR7Ym9va1tpXX1gO1xuICAgICAgICB9XG4gICAgICAgIGJveEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9va0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYm94RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnV0dG9uTWFrZXIoZWxlbWVudCwgYnRuVGV4dCwgYm9va0lkKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJ0blRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtidG5UZXh0W2ldfWApO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsYCR7YnRuVGV4dFtpXX1CdXR0b25gKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLGAke2J0blRleHRbaV19JHtib29rSWR9YCk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb20oZWxlbWVudCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGlicmFyeUNvdW50ZXIgKz0gMTtcbn1cblxuZnVuY3Rpb24gZG9tRGVsZXRlKGNsYXNzTmFtZSwgYm9va0lkKSB7XG4gICAgY29uc3QgZG9vbWVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsYXNzTmFtZX0ke2Jvb2tJZH1gKTtcbiAgICBkb29tZWRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBib29rQ1NTKGNsYXNzTmFtZSwgYm9va0lkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke2NsYXNzTmFtZX0ke2Jvb2tJZH1gKTtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzU0MHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbj0nOHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGxpYnJhcnlTZWFyY2goYm9va0lkKSB7XG4gICAgbGV0IHNwb3QgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGxpYnJhcnlbaV0uaW5jbHVkZXMoYm9va0lkKSkge1xuICAgICAgICAgICAgc3BvdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNwb3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBuZXdCb29rID0gbmV3IEJvb2soKTtcbiAgICBjb25zdCBib29rID0gbmV3Qm9vay5tYWtlQm9vaygpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBib29rQ1NTKCdib29rJywgbGlicmFyeUNvdW50ZXIpO1xuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRNYWtlcihsaWJyYXJ5Q291bnRlciwgYm9vaywgJ0lOUFVUJyk7XG4gICAgY29uc3QgZmluaXNoZWRCb3ggPSBidXR0b25NYWtlcihib3gsWydBZGQnLCdEZWxldGUnXSxsaWJyYXJ5Q291bnRlcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaW5pc2hlZEJveCk7XG4gICAgYWRkVG9Eb20oZWxlbWVudCk7XG59XG5cbi8vYWRkQm9va1RlbXBsYXRlKCk7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudGFnTmFtZSA9PSAnQlVUVE9OJykge1xuICAgICAgICBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdOZXcgVG8tZG8nKXtcbiAgICAgICAgICAgIC8qY29uc3QgbmV3Qm9vayA9IGdldFZhbHVlcygndGVtcGxhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBuZXdCb29rLm1ha2VCb29rKCk7XG4gICAgICAgICAgICBuZXdCb29rLmFkZEJvb2soKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tJZCA9IGJvb2tbYm9vay5sZW5ndGggLTFdO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gJ2Jvb2snO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGJvb2tDU1MoY2xhc3NOYW1lLCBib29rSWQpO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKGxpYnJhcnlDb3VudGVyLGJvb2ssJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLGJvb2tJZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgICAgIGFkZFRvRG9tKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGlicmFyeUNvdW50ZXIgKz0gMTsqL1xuICAgICAgICAgICAgYWRkQm9va1RlbXBsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdEZWxldGUnKXtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgYm9va0lkID0gZ2V0SWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV3Qm9vayA9IGdldFZhbHVlcyhib29rSWQpO1xuICAgICAgICAgICAgbmV3Qm9vay5kZWxldGVCb29rKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2Jvb2snLGJvb2tJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXJnZXQuaW5uZXJUZXh0ID09ICdFZGl0Jyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tJZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHNwb3QgPSBsaWJyYXJ5U2VhcmNoKGJvb2tJZCk7XG4gICAgICAgICAgICBjb25zdCBib29rID0gbGlicmFyeVtzcG90XTtcbiAgICAgICAgICAgIGRvbURlbGV0ZSgnYm94Jyxib29rSWQpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib29rJHtib29rSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBlbGVtZW50TWFrZXIoYm9va0lkLCBib29rLCAnSU5QVVQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnU2F2ZSddLGJvb2tJZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgICAgIGFkZFRvRG9tKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFyZ2V0LmlubmVyVGV4dCA9PSAnU2F2ZScgfHwgdGFyZ2V0LmlubmVyVGV4dCA9PSAnQWRkJyl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tJZCA9IGdldElkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Jvb2sgPSBnZXRWYWx1ZXMoYm9va0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBuZXdCb29rLm1ha2VCb29rKCk7XG4gICAgICAgICAgICBuZXdCb29rLnJlcGxhY2VCb29rKCk7XG4gICAgICAgICAgICBkb21EZWxldGUoJ2JveCcsYm9va0lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYm9vayR7Ym9va0lkfWApO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZWxlbWVudE1ha2VyKGJvb2tJZCwgYm9vaywgJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkQm94ID0gYnV0dG9uTWFrZXIoYm94LFsnRWRpdCcsJ0RlbGV0ZSddLGJvb2tJZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZpbmlzaGVkQm94KTtcbiAgICAgICAgICAgIGFkZFRvRG9tKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=