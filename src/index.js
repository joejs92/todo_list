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