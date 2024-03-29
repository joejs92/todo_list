let todoList = [];
let todoNumber = 0

function addTemplate() {
    const element = document.createElement('div');
    element.setAttribute('class','todo');
    element.style.width = '540px';
    element.style.padding = '4px';
    element.style.margin='8px';
    element.style.borderWidth = '1px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'black';
    let idNumber = 0;
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todos) => {
        idNumber += 1;
    })
    element.setAttribute('id',`todo${idNumber}`)

    const todoTop = document.createElement('div');
    todoTop.setAttribute('class','todoSection');

    const todoBottom = document.createElement('div');
    todoBottom.setAttribute('class','todoSection');

    const title = document.createElement('INPUT');
    title.setAttribute("type", "text");
    title.setAttribute("placeholder","Title");
    title.setAttribute("id","title");
    todoTop.appendChild(title);

    const dueDate = document.createElement('input');
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id","date");
    todoTop.appendChild(dueDate); 

    const priority = document.createElement('INPUT');
    priority.setAttribute("type", "text");
    priority.setAttribute("placeholder","Priority");
    priority.setAttribute("id","priority");
    todoTop.appendChild(priority);

    const description = document.createElement('TEXTAREA');
    description.setAttribute("placeholder","Description");
    description.setAttribute("cols","52");
    description.setAttribute("id","description");
    todoBottom.appendChild(description); 

    const addButton = document.createElement('button');
    const buttonText = document.createTextNode("Add");
    addButton.setAttribute('class','addButton');
    addButton.appendChild(buttonText);
    todoBottom.appendChild(addButton);

    const cancelButton = document.createElement('button');
    const cancelButtonText = document.createTextNode("Cancel");
    cancelButton.setAttribute('class','cancelButton');
    cancelButton.setAttribute('id',`button${idNumber}`);
    cancelButton.appendChild(cancelButtonText);
    todoBottom.appendChild(cancelButton);

    element.appendChild(todoTop);
    element.appendChild(todoBottom);

    return element;
}

class Todo {
    constructor(title, dueDate, priority, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
    }

    addToList() {
        const todoArray = [todoNumber, this.title, this.dueDate, this.priority, this.description];
        todoList.push(todoArray);
    }

    createTodo() {
        const todoCard = document.createElement('div');
        todoCard.setAttribute('class','todoCard');
        todoCard.setAttribute('id',`todoCard${todoList[todoNumber][0]}`)
        todoCard.style.width = '540px';
        todoCard.style.padding = '4px';
        todoCard.style.margin='8px';
        todoCard.style.borderWidth = '1px';
        todoCard.style.borderStyle = 'solid';
        todoCard.style.borderColor = 'black';
        
        const todoTop = document.createElement('div');
        todoTop.setAttribute('class','todoSection');
        todoTop.style.display = 'flex';
        todoTop.style.justifyContent = 'space-between';

        const todoBottom = document.createElement('div');
        todoBottom.setAttribute('class','todoSection');
        todoBottom.style.display = 'flex';
        todoBottom.style.justifyContent = 'space-between';

        const textTitle = document.createElement('div');
        textTitle.setAttribute('class','textBox');
        const titleContent = document.createElement('p');
        textTitle.appendChild(titleContent);
        titleContent.textContent = `Title: ${todoList[todoNumber][1]}`;
        todoTop.appendChild(textTitle);

        const textDate = document.createElement('div');
        textDate.setAttribute('class','textBox');
        const dateContent = document.createElement('p');
        textDate.appendChild(dateContent);
        dateContent.textContent = `Due Date: ${todoList[todoNumber][2]}`;
        todoTop.appendChild(textDate);

        const textPriority = document.createElement('div');
        textPriority.setAttribute('class','textBox');
        const priorityContent = document.createElement('p');
        textPriority.appendChild(priorityContent);
        priorityContent.textContent = `Priority Level: ${todoList[todoNumber][3]}`;
        todoTop.appendChild(textPriority);

        const textDescription = document.createElement('div');
        textDescription.setAttribute('class','descriptionBox');
        const descriptionContent = document.createElement('p');
        textDescription.appendChild(descriptionContent);
        descriptionContent.textContent = todoList[todoNumber][4];
        todoBottom.appendChild(textDescription);

        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class','buttonDiv');

        const editButton = document.createElement('button');
        const buttonText = document.createTextNode("Edit");
        editButton.setAttribute('class','editButton');
        editButton.setAttribute('id',`edit${todoList[todoNumber][0]}`);
        editButton.appendChild(buttonText);
        buttonDiv.appendChild(editButton);

        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createTextNode("Delete");
        deleteButton.setAttribute('class','deleteButton');
        deleteButton.setAttribute('id',`delete${todoList[todoNumber][0]}`);
        deleteButton.appendChild(deleteButtonText);
        buttonDiv.appendChild(deleteButton);

        todoBottom.appendChild(buttonDiv);

        todoCard.appendChild(todoTop);
        todoCard.appendChild(todoBottom);

        todoNumber += 1;

        return todoCard;
    }
}

function addTodo() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const newTodo = new Todo(title, date, priority, description);
    newTodo.addToList();
    return newTodo.createTodo();
}

function editTodo() {
    
}

export {addTemplate, addTodo};