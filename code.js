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

function addTodoFileToArray(todoFile) {
  switch (todoFile.ownArray) {
    case "Default": {
      Default.push(todoFile);
      break;
    }
  }
}

function getTodoParameters() {
  let title = document.getElementById("formTitle").value;
  let description = document.getElementById("formDescription").value;
  let dueDate = document.getElementById("formDueDate").value;
  let priority = document.getElementById("formPriority").value;
  let notes = document.getElementById("formNotes").value;
  let array = document.getElementById("formArray").value;
  return [title, description, dueDate, priority, notes, array];
}

function createTodoFileFromParameters() {
  let parameters = getTodoParameters();
  return new todoFile(
    parameters[0],
    parameters[1],
    parameters[2],
    parameters[3],
    "false",
    parameters[4],
    parameters[5]
  );
}

function TodoObjectController() {
  let todoFile = createTodoFileFromParameters();
  addTodoFileToArray(todoFile, todoFile.ownArray);
  createHTMLForTodo(todoFile);
}

let Default = createArray("Default");
function createHTMLForTodo(todoFile) {
  let title = document.createElement("h1");
  let description = document.createElement("p");
  let dueDate = document.createElement("p");
  let priority = document.createElement("p");
  let checklist = document.createElement("p");
  let notes = document.createElement("p");
  let listing = document.getElementById("listing");
  title.innerText = `Title:  ${todoFile.title}`;
  description.innerText = "Description: " + todoFile.description;
  dueDate.innerText = "Due Date: " + todoFile.dueDate;
  priority.innerText = "Priority: " + todoFile.priority;
  checklist.innerText = "Checklist: " + todoFile.checklist;
  notes.innerText = "Notes: " + todoFile.notes;
  listing.appendChild(title);
  listing.appendChild(description);
  listing.appendChild(dueDate);
  listing.appendChild(priority);
  listing.appendChild(checklist);
  listing.appendChild(notes);
}
