import { ProjectsArr, ProjectsNameArr, changeTodoAtt } from "./projects.js";
import img from "./cancel.svg";
import img2 from "./edit_pen.svg";

let changedTodo = 0;
let changedProjIdx = 0;
let selectedProj = 0;
let changeValue = 0;

function changeValueSet(value) {
	changeValue = value;
	console.log(changeValue);
}

function setter(changedVar, value) {
	changedVar = value;
}
function createView(projIdx) {
	const container = document.querySelector(".content");
	container.innerHTML = "";
	const projNameContainer = document.createElement("div");
	container.appendChild(projNameContainer);
	projNameContainer.classList.add("projNameContainer");
	projNameContainer.setAttribute("style", "display:flex; flex-direction:row");
	const projName = document.createElement("h1");
	projName.textContent = ProjectsNameArr.at(projIdx);
	projName.classList.add("projName");
	projNameContainer.appendChild(projName);
	const projEditBtt = document.createElement("img");
	projEditBtt.src = img2;
	projNameContainer.appendChild(projEditBtt);
	projEditBtt.addEventListener("click", () => {
		changeValue = 1;
		changedProjIdx = projIdx;
		document
			.querySelector(".projectPopup")
			.setAttribute("style", "display:block");
		document.querySelector("#Ptitle").value = ProjectsNameArr.at(projIdx);
	});
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
			document
				.querySelector("#popup")
				.setAttribute("style", "display:block");
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

function viewAll() {
	const container = document.querySelector(".content");
	container.innerHTML = "";
	let viewText = document.createElement("h1");
	viewText.textContent = "Viewing All Projects";
	container.appendChild(viewText);
	viewText.classList.add("viewText");
	ProjectsArr.forEach((proj, index) => {
    	let viewAllProj = document.createElement("div");
		viewAllProj.classList.add("projView");
		container.appendChild(viewAllProj);
		let projName = document.createElement("h3");
		projName.textContent = ProjectsNameArr.at(index);
		viewAllProj.appendChild(projName);
		proj.forEach((element) => {
			let todoName = document.createElement("p");
			todoName.textContent = element.title;
			viewAllProj.appendChild(todoName);
		});
		viewAllProj.addEventListener("click", () => {
			createView(index);
		});
	});
}

export {
	createView,
	projList,
	changeValue,
	changedTodo,
	changedProjIdx,
	selectedProj,
	changeValueSet,
	setter,
	viewAll,
};
