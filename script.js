"use ctrict";

let dateEnd = "2020-02-16";

function getTimer(dateFin) {
    let t = Date.parse(dateFin) - Date.parse(new Date());
    let hours;
    let minutes;
    let seconds;

    if (t > 0) {
        hours = addZerro(Math.floor(t / 1000 / 60 / 60));
        minutes = addZerro(Math.floor((t / 1000 / 60) % 60));
        seconds = addZerro((t / 1000 % 60));
    } else {
        hours = "00";
        minutes = "00";
        seconds = "00";
    }

    function addZerro(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    };

    return {
        t,
        hours,
        minutes,
        seconds
    }
}

function setCloskRemainder(id, dateFin) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");
    updateClock();// for 1-st second befor interval
    let timeInterval = setInterval(function () {
        let requestId = requestAnimationFrame(controlClock)
    }, 1000)

    function updateClock() {
        let t = getTimer(dateFin);
        hours.textContent = (t.hours);
        minutes.textContent = (t.minutes);
        seconds.textContent = (t.seconds);
    }
    function controlClock(){  
        let t = getTimer(dateFin);
        updateClock();  
        if (t.t <= 0) {
            console.log(t.t);
            clearInterval(timeInterval);
        }
    }
};
setCloskRemainder("timer", dateEnd);