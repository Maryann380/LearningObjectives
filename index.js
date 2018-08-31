function loginDetails(){
    var fname= document.getElementById('fname').value;
    var surname= document.getElementById('surname').value;

    if(fname == '' || surname == ''){
        document.getElementById('login').innerHTML = 'please introduce yourself';
        $('#login').css('border','2px solid red');
        $('#login').css('text-align','center');
    }
    else{
        alert("welcome " + fname + surname);
    }
}
Window.onload = function(){
    if(window.onload){
        alert('hello');
    }
    else{
        alert('Sorry this didnt work')
    }
}