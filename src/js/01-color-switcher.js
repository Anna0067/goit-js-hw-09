import 'flatpickr/dist/flatpickr.min.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorChangeInterval;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function startColorChange() {
  startButton.disabled = true;

  // Rozpocznij zmianę koloru co sekundę
  colorChangeInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  startButton.disabled = false;

  clearInterval(colorChangeInterval);
}

// Dodaj event listenery do przycisków
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
