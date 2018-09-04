function updateDetails(){
    
var details = function(){
     document.getElementById("update").innerHTML = "<select name='select-picker class='selectPicker' id='age'> <option value='0'>0-3</option><option value='3'>3-15</option> <option value='18'>18+</option></select>;"
     $('#age').val("3-15");
}

details();
}