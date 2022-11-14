/**
 * Zadatak je da se validira forma
 * 
 * pravila:
 *  Username: sadrzaj koji unesemo mora biti string,
 *  ne sme biti manji od 3 karaktera i veci od 10
 *  polje mora biti obavezno ( mandatori, required )
 * 
 *  email: je obavezno (mandatori) polje, tj ne sme biti prazno, 
 *         mora biti stirng
 *         i da u sebi sadrzi znak @
 *         - mora minimalno da ima 4 karaktera
 * 
 *   JMBG: je takodje obavezno polje. Ne sme biti prazno, 
 *         mora biti type number( samo brojevi) i mora da ima 13 cifara
 * 
 *  Ako sve dobro ispunimo treba da se ispise sledeca poruka
 *    u divu sa id-jem #succes-messag "Uspesno ste se prijavili"
 * 
 *  Ako ne unesemo doboro neki podatak kad kliknemo submit, treba ispod
 *  svakog polja da se ispise koja je greska.
 */

/**
 * HINT
 * 1) Prvo dohvati sve elemente koristeci querySelector 
 *    (input polja, dugmad, elemente, gde ce se ispisivati greska, element gde ce se poruka ispisati itd)
 * 2) na dugme submit dodati EventListener "click"
 * 
 * 3) Napraviti funkciju koja radi validaciju forme i pozvati je unutar 
 *    click eventa u submit dugmetu
 */

//let kontejner = document.querySelector('.container');



let inputJmbg = document.querySelector('#moj-jmbg');
let errorJmbg = document.querySelector('.jmbg-error');
let buttonSubmit = document.querySelector('#submit-btn');


buttonSubmit.addEventListener('click', () => {
    validationUsername()
    validationEmail()
    validationJMBG() 

});

