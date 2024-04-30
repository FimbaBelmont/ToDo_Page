import { ProjectsArr,deleteTodo, ProjectsNameArr, changeTodoAtt, deleteProj } from "./projects.js";
import img from "./cancel.svg";
import img2 from "./edit_pen.svg";
import { format, formatDistanceToNow } from "date-fns";
import { sortComplete,
	sortTitle, 
	sortPrio,
	sortDate,
	sortValueChanger } from "./projSorter.js";
	import { projSave } from "./projSave.js";

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
function createView(projIdx, sortValue) {
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
	const projDeleteBtt = document.createElement("img");
	projDeleteBtt.src = img;
	projNameContainer.appendChild(projDeleteBtt);
	projDeleteBtt.addEventListener("click", ()=>{
		deleteProj(projIdx);
		viewAll();
		projList();
	})
	const sortButtons = document.createElement("div");
	sortButtons.classList.add("sortButtons");
	container.appendChild(sortButtons);
	const sortText= document.createElement("h5");
	sortText.textContent = "Sort by:";
	sortButtons.appendChild(sortText);
	const sort1 = document.createElement("button");
	sort1.classList.add("sort1");
	sort1.textContent = "Creation Date";
	sortButtons.appendChild(sort1);
	const sort2 = document.createElement("button");
	sort2.classList.add("sort2");
	sort2.textContent = "Completeness";
	sortButtons.appendChild(sort2);
	const sort3 = document.createElement("button");
	sort3.classList.add("sort3");
	sort3.textContent = "Title";
	sortButtons.appendChild(sort3);
	const sort4 = document.createElement("button");
	sort4.classList.add("sort4");
	sort4.textContent = "Priority";
	sortButtons.appendChild(sort4);
	const sort5 = document.createElement("button");
	sort5.classList.add("sort5");
	sort5.textContent = "Oldest";
	sortButtons.appendChild(sort5);
	
	let usedArr = [];
	switch (sortValue) {
		case 1:
			usedArr = ProjectsArr.at(projIdx);
			console.log(usedArr);
			break;
		case 2:
		usedArr =  sortComplete(projIdx);

		console.log(usedArr);
		break;
		case 3:
			usedArr = sortTitle(projIdx);

			console.log(usedArr);
			break;
		case 4:
			usedArr = sortPrio(projIdx);

			console.log(usedArr);
			break;
		case 5:
			usedArr = sortDate(projIdx);

			break;

			default:
			usedArr = ProjectsArr.at(projIdx);
			break;
	}
	document.querySelector(".sort1").addEventListener("click", () => {
		sortValueChanger(1);
		createView(selectedProj, 1);
	  });
	  
	  document.querySelector(".sort2").addEventListener("click", () => {
		sortValueChanger(2);
		createView(selectedProj, 2);
	  });
	  document.querySelector(".sort3").addEventListener("click", () => {
		sortValueChanger(3);
		createView(selectedProj, 3);
	  });
	  document.querySelector(".sort4").addEventListener("click", () => {
		sortValueChanger(4);
		createView(selectedProj, 4);
	  });
	  document.querySelector(".sort5").addEventListener("click", () => {
		sortValueChanger(5);
		createView(selectedProj, 5);
	  });

	
	usedArr.forEach((element, index) => {
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
		let dateArr = element.date.split("-");
		let formattedDate = format(new Date(dateArr[0],dateArr[1],dateArr[2]), "cccc dd/MM/yyyy" );
		const howFar = formatDistanceToNow(new Date(dateArr[0], dateArr[1], dateArr[2]), {
			addSuffix: true
		  })
		toDoDate.innerHTML = `${formattedDate} <br> ${howFar}`;
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
		toDoDeleteBtt.addEventListener("click", ()=>{
			deleteTodo(projIdx, index);
			createView(projIdx);
		})
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

		projSave()
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
	projSave();
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

function viewCompleted() {
let projViewArr = document.querySelectorAll(".todo");
projViewArr.forEach(element => {
	if(!(element.children[6].hasAttribute('checked'))) {
		element.remove();
	}
});
}

function viewNoncomplete() {
	let projViewArr = document.querySelectorAll(".todo");
projViewArr.forEach(element => {
	if((element.children[6].hasAttribute('checked'))) {
		element.remove();
	}
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
	viewCompleted,
	viewNoncomplete,
};
