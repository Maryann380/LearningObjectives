// $( "h1" ).clone().appendTo( document.body );
// $( "h1" ).clone().appendTo( document.body );
// $( "h1" ).clone().appendTo( document.body );
// $( "h1" ).clone().appendTo( document.body );
// $( window ).scroll(function() {
//   $( "span" ).css( "display", "inline" );
//   $( "span" ).fadeOut( "slow" );
// });

(function($){
  $(window).on("load", function(){
    alert('hello');
    $(".CustomScrollbar").mCustomScrollerbar({
      
      //axis:"x";
    });
  });
})(jquery);