const emails = ["random1@gmail.com", "random2@gmail.com", "random3@gmail.com"];

// RECUPERO IL PULSANTE DAL DOM
const button = document.getElementById("serach");

button.addEventListener("click", function () {
  // RECUPERO VALORE INSERITO NEL CAMPO INPUT
  let mail = document.getElementById("mail").value.tolo;

  // VARIABILE DI CONTROLLO (FLAG)
  let foundMail = false;

  // CICLO L'ARRAY E CONFRONTO L'ELEMENTO CHE STO CICLANDO CON LA PAROLA INSERITA DALLA FORM
  for (let i = 0; i < emails.length; i++) {
    if (emails[i].toLowerCase === mail) {
      // SE E' VERA LA CONDIZIONE, IMPOSTO LA VARIABILE DI CONTROLLO A TRUE
      foundMail = true;
    }
  }

  // MOSTRO IL MESSAGGIO CORRISPONDENTE A SECONDA DEL VALORE DELLA VARIABILE DI CONTROLLO
  if (foundMail === true) {
    console.log(`${mail.toLowerCase} trovata`);
  } else {
    console.log(`${mail.toLowerCase} non trovata`);
  }
});
