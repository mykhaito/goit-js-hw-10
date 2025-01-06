import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let userSelectedDate = null;
const startButton = document.querySelector('button[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const timerValues = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  datetimePicker.disabled = true;

  const timerInterval = setInterval(() => {
    const actualTime = new Date();
    const timeLeft = userSelectedDate - actualTime;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      datetimePicker.disabled = false;
      return;
    }

    updateTimerDisplay(timeLeft);
  }, 1000);
});

function updateTimerDisplay(ms) {
  const time = convertMs(ms);
  timerValues.days.textContent = addLeadingZero(time.days);
  timerValues.hours.textContent = addLeadingZero(time.hours);
  timerValues.minutes.textContent = addLeadingZero(time.minutes);
  timerValues.seconds.textContent = addLeadingZero(time.seconds);
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
