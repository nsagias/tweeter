// $(document).ready(function () {
//   $( "#clickme" ).click(function() {
//     $( "#book" ).slideDown( "slow", function() {
//       // Animation complete.
//     });
//   });
// });

$('#error' ).click(function () {
  if ( $( "div" ).first().is( ":hidden" ) ) {
    $( "div" ).slideDown( "slow" );
  } else {
    $( "div" ).hide();
  }
});