const taskZone = document.getElementById('taskZone');
const alertBox = document.getElementById('alert');
const beginBtn = document.getElementById('beginBtn');

let jobs = [];
let jobTimers = [];

async function simulateFetch() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: "Task 1", completion: 0, state: "Waiting" },
        { title: "Task 2", completion: 0, state: "Waiting" },
        { title: "Task 3", completion: 0, state: "Waiting" },
        { title: "Task 4", completion: 0, state: "Waiting" }
      ]);
    }, 1500);
  });
}

async function getTasks() {
  taskZone.innerHTML = "<p>Loading...</p>";
  jobs = await simulateFetch();
  paintTasks();
}

function paintTasks() {
  taskZone.innerHTML = "";
  jobs.forEach((job) => {
    const card = document.createElement("div");
    card.className = "card";
    if (job.state === "Done") card.classList.add("done");

    card.innerHTML = `
      <h3>${job.title}</h3>
      <div class="progress-bg">
        <div class="progress-fill" style="width: ${job.completion}%"></div>
      </div>
      <div class="status-label">${job.completion}% - ${job.state}</div>
    `;
    taskZone.appendChild(card);
  });
}

function launchProgress() {
  beginBtn.disabled = true;
  jobs.forEach((job, idx) => {
    if (job.completion >= 100) return;

    job.state = "Active";
    jobTimers[idx] = setInterval(() => {
      if (job.completion < 100) {
        job.completion += 10;
        if (job.completion >= 100) {
          job.completion = 100;
          job.state = "Done";
          clearInterval(jobTimers[idx]);
          soundAlert();
        }
        paintTasks();
      }
    }, 1000);
  });
}

function haltAll() {
  jobTimers.forEach(clearInterval);
  beginBtn.disabled = false;
}

function delayedMsg() {
  alertBox.innerText = "Please wait for your notification...";
  setTimeout(() => {
    alertBox.innerText = "🔔 Delayed Notification Activated!";
  }, 3000);
}

function switchTheme() {
  document.body.classList.toggle("dark-theme");
}

function soundAlert() {
  const beep = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
  beep.play();
}