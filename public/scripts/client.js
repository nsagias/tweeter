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

  const renderTweets = function(tweets) {
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
    event.preventDefault();
    const $tweetText = $.trim($("#tweet-text").val());
    
    if ($tweetText.length > 140) {
      errorMessage = "Character Limit is 140";
      
      $("#error-words").text(errorMessage);
      $("#error").show();
    
    } else if ($tweetText === "") {

      // show error if length is ""
      errorMessage = "Text Box Is Empty Write Something";
      $("#error-words").text(errorMessage);
      $("#error").show();

    } else {
      
      // serialize input
      const serializedData = $(this).serialize();
      
      // post
      $.post("/tweets", serializedData, () => {
      // set elements back to defaults
        $("#tweet-text").val('');
        $('#char-counter').text(140);
        $('#char-counter').css('color', 'black');
        loadTweets();
      });
     
    }
 
  });

});