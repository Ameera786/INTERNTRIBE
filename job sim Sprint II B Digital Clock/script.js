function updateClk() {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  let display = hours % 12;
  display = display == 0 ? 12 : display;

  const hoursStr = display.toString().padStart(2, '0');
  const minsStr = mins.toString().padStart(2, '0');
  const secsStr = secs.toString().padStart(2, '0');

  const timeStr = hoursStr + ':' + minsStr + ':' + secsStr + ' ' + ampm;
  document.getElementById('time').textContent = timeStr;

  let greetText = '';
  if (hours >= 6 && hours < 12) {
    greetText = 'Good Morning';
  } else if (hours >= 12 && hours < 18) {
    greetText = 'Good Afternoon';
  } else if (hours >= 18 && hours < 21) {
    greetText = 'Good Evening';
  } else {
    greetText = 'Good Night';
  }
  document.getElementById('greet').textContent = greetText;
}

setInterval(updateClk, 1000);
updateClk();
