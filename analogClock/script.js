window.onload = function () {

    let secundeHand = document.getElementById('secunde-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');
    let getStartDegree;
    let minutesToDegrees;
    let degrees;

    setInterval(function () {
        let sec = new Date();
        secundeHand.style.transform = `rotate(${sec.getSeconds() * 6}deg)`;
    }, 1000);

    setInterval(function () {
        let min = new Date();
        minuteHand.style.transform = `rotate(${min.getMinutes() * 6}deg)`;
    }, 1000);

    setInterval(function () {
        getStartDegree = new Date();
        minutesToDegrees = getStartDegree.getHours() * 60 + getStartDegree.getMinutes();
        degrees = minutesToDegrees / 2;
        if ((degrees / 2) > 359) degrees = 0;
        hourHand.style.transform = `rotate(${degrees}deg)`;
    }, 1000);
}