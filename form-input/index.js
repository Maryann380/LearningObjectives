function loginDetails(){
    var fname= document.getElementById('fname').value;
    var surname= document.getElementById('surname').value;

    if(fname == '' || surname == ''){
        document.getElementById('login').innerHTML = 'please introduce yourself';
        $('#login').addClass('alert alert-danger');
        $('#login').css('text-align','center');
        $('#login').css('margin-bottom','20px');
        $('.login').css('border','2px solid red');
    }
    else{
        $('.login').css('border','2px solid green');
        alert("welcome " + fname + " " + surname + " " + "How was your day today?");
        

    }
}