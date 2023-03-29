console.log("läuft");

//onclick
// setInterval
// clearInterval
// if, else if
// querySelector

const outputPercent = document.querySelector('.zeit')

const countDown = () => {
    let percentNum = 100;
    let countInterval = setInterval(function() {
        percentNum--;
        if (percentNum < 0) {
            clearInterval(countInterval)
        }
        else {
            outputPercent.innerHTML = percentNum +"%"
        }
    } , 100);
}





// ALTE VARIANTE

// let percentNum = 100;
// let countInterval = setInterval("countDown()", 100);


// const countDown = () => {
//     if (percentNum >= 0) {
//         percentNum = percentNum -= 1;
//         outputPercent.innerHTML = percentNum +"%"
//     }
//     else {
//         outputPercent.innerHTML = clearInterval(countInterval + "%");
//     }
// }