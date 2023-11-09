let name = prompt("inserisci il tuo nome");
let surname = prompt("inserisci il tuo cognome");
let favColor = prompt("inserisci il tuo colore preferito");
let passNub = Math.floor( ( Math.random() * 1000000 ) + 1 );

let password = name + surname + favColor + passNub;
console.log(password);