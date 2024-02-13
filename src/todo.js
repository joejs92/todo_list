
function addTemplate() {
    const element = document.createElement('div');
    element.setAttribute('class','todo');

    const todoTop = document.createElement('div');
    todoTop.setAttribute('class','todoSection');

    const todoBottom = document.createElement('div');
    todoBottom.setAttribute('class','todoSection');

    const title = document.createElement('INPUT');
    title.setAttribute("type", "text");
    title.setAttribute("value","Title");
    todoTop.appendChild(title);

    const dueDate = document.createElement('input');
    dueDate.setAttribute("type", "date");
    todoTop.appendChild(dueDate); 

    const priority = document.createElement('INPUT');
    priority.setAttribute("type", "text");
    priority.setAttribute("value","Priority");
    todoTop.appendChild(priority);

    const description = document.createElement('TEXTAREA');
    description.setAttribute("placeholder","Description");
    description.setAttribute("cols","52");
    todoBottom.appendChild(description); 

    const editButton = document.createElement('button');
    const buttonText = document.createTextNode("Add");
    editButton.appendChild(buttonText);
    todoBottom.appendChild(editButton);

    element.appendChild(todoTop);
    element.appendChild(todoBottom);

    return element;
}

export {addTemplate};