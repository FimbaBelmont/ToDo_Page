import {
  ProjectsArr,
  ProjectsNameArr,
  createProject,
  creatingTodo,
  changeTodoAtt,
  deleteTodo,
  deleteProj,
} from "./projects.js";
import {
  createView,
  projList,
  changeValue,
  changedProjIdx,
  selectedProj,
  changedTodo,
  setter,
  changeValueSet,
  viewAll,
  viewCompleted,
  viewNoncomplete,
} from "./projectView.js";
import {
  sortComplete,
  sortTitle,
  sortPrio,
  sortDate,
  sortValue,
  sortValueChanger,
} from "./projSorter.js";
import "./stylesheet.css";
import { projSave, JsonParser } from "./projSave.js";

// createProject("Proj1");
// creatingTodo(0, "atitle", "desc", "2024-9-2", 2, "note", true);
// creatingTodo(0, "aatitle", "desc", "2024-10-5", 1, "note", true);
// creatingTodo(0, "dtitle", "desc", "2024-3-1", 4, "note", false);
// creatingTodo(0, "btitle", "desc", "2024-01-3", 3, "note", true);
// creatingTodo(0, "Atitle", "desc", "2023-9-2", 2, "note", false);
// creatingTodo(0, "ctitle", "desc", "2025-2-2", 5, "note", false);
// createView(0, sortValue);
// projList();


const createTaskBtt = document.querySelector(".createTodo");
createTaskBtt.addEventListener("click", () => {
  document.querySelector("#popup").setAttribute("style", "display:block");
});

const closePopup = document.querySelectorAll("#closePopup");
closePopup.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector("#popup").setAttribute("style", "display:none");
    document
      .querySelector(".projectPopup")
      .setAttribute("style", "display:none");
  });
  if (changeValue === 1) {
    changeValueSet(0);
  }
});

const createProjBtt = document.querySelector(".createProj");
createProjBtt.addEventListener("click", () => {
  document
    .querySelector(".projectPopup")
    .setAttribute("style", "display:block");
});

const addProjBtt = document.querySelector("#addProj");
addProjBtt.addEventListener("click", () => {
  if (changeValue === 1) {
    ProjectsNameArr.splice(
      changedProjIdx,
      1,
      document.querySelector("#Ptitle").value
    );
    changeValueSet(0);
    projList();
    createView(changedProjIdx);
    document
      .querySelector(".projectPopup")
      .setAttribute("style", "display:none");
    setter(selectedProj, changedProjIdx);
  } else {
    const Ptitle = document.querySelector("#Ptitle").value;
    createProject(Ptitle);
    projList();
    document.querySelector("#Ptitle").value = "";
    document
      .querySelector(".projectPopup")
      .setAttribute("style", "display:none");
    
  }
  createView((ProjectsArr.length-1), 1);
});

const addTodoBtt = document.querySelector("#addTask");
addTodoBtt.addEventListener("click", () => {
  let complete = false;
  if (document.querySelector("input[name=Tcheck]:checked").value === "no") {
    complete = false;
  } else {
    complete = true;
  }
  creatingTodo(
    selectedProj,
    document.querySelector("#Ttitle").value,
    document.querySelector("#Tdesc").value,
    document.querySelector("#Tdate").value,
    document.querySelector("#Tprio").value,
    document.querySelector("#Tnote").value,
    complete
  );
  if (changeValue === 1) {
    deleteTodo(selectedProj, changedTodo);
    changeValueSet(0);
  }
  createView(selectedProj, sortValue);
  document.querySelector("#popup").setAttribute("style", "display:none");
});

document.querySelector(".viewAll").addEventListener("click", () => {
  viewAll();
});

document.querySelector(".viewComplete").addEventListener("click", () => {
  createView(selectedProj, sortValue);
  viewCompleted();
});
document.querySelector(".viewIncomplete").addEventListener("click", () => {
  createView(selectedProj, sortValue);
  viewNoncomplete();
});
document.querySelector(".viewAllComplete").addEventListener("click", () => {
  createView(selectedProj, sortValue);
});


// TODO
// add the ability to save projects
// might create two different views for todos
//
