class todoFile {
  constructor(title, description, dueDate, priority, checklist, notes, array) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.notes = notes;
    this.ownArray = array;
  }
}

//create array creator
function createArray(name) {
  let array = [];
  array.name = name;
  return array;
}

function addTodoFileToArray(todoFile, array) {
  array.push(todoFile);
}

function getTodoParameters() {
  let title = document.getElementById("formTitle").value;
  let description = document.getElementById("formDescription").value;
  let dueDate = document.getElementById("formDueDate").value;
  let priority = document.getElementById("formPriority").value;
  let checklist = document.getElementById("formChecklist").value;
  let notes = document.getElementById("formNotes").value;
  let array = document.getElementById("formArray").value;
  return [title, description, dueDate, priority, checklist, notes, array];
}

function createTodoFileFromParameters() {
  let parameters = getTodoParameters();
  return new todoFile(
    parameters[0],
    parameters[1],
    parameters[2],
    parameters[3],
    "false",
    parameters[5],
    parameters[6]
  );
}

function TodoObjectController(event) {
  event.preventDefault();
  let todoFile = createTodoFileFromParameters();
  addTodoFileToArray(todoFile, todoFile.ownArray);
  console.log(todoFile.ownArray);
}

let Default = createArray("Default");
