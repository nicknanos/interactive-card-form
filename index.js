//DOM Selectors

//card
var card_number = document.querySelector('.number');
var card_name = document.querySelector('.name');
var card_month = document.querySelector('.month');
var card_year = document.querySelector('.year');
var card_cvc = document.querySelector('.cvc');

//input
const inputs = document.querySelectorAll('form input');

const button  = document.querySelector('button[type=submit]');

const dialog = document.querySelector('.end-state');
const modal = document.querySelector('.modal');

/* function empty(e) {
    let container = `card_${e.target.id}`;
    //console.log(container);
    window[container].textContent = ''
} */

function update(e) {
    let container = `card_${e.target.id}`;
    //console.log(container);
    window[container].textContent = e.target.value;
}

inputs.forEach((input)=>{
    //input.addEventListener('click',empty,{once: true});
    input.addEventListener('input',update);
})

button.addEventListener('click',(e)=>{
    e.preventDefault;
    dialog.showModal();
    dialog.classList.toggle('displayed');
})

modal.addEventListener('click',()=>{
    dialog.classList.toggle('displayed');
    dialog.close();
})