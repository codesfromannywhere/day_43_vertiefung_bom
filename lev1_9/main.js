const outputClock = document.getElementById("txt")

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

setInterval("startTime()", 1000);

const startTime = () => {
    const timeNow = new Date()
    heute = days[timeNow.getDay()].substring(0,3),
    std = timeNow.getHours(),
    min = timeNow.getMinutes(),
    sec = timeNow.getSeconds();

    outputClock.textContent = `${heute} ${std}:${min}:${sec}`
};
