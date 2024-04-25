import {
  ProjectsArr,
  ProjectsNameArr,
  createProject,
  creatingTodo,
  changeTodoAtt,
  deleteTodo,
  deleteProj,
  selectedProj,

} from "./projects.js";
import { createView, projList ,  changeValue,
    changedTodo,} from "./projectView.js";
import "./stylesheet.css";

createProject("Proj1");
createView(0);
projList();

let createTaskBtt = document.querySelector(".createTodo");
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
    changeValue === 0;
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
  const Ptitle = document.querySelector("#Ptitle").value;
  createProject(Ptitle);
  projList();
  document.querySelector("#Ptitle").value = "";
  document.querySelector(".projectPopup").setAttribute("style", "display:none");
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
  if (changeValue === 1){ 
    deleteTodo(selectedProj, changedTodo);
    changeValue === 0;
  }
  createView(selectedProj);
  document.querySelector("#popup").setAttribute("style", "display:none");
});

//TODO
//able to change project name
//might create two different views for todos
//todos should change color and change their order depending on their completeness and priority
//view all projects
//add the ability to save projects
//
