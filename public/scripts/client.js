/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const $tweet = $(`<article class="tweet">Hello world</article>`);


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

// const createTweetElement  = (tweetData) => {

  // user.avatars  
  // <div><img src="https://i.imgur.com/73hZDYK.png"></div>
  // const userAvatars = 
  // /user.name 

  // const userName = 

  // user.handle   
  // const userHandle =

  //  content.text 
  // const tweetContent   

  // created_at
  // const createdAt 

  //  icons
  // const flagIcon = <i class="fas fa-flag"></i>';
  // const retweetIcon = <i class="fas fa-retweet></i>';
  // const heartIcon = `<i class="fas fa-heart"></i><sup>${1}</sup>`;

  const $tweet = `<article class="tweet">
                <header class="tweet-header">
                  <div class="tweet-header-left">
                    <div><img src=${"https://i.imgur.com/73hZDYK.png"}></div>
                    <div>${"Newton"}</div>
                  </div>
                  <div class="tweet-header-right">
                    <div>${"@SirIsaac"}</div>
                  </div>
              </header>
              <div class="content">
                <p>${"If I have seen further it is by standing on the shoulders of giants"}</p>
              </div>
                <div class="tweet-footer">
                  <div class="tweet-footer-left">
                    <div>${"10 days ago"}</div>
                  </div>
                  <div class="tweet-footer-right">
                    <div><i class="fas fa-flag"></i></div>
                    <div><i class="fas fa-retweet"></i></div>
                    <div><i class="fas fa-heart"></i><sup>${1}</sup></div>
                  </div>
              </div>
              </article>`;


// const $tweet = createTweetElement(tweetData);


// works
// const $tweet = $('article').text('hello world')
console.log($tweet); // to see what it looks like
// $('#tweets-container').append($userAvatars, $userName, $userHandle); 
$('#tweets-container').append($tweet); 