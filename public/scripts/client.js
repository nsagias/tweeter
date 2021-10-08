/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const $tweet = $(`<article class="tweet">Hello world</article>`);

const createTweetElement  = (tweetData) => {
  // extract info from object
  // and return object with html markup from design
  // <article class="tweet">
  //   <header class="tweet-header"></header>
          user.name 
          user.avatars 
      //  <div class="tweet-header-left">
      //     <div><img src="https://i.imgur.com/73hZDYK.png"></div>
      //     <div>Newton</div>
      //  </div>
          user.handle // <div class="tweet-header-right">@SirIsaac</div>
          content.text // <<div id="content"> <p>
          //  <div id="content">
          //    <p >"If I have seen further it is by standing on the shoulders of giants"</p>
          //  </div>
        // <div id="tweet-footer">
              created_at // <div>
        //   <div>10 days ago</div>
        //     <div class="tweet-footer-right">
        //     <div><i class="fas fa-flag"></i></div>
        //     <div><i class="fas fa-retweet"></i></div>
        //     <div><i class="fas fa-heart"></i><sup>1</sup></div>
        //   </div>
        // </div>
   
  return tweetData;
}; 

// console.log('this is my tweet',$tweet);
// $('#tweets-container').append($tweet);

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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 