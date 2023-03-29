console.log("läuft");

//setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

const message = document.getElementById('message')
const count = document.getElementById('count')


let restZeit = 10;
const sekundenZaehler = setInterval(() => {
    restZeit--;
    count.innerHTML = restZeit;
    if (restZeit < 0) {
        clearInterval(sekundenZaehler)
        message.style.display = "none"
    }
}, 1000);
