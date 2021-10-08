/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( () => {
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac1"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement  = (tweetData) => {
  const userName = tweetData.user.name;
  const userAvatars = tweetData.user.avatars;
  const userHandle = tweetData.user.handle;
  const tweetContent = tweetData.content.text;
  const createdAt = tweetData.created_at;
  // <div class="timeago" datetime="2016-06-30 09:20:00"></div>

  const $tweet = `<article class="tweet">
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

const $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like
// $('#tweets-container').append($userAvatars, $userName, $userHandle); 
$('#tweets-container').append($tweet); 
}); 