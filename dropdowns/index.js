  $(document).ready(function() {
        $(function() {
//Creating an Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
          this.classList.toggle('active');
          var panel =this.nextElementSibling;
            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            }
          else{
                  panel.style.maxHeight = panel.scrollHeight + 'px';
              } 
        });
}
//JQUERY for dropdown
            $('.dropdown-toggle').dropdown();

//JQUERY for tooltip
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
//JQUERY for Carousel
      $('.carousel').carousel();

//JQUERY for DatePicker   
        $('#datetimepickerDeparture').datetimepicker();
        $('#datetimepickerTo').datetimepicker({
            useCurrent: false
        });
            $("#datetimepickerDeparture").on("dp.change", function(e) {
            $('#datetimepickerTo').data("DateTimePicker").minDate(e.date);
        });
            $("#datetimepickerTo").on("dp.change", function(e) {
            $('#datetimepickerDeparture').data("DateTimePicker").maxDate(e.date);
        });
    });
});
