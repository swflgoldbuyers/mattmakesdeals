// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progressBar = document.querySelector(".scroll-bar");

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

// ===========================
// NAVBAR
// ===========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});

// ===========================
// FADE IN SECTIONS
// ===========================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold: .15

}

);

document.querySelectorAll(".fade").forEach(section => {

observer.observe(section);

});

// ===========================
// PARALLAX HERO
// ===========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

const offset = window.pageYOffset;

hero.style.backgroundPositionY = offset * 0.45 + "px";

});

// ===========================
// HERO TEXT FADE
// ===========================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

const opacity = 1 - window.scrollY / 600;

heroContent.style.opacity = opacity;

heroContent.style.transform =
`translateY(${window.scrollY * .18}px)`;

});

// ===========================
// MARKET CARD HOVER
// ===========================

document.querySelectorAll(".market-card").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.backgroundPosition =

`${50 + (x - rect.width / 2) / 25}% ${50 + (y - rect.height / 2) / 25}%`;

});

card.addEventListener("mouseleave", () => {

card.style.backgroundPosition = "center";

});

});

// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll(".btn,.btn-outline").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".3s";

});

button.addEventListener("mouseleave",()=>{

button.style.transition=".35s";

});

});

// ===========================
// SMOOTH LOAD
// ===========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
