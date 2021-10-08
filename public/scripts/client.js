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

const createTweetElement  = (tweetData) => {

  
  // <article class="tweet">
  // const $header = $('header').addClass("tweet-header")
  //   <header class="tweet-header"></header>
          user.name 
          user.avatars 
      // const $tweet = $('div').addClass("tweet-header-left")
      //  <div class="tweet-header-left">
      //     <div><img src="https://i.imgur.com/73hZDYK.png"></div>
      //     <div>Newton</div>
      //  </div>
      // const $tweet = $('div').addClass("tweet-header-right")
         // const $tweet = $('div').addClass("tweet-header-left")
          user.handle // <div class="tweet-header-right">@SirIsaac</div>
          content.text // <div id="content"> <p>
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
   
        const $article = $('article').addClass("tweet");
          const $header = $('header').addClass("tweet-header");
            const $tweetHeaderLeft = $('div').addClass("tweet-header-left");
            const $tweetHeaderRight = $('div').addClass("tweet-header-right");
            const $content = $('div').addClass("content");
          const $footer = $('div').addClass("tweet-footer");
            const $tweetFooterLeft = $('div').addClass("tweet-footer-left");
            const $tweetFooterRight = $('div').addClass("tweet-footer-right");



  return tweetData;
}; 


{/* <article class="tweet">
<header class="tweet-header">
  <div class="tweet-header-left">
    <div><img src="https://i.imgur.com/73hZDYK.png"></div>
    <div>Newton</div>
  </div>
  <div class="tweet-header-right">@SirIsaac</div>
</header>
<div id="content">
 <p>"If I have seen further it is by standing on the shoulders of giants"</p>
</div>
<div id="tweet-footer">
  <div>10 days ago</div>
  <div class="tweet-footer-right">
    <div><i class="fas fa-flag"></i></div>
    <div><i class="fas fa-retweet"></i></div>
    <div><i class="fas fa-heart"></i><sup>1</sup></div>
  </div>
</div>
</article> */}
// console.log('this is my tweet',$tweet);
// $('#tweets-container').append($tweet);



// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// const $tweet = $('article').addClass("tweet")

// works
// const $tweet = $('article').text('hello world')
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 