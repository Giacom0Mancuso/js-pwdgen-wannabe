let name = prompt("inserisci il tuo nome");
let surname = prompt("inserisci il tuo cognome");
let favColor = prompt("inserisci il tuo colore preferito");
let firstNub = prompt("inserisci il primo numero");
let secondNub = prompt("inserisci il secondo numero");

firstNub = parseInt(firstNub);
secondNub = parseInt(secondNub);
let passNub = firstNub/secondNub;

let password = name + surname + favColor + passNub;
console.log(password);