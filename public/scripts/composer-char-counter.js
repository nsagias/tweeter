// "tweet-text"
// tweet charater counter

$(() => {
  $("#tweet-text").keyup( () => { 
    $('#char-counter').text($("#tweet-text").val().length);
  });
});

