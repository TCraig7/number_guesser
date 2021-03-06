let maxNumber = 100;
let minNumber = 1;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let guess = null;

function guessChecker() {
  if (guess === randomNumber) {
    let message = 'BOOM!';
    $('#message').text(message);
    $('#play-again').slideDown('slow');
  } else if (guess > randomNumber) {
    let message = 'That is too high';
    $('#message').text(message);
  } else {
    let message = 'That is too low'
    $('#message').text(message);
  }
}

function playAgain() {
  minNumber = minNumber - 10;
  maxNumber = maxNumber + 10;
  $('#last-guess').text("");
  $('#user-range').text(`${minNumber} through ${maxNumber}`);
  $('#message').text("");
  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  $('#play-again').slideUp();
  $('#your-range').slideUp();
  $('#won-your-range').slideDown();
}

function guessValidator() {
  if (isNaN(guess)) {
    let message = 'Invalid guess, please input a number.'
    $('#message').text(message);
  } else if (guess < minNumber || guess > maxNumber) {
    let message = `Please choose a number between ${minNumber} and ${maxNumber}.`
    $('#message').text(message)
  } else {
    guessChecker();
  }
}

$(document).ready( () => {
  $('#user-range').text(`${minNumber} through ${maxNumber}`)

  $('#range-submit').on('click', () => {
    minNumber = parseInt($('#min-field').val(), 10) || minNumber;
    maxNumber = parseInt($('#max-field').val(), 10) || maxNumber;
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    $('.range-selector-container').slideUp();
    $('#user-range').text(`${minNumber} through ${maxNumber}`)
  })

  $('#submit-button').on('click', () => {
    $('.range-selector-container').slideUp();
    guess = parseInt($('#guess-field').val(), 10);
    $('#guess-field').val("");
    $('#last-guess-text').text('Your last guess was');
    $('#last-guess-number').text(guess);
    guessValidator();
  })

  $('#clear-button').on('click', () => {
    $('#guess-field').val("");
  })

  $('#reset-button').on('click', () => {
    location.reload();
  })

  $('#play-again').on('click', () => {
    playAgain();
  })
});
