function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText == "") {
    alert("⚠ Please enter a task!");
    return;
  }

  var taskList = document.getElementById("taskList");

  var listItem = document.createElement("li");

  var taskSpan = document.createElement("span");
  taskSpan.textContent = "🟢 " + taskText;

  var editButton = document.createElement("button");
  editButton.textContent = "✏️";
  editButton.title = "Edit task";
  editButton.className = "edit-btn";
  editButton.onclick = function () {
    var newText = prompt("Edit your task:", taskText);
    if (newText !== null && newText.trim() !== "") {
      taskText = newText.trim();
      taskSpan.textContent = "🟢 " + taskText;
    }
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑";
  deleteButton.title = "Delete task";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  listItem.appendChild(taskSpan);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  taskInput.value = "";
}
