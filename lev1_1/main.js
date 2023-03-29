// lev1_1: setTimeout setInterval

// console.log("Start Warten für 3 Sekunden...");

// const message = () => {
//     console.log("Erledigt. Du hast 3 Sekunden verschwendet .");
// }

// const startInThreeSec = () => {
//     setTimeout(message, 3000)
// }
// startInThreeSec();

//lev1_1: setTimeout setInterval

// setInterval
// clearInterval
// if, else
// i -- auch möglich 


let restZeit = 10;
let zeit = setInterval("sekundenZaehler()", 1000);

const sekundenZaehler = () => {

    if (restZeit >= 0) {
        console.log(restZeit);
        restZeit = restZeit - 1;
    }
    else {
        console.log("Endlich Feierabend!!!! :)");
        clearInterval(zeit);
    }
}






