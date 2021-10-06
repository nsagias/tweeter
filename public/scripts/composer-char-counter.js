$(document).ready(function() {
  console.log('My document is ready')
  $("#btn").on('click', function(event) {
    console.log(this); //The this keyword is a reference to the button
    event.preventDefault();
  });
});