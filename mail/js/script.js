const emails = ["random1@gmail.com", "random2@gmail.com", "random3@gmail.com"];

const button = document.getElementById("serach");

button.addEventListener("click", function () {
  let foundMail = false;

  for (let i = 0; i < emails.length; i++) {
    if (emails[i] === "random1@gmail.com") {
      foundMail = true;
    }
  }

  if (foundMail === true) {
    console.log("Email trovata");
  } else {
    console.log("Email non trovata");
  }
});
