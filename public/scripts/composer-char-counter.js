// "tweet-text"
// tweet charater counter

// $(() => {
//   $("#tweet-text").keyup( () => { 
//     $('#char-counter').text($("#tweet-text").val().length);
//   });
// });

/**
 * Character counter maxlength 140
 */
  $(() => {
    $("#tweet-text").keyup( function(){ 
      let $charCounter = $("#tweet-text").val().length;
      let $charCounterGT140 = `-${ $("#tweet-text").val().length - 140 }`
      // if characters greater than 140 change colour to red and numbers after 140 are negative
        if ($charCounter > 140) {
          $('#char-counter').css('color', 'red');
          $('#char-counter').text( $charCounterGT140 );
        } else if ($charCounter <= 140 ){
          // if characters less than 140 change colour to black and numbers as positive again
          $('#char-counter').css('color', 'black');
          $('#char-counter').text(  $charCounter  );
        }
    });
  });
