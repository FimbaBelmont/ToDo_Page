import {ProjectsArr, ProjectsNameArr, createProject, creatingTodo, changeTodoAtt, deleteTodo, deleteProj} from "./projects";
import { createView } from "./projectView";
import "./stylesheet.css";


createProject("Proj1");
creatingTodo(0,"title","description","date","prio","note",true);
creatingTodo(0,"title","description","date","prio","note",true);
creatingTodo(0,"title","description","date","prio","note",false);
createProject("Proj2");
// console.log(ProjectsArr);
// console.log(ProjectsNameArr);
// console.log(ProjectsArr.at(0));
// console.log(ProjectsArr.at(0).at(0).title); 
changeTodoAtt(0, 0, "title", "testname");
changeTodoAtt(0,1,"checklist", false)
createView(0);
// console.log(ProjectsArr.at(0).at(0).title);
// console.log(ProjectsArr.at(0).at(0))


