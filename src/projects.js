import {TODO} from "./todoClass"

let ProjectsArr = [];
let ProjectsNameArr = [];
function createProject (name) {
    ProjectsArr.push([]);
    ProjectsNameArr.push(name);
    return ProjectsArr.length-1;
}

function creatingTodo (projIdx,title,description,date,prio,note,checklist) { 
    ProjectsArr.at(projIdx).push(new TODO (title,description,date,prio,note,checklist))

}

function changeTodoAtt (projIdx, todoIdx, att, value) {
    ProjectsArr.at(projIdx).at(todoIdx).changeAtt(att, value);
}

function deleteTodo (projIdx, todoIdx) {
    ProjectsArr.at(projIdx).splice(todoIdx, 1);
}

function deleteProj (projIdx) {
    ProjectsArr.splice(projIdx, 1);
}


export {ProjectsArr, ProjectsNameArr, createProject, creatingTodo, changeTodoAtt, deleteTodo, deleteProj};