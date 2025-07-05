const taskContainer = document.getElementById("taskContainer");
const notification = document.getElementById("notification");
const startBtn = document.getElementById("startBtn");

let tasks = [];
let intervals = [];

async function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Task A", progress: 0, status: "Pending" },
        { name: "Task B", progress: 0, status: "Pending" },
        { name: "Task C", progress: 0, status: "Pending" },
        { name: "Task D", progress: 0, status: "Pending" },
        { name: "Task E", progress: 0, status: "Pending" }
      ]);
    }, 1500);
  });
}

async function loadTasks() {
  taskContainer.innerHTML = "<p>Loading...</p>";
  tasks = await fetchTasks();
  renderTasks();
}

function renderTasks() {
  taskContainer.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    if (task.status === "Completed") div.classList.add("completed");

    div.innerHTML = `
      <div class="progress-bar" style="width: ${task.progress}%;"></div>
      <div class="task-content">
        <span><strong>${task.name}</strong></span>
        <span>${task.progress}%</span>
        <span>${task.status}</span>
      </div>
    `;
    taskContainer.appendChild(div);
 });
}

function startProgress() {
  startBtn.disabled = true;
  tasks.forEach((task, i) => {
    if (task.progress >= 100) return;
    task.status = "In Progress";

    intervals[i] = setInterval(() => {
      if (task.progress < 100) {
        task.progress += 10;
        if (task.progress >= 100) {
          task.progress = 100;
          task.status = "Completed";
          clearInterval(intervals[i]);
          soundAlert();
        }
        renderTasks();
      }
    }, 1000);
  });
}

function stopProgress() {
  intervals.forEach(clearInterval);
  startBtn.disabled = false;
}

function delayNotification() {
  notification.innerText = "Please wait...";
  setTimeout(() => {
    notification.innerText = "🔔 Delayed Notification Triggered!";
  }, 3000);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function soundAlert() {
  const beep = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
  beep.play();
}