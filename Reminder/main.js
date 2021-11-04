const todoInput = document.querySelector(".todo-input");
const todoInputModal = document.querySelector(".todo-input-modal");
const addTodoBtn = document.querySelector(".add-todo-btn");
const todoListHome = document.querySelector(".todo-list-home");
const todoListWork = document.querySelector(".todo-list-work");
const todoListFamily = document.querySelector(".todo-list-family");
const todoListHobby = document.querySelector(".todo-list-hobby");
const addTodoBtn2 = document.querySelector(".addTodoBtn");
const todoModal = document.querySelector(".todoModal");
const todoSpan = document.querySelector(".closeTodo");
const containerFilter = document.querySelector(".filterBoxes");
const checkBoxesModal = document.querySelectorAll(".todoBoxModal");
const checkBoxesTodo = document.querySelectorAll(".todoBox");
const watchListBtn = document.querySelector(".seeWatchList");
const seeTodoBtn = document.querySelector(".seeTodo");
const todoInfo = document.querySelector(".todo-info");
const movieInfo = document.querySelector(".movie-board");
let title = document.querySelector(".title");
const homeFilter = document.querySelector(".homeFilter");
const workFilter = document.querySelector(".workFilter");
const familyFilter = document.querySelector(".familyFilter");
const hobbyFilter = document.querySelector(".hobbyFilter");
const showAllFilter = document.querySelector(".showAllFilter");
const urgentText = document.querySelectorAll(".urgentTitle");
const urgentBtn = document.querySelector(".urgentBtn");
const urgentBtnModal = document.querySelector(".urgentBtnModal");
const urgentTextModal = document.querySelectorAll(".urgentTitleModal");

// Eventlisteners

watchListBtn.addEventListener("click", showMovieOrTodo);
seeTodoBtn.addEventListener("click", showMovieOrTodo);
addTodoBtn.addEventListener("click", addTodo);
todoListHome.addEventListener("click", clickCheck);
todoListFamily.addEventListener("click", clickCheck);
todoListHobby.addEventListener("click", clickCheck);
todoListWork.addEventListener("click", clickCheck);
addTodoBtn2.addEventListener("click", openTodoModal);
homeFilter.addEventListener("click", filterFunction);
workFilter.addEventListener("click", filterFunction);
familyFilter.addEventListener("click", filterFunction);
hobbyFilter.addEventListener("click", filterFunction);
showAllFilter.addEventListener("click", filterFunction);
urgentBtn.addEventListener("click", changeColorOnText);
urgentBtnModal.addEventListener("click", changeColorOnText);

todoSpan.onclick = function () {
  todoModal.style.display = "none";
  toggleTodoModal();
  containerFilter.setAttribute("style", "display:block;");

  Array.from(checkBoxesModal).forEach((checkbox) => {
    checkbox.checked = false;
  });
};

window.onclick = function (event) {
  if (event.target == todoModal) {
    todoModal.style.display = "none";
    toggleTodoModal();
    containerFilter.setAttribute("style", "display:block;");
    Array.from(checkBoxesModal).forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
};

function changeColorOnText() {
  if (urgentBtn.checked) {
    urgentText[0].setAttribute("style", "color: red;");
  } else {
    urgentText[0].removeAttribute("style", "color: red;");
  }
  if (urgentBtnModal.checked) {
    urgentTextModal[0].setAttribute("style", "color: red;");
  } else {
    urgentTextModal[0].removeAttribute("style", "color: red;");
  }
}

function showMovieOrTodo(event) {
  console.log(event.target);

  if (event.target.classList.contains("fa-film")) {
    seeTodoBtn.setAttribute("style", "display:flex;");
    watchListBtn.setAttribute("style", "display:none;");
    todoInfo.setAttribute("style", "display:none;");
    movieInfo.setAttribute("style", "display: block;");
    title.setAttribute("style", "margin-left: 15px;");
    title.innerText = "My watchlist";
  } else if (event.target.classList.contains("fa-tasks")) {
    seeTodoBtn.setAttribute("style", "display:none;");
    watchListBtn.setAttribute("style", "display:flex;");
    todoInfo.setAttribute("style", "display:block;");
    movieInfo.setAttribute("style", "display: none;");
    title.removeAttribute("style", "margin-left: 15px;");
    title.innerText = "My todo";
  }
}

function openTodoModal() {
  const hideBackground = document.querySelector(".hide");

  console.log(hideBackground);

  hideBackground.setAttribute("style", "display:none;");

  containerFilter.setAttribute("style", "display:none;");

  todoModal.style.display = "block";

  const addBtnInModal = document.querySelector(".add-todo-btn-modal");

  addBtnInModal.addEventListener("click", addTodo);

  console.log(addBtnInModal);
}

function toggleTodoModal() {
  console.log(todoModal);

  todoModal.classList.toggle("hidden");

  const hideBackground = document.querySelector(".hide");

  hideBackground.removeAttribute("style", "display:none");
}

function filterFunction(event) {
  const choice = event.target;

  const todoListHome = document.querySelector(".todo-list-home");
  const parentDivHome = todoListHome.parentElement;
  const todoListWork = document.querySelector(".todo-list-work");
  const parentDivWork = todoListWork.parentElement;
  const todoListFamily = document.querySelector(".todo-list-family");
  const parentDivFamily = todoListFamily.parentElement;
  const todoListHobby = document.querySelector(".todo-list-hobby");
  const parentDivHobby = todoListHobby.parentElement;
  const homeTitle = document.querySelector(".homeTitle");
  const workTitle = document.querySelector(".workTitle");
  const familyTitle = document.querySelector(".familyTitle");
  const hobbyTitle = document.querySelector(".hobbyTitle");
  const showAllTitle = document.querySelector(".showAllTitle");

  if (choice.classList.contains("homeFilter")) {
    homeTitle.setAttribute("style", "color: blue;");
    workTitle.removeAttribute("style", "color: orangered;");
    familyTitle.removeAttribute("style", "color: red;");
    hobbyTitle.removeAttribute("style", "color: yellow;");
    showAllTitle.removeAttribute("style", "color: green;");
    parentDivHome.setAttribute("style", "display:block;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivWork.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("workFilter")) {
    homeTitle.removeAttribute("style", "color: blue;");
    workTitle.setAttribute("style", "color: orangered;");
    familyTitle.removeAttribute("style", "color: red;");
    hobbyTitle.removeAttribute("style", "color: yellow;");
    showAllTitle.removeAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:block;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivHome.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("familyFilter")) {
    homeTitle.removeAttribute("style", "color: blue;");
    workTitle.removeAttribute("style", "color: orangered;");
    familyTitle.setAttribute("style", "color: red;");
    hobbyTitle.removeAttribute("style", "color: yellow;");
    showAllTitle.removeAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:none;");
    parentDivFamily.setAttribute("style", "display:block;");
    parentDivHobby.setAttribute("style", "display:none;");
    parentDivHome.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("hobbyFilter")) {
    homeTitle.removeAttribute("style", "color: blue;");
    workTitle.removeAttribute("style", "color: orangered;");
    familyTitle.removeAttribute("style", "color: red;");
    hobbyTitle.setAttribute("style", "color: yellow;");
    showAllTitle.removeAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:none;");
    parentDivFamily.setAttribute("style", "display:none;");
    parentDivHobby.setAttribute("style", "display:block;");
    parentDivHome.setAttribute("style", "display:none;");
  } else if (choice.classList.contains("showAllFilter")) {
    homeTitle.removeAttribute("style", "color: blue;");
    workTitle.removeAttribute("style", "color: orangered;");
    familyTitle.removeAttribute("style", "color: red;");
    hobbyTitle.removeAttribute("style", "color: yellow;");
    showAllTitle.setAttribute("style", "color: green;");
    parentDivWork.setAttribute("style", "display:block;");
    parentDivFamily.setAttribute("style", "display:block;");
    parentDivHobby.setAttribute("style", "display:block;");
    parentDivHome.setAttribute("style", "display:block;");
  }
}

function addTodo(event) {
  console.log(event.target);

  let countTodo = 0;
  let countModal = 0;

  const warningModal = document.querySelector(".warningModal");
  let warningText = document.querySelector(".warningText");

  checkBoxesTodo.forEach((checkbox) => {
    if (checkbox.checked) {
      countTodo++;
    }
  });

  checkBoxesModal.forEach((checkbox) => {
    if (checkbox.checked) {
      countModal += 1;
    }
  });

  if (
    (!event.target.classList.contains("add-todo-btn-modal") &&
      todoInput.value === "") ||
    (!event.target.classList.contains("add-todo-btn-modal") &&
      !todoInput.value.trim())
  ) {
    warningText.innerText = "Please write a todo-text!!";

    warningModal.style.display = "block";
  } else if (
    (event.target.classList.contains("add-todo-btn-modal") &&
      todoInputModal.value === "") ||
    (event.target.classList.contains("add-todo-btn-modal") &&
      !todoInputModal.value.trim())
  ) {
    warningText.innerText = "Please write a todo-text!!";

    warningModal.style.display = "block";
  } else if (
    countTodo === 0 &&
    event.target.classList.contains("add-todo-btn")
  ) {
    warningText.innerText = "You have to choose a category!";

    warningModal.style.display = "block";
  } else if (
    countModal === 0 &&
    event.target.classList.contains("add-todo-btn-modal")
  ) {
    warningText.innerText = "You have to choose a category!";

    warningModal.style.display = "block";
  } else {
    event.preventDefault();

    //parent div = "todo-div"

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    //If urgent is checked

    let urgentCheckBox = document.querySelector(".urgent");
    let urgentCheckBoxModal = document.querySelector(".urgentBox");

    console.log(urgentCheckBox);

    if (urgentCheckBox.checked || urgentCheckBoxModal.checked) {
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

    // console.log(todoInput.value);
    console.log(todoInputModal.value);

    if (todoInput.value === "") {
      todoItem.innerText = todoInputModal.value;
    } else if (todoInputModal.value === "") {
      todoItem.innerText = todoInput.value;
    }

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

    todoInputModal.value = "";

    todoModal.style.display = "none";
    toggleTodoModal();

    containerFilter.setAttribute("style", "display:block;");

    Array.from(checkBoxesTodo).forEach((checkbox) => {
      checkbox.checked = false;
    });

    Array.from(checkBoxesModal).forEach((checkbox) => {
      checkbox.checked = false;
    });
    urgentText[0].setAttribute("style", "color: blanchedalmond;");
    urgentTextModal[0].setAttribute("style", "color: blanchedalmond;");
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
    const parentDiv = clickedTarget.parentElement;

    if (clickedTarget.classList.contains("colorEdit")) {
      console.log("Jag kom in hit");
      if (parentDiv.children[0].classList.contains("fa-bomb")) {
        parentDiv.children[5].remove();

        clickedTarget.classList.remove("colorEdit");
      } else {
        parentDiv.removeChild(parentDiv.children[4]);

        clickedTarget.classList.remove("colorEdit");
      }
    } else {
      clickedTarget.classList.add("colorEdit");

      const editDiv = document.createElement("div");
      editDiv.classList.add("edit-todo-div");

      parentDiv.appendChild(editDiv);

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
      saveEditBtn.classList.add("styleBtn");

      saveEditBtn.classList.add("add-todo-btn");

      saveEditBtn.innerText = "Save";

      editDiv.appendChild(saveEditBtn);

      saveEditBtn.addEventListener("click", changeValue);
    }
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

  // Get todo wrapper div
  const grandparent = edit.parentElement;

  // Get input of edit

  const editInput = edit.children[1];

  if (edit.children[0].classList.contains("strike")) {
    console.log("Försöker ta bort bomb");
    if (grandparent.children[0].classList.contains("fa-bomb")) {
      grandparent.children[0].remove("fa-bomb");
      grandparent.children[3].classList.remove("editColor");
    }
  } else {
    if (!grandparent.children[0].classList.contains("fa-bomb")) {
      const urgentText = document.createElement("i");
      urgentText.setAttribute("align", "left");
      urgentText.classList.add("fa");
      urgentText.classList.add("fa-bomb");
      urgentText.setAttribute("style", "color:red;");

      grandparent.insertBefore(urgentText, grandparent.children[0]);
      grandparent.children[4].classList.remove("editColor");
    }
  }

  const todoDiv = grandparent.parentElement;

  // Change todo input
  if (grandparent.children[0].classList.contains("fa-bomb")) {
    grandparent.children[3].innerText = editInput.value;
    todoDiv.insertBefore(grandparent, todoDiv.children[0]);
  } else {
    grandparent.children[2].innerText = editInput.value;
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
