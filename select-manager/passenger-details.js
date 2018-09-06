var button= $(".btn").on('click', function(){
    $("#update").html("<select name='select-picker class='selectPicker' id='age'> <option value='0'>0-3</option><option value='3'>3-15</option> <option value='18'>18+</option></select>");
    $('select option[value=3]').prop('selected', true);
}) 
