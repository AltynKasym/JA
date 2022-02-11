window.addEventListener("load", function () {
  const todoListData = [],
    todo = document.querySelector(".input-todo"),
    button = document.querySelector(".button"),
    todoList = document.querySelector(".todo-list"),
    alert = document.querySelector(".alert"),
    alertText = document.querySelector(".alert h3");
  (done = document.querySelector(".done")),
    (doneText = document.querySelector(".done h3"));

  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (todo.value.trim().length === 0) {
      alertEmptyTodo();
      alertText.textContent = "Введите список";
    } else {
      todoListData.push(todo.value);
      todoListData.forEach((item) => {
        const todoItem = document.createElement("div");
        todoItem.setAttribute("class", "todo-item");
        todoList.appendChild(todoItem);
        todoItem.textContent = item;
        todoListData.shift();
        todo.value = "";
        todoItem.addEventListener("click", () => {
          todoItem.remove();
          doneTodo();
          doneText.textContent = "Молодец, что сделал(а)!";
        });
      });
    }
  });

  function alertEmptyTodo() {
    let timerId = setInterval(() => (alert.style = `display: block;`), 100);
    setTimeout(() => {
      clearInterval(timerId);
      alert.style.display = "none";
    }, 2000);
  }

  function doneTodo() {
    let timerId = setInterval(() => (done.style.display = "block"), 100);
    setTimeout(() => {
      clearInterval(timerId);
      done.style.display = "none";
    }, 1500);
  }
});
