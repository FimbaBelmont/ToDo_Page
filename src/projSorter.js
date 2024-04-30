//Sort incomplete tasks and completed tasks differently
// other sort functions >by title, by date, by priority(This should make the compelted tasks last)
//and lastly sort by creation which is the default
import { ProjectsArr } from "./projects";
import { format, compareAsc} from "date-fns";

let sortValue = 1;

function sortValueChanger(value) {
  sortValue = value;
}

function sortComplete(ProjIdx) {
  let sortedArr = [];
  sortedArr.push(...ProjectsArr.at(ProjIdx));
  console.log(sortedArr);
  console.log(typeof(sortedArr))
  sortedArr.sort(function (a, b) {
    if (a.checklist === true && b.checklist === false) {
      return 1;
    } else if (a.checklist === true && b.checklist === true) {
      return 0;
    } else {
      return -1;
    }
  });
  return sortedArr;
}

function sortTitle(ProjIdx) {
    let sortedArr = [];
    sortedArr.push(...ProjectsArr.at(ProjIdx));
    sortedArr.sort(function(a, b) {
        if ((a.title.toLowerCase()) < (b.title.toLowerCase())) {
            return -1
        }
    });
    return sortedArr;
}

function sortPrio(ProjIdx) {
    let sortedArr = [];
    sortedArr.push(...ProjectsArr.at(ProjIdx));
    sortedArr.sort(function(a, b) {
        if ((a.prio) < (b.prio)&&(a.checklist === false)) {
            return -1
        }
        else if (((a.prio) < (b.prio)&&(a.checklist === true && b.checklist ===true))) {
            return -1
        }
    });
    return sortedArr;

}

function sortDate(ProjIdx) {
  let sortedArr = [];
  sortedArr.push(...ProjectsArr.at(ProjIdx));
  sortedArr.sort(function(a,b){ 
    let aDateArr = a.date.split("-");
    let bDateArr = b.date.split("-");
    return(compareAsc(new Date(aDateArr[0],aDateArr[1],aDateArr[2]), new Date(bDateArr[0],bDateArr[1],bDateArr[2])));
  })
  return sortedArr;
}

//for date sort check the date-fns module or smt



export { sortComplete, sortTitle, sortPrio, sortDate, sortValue, sortValueChanger};
