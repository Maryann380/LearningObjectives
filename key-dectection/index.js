function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 13:
        //  alert('left');
         document.querySelector("#text-entered").innerHTML = "The last key Entered: " +  '' + e.which || '';
        $("p").css("color","hotpink");

        break;
        case 32:
        document.querySelector("p").innerHTML = "The last key Entered: " +  '' + e.which || '';
            break;
        case 9:
        document.querySelector("p").innerHTML = "The last key Entered: " +  '' + e.which || '';
            break;
    }
}