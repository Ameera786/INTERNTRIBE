fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    createUserTable(users);
  })
  .catch(function (error) {
    console.error('Error fetching users:', error);
  });

function createUserTable(users) {
  var container = document.getElementById("table-container");
  var table = document.createElement("table");

  var tableHead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headers = ['Name', 'Email', 'Username', 'Phone', 'Actions'];

  headers.forEach(function (text) {
    var th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);


  var tableBody = document.createElement("tbody");

  users.forEach(function (user) {
    var row = document.createElement("tr");

    ['name', 'email', 'username', 'phone'].forEach(function (key) {
      var td = document.createElement("td");
      td.textContent = user[key];
      td.setAttribute("data-key", key);
      row.appendChild(td);
    });

    var actionTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", function () {
      toggleEdit(row, editBtn);
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      row.remove();
    });

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    row.appendChild(actionTd);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  container.appendChild(table);
}
function toggleEdit(row, button) {
  var isEditing = button.textContent == "Save";
  var cells = row.querySelectorAll("td[data-key]");

  cells.forEach(function (cell) {
    if (isEditing) {
      var input = cell.querySelector("input");
      if (input) {
        cell.textContent = input.value;
      }
    } else {
      var currentText = cell.textContent;
      cell.textContent = '';
      var input = document.createElement("input");
      input.value = currentText;
      cell.appendChild(input);
    }
  });

  button.textContent = isEditing ? "Edit" : "Save";
  button.className = isEditing ? "edit-btn" : "save-btn";
}
