const todoList = [
  { name: "make dinner", dueDate: "2026-10-25" },
  { name: "wash dishes", dueDate: "2026-10-25" },
];

renderTodoList();
function renderTodoList() {
  let todoListHtmlStorage = "";

  todoList.forEach(function (todoObject, index) {
    // const todoObject = todoList[index];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const [year, month, day] = dueDate.split("-");
    const todoListHtml = `<div>${name}</div>
     <div>${month}-${day}-${year}</div> 
     <button class="todo-delete-button" onclick="
      todoList.splice(${index},1);
      renderTodoList();
    "
    >Delete</button>`;
    todoListHtmlStorage += todoListHtml;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHtmlStorage;
  console.log(todoListHtmlStorage);
}

function addTodo() {
  const inputElement = document.querySelector(".js-input-element");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input-element");

  const dueDate = dateInputElement.value;
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate,
  });
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
