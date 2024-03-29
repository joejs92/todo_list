import {projectCSS, buttonMaker, addToDom} from './css.js';

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
    const element = projectCSS('project', projectCounter);
    const box = elementsMaker(projectCounter, project, 'INPUT');
    const finishedElement = buttonMaker(box,['Create','Remove'],projectCounter);
    element.appendChild(finishedElement);
    addToDom(element, 'body');
    projectCounter += 1;
}

function getValued(projectId) {
    let title = document.getElementById(`titled${projectId}`).value;
    let newProject = new Project(title);
    return newProject;
}

export {addProjectTemplate, getValued, elementsMaker};