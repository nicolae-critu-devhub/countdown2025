// Set the date we're counting down to (change this to your target date)
const countdownDate = new Date("Nov 1, 2025 12:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the difference between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML =
    `<div style="text-align: center;">
        <div style="font-size: 2em">Countdown</div>
        <div style="display: flex; gap: 20px; justify-content: center;">
            <div>
                <div style="font-size: 2em;">${days}</div>
                <div>days</div>
            </div>
            <div>
                <div style="font-size: 2em;">${hours}</div>
                <div>hours</div>
            </div>
            <div>
                <div style="font-size: 2em;">${minutes}</div>
                <div>minutes</div>
            </div>
            <div>
                <div style="font-size: 2em; color: red;">${seconds}</div>
                <div>seconds</div>
            </div>
        </div>
    </div>`;

    // If the countdown ends, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "🚀 TO THE MOON 🚀";
    }
}, 1000);
