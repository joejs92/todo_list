function addTemplate() {
    const element = document.createElement('div');

    const title = document.createElement('INPUT');
    title.setAttribute("type", "text");
    title.setAttribute("value","Title");
    element.appendChild(title);

    //The date element needs to be fixed; doesn't work.
   /* const dueDate = document.createElement('DATE');
    element.appendChild(dueDate); */

    const priority = document.createElement('INPUT');
    priority.setAttribute("type", "text");
    priority.setAttribute("value","Priority");
    element.appendChild(priority);

    const description = document.createElement('TEXTAREA');
    description.setAttribute("placeholder","Description");
    element.appendChild(description); 

    const editButton = document.createElement('button');
    const buttonText = document.createTextNode("Add");
    editButton.appendChild(buttonText);
    element.appendChild(editButton);

    return element;
}

export {addTemplate};