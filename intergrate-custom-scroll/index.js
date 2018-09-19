// (function($){
//     $(window).on("load",function(){
//         $(".mCustomScrollbar").mCustomScrollbar({
//             axis:"xy"
//         });
//     });
// })(jQuery);

// $(document).ready(function(){
//     $bHeight =$('body').height();
//     $bHeight =$('.scrollBar').height();
//     $sliderHeight = $sliderHeight/$bHeight*100;
//     $(".slider").height($sliderHeight + '%');

//     $(".slider").draggable({
//         containment:'parent',
//         axis: 'xy',
//         drag: function(){
//             $pos = $(".slider").position().top;
//             $ScrollPercent= $pos/$sHeight*100;
//             $ScrollPx = $ScrollPercent/100*$bHeight;
//             $('body').scrollTop('$ScrollPx');
//         }

//     })
    
// })

        // $(window).on("load",function(){
        //     $(".register-form").mCustomScrollbar();
        // });
 

$( document ).ready(function() {
    $(".register-detail").mCustomScrollbar();
});

