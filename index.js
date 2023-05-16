//DOM Selectors

//card
var card_number = document.querySelector('.number');
var card_name = document.querySelector('.name');
var card_month = document.querySelector('.month');
var card_year = document.querySelector('.year');
var card_cvc = document.querySelector('.cvc');

//input
const inputs = document.querySelectorAll('form input');

//errors
const error_number =document.querySelector('.error[for=number]');
const error_name =document.querySelector('.error[for=name]');
const error_date =document.querySelector('.error[for=date]');
const error_cvc =document.querySelector('.error[for=cvc]');


const button  = document.querySelector('button[type=submit]');

const dialog = document.querySelector('.end-state');
const modal = document.querySelector('.modal');

let valid = false;

function update(e) {
    let container = `card_${e.target.id}`;
    //console.log(container);
    window[container].textContent = e.target.value;
}

function isEmpty(e) {
    console.log(e.target.value);
    if(e.target.value==''){
        return true;
    }else return false;
}

function checkDate(e){
    if(e.target.checkValidity()){
        let value =parseInt(e.target.value);
        if(e.target.id=='month'){
            if(value<1 || value>12){
                error_date.textContent = 'Invalid Date';
                return true;
            }
        }else {
            if(value<2010 || value>2030){
                error_date.textContent = 'Invalid Date';  
                return true;
            }
        }
        return false;
    }
}

function validate(e) {
    e.preventDefault();
    e.target.classList.add('touched');
    let errorBox = getError(e);
    if(isEmpty(e)){
        errorBox.textContent = 'Cant be blank'
        valid = false;
    }else if(errorBox){
        if(e.target.checkValidity()){
            errorBox.innerHTML = '&#8203';
            valid = true;
        }else {
            errorBox.textContent = "Invalid Input";
            valid = false;
        }
    }
}


function getError(e) {
    let error = e.target.id;
    switch(error){
        case 'number':
            return error_number;
        case 'name':
            return error_name;
        case 'month':
            if(checkDate(e)) break;
            return error_date;
        case 'year':
            if(checkDate(e)) break;
            return error_date;
        case 'cvc':
            return error_cvc;
    }
}

inputs.forEach((input)=>{
    //input.addEventListener('click',empty,{once: true});
    input.addEventListener('input',(e)=>{
        update(e);
        validate(e);
    });
})

button.addEventListener('click',(e)=>{
    inputs.forEach((input)=>{
        input.addEventListener('input',validate)
    })
    if(valid){
        e.preventDefault();
        dialog.showModal();
        dialog.classList.toggle('displayed');
    }else {
        e.preventDefault();
        alert("There's been one or more errors on your information")
    }
})

modal.addEventListener('click',()=>{
    dialog.classList.toggle('displayed');
    dialog.close();
    location.reload();
})