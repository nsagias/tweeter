/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( () => {


    $.ajax({
      url: "/tweets",
      method: "GET",
      datatype: "json",
      success: (tweets) => {
        // tweets is an array
        console.log("tweets", tweets);
        // console.log("single tweet", tweets[0]);
        const $singleTweet = tweets[0];
        const $tweet = createTweetElement($singleTweet);
        console.log($tweet);
        const $tweetContainer = ('#tweets-container');
        // $('#tweets-container').empty();
        // $tweetContainer.append($tweet)
      },
      error: (err) => {
        console.log(`There was an error: ${err}`);
      }
    });

 



   
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
    },
    {
      "user": {
        "name": "Seinfeld",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@masterOfMyDomain" },
      "content": {
        "text": "I'm out!"
      },
      "created_at": 1461113959089
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

// const renderTweets = function(tweets) {
//   $('#tweets-container').empty();
//   for (let tweet of tweets) {
//     let $tweet = createTweetElement(tweet);
//     $('#tweets-container').append($tweet); 
//   }
// }


// renderTweets(data);


  const $form = $("#form-new-tweet");
  $form.submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    console.log('form was submitted');

    $.post("/tweets", serializedData, (resp) => {

    });
  });

}); 