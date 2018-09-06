<<<<<<< .merge_file_jHFrNY
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
=======
(function($){
  $(window).on("load",function(){
    $(".content").mCustomScrollbar();
  });
})(jQuery);
>>>>>>> .merge_file_lCda1P
