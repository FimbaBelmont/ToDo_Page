import { ProjectsArr, ProjectsNameArr } from "./projects";

function createView (projIdx) {
    let container = document.querySelector(".content");
    let projName = document.createElement("h1");
    projName.textContent = ProjectsNameArr.at(projIdx);
    projName.classList.add("projName");
    container.appendChild(projName);
    ProjectsArr.at(projIdx).forEach(element => {
        let toDo = document.createElement("div");
        let toDoTitle = document.createElement("h3");
        let toDoDescription = document.createElement("p");
        let toDoDate = document.createElement("p");
        let toDoPrio = document.createElement("p");
        let toDoNote = document.createElement("p");
        let toDoCheck = document.createElement("input");
        toDoCheck.setAttribute("type", "checkbox")
        toDo.classList.add("todo");
        toDoTitle.textContent = element.title;
        toDoDescription.textContent = element.description;
        toDoDate.textContent = element.date;
        toDoPrio.textContent = element.prio;
        toDoNote.textContent = element.note;
        if (element.checklist === true) {
            toDoCheck.setAttribute("checked", true);
        }
        container.appendChild(toDo);
        toDo.appendChild(toDoTitle);
        toDo.appendChild(toDoDescription); 
        toDo.appendChild(toDoDate);
        toDo.appendChild(toDoPrio); 
        toDo.appendChild(toDoNote);
        toDo.appendChild(toDoCheck); 
    });
}

export {createView};