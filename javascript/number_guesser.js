let maxNumber = 100;
let minNumber = 1;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let guess = null;

function guessChecker() {
  if (guess === randomNumber) {
    let message = 'BOOM!';
    $('#message').text(message);
  } else if (guess > randomNumber) {
    let message = 'That is too high';
    $('#message').text(message);
  } else {
    let message = 'That is too low'
    $('#message').text(message);
  }
}

$(document).ready( () => {
  $('#submit-button').on('click', () => {
    guess = parseInt($('#guess-field').val(), 10);
    $('#last-guess').text(`Your most recent guess: ${guess}`);
    guessChecker();
  })

  $('#clear-button').on('click', () => {
    $('#guess-field').val("");
  })

  $('#reset-button').on('click', () => {
    window.location.reload();
  })
});
