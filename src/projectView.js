import {
  ProjectsArr,
  ProjectsNameArr,
  selectedProj,
  changeTodoAtt,
} from "./projects.js";
import img from "./cancel.svg";
import img2 from "./edit_pen.svg";

let changeValue = 0;
let changedTodo = 0;

function createView(projIdx) {
  const container = document.querySelector(".content");
  container.innerHTML = "";
  const projName = document.createElement("h1");
  projName.textContent = ProjectsNameArr.at(projIdx);
  projName.classList.add("projName");
  container.appendChild(projName);
  ProjectsArr.at(projIdx).forEach((element, index) => {
    const toDo = document.createElement("div");
    const toDoTitle = document.createElement("h3");
    const toDoDescription = document.createElement("p");
    const toDoDate = document.createElement("p");
    const toDoPrio = document.createElement("p");
    const toDoNote = document.createElement("p");
    const toDoCheck = document.createElement("input");
    const toDoTopRight = document.createElement("div");
    const toDoDeleteBtt = document.createElement("img");
    const toDoEditBtt = document.createElement("img");

    toDoCheck.setAttribute("type", "checkbox");
    toDoTopRight.classList.add("todoTopRight");
    toDo.classList.add("todo");
    toDoTitle.textContent = element.title;
    toDoDescription.textContent = element.description;
    toDoDate.textContent = element.date;
    toDoPrio.textContent = element.prio;
    toDoNote.textContent = element.note;
    if (element.checklist === true) {
      toDoCheck.setAttribute("checked", true);
    }
    toDoEditBtt.src = img2;
    toDoEditBtt.addEventListener("click", () => {
        changeValue = 1;
        changedTodo = index;
      document.querySelector("#popup").setAttribute("style", "display:block");
      document.querySelector("#Ttitle").value = element.title;
      document.querySelector("#Tdesc").value = element.description;
      document.querySelector("#Tdate").value = element.date;
      document.querySelector("#Tprio").value = element.prio;
      document.querySelector("#Tnote").value = element.note;
      if (element.checklist === true) {
        document.querySelector("#TcheckYes").checked = true;
      } else {
        document.querySelector("#TcheckNo").checked = true;
      }
    });
    toDoDeleteBtt.src = img;

    container.appendChild(toDo);
    toDo.appendChild(toDoTopRight);
    toDoTopRight.appendChild(toDoDeleteBtt);
    toDoTopRight.appendChild(toDoEditBtt);
    toDo.appendChild(toDoTitle);
    toDo.appendChild(toDoDescription);
    toDo.appendChild(toDoDate);
    toDo.appendChild(toDoPrio);
    toDo.appendChild(toDoNote);
    toDo.appendChild(toDoCheck);
  });
}

function projList() {
  const container = document.querySelector(".projList");
  container.innerHTML = "";
  ProjectsNameArr.forEach((element, index) => {
    const proj = document.createElement("button");
    proj.classList.add(index);
    proj.textContent = element;
    container.appendChild(proj);
    proj.addEventListener("click", () => {
      createView(index);
      selectedProj = index;
    });
  });
}

export { createView, projList, changeValue, changedTodo };
