const todoList = ["make dinner", "wash dishes"];

renderTodoList();
function renderTodoList() {
  let todoListHtmlStorage = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const todoListHtml = `<p>${todo}</p>`;
    todoListHtmlStorage += todoListHtml;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtmlStorage;
  console.log(todoListHtmlStorage);
}

function addTodo() {
  const inputElement = document.querySelector(".js-input-element");
  const value = inputElement.value;
  todoList.push(value);
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
