/**
 * Character counter maxlength 140
 */


$(() => {

  let errorMessage = "";
  $("#tweet-text").on("keyup change", function() {

    // get textarea length in real time
    const $charCounter = $("#tweet-text").val().length;

    // if textarea length is greater is 140, show number as negative
    const $charCounterGT140 = `-${$("#tweet-text").val().length - 140}`;

    if ($charCounter > 140) {
      // set error message
      errorMessage = "Character Limit is 140";
      $("#error").show();
      $("#error-words").text(errorMessage);

      // display count greater than 140 as red
      $('#char-counter').css('color', 'red');
      $('#char-counter').text($charCounterGT140);

    } else if ($charCounter <= 140) {
      // hide error message and change message to empty
      errorMessage = "";
      $("#error").hide();

      // if characters less than 140 change colour to black and numbers as positive again
      $('#char-counter').css('color', 'black');
      $('#char-counter').text($charCounter);
    }
  });
});

