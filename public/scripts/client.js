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
        console.log("tweets", tweetData);
        console.log("single tweet", tweetData[0]);
        const $allTweets = tweetData;
        renderTweets($allTweets);
      },
      error: (err) => {
        console.log(`There was an error: ${err}`);
      }
    });
  }
  loadTweets();
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Seinfeld",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@masterOfMyDomain"
      },
      "content": {
        "text": "I'm out!"
      },
      "created_at": 1461113959089
    }
  ]


  const createTweetElement = function (tweetData) {
    // const userName = tweetData.user.name;
    // const userAvatars = tweetData.user.avatars;
    // const userHandle = tweetData.user.handle;
    // const tweetContent = tweetData.content.text;
    // const createdAt = tweetData.created_at;

    let $tweet = $(`<article class="tweet">
                <header class="tweet-header">
                  <div class="tweet-header-left">
                    <div><img src=${tweetData.user.avatars}></div>
                    <div>${tweetData.user.name}</div>
                  </div>
                  <div class="tweet-header-right">
                    <div>${tweetData.user.handle}</div>
                  </div>
              </header>
              <div class="content">
                <p>${tweetData.content.text}</p>
              </div>
                <div class="tweet-footer">
                  <div class="tweet-footer-left">
                    <div>${timeago.format(tweetData.created_at)}</div>
                  </div>
                  <div class="tweet-footer-right">
                    <div><i class="fas fa-flag"></i></div>
                    <div><i class="fas fa-retweet"></i></div>
                    <div><i class="fas fa-heart"></i><sup>${1}</sup></div>
                  </div>
              </div>
              </article>`);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  }

  // start with error message hidden
  $("#error").hide()
  let errorMessage = "";

  const $form = $("#form-new-tweet")
  $form.submit(function (event) {
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