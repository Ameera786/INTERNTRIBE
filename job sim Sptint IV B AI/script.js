let employees = [
  { name: "Alice", age: 30, department: "Engineering", role: "Developer", salary: 75000 },
  { name: "Bob", age: 28, department: "HR", role: "Recruiter", salary: 50000 },
  { name: "Charlie", age: 35, department: "Sales", role: "Sales Lead", salary: 65000 },
  { name: "Diana", age: 40, department: "Engineering", role: "Manager", salary: 90000 },
];

function renderTable(data) {
  const tbody = document.querySelector("#employeeTable tbody");
  tbody.innerHTML = "";
  data.forEach(emp => {
    const row = `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.department}</td>
        <td>${emp.role}</td>
        <td>$${emp.salary}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
  document.getElementById("employeeCount").innerText = `Total Employees: ${data.length}`;
}


document.getElementById("uppercaseBtn").addEventListener("click", () => {
  employees = employees.map(emp => ({ ...emp,name: emp.name.toUpperCase()
  }));
  renderTable(employees);
});

document.getElementById("departmentFilter").addEventListener("change", (e) => {
  const dept = e.target.value;
  const filtered = dept === "all" ? employees : employees.filter(emp => emp.department === dept);
  renderTable(filtered);
});

document.getElementById("averageSalaryBtn").addEventListener("click", () => {
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const avg = (total / employees.length).toFixed(2);
  document.getElementById("avgSalary").innerText = `Average Salary: $${avg}`;
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const name = e.target.value.trim().toLowerCase();
  if (name === "") {
    document.getElementById("searchResult").innerText = "Searched Employee: ";
    renderTable(employees);
    return;
  }
  const found = employees.find(emp => emp.name.toLowerCase().includes(name));
  if (found) {
    document.getElementById("searchResult").innerText =
      `Searched Employee: ${found.name}, ${found.age}, ${found.department}, ${found.role}, $${found.salary}`;
    renderTable([found]);
  } else {
    document.getElementById("searchResult").innerText = "No match found";
    document.querySelector("#employeeTable tbody").innerHTML = "";
    document.getElementById("employeeCount").innerText = "Total Employees: 0";
  }
});

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderTable(employees);
