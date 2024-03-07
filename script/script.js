/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
userKm
userAge
price
userExpense
*/




let userKm = parseInt(prompt('Buongiorno! Quanti chilometri devi percorrere?'));
console.log(userKm);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

let price = userKm * 0.21;
console.log(price);

let userExpense = 'value';
console.log(userExpense)

if (isNaN(userKm) && isNaN(userAge)) {
    alert('ATTENZIONE! Il valore deve essere un numero')
} else {
    alert('Valori registrati correttamente, premi "OK" per conoscere il prezzo del tuo biglietto.')
}

if (userAge < 18) {
    userExpense = price * 0.80;
} else if (userAge > 65) {
    userExpense = price * 0.60;
} else {
    userExpense = price;
}

console.log('Il tuo biglietto ha un costo di',
    userExpense);
document.getElementById('euro').innerHTML = userExpense.toFixed(2);


