console.log("läuft");
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// window.innerWidth 
// Boolean true/false


const kittycat = document.querySelector('img');
let kittyInterval;
let leftPosition = 0;

function catWalk() {
    const strayingCat = () => {
        leftPosition += 20;
        kittycat.style.left = leftPosition + "px";
    }
    kittyInterval = setInterval(strayingCat, 100)
}

function pause() {
    clearInterval(kittyInterval)
}

function turn() {
    kittycat.style.transform = "scaleX(-1)"
    const turningCat = () => {
        leftPosition -= 30;
        kittycat.style.left = leftPosition + "px";
    }
    kittyInterval = setInterval(turningCat, 20)
}

function catSpeed() {
    const strayingCat = () => {
        leftPosition += 50;
        kittycat.style.left = leftPosition + "px";
    }
    kittyInterval = setInterval(strayingCat, 50)
}
