/**
 * Double arrow scrolls and focus on textarea
 */
 $(() => {doubleArrow()});


const doubleArrow = () => {
  $(".double-arrow").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    $("#tweet-text").focus();
    return false;
  });
};