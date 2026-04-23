const ul = document.querySelector("ul");
const addBtn = document.querySelector(".AddBtn");
const inputData = document.querySelector(".inputItem");
// const status = document.querySelector(".tdStatus");

// addBtn.addEventListener("click", function () {
//   const newLi = document.createElement("li");
//   newLi.classList.add("tdItem");
//   newLi.innerHTML = `${inputData.value} <span><input type="checkbox" name="status" class="tdStatus"/></span>`;
//   ul.appendChild(newLi);
// });
addBtn.addEventListener("click", addNewToDo);

inputData.addEventListener("keydown", addNewToDOWithEnter);

//     function addNewToDo() {
//       const value = inputData.value.trim();

//       if (!value) {
//         alert("Please enter a task before adding.");
//         return;
//       }
//       const newLi = document.createElement("li");
//       newLi.classList.add("tdItem");
//       newLi.innerHTML = `<span class="todo-text">${value}</span>

//         <div class="b">
//   <span>
//             <input type="checkbox" name="status" class="tdStatus"/>
//      </span>
//               <span> <img src="./deletev2.png" alt="delete" /></span>

//               <span> <img src="./edit.png" alt="edit" /></span>
//         </div>`;

//       ul.appendChild(newLi);
//       inputData.value = "";
//     }
// this above function is older one

// ul.addEventListener("change", function (e) {
//   if (e.target.classList.contains("tdStatus")) {
//     const li = e.target.closest("li");

//     if (e.target.checked) {
//       li.style.textDecoration = "line-through";
//     } else {
//       li.style.textDecoration = "none";
//     }
//   }
// });

ul.addEventListener("change", toggleToDoStatus);
ul.addEventListener("click", deleteToDo);
ul.addEventListener("click", editToDo);
ul.addEventListener("keydown", saveAfterEdit);

function addNewToDo() {
  const value = inputData.value.trim();

  if (!value) {
    alert("Please enter a task before adding.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("tdItem");

  const textspan = document.createElement("span");
  textspan.classList.add("todo-text");
  textspan.textContent = value;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("b");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("tdStatus");

  const checkBoxSpan = document.createElement("span");
  checkBoxSpan.appendChild(checkBox);

  const deleteBtn = document.createElement("img");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.src = "./deletev2.png";
  deleteBtn.alt = "delete";

  const deleteBtnSpan = document.createElement("span");
  deleteBtnSpan.appendChild(deleteBtn);

  const editBtn = document.createElement("img");
  editBtn.classList.add("edit-btn");
  editBtn.src = "./edit.png";
  editBtn.alt = "edit";
  const editBtnSpan = document.createElement("span");
  editBtnSpan.appendChild(editBtn);

  btnDiv.append(checkBoxSpan, deleteBtnSpan, editBtnSpan);
  li.append(textspan, btnDiv);
  ul.appendChild(li);
  inputData.value = "";
  inputData.focus();
}
function addNewToDOWithEnter(e) {
  if (e.key === "Enter") {
    addNewToDo();
  }
}
function toggleToDoStatus(e) {
  if (e.target.classList.contains("tdStatus")) {
    const li = e.target.closest("li");
    const todoText = li.querySelector(".todo-text");

    todoText.classList.toggle("done", e.target.checked);
  }
}
function deleteToDo(e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    li.remove();
  }
}
function editToDo(e) {
  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.closest("li");
    const text = li.querySelector(".todo-text");

    text.dataset.oldValue = text.textContent; // store old value
    text.contentEditable = "true";
    text.focus();
  }
}
function saveAfterEdit(e) {
  if (e.key === "Enter" && e.shiftKey) {
    return; // do nothing (default behavior = new line)
  }
  if (e.target.classList.contains("todo-text") && e.key === "Enter") {
    e.preventDefault();
    e.target.contentEditable = "false";
  }
  if (e.key === "Escape") {
    e.target.textContent = e.target.dataset.oldValue;
    e.target.contentEditable = "false";
  }
}
