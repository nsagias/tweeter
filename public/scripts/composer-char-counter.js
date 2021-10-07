// $(document).ready(function() {
//   console.log('My document is ready')
//   $("#btn").on('click', function(event) {
//     console.log(this); //The this keyword is a reference to the button
//     event.preventDefault();
//   });
// });

// "tweet-text"
// Textarea
// $(() => {
//   $("#tweet-text").keyup( () => { 
//     console.log($("#tweet-text").val().length);
//   });
// });

$(() => {
  $("#tweet-text").keyup( () => { 
    $('#char-counter').text($("#tweet-text").val().length);
  });
});

