
window.onload = function () {
  const saved = localStorage.getItem("todo-items");
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(task => createTask(task.text, task.completed));
  }
};


function createTask(text = null, completed = false) {
  const input = document.getElementById("todoInput");
  const taskText = text || input.value.trim();

  if (taskText === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  const list = document.getElementById("todoList");

  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const leftSide = document.createElement("div");
  leftSide.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.onchange = () => {
    li.classList.toggle("completed");
    saveTasks();
  };

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️ Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
      saveTasks();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️ Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    list.removeChild(li);
    saveTasks();
  };

  leftSide.appendChild(checkbox);
  leftSide.appendChild(taskSpan);

  li.appendChild(leftSide);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";

  saveTasks();
}


function saveTasks() {
  const allTasks = document.querySelectorAll("#todoList li");
  const tasks = [];

  allTasks.forEach(item => {
    const text = item.querySelector("span").textContent;
    const completed = item.classList.contains("completed");
    tasks.push({ text, completed });
  });

  localStorage.setItem("todo-items", JSON.stringify(tasks));
}
