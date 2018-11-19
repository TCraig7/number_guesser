const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

function guessChecker() {

  if (guess === randomNumber) {
    message = 'BOOM!';
    $('#message').text(message);
  } else if (guess > randomNumber) {
    message = 'That is too high';
    $('#message').text(message);
  } else {
    message = 'That is too low'
    $('#message').text(message);
  }
}

$(document).ready( () => {
  $('#submit-button').on('click', () => {
    guess = parseInt($('#guess-field').val(), 10);
    $('#last-guess').text(`Your most recent guess: ${guess}`);
    guessChecker();
  })
});
