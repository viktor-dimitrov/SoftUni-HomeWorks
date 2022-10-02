function attachEventsListeners() {

    let dayBtn = document.getElementById("daysBtn");
    let hrBtn = document.getElementById("hoursBtn");
    let minBtn = document.getElementById("minutesBtn");
    let secBtn = document.getElementById("secondsBtn");

    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    dayBtn.addEventListener('click', calc);
    hrBtn.addEventListener('click', calc);
    minBtn.addEventListener('click', calc);
    secBtn.addEventListener('click', calc);

    let timeValues = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function makeDay(timeType, quantity) {
        let day = quantity / timeValues[timeType];
        return day;
    }

    function calc(e) {
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let dayValue = makeDay(input.id, Number(input.value));

        days.value = dayValue;
        hours.value = dayValue * timeValues.hours;
        minutes.value = dayValue * timeValues.minutes;
        seconds.value = dayValue * timeValues.seconds;
    }
}