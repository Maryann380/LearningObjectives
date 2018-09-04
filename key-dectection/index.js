function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
  }

function keyCode(event){
    var w = event.keyCode;
    var text001;
    var b =input001.value;
    if( w == 13 && b == "a - z"){
        text001="hello" + ('count ++');
        document.getElementById("text-entered").innerHTML= text001;
}
}