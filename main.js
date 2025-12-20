// # GESTIONE ESERCIZI

let sceltaTutor = 0;

for (; sceltaTutor !== 4; ) {
  //il tutor sceglie l'eserizio da vedere
  sceltaTutor = parseInt(
    prompt(`Ciao Tutor! quale esercizio vuoi vedere:
    
    1) Mail
    2) Dadi
    3) Dadi Bonus

    4) Esci
    
    Inserisci il numero corrispondente alla scelta.`)
  );
  console.log(`sceltaTutor: ${sceltaTutor}`);

  //validazione input del tutor
  if (!sceltaTutor || sceltaTutor < 1 || sceltaTutor > 4) {
    const errMsg = `La scelta: "${sceltaTutor}" non è valida!\n\nRitenta. Grazie`;
    //istruzioni al tutor per ripetere scelta non andata a buon fine
    alert(errMsg);
  } else {
    let selExMsg = `Esercizio selezionato: 1) Mail`;
    if (sceltaTutor === 3) {
      selExMsg = selExMsg.replace(`1) Mail`, `3) Dadi Bonus`);
    }
    if (sceltaTutor === 2) {
      selExMsg = selExMsg.replace(`1) Mail`, `2) Dadi`);
    }
    if (sceltaTutor === 4) {
      alert("CIAO! ci vediamo👋");
      throw new Error("Richiesta interruzione programma");
    }
    //informazione al tutor sull'esercizio che ha scelto di vedere
    alert(selExMsg);
  }

  //qui sceltaTutor può solo avere i valori: 1,2,3
  if (sceltaTutor === 1) {
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
  }
  if (sceltaTutor === 2) {
    // # DADI
    console.log(`%cESERCIZIO DADI`, "color: yellowgreen");

    //array dei punti:
    // posizione 0 -> punteggio utente,
    // posizione 1 -> punteggio PC
    const points = [0, 0];
    let userMsg = "";

    //generazione punteggi
    let pointMsg;
    for (let i = 0; i < points.length; i++) {
      pointMsg = "risultato tiro UTENTE: ";
      if (i > 0) {
        pointMsg = pointMsg.replace("UTENTE", "PC");
      }
      points[i] = Math.floor(Math.random() * 6) + 1;
      pointMsg = pointMsg + points[i];
      console.log(pointMsg);
      userMsg += pointMsg + "\n";
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
    userMsg += outputMsg;

    //comunicazione all'utente
    alert(userMsg);
  }
  if (sceltaTutor === 3) {
    // # DADI BONUS
    console.log(`%cESERCIZIO DADI BONUS`, "color: orangered");
    // ? Il punteggio dell'utente viene inserito anzichè generato,
    // ? il gioco continua finchè l'utente non inserisce "STOP" al posto di un numero
    let userPoint = "";
    for (; userPoint.toUpperCase() !== "STOP"; ) {
      userPoint = prompt("Inserire un numero tra 1 e 6:");
      if (userPoint.toUpperCase() === "STOP") {
        alert("Fine Gioco Dadi Bonus! CIAO CIAO👋");
      } else {
        userPoint = parseInt(userPoint);
        //array dei punti:
        // posizione 0 -> punteggio utente,
        // posizione 1 -> punteggio PC
        //validazione input
        if (!userPoint || userPoint < 1 || userPoint > 6) {
          const errMsg = `La scelta: "${userPoint}" non è valida!\n\nRitenta. Grazie`;
          //info errore e ripetere scelta non andata a buon fine
          alert(errMsg);
        } else {
          const points = [userPoint, 0];
          let userMsg = "";

          //generazione punteggi
          let pointMsg = `risultato tiro UTENTE: ${userPoint}\n`;
          pointPC = Math.floor(Math.random() * 6) + 1;
          pointMsg += `risultato tito PC: ${pointPC}\n`;
          console.log(pointMsg);
          userMsg += pointMsg;

          //si decreta il vincitore
          let outputMsg = "Vincitore: PAREGGIO";
          if (userPoint > pointPC) {
            outputMsg = outputMsg.replace("PAREGGIO", "UTENTE");
          }
          if (userPoint < pointPC) {
            outputMsg = outputMsg.replace("PAREGGIO", "PC");
          }
          console.log(outputMsg);
          userMsg += outputMsg;

          //comunicazione all'utente
          alert(userMsg);
        }
        userPoint = String(userPoint);
      }
    }
  }
}
