var modal = document.getElementsByClassName('simpleModal');
var modalBtn = document.getElementsByClassName('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn');

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener("click", outsideClick);


//opens modal
function openModal(){
    modal.style.display = 'block';
}
//close modal
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(){
    modal.style.display = 'none';
}