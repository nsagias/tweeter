/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {

  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      datatype: "json",
      success: (tweetData) => {
        // tweets is an array
        const $allTweets = tweetData;
        renderTweets($allTweets);
      },
      error: (err) => {
        console.log(`There was an error: ${err}`);
      }
    });
  };
  loadTweets();
  

  /**
   * Create jQuery template string of html elements
   * @param {object} tweetData 
   * @returns jQuery template string 
   */
  const createTweetElement = function(tweetData) {
    const userAvatars = tweetData.user.avatars;
    const userName = tweetData.user.name;
    const userHandle = tweetData.user.handle;
    const tweetContent = tweetData.content.text;
    const createdAt = timeago.format(tweetData.created_at);

    const $tweet = $(`<article class="tweet">
                <header class="tweet-header">
                  <div class="tweet-header-left">
                    <div><img src=${userAvatars}></div>
                    <div>${userName}</div>
                  </div>
                  <div class="tweet-header-right">
                    <div>${userHandle}</div>
                  </div>
              </header>
              <div class="content">
                <p>${tweetContent}</p>
              </div>
                <div class="tweet-footer">
                  <div class="tweet-footer-left">
                    <div>${createdAt}</div>
                  </div>
                  <div class="tweet-footer-right">
                    <div><i class="fas fa-flag"></i></div>
                    <div><i class="fas fa-retweet"></i></div>
                    <div><i class="fas fa-heart"></i></div>
                  </div>
              </div>
              </article>`);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

  // start with error message hidden
  $("#error").hide();
  let errorMessage = "";

  const $form = $("#form-new-tweet");
  $form.submit(function(event) {
    // trim space spaces and escape dangerous code
    const $tweetText = $.trim($("#tweet-text").val());
    if ($tweetText === "") {
      // show error if length is ""
      errorMessage = "Text Box Is Empty Write Something";
      console.error(errorMessage);
      $("#error-words").text(errorMessage);
      $("#error").show();
    }
    if ($tweetText === null) {
      // show error: null
      errorMessage = "Message is returning null error";
      console.error(errorMessage);
      $("#error-words").text(errorMessage);
      $("#error").show();
    }
    event.preventDefault();
    // serialize input
    const serializedData = $(this).serialize();
    
    
    // post
    $.post("/tweets", serializedData, (resp) => {
      console.log('form was submitted');
      // reset textarea and counter to an empty string and 0 value
      $("#tweet-text").val('');
      $('#char-counter').text(0);

      // hide error message on submit
      $("#error-message").hide();
      // reload tweets
      loadTweets();
    });
  
    
  });

});