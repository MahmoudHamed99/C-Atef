// WELCOME JAVASCRIPT

// Start Navigation
let navbar = document.querySelector(".sub-nav");
let bars = document.querySelector(".bars");
let close = document.querySelector(".close");
let header = document.querySelector(".header");

bars.onclick = () => {
    let overlay = document.createElement("div");
    overlay.className = "popup";
    document.body.appendChild(overlay);
    navbar.classList.add("open");
}
close.onclick = () => {
    navbar.classList.remove("open");
    document.querySelector(".popup").remove();
}
window.onscroll = () => {
    if (window.scrollY >= 200) {
        header.classList.add("extra");
    } else if (window.scrollY == 0) {
        header.classList.remove("extra");
    }
}
// End Navigation

// Start Stop Scroll
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = 'auto';
}
bars.addEventListener('click', function() {
    disableScroll();
});
close.addEventListener('click', function() {
    enableScroll();
});
// End Stop Scroll

// Scroll Into View
const buttons = document.querySelectorAll('.main-nav li');
const landBtns = document.querySelectorAll('.landing .title button');
const sections = document.querySelectorAll('.section');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        }

        buttons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
    });
});
landBtns.forEach(landBtn => {
    landBtn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
});
function detectSectionInView() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    
        if (isInView) {
            buttons.forEach(button => button.classList.remove('active')); // Remove from all buttons
            buttons[index].classList.add('active'); // Add to current button
        }
    });
  }
window.addEventListener('scroll', detectSectionInView);
detectSectionInView();
// Scroll Into View

// Scroll Into View2
const buttons2 = document.querySelectorAll('.sub-nav ul li');

buttons2.forEach(button => {
    button.addEventListener('click', function() {
        navbar.classList.remove("open");
        document.querySelector(".popup").remove();
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        }
        enableScroll();

        buttons2.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
function detectSectionInView2() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    
        if (isInView) {
            buttons2.forEach(button => button.classList.remove('active'));
            buttons2[index].classList.add('active');
        }
    });
}
window.addEventListener('scroll', detectSectionInView2);
detectSectionInView2();
// Scroll Into View2

// Start Carousel
const testmonials = document.querySelector(".testmonials");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".arrow");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeOutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeOutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeOutId);
    if (!carousel.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
carousel.addEventListener("mouseenter", () => clearTimeout(timeOutId));
carousel.addEventListener("mouseleave", autoPlay);
// Start Carousel

// Start Translation
const langToggle = document.querySelector('.langToggle');
const rtlStyle = document.getElementById('rtl-style');
let currentLang = 'en';

function loadLanguageContent() {
    // Hide all content sections first
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(item => item.style.display = 'none');

    // Show content for the selected language
    const contentToShow = document.querySelectorAll(`.content[data-lang="${currentLang}"]`);
    contentToShow.forEach(item => item.style.display = 'block');
}
loadLanguageContent();

document.addEventListener('click', function(e) {
    if (e.target.classList.contains("langToggle")) {
        if (currentLang === 'en') {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            currentLang = 'ar';
            rtlStyle.disabled = false;
            loadArabicContent();
        } else {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            currentLang = 'en';
            rtlStyle.disabled = true;
            loadEnglishContent();
        }    
    }
});

function loadEnglishContent() {
    document.querySelectorAll('[data-lang="en"]').forEach(item => item.style.display = 'block');
    document.querySelectorAll('[data-lang="ar"]').forEach(item => item.style.display = 'none');
}
  
function loadArabicContent() {
    document.querySelectorAll('[data-lang="en"]').forEach(item => item.style.display = 'none');
    document.querySelectorAll('[data-lang="ar"]').forEach(item => item.style.display = 'block');
}
// End Translation