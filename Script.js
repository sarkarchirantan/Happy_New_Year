// Configuration: Set the date to next New Year
const nextYear = new Date().getFullYear() + 1;
const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

// Countdown Logic
function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(updateCountdown, 1000);

// Interaction Logic
const giftBox = document.getElementById('giftBox');
const content = document.getElementById('content');
const title = document.querySelector('.title');

giftBox.addEventListener('click', () => {
    // Hide box, show content
    giftBox.style.display = 'none';
    content.style.display = 'block';
    
    // Change Title
    title.innerText = "Happy New Year!";
    
    // Play sound (optional) or just fire confetti
    fireConfetti();
});

// Confetti Effect
function fireConfetti() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
