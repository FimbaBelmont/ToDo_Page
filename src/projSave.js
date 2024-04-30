import { ProjectsArr, ProjectsNameArr } from "./projects";

function projSave() {
    //loop through every element in array
    //stringfy them and push them into array that has the name of project
   let JsonArr = [];
   let JsonNameArr = [];
   if (ProjectsArr.length > 0){ 
   ProjectsArr.forEach(element => {
    JsonArr.push(JSON.stringify(element));
   });
   ProjectsNameArr.forEach(element => {
    JsonNameArr.push(JSON.stringify(element));
   })
   
   localStorage.setItem("projArr", JSON.stringify(JsonArr));
   localStorage.setItem("projNameArr",JSON.stringify(JsonNameArr));
}}

function JsonParser(Arr) {
    let newArr = JSON.parse(Arr);
    let resultArr = [];
    newArr.forEach(element => {
        resultArr.push(JSON.parse(element));
    });
    console.log(resultArr);
    return resultArr;

}

export {projSave, JsonParser};