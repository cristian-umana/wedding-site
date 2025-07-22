
function countdown() {
    const weddingDate = new Date("2026-05-09T12:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " days! ";

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "We're married!";
    }
}

setInterval(countdown, 1000);
