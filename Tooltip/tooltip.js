
 $(function(){
      var infoElm = $(".info");
      
      //arraying through every element on the page
      infoElm.each(function(){
          var self = $(this),
          //getting and saving the element of self
            selfTooltipText = self.data('tooltip-text');
          if(selfTooltipText)
            //creating an element
            $('<span/>', {
                class:'tooltip', text: selfTooltipText}).appendTo(self);
           
          });
        })
//   $(document).ready(function(){ 
//       $('#tooltip').tooltip({
//             content:'<b>HELLO, How are you today</b>',
//             // track: true,
//             show: {
//                 delay:100,
//                 duration:500,
//                 effect: 'slideDown'},
//             hide: {
//                 delay:100,
//                 duration:500,
//                 effect: 'explode'},
//             });
         
//         })
       