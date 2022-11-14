
function validationUsername() { 
    let inputIme = document.querySelector('#ime');
    let errorIme = document.querySelector('.ime-greska');

    if(inputIme.value === '') {
        errorIme.innerHTML = 'Polje je obavezno'
    } else if(inputIme.value.length < 3) {
        errorIme.innerHTML = 'Polje mora da sadrzi minimum 3 karaktera'
    } else if(inputIme.value.length > 10) {
        errorIme.innerHTML = 'Username ne sme biti veci od deset karaktera'
    } else {
        errorIme.innerHTML = '';
    }
}

function validationEmail() {

    let inputImejl = document.querySelector('#my-email');
    let errorEmail = document.querySelector('#email-error');
    
    if(inputImejl.value === '') {
        errorEmail.innerHTML = 'POlje je obavezno.'
    } else if(inputImejl.value.length < 4) {
        errorEmail.innerHTML = 'Broj karaktera mora biti veci od cetiri.'
    } else if(!inputImejl.value.includes('@')) {
        errorEmail.innerHTML = 'Polje mora da sadrzi @ znak'
    
    } else {
        errorEmail.innerHTML = '';
    }
}

function validationJMBG() {
    console.log('pozdrav iz JMBG')
}