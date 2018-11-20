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
  // function to check whether the guessed number matches the randomly generated number;
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
  // function to allow the player to play the game again;
  minNumber = minNumber - 10;
  // sets the minNumber variable to minNumber minus 10;
  maxNumber = maxNumber + 10;
  // sets the minNumber variable to minNumber plus 10;
  $('#last-guess').text("");
  // resets the last guess input field so that the last guess is now longer showing;
  $('#user-range').text(`${minNumber} through ${maxNumber}`);
  // creates the message that shows the user's range;
  $('#message').text("");
  // prints the user's range to the page;
  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  // sets the random number within the new range;
  $('#play-again').slideUp();
  // jquery to slide the play again button up so it no longer shows;
  $('#your-range').slideUp();
  // sides the old range up so it no longer shows;
  $('#won-your-range').slideDown();
  // slides the new range down;
}

function guessValidator() {
  // function to verify if user guess is a valid number;
  if (isNaN(guess)) {
    // conditional branch that checks to see if the user guess is not a number;
    let message = 'Invalid guess, please input a number.'
    // sets message variable to 'Invalid guess, please input a number';
    $('#message').text(message);
    // prints the message to the page;
  } else if (guess < minNumber || guess > maxNumber) {
    // conditional branch that checks to see if the number is within the range;
    let message = `Please choose a number between ${minNumber} and ${maxNumber}.`
    // sets message variable to make the error message about staying in the range;
    $('#message').text(message)
    // prints the message to the page;
  } else {
    // conditional branch that triggers for anything other than the two previous branches;
    guessChecker();
    // runs the guessChecker function;
  }
}

$(document).ready( () => {
  // starts the jquery for the page;
  $('#user-range').text(`${minNumber} through ${maxNumber}`)
  // prints the message to the page;

  $('#range-submit').on('click', () => {
    //  finds the range submit id for the submit button and tells it to do the following when clicked on;
    minNumber = parseInt($('#min-field').val(), 10) || minNumber;
    // sets the minNumber variable to the new value or to set it to the default;
    maxNumber = parseInt($('#max-field').val(), 10) || maxNumber;
    // sets the maxNumber variable to the new value or to set it to the default;
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    // sets the random number;
    $('.range-selector-container').slideUp();
    // slides the range selector up once the range has been selected;
    $('#user-range').text(`${minNumber} through ${maxNumber}`)
    // prints the message to the page;
  })

  $('#submit-button').on('click', () => {
    // finds the button with the id 'submit button' and tells it to do the following when clicked;
    $('.range-selector-container').slideUp();
    // slides the range selector options up when the user makes their first guess;
    guess = parseInt($('#guess-field').val(), 10);
    // sets the guess variable to the user's guess and parses it into a number;
    $('#guess-field').val("");
    // resets the guess input field so that it does not show the previous guess;
    $('#last-guess-text').text('Your last guess was');
    // prints the message to the page;
    $('#last-guess-number').text(guess);
    // prints the message to the page;
    guessValidator();
    // runs the guess validator function to verify user's guess;
  })

  $('#clear-button').on('click', () => {
    // finds the button with the "clear button" id and tell it to do the following when clicked;
    $('#guess-field').val("");
    // clears the guess field value;
  })

  $('#reset-button').on('click', () => {
    // finds the button with the 'reset button' id and tell it to do the following when clicked;
    location.reload();
    // reloads the page when the reset button is clicked;
  })

  $('#play-again').on('click', () => {
    // finds the button with the 'play again' id and tell it to do the following when clicked;
    playAgain();
    // triggers the play again function so the user can play again;
  })
});
