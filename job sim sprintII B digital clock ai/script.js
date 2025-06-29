function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  const hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const period = hrs >= 12 ? 'PM' : 'AM';
  const hr12 = hrs % 12 || 12;

  const timeStr = `${pad(hr12)}:${pad(mins)}:${pad(secs)} ${period}`;
  document.getElementById('current-time').textContent = timeStr;

  let message = '';
  if (hrs >= 6 && hrs < 12) {
    message = 'Good Morning ☀️';
  } else if (hrs >= 12 && hrs < 18) {
    message = 'Good Afternoon 🌞';
  } else if (hrs >= 18 && hrs < 21) {
    message = 'Good Evening 🌇';
  } else {
    message = 'Good Night 🌙';
  }

  document.getElementById('time-message').textContent = message;
}

setInterval(updateClock, 1000);
updateClock();
