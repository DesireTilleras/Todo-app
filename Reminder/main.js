const todoInput = document.querySelector(".todo-input");

const addTodoBtn = document.querySelector(".add-todo-btn");

const todoListHome = document.querySelector(".todo-list-home");
const todoListWork = document.querySelector(".todo-list-work");
const todoListFamily = document.querySelector(".todo-list-family");
const todoListHobby = document.querySelector(".todo-list-hobby");

// Eventlisteners

addTodoBtn.addEventListener("click", addTodo);
todoListHome.addEventListener("click", clickCheck);
todoListFamily.addEventListener("click", clickCheck);
todoListHobby.addEventListener("click", clickCheck);
todoListWork.addEventListener("click", clickCheck);

const homeFilter = document.querySelector(".homeFilter");
const workFilter = document.querySelector(".workFilter");
const familyFilter = document.querySelector(".familyFilter");
const hobbyFilter = document.querySelector(".hobbyFilter");
const showAllFilter = document.querySelector(".showAllFilter");

homeFilter.addEventListener("click", filterFunction);
workFilter.addEventListener("click", filterFunction);
familyFilter.addEventListener("click", filterFunction);
hobbyFilter.addEventListener("click", filterFunction);
showAllFilter.addEventListener("click", filterFunction);





function filterFunction(event){


  const choice = event.target;
  
  const todoListHome = document.querySelector(".todo-list-home");
  const parentDivHome = todoListHome.parentElement;
  const todoListWork = document.querySelector(".todo-list-work");
  const parentDivWork= todoListWork.parentElement;
  const todoListFamily = document.querySelector(".todo-list-family");
  const parentDivFamily = todoListFamily.parentElement;
  const todoListHobby = document.querySelector(".todo-list-hobby");
  const parentDivHobby = todoListHobby.parentElement;
  const homeTitle = document.querySelector(".homeTitle");
  const workTitle = document.querySelector(".workTitle");
  const familyTitle = document.querySelector(".familyTitle");
  const hobbyTitle = document.querySelector(".hobbyTitle");

     console.log(parentDivFamily);

  if (choice.classList.contains("homeFilter")) {
    homeTitle.setAttribute("style", "color: green;");
    workTitle.removeAttribute("style", "color: green;");
    familyTitle.removeAttribute("style", "color: green;");
    hobbyTitle.removeAttribute("style", "color: green;"); 
    parentDivHome.setAttribute("style", "display:block;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivWork.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("workFilter")) {
        homeTitle.removeAttribute("style", "color: green;");
        workTitle.setAttribute("style", "color: green;");
        familyTitle.removeAttribute("style", "color: green;");
        hobbyTitle.removeAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:block;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivHome.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("familyFilter")) {
        homeTitle.removeAttribute("style", "color: green;");
        workTitle.removeAttribute("style", "color: green;");
        familyTitle.setAttribute("style", "color: green;");
        hobbyTitle.removeAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:none;");
    parentDivFamily.setAttribute("style", "display:block;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivHome.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("hobbyFilter")) {
        homeTitle.removeAttribute("style", "color: green;");
        workTitle.removeAttribute("style", "color: green;");
        familyTitle.removeAttribute("style", "color: green;");
        hobbyTitle.setAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:none;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:block;");
    parentDivHome.setAttribute("style", "display:none;");
  }else if(choice.classList.contains("showAllFilter")){
        homeTitle.removeAttribute("style", "color: green;");
        workTitle.removeAttribute("style", "color: green;");
        familyTitle.removeAttribute("style", "color: green;");
        hobbyTitle.removeAttribute("style", "color: green;");
        parentDivWork.setAttribute("style", "display:block;");
        parentDivFamily.setAttribute("style", "display:block;");
        parentDivHobby.setAttribute("style", "display:block;");
        parentDivHome.setAttribute("style", "display:block;");

  }
  

}

function addTodo(event) {
  if (todoInput.value === "" || !todoInput.value.trim()) {
    alert("Please write a todo!");
  } else {
    event.preventDefault();

    //parent div = "todo-div"

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    //If urgent is checked

    let urgentCheckBox = document.querySelector(".urgent");

    console.log(urgentCheckBox);

    if (urgentCheckBox.checked) {
      const urgentText = document.createElement("i");
      urgentText.setAttribute("align", "left");
      urgentText.classList.add("fa");
      urgentText.classList.add("fa-bomb");
      urgentText.setAttribute("style", "color:red;");
      todoDiv.appendChild(urgentText);
    }

    //Trash button

    const trashBtn = document.createElement("i");
    trashBtn.classList.add("fa");

    trashBtn.classList.add("fa-trash-o");

    trashBtn.classList.add("trash-btn");

    todoDiv.appendChild(trashBtn);


    const span = document.createElement("span");
    span.setAttribute("id", "checkbox");

    todoDiv.appendChild(span);

    const doneBox = document.createElement("input");

    doneBox.setAttribute("type", "checkbox");

    doneBox.setAttribute("id", "checkbox-element");

    doneBox.setAttribute("name", "completed");

    doneBox.setAttribute("value", "completed");

    doneBox.setAttribute("align", "left");

    doneBox.classList.add("done-checkbox");

    span.appendChild(doneBox);

    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-check");

    span.appendChild(icon);

    //List item = "todo-item"

    const todoItem = document.createElement("p");

    todoItem.classList.add("todo-item");

    todoItem.setAttribute("align", "right");

    todoItem.innerText = todoInput.value;

    todoDiv.appendChild(todoItem);

    //Edit button

    const editBtn = document.createElement("i");

    editBtn.classList.add("fa");

    editBtn.classList.add("fa-edit");

    editBtn.classList.add("edit-btn");

    todoDiv.appendChild(editBtn);

    let checkboxes = document.getElementsByName("choice");

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked && checkbox.value == "home") {
        if (todoDiv.children[0].classList.contains("fa-bomb")) {
          todoListHome.insertBefore(todoDiv, todoListHome.children[0]);
        } else {
          todoListHome.appendChild(todoDiv);
        }
      } else if (checkbox.checked && checkbox.value == "work") {
        if (todoDiv.children[0].classList.contains("fa-bomb")) {
          todoListWork.insertBefore(todoDiv, todoListWork.children[0]);
        } else {
          todoListWork.appendChild(todoDiv);
        }
      } else if (checkbox.checked && checkbox.value == "family") {
        if (todoDiv.children[0].classList.contains("fa-bomb")) {
          todoListFamily.insertBefore(todoDiv, todoListFamily.children[0]);
        } else {
          todoListFamily.appendChild(todoDiv);
        }
      } else if (checkbox.checked && checkbox.value == "hobby") {
        if (todoDiv.children[0].classList.contains("fa-bomb")) {
          todoListHobby.insertBefore(todoDiv, todoListHobby.children[0]);
        } else {
          todoListHobby.appendChild(todoDiv);
        }
      }
    });

    //Rensa rutan

    todoInput.value = "";
  }
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("choice");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
function onlyOneFilter(checkbox) {
  var checkboxes = document.getElementsByName("filter");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

function clickCheck(event) {
  console.log(event.target);
  //Get clicked target

  const clickedTarget = event.target;

  console.log(clickedTarget);

  //Get clicked target parent
  const todo = clickedTarget.parentElement;

  //If clicked target has class "trash-btn"
  if (clickedTarget.classList.contains("fa-trash-o")) {
    todo.remove();
  } else if (clickedTarget.classList.contains("fa-edit")) {
    console.log("Edit todo");

    const parentDiv = clickedTarget.parentElement;

    console.log(parentDiv);

    //Skapa en modal??

    const editDiv = document.createElement("div");
    editDiv.classList.add("edit-todo-div");

    parentDiv.appendChild(editDiv);

    console.log(parentDiv);

    if (parentDiv.children[0].classList.contains("fa-bomb")) {
      const bombIcon = document.createElement("i");
      bombIcon.classList.add("fa");
      bombIcon.classList.add("fa-bomb");
      bombIcon.setAttribute("style", "color: red; font-size:30px;");

      editDiv.appendChild(bombIcon);

      bombIcon.addEventListener("click", changeUrgent);
    } else {
      const bombIcon = document.createElement("i");
      bombIcon.classList.add("fa");
      bombIcon.classList.add("fa-bomb");
      bombIcon.classList.add("strike");
      bombIcon.setAttribute("id", "checkbox");
      bombIcon.setAttribute("style", "color: green; font-size:30px;");

      editDiv.appendChild(bombIcon);

      bombIcon.addEventListener("click", changeUrgent);
    }

    const editTodoText = document.createElement("input");
    editTodoText.setAttribute("type", "text");
    editTodoText.value = todo.querySelector(".todo-item").innerText;
    editTodoText.classList.add("text-box");
    editTodoText.classList.add("edit-input");

    editDiv.appendChild(editTodoText);

    const saveEditBtn = document.createElement("button");

    saveEditBtn.classList.add("save-btn");

    saveEditBtn.classList.add("add-todo-btn");

    saveEditBtn.innerText = "Save";

    editDiv.appendChild(saveEditBtn);

    saveEditBtn.addEventListener("click", changeValue);
  } else if (clickedTarget.classList.contains("done-checkbox")) {
    const parentDiv1 = todo.parentElement;
    console.log(todo.parentElement);

    if (parentDiv1.children[0].classList.contains("fa-bomb")) {
      const doneCheckBox = todo.children[0];

      parentDiv1.children[3].classList.add("strike");

      if (!doneCheckBox.checked) {
        parentDiv1.children[3].classList.remove("strike");
      }
    } else {
      const doneCheckBox2 = todo.children[0];
      parentDiv1.children[2].classList.add("strike");
      if (!doneCheckBox2.checked) {
        parentDiv1.children[2].classList.remove("strike");
      }
    }
  }
}
function changeValue(event) {
  console.log("Nu är jag i change value");

  const savebtn = event.target;

  // Get edit wrapper div
  const edit = savebtn.parentElement;

  console.log(edit);
  // Get todo wrapper div
  const grandparent = edit.parentElement;

  // Get input of edit

  const editInput = edit.children[1];

  if (edit.children[0].classList.contains("strike")) {
    console.log("Försöker ta bort bomb");
    grandparent.children[0].remove("fa-bomb");
  } else {
    if (!grandparent.children[0].classList.contains("fa-bomb")) {
      const urgentText = document.createElement("i");
      urgentText.setAttribute("align", "left");
      urgentText.classList.add("fa");
      urgentText.classList.add("fa-bomb");
      urgentText.setAttribute("style", "color:red;");

      grandparent.insertBefore(urgentText, grandparent.children[0]);
    }
  }

  console.log(grandparent);

  const todoDiv = grandparent.parentElement;

  // Change todo input
  if (grandparent.children[0].classList.contains("fa-bomb")) {
    grandparent.children[3].innerText = editInput.value;

    console.log(todoDiv);
    todoDiv.insertBefore(grandparent, todoDiv.children[0]);
  } else {
    grandparent.children[2].innerText = editInput.value;
    todoDiv.appendChild(grandparent);
  }

  // Hide edit div
  edit.setAttribute("style", "display:none;");
}

function changeUrgent(event) {

  const bombIcon = event.target;

  if (bombIcon.classList.contains("strike")) {
    bombIcon.classList.remove("strike");
    bombIcon.setAttribute("style", "color:red; font-size:30px;");
  } else {
    bombIcon.setAttribute("style", "color:green; font-size:30px;");

    bombIcon.classList.add("strike");
  }
}
