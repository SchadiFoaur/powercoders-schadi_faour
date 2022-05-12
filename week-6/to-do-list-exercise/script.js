/* Must have requirements
- list of to-dos
- possibility to add new to-do: input and button
- change order / set priority of to-dos
- change status of to-do(open/done - in progress)

Inputs - todo (list of object: string = number, boolean)
- 1 todo = object
- many todo = array of objects

Outputs - array of todo rendered as list items

steps -
- add todo
-- enter input 
-- submit input
-- get input  
-- validate input (is it empty, does exact string exist as open todo (repetition)) > invalid: return error message and / valid: enter input again
-- create object with input string, number (default add to bottom of list), boolean (default isDone: false) 
-- add to the list (push it to the array)
-- confirmation to user 

- add todo
- display list
- mark as done
- order / set priority
*/

/* variables 
- not in yet / missing: user input how to order list
*/
const todo = document.querySelector("input[type='text'] ");
const addBtn = document.querySelector("button");
const list = document.querySelector("ol");

let todos = [];

// check for duplicate entries
let isInputUnique = (newItem) => {
  // loop through the todos and compare each item to newItem~
  // if one item is equal to newItem > return false
  // else > return true
};

let addTodo = () => {
  // get value from input field
  let newItem = todo.value;

  // validate value from input field, check for duplicates
  if (isInputUnique(newItem)) {
    // create instance
    // push todos list
    //// to optimize: setting ids not based on array length, but on id of the last object in todos array
    todos.push(new ToDo(newItem, todos.length));
    clearList();
    displayList(todos);
  } else {
    // return error message to DOM
  }

  // create instance
  // push to todos list
};

let clearList = () => {
  list.textContent = "";
};

let displayList = (todos) => {
  clearList();
  // loop through todos list
  // for each object in the list we render HTML li-tag
  // based on the properties of the object
  // each li-tag will be appended to ol-DOM element "list"
  // add eventListener for checkbox to call changeStatus
};

let changeStatus = () => {
  // check input - checkbox - if  if it is checked
  // find the corresponding object and set isDone to true
  // if it is not checked set isDone to false
};

addBtn.addEventListener("click", addTodo);
displayList(todos);

function ToDo(id, text, isDone = false) {
  this.id = id;
  this.text = text;
  this.isDone = isDone;
  this.setId = function () {};
}
