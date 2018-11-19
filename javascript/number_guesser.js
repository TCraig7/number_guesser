const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

$(document).ready( () => {
  $('#submit-button').on('click', () => {
    guess = $('#guess-field').val();
    $('#last-guess').text(`Your most recent guess: ${guess}`);
  })
});
