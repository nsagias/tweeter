/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( () => {

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
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


const createTweetElement  = (tweetData) => {
  const userName = tweetData.user.name;
  const userAvatars = tweetData.user.avatars;
  const userHandle = tweetData.user.handle;
  const tweetContent = tweetData.content.text;
  const createdAt = tweetData.created_at;

  let $tweet = `<article class="tweet">
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
                    <div>${timeago.format(createdAt)}</div>
                  </div>
                  <div class="tweet-footer-right">
                    <div><i class="fas fa-flag"></i></div>
                    <div><i class="fas fa-retweet"></i></div>
                    <div><i class="fas fa-heart"></i><sup>${1}</sup></div>
                  </div>
              </div>
              </article>`;
  return $tweet;
};

const renderTweets = function(tweets) {
  let $tweestContainer = $('#tweets-container');
  $tweestContainer.empty();
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet); 
  }
}


renderTweets(data);


  const $form = $("#form-new-tweet");
  $form.submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    console.log(serializedData);
  });

}); 