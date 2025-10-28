const Start = document.getElementById("Start");
const Lap = document.getElementById("Lap");
const Stop = document.getElementById("Stop");
const firsthalf = document.getElementById("firsthalf");
const secondhalf = document.getElementById("secondhalf");
const mainfirsthalf = document.getElementById("mainfirsthalf");
const mainsecondhalf = document.getElementById("mainsecondhalf");

let count;
let rotation = 0;    
let mainMin = 0;
let mainSec = 0;
function starttimer() {
    mainSec++;
    if (mainSec >= 60) {
        mainSec = 0;
        mainMin++;
    }
    mainfirsthalf.innerHTML = String(mainMin).padStart(2, '0');
    mainsecondhalf.innerHTML = String(mainSec).padStart(2, '0');
    let curMin = Number(firsthalf.innerHTML);
    let curSec = Number(secondhalf.innerHTML);

    curSec++;
    if (curSec >= 60) {
        curSec = 0;
        curMin++;
    }

    firsthalf.innerHTML = String(curMin).padStart(2, '0');
    secondhalf.innerHTML = String(curSec).padStart(2, '0');
}

Start.addEventListener('click', () => {
    if (!count) {
        count = setInterval(starttimer, 1000);
        Start.textContent = "Pause";
    } else {
        clearInterval(count);
        count = null;
        Start.textContent = "Start";
    }
});

Stop.addEventListener('click', () => {
    clearInterval(count);
    count = null;

    firsthalf.innerHTML = "00";
    secondhalf.innerHTML = "00";
    mainfirsthalf.innerHTML = "00";
    mainsecondhalf.innerHTML = "00";
    mainMin = 0;
    mainSec = 0;
    rotation += 360;
    const btn = document.querySelector(".Stop");
    btn.style.transform = `rotate(${rotation}deg)`;
});

Lap.addEventListener('click', () => {
    firsthalf.innerHTML = "00";
    secondhalf.innerHTML = "00";
});
