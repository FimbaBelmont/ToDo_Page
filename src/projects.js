import {TODO} from "./todoClass.js"
import { JsonParser } from "./projSave.js";
import { createView, projList } from "./projectView.js";
let ProjectsArr = [];
let ProjectsNameArr = [];
if (!(localStorage.getItem("projArr"))) {

} else {
     ProjectsArr = JsonParser(localStorage.getItem("projArr"));
     ProjectsNameArr = JsonParser(localStorage.getItem("projNameArr"));
     createView(0, 1);
     projList();
  };




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
    ProjectsNameArr.splice(projIdx,1);

}


export {ProjectsArr, ProjectsNameArr, createProject, creatingTodo, changeTodoAtt, deleteTodo, deleteProj};