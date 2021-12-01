'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//create the fucntion to make the code look better
const openModal = function(){
    console.log('Button click');
    modal.classList.remove('hidden'); //erase the hidden class to display the windown
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden'); //erase the hidden class to display the windown
    overlay.classList.add('hidden');
}
//console.log(btnOpenModal);
// get the list node of show modal by All and loop, so when we click on any element in the list will pop up the windown
for(let i = 0; i< btnOpenModal.length; i++){
    //get the add listener when clicking
    btnOpenModal[i].addEventListener('click', openModal);

      //modal.style.display ='block';//make css in js and display the block
};

btnCloseModal.addEventListener('click', closeModal);
   
overlay.addEventListener('click', closeModal);
   

//use class in js
//use press key event to cloose the windoown 
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){ //if the fucntion does not contain the hidden then close the windown
            closeModal();
        }
       
    }
}); ///test too get the key fucntion

