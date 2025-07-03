const employees = [
  { name: "Alice", age: 28, department: "HR", role: "Recruiter", salary: 40000 },
  { name: "Bob", age: 34, department: "Engineering", role: "Developer", salary: 60000 },
  { name: "Charlie", age: 29, department: "Marketing", role: "Analyst", salary: 45000 },
  { name: "Diana", age: 41, department: "Engineering", role: "Manager", salary: 75000 },
  { name: "Eva", age: 32, department: "HR", role: "HR Manager", salary: 55000 },
  { name: "Frank", age: 30, department: "Marketing", role: "Content Strategist", salary: 48000 },
  { name: "Grace", age: 27, department: "Engineering", role: "QA Engineer", salary: 50000 },
];


function displayEmployees(employees) {
  const tableBody = document.getElementById("employeeBody");
  tableBody.innerHTML = "";

  employees.forEach(emp => {
    const row = `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.department}</td>
        <td>${emp.role}</td>
        <td>₹${emp.salary}</td>
      </tr>`;
    tableBody.innerHTML += row;
  });

  document.getElementById("employeeCount").textContent = `Total Employees: ${employees.length}`;
}

function makeNamesUppercase() {
  employees.forEach(emp => emp.name = emp.name.toUpperCase());
  displayEmployees(employees);
}

function showAverageSalary() {
  const avg = employees.reduce((sum, emp) => sum + emp.salary, 0)/employees.length;
  document.getElementById("avgSalary").textContent = `Average Salary: ₹${avg.toFixed(2)}`;
}

document.getElementById("deptFilter").addEventListener("change", () => {
  const selected = document.getElementById("deptFilter").value;
  const filteredList = selected === "all"? employees: employees.filter(emp => emp.department === selected);
  displayEmployees(filteredList);
});

document.getElementById("nameSearch").addEventListener("input", () => {
  const val = document.getElementById("nameSearch").value.trim().toLowerCase();
  const match = employees.find(emp => emp.name.toLowerCase() === val);
  document.getElementById("searchStatus").textContent = match
 ? `Found: ${match.name}, Role: ${match.role}, Dept: ${match.department}, Salary: ${match.salary}`
    : "No match found";
});

displayEmployees(employees);
