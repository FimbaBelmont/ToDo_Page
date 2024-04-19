
class TODO  {

constructor(title,description,date,prio,note,checklist){
this.title = title,
this.description = description,
this.date = date,
this.prio = prio,
this.note = note,
this.checklist = checklist}

changeAtt = function(Att, value) {
    this[Att] = value;
}

}
export {TODO};
