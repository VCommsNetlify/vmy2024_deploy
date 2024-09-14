//---------------------------//
//         COUNTDOWN         //
//---------------------------//
// Countdown Timer target date to Sep 12, 2024
const targetDate = new Date("September 12, 2024 00:00:00").getTime();

// Updating timer every second
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculating days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displaying countdown
    document.getElementById("countdown").innerHTML = `
        <div><strong>${padNumbers(days)}</strong><span class="timer">DAYS</span></div>
        <div><strong>${padNumbers(hours)}</strong><span class="timer">HOURS</span></div>
        <div><strong>${padNumbers(minutes)}</strong><span class="timer">MINUTES</span></div>
        <div><strong>${padNumbers(seconds)}</strong><span class="timer">SECONDS</span></div>
    `;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<p>WELCOME HOME</p>";
    }
}, 1000);

function padNumbers(number) {
    return number < 10 ? "0" + number : number;
}
