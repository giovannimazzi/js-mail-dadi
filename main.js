// # MAIL
console.log(`%cESERCIZIO MAIL`, "color: yellow");

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
alert(outputMsg);
