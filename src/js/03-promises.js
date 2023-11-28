import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document
  .getElementById('promiseForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const firstDelay = parseInt(formData.get('delay'));
    const step = parseInt(formData.get('step'));
    const amount = parseInt(formData.get('amount'));

    for (let i = 1; i <= amount; i++) {
      const currentDelay = firstDelay + (i - 1) * step;

      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          notiflix.Notify.Success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          notiflix.Notify.Failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });
