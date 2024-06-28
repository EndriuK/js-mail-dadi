// CREO ARRAY
// [0]giocatore - [1]bot
const numbers = [];

// creo ciclo for per riempire arrey con math.random

for (let i = 1; i <= 2; i++) {
  numbers.push(Math.floor(Math.random() * 6) + 1);
}

console.log(numbers);

if (numbers[0] > numbers[1]) {
  console.log("il giocatore ha vinto");
} else if (numbers[0] < numbers[1]) {
  console.log("il bot ha vinto");
} else {
  console.log("pareggio");
}
