let timerInterval;
let startTime;
let running = false;
let elapsedTime = 0;

function startStop() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").innerText = formattedTime;
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  displayTime(0);
}

function pad(num) {
  return num.toString().padStart(2, "0");
}