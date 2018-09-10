var button= $(".btn").on('click', function(){
    $("#updateDetails").html(" <option value='0' id='young'>0-3</option><option value='3' id='teenager'>3-15</option> <option value='18' id='adult'>18+</option>");
    $('select option[value=3]').prop('selected', true);
}) 

$("#title").change ( function () {
    var targID  = $(this).val ();
    $("div.update-1").hide ();
    $('#' + targID).show ();
} )