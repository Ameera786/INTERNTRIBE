document.addEventListener("DOMContentLoaded", fetchUsers);

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => renderTable(users))
    .catch(error => console.error('Error fetching users:', error));
}

function renderTable(users) {
  const tbody = document.querySelector("#userTable tbody");
  users.forEach(user => {
    const row = document.createElement("tr");

    const nameCell = createCell(user.name);
    const emailCell = createCell(user.email);
    const usernameCell = createCell(user.username);
    const phoneCell = createCell(user.phone);

    const actionsCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️ Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Delete";
    deleteBtn.className = "delete-btn";

    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(usernameCell);
    row.appendChild(phoneCell);
    row.appendChild(actionsCell);

    editBtn.addEventListener("click", () => toggleEdit(row, editBtn));
    deleteBtn.addEventListener("click", () => row.remove());

    tbody.appendChild(row);
  });
}

function createCell(text) {
  const td = document.createElement("td");
  td.textContent = text;
  td.setAttribute("data-original", text);
  return td;
}

function toggleEdit(row, button) {
  const isEditing = button.textContent.includes("Save");
  const cells = row.querySelectorAll("td:not(:last-child)");

  if (isEditing) {
    cells.forEach(cell => {
      const input = cell.querySelector("input");
      if (input) {
        cell.textContent = input.value.trim();
      }
    });
    button.textContent = "✏️ Edit";
  } else {
    cells.forEach(cell => {
      const value = cell.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      cell.textContent = "";
      cell.appendChild(input);
    });
    button.textContent = "💾 Save";
  }
}
