// SECTION - Snecchino 1 - Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var array1Sneck1 = []
var x = parseInt (0)
var y = parseInt (0)

// while (x => 50) {
//   let z = prompt ("inserisci un numero")
//   array1Sneck1.push(z)
//   x += z
// }

// for ( i = 0; x <= 50; i++) {
//   let z = prompt ("inserisci un numero");
//   array1Sneck1.push(z);
//   x += z;}

do {
  let z = parseInt (prompt ("inserisci un numero"));
  x = x + z;
  array1Sneck1.push(z);
} while (x < 50);

document.getElementById("snak1Length").innerHTML = `Hai generato ${array1Sneck1.length} numeri, di cui la somma è ${x} Indi hai superato la tua quota di 50 e il giochino è finito. Buona giornata.`
// !SECTION - Snecchino 1 fine

