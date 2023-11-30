import flatpickr from 'flatpickr';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      alert('Please choose a date in the future');
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimer(selectedDate) {
  const endDate = new Date(selectedDate).getTime();

  function update() {
    const currentDate = new Date().getTime();
    const remainingTime = endDate - currentDate;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document
        .querySelectorAll('[data-value]')
        .forEach(el => (el.textContent = '00'));
      alert('Countdown finished!');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }

  const timerInterval = setInterval(update, 1000);
}

document.querySelector('[data-start]').addEventListener('click', function () {
  const selectedDate = document.querySelector('#datetime-picker').value;

  if (!selectedDate) {
    alert('Please choose a date first');
    return;
  }

  updateTimer(selectedDate);
  this.setAttribute('disabled', true);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
