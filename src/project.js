import {projectCSS, buttonMaker} from './css.js';

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

function addProjectTemplate() {
    const newProject = new Project();
    const project = newProject.makeProject();
    const element = projectCSS('project', projectCounter);
    const title = document.createElement('INPUT');
    title.setAttribute("type","text");
    title.setAttribute("placeholder","Title");
    title.setAttribute("id",`titled${projectCounter}`);
    element.appendChild(title);
    const finishedElement = buttonMaker(element,['Create','Delete'],projectCounter);
    element.appendChild(finishedElement);
    addToDom(element, 'body');
    projectCounter += 1;
}


export {addProjectTemplate};