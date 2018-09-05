$(document).ready(function(){

     document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 13:
            $("#text-entered").html("Last key pressed was " + " " + 'Enter' );
            $("#text-entered").css("color","hotpink");

            break;
            case 32:
            $("#text-entered").html("Last key pressed was " + " " + 'Space' );
                break;
            case 9:
            $("#text-entered").html("Last key pressed was " + " " + 'Tab' );
                break;
        }
    }
})