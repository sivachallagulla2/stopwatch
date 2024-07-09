var startTime, running = false, timer;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    running = false;
  } else {
    startTime = Date.now() - (parseInt(document.getElementById('display').innerText) || 0);
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').innerText = 'Stop';
    running = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStop').innerText = 'Start';
  running = false;
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  var lapTime = document.getElementById('display').innerText;
  var lapItem = document.createElement('li');
  lapItem.innerText = lapTime;
  document.getElementById('laps').appendChild(lapItem);
}

function updateDisplay() {
  var elapsed = Date.now() - startTime;
  var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((elapsed % 1000) / 10);
  
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  document.getElementById('display').innerText = minutes + ':' + seconds + ':' + milliseconds;
}
