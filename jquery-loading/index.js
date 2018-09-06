
window.onload =function(){
    if(window.jQuery){
        $('body').append('<h1>Your Jquery is loaded</h1>');
        $('body').css("background", "yellow");
        $('body').css("color", "black");
        $('body').css("text-align", "center");
        }
    else{
       alert("Sorry Jquery was not Loaded");
    }
}