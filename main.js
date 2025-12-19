// # MAIL
/* console.log(`%cESERCIZIO MAIL`, "color: yellow");

//lista invitati
const guestList = [
  "manuel_aliquo@gmail.com",
  "denis_balestro@gmail.com",
  "michele_brignola@gmail.com",
  "antonio_cappellano@gmail.com",
  "gabriele_chiocca@gmail.com",
  "valeria_cristiano@gmail.com",
  "gabriela_tumfart@gmail.com",
  "michele_ferri@gmail.com",
  "mattia_galasso@gmail.com",
  "brayan_genovese@gmail.com",
  "sirio_ghiringhelli@gmail.com",
  "manuel_gozzi@gmail.com",
  "jasmin_hegic@gmail.com",
  "bruno_maiolo@gmail.com",
  "giancarlo_manzo@gmail.com",
  "giovanni_mazzi@gmail.com",
  "leonardo_monti@gmail.com",
  "edoardo_nicora@gmail.com",
  "salvatore_raia@gmail.com",
  "andrea_salvi@gmail.com",
  "marco_venerando@gmail.com",
];
console.table(guestList);

//richiesta indirizzo mail all'utente
const userMail = prompt("Inserire il proprio indirizzo e-mail:");
console.log(`userMail: ${userMail}`);

//verifico presenza utente tra gli invitati
let outputMsg = `L'utente NON risulta presente nell'elenco degli invitati.`;
let isGuest = false;
for (let i = 0; i < guestList.length && !isGuest; i++) {
  isGuest = userMail.toLowerCase() === guestList[i].toLowerCase();
  if (isGuest) {
    outputMsg = outputMsg.replace(" NON ", " ");
  }
}
console.log(outputMsg);
alert(outputMsg); */

// # DADI
console.log(`%cESERCIZIO DADI`, "color: yellowgreen");

//array dei punti:
// posizione 0 -> punteggio utente,
// posizione 1 -> punteggio PC
const points = [0, 0];

//generazione punteggi
let pointMsg = "risultato tiro UTENTE: ";
for (let i = 0; i < points.length; i++) {
  points[i] = Math.floor(Math.random() * 6) + 1;
  if (i > 0) {
    pointMsg = pointMsg.replace("UTENTE", "PC");
  }
  console.log(pointMsg + points[i]);
}

//si decreta il vincitore
let outputMsg = "Vincitore: PAREGGIO";
if (points[0] > points[1]) {
  outputMsg = outputMsg.replace("PAREGGIO", "UTENTE");
}
if (points[0] < points[1]) {
  outputMsg = outputMsg.replace("PAREGGIO", "PC");
}
console.log(outputMsg);
