function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorChangeInterval;

function startColorChange() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  // Wyłącz przycisk "Start"
  startButton.disabled = true;

  // Rozpocznij zmianę koloru co sekundę
  colorChangeInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  const startButton = document.querySelector('[data-start]');

  // Włącz przycisk "Start"
  startButton.disabled = false;

  // Zatrzymaj zmianę koloru
  clearInterval(colorChangeInterval);
}

// Dodaj event listenery do przycisków
document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
