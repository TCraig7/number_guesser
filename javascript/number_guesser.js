let maxNumber = 100;
// creates the variable maxNumber so that the default max number in the range is
// 100. I used let and const instead of var because I wanted to be more deliberate
// with my code, and I thought it would be good practice to use the newer concepts;
let minNumber = 1;
// set the minNumber variable to 1 so that the default minimum number in the range is 1;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// starts the game by randomly generating a number for the player to guess;
let guess = null;
// sets the variable guess so that it can be changed later by the user's guess;

function guessChecker() {
  // my 'function example' lines are creating functions.
  if (guess === randomNumber) {
    // starts the conditional. checks to see if the guess is equal to the random number;
    let message = 'BOOM!';
    // set the variable message to Boom if the guess and random number match;
    $('#message').text(message);
    // prints the message to the page;
    $('#play-again').slideDown('slow');
    // jquery to have the play again button appear on the screen if the player wins;
  } else if (guess > randomNumber) {
    // second piece of the conditional. checks to see if the guess is greater than the random number;
    let message = 'That is too high';
    // sets the message variable to 'that is too high';
    $('#message').text(message);
    // prints the message to the page;
  } else {
    // the last piece of the conditional. checks for all branches that do not match the first two;
    let message = 'That is too low'
    // sets the message variable to 'that is too low';
    $('#message').text(message);
    // prints the message to the page;
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
