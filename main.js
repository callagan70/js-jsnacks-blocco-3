// SECTION - Snecchino 1 - Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
alert("Primo snecchino")
var array1Sneck1 = [];
var x = parseInt (0);
var y = parseInt (0);
var z = parseInt (0);

do {
  let z = parseInt (prompt ("inserisci un numero"));
  x = x + z;
  array1Sneck1.push(z);
} while (x < 50);

document.getElementById("snak1Length").innerHTML = `Hai generato ${array1Sneck1.length} numeri, di cui la somma è ${x} Indi hai superato la tua quota di 50 e il giochino è finito. Buona giornata.`
// !SECTION - Snecchino 1 fine

// SECTION -Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
alert("Secondo snecchino")

y =  parseInt (prompt ("inserisci il numero N numero"));

do {
  z++;
  // let array1snack2(z) = []
  // console.log(array1snack2(z))
  let array1snack2 =[]

              for (i = 1; i <= 10; i++) {
                      x= Math.floor(Math.random() * 99 + 1);
                      array1snack2.push(x);
              }
  document.getElementById("snecchino2_3_text").innerHTML  = "Hai selezionato " + y + " arrey"  
  document.getElementById("snecchino2_3").innerHTML += `Il ${y}° arrey è <div>${array1snack2}</div>`;

} while (z < y);