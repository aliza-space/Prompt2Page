// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1500);
});

// Particles.js Config
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#00f2fe' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00f2fe',
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'grab' } }
    }
});

// Typing Animation
const textElement = document.getElementById('typing-text');
const phrases = ["Code • Create • Collaborate", "Innovating the Future", "GPREC's Coding Hub"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}
type();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);

// Counters
const counters = document.querySelectorAll('.counter');
const speed = 200;

function runCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// Trigger counters when section visible
const impactSection = document.querySelector('.impact-section');
const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) runCounters();
}, { threshold: 0.5 });
observer.observe(impactSection);

// Confetti Effect
document.getElementById('confetti-btn').addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#7000ff', '#ffffff']
    });
    alert("Welcome to the Community! Registration details sent to your department.");
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    scrollProgress.style.width = scrollPercent + "%";
    
    if (window.scrollY > 50) {
        nav.style.padding = "5px 0";
        nav.style.background = "rgba(5, 5, 16, 0.95)";
    } else {
        nav.style.padding = "10px 0";
        nav.style.background = "var(--glass)";
    }
});