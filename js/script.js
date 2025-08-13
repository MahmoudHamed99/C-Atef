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
const enButtons = document.querySelectorAll('.main-nav .enli');
const arButtons = document.querySelectorAll('.main-nav .arli');
const landBtns = document.querySelectorAll('.landing .title button');
const sections = document.querySelectorAll('.section');

enButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        }

        enButtons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
    });
});
arButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        }

        arButtons.forEach(btn => btn.classList.remove('active'));

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
            enButtons.forEach(button => button.classList.remove('active')); // Remove from all buttons
            enButtons[index].classList.add('active'); // Add to current button
        }
        if (isInView) {
            arButtons.forEach(button => button.classList.remove('active')); // Remove from all buttons
            arButtons[index].classList.add('active'); // Add to current button
        }
    });
  }
window.addEventListener('scroll', detectSectionInView);
detectSectionInView();
// Scroll Into View

// Scroll Into View2
const enButtons2 = document.querySelectorAll('.sub-nav ul .ensub');
const arButtons2 = document.querySelectorAll('.sub-nav ul .arsub');

enButtons2.forEach(button => {
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

        enButtons2.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
arButtons2.forEach(button => {
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

        arButtons2.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
function detectSectionInView2() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    
        if (isInView) {
            enButtons2.forEach(button => button.classList.remove('active'));
            enButtons2[index].classList.add('active');
        }
        if (isInView) {
            arButtons2.forEach(button => button.classList.remove('active'));
            arButtons2[index].classList.add('active');
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
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const carouselChildrens = [...carousel.children];

const videos = document.querySelectorAll(".testmonials .carousel .card .video video");
const isMobileView = window.innerWidth <= 768;
if (isMobileView) {
    console.log("done");
}
videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
        video.muted = true;
        video.play();
    });
    video.addEventListener("click", () => {
        video.muted = false;
    });
    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
    // Pause when video is out of view
    if (!isMobileView) {
        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }, {
            threshold: 0.2 // Only pause if less than 20% is visible
        });
        observer1.observe(video);
    }
    if (isMobileView) {
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Autoplay muted when in view
                    video.muted = true;
                    video.play();
                } else {
                    // Pause and reset when out of view
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }, {
            threshold: 0.5 // Play only if 50% or more is visible
        });
        observer2.observe(video);   
    }
});

let isDragging = false, startX, startScrollLeft, timeoutId;
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


// carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// carouselChildrens.slice(0, cardPerView).forEach((card) => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

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

// const autoPlay = () => {
//     if (window.innerWidth < 800) return;
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// const infiniteScroll = () => {
//     if (carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }
//     clearTimeout(timeoutId);
//     if (!carousel.matches(":hover")) autoPlay();
// }

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// carousel.addEventListener("mouseleave", autoPlay);
// End Carousel

// Start Plans
const enmonths = document.querySelectorAll('.enmonths');
const armonths = document.querySelectorAll('.armonths');
const oneMonthButtons = document.querySelectorAll('.one-month');
const threeMonthButtons = document.querySelectorAll('.three-months');
const oneMonthPlans = document.querySelectorAll('.monthplan');
const threeMonthPlans = document.querySelectorAll('.trimonthplan');

enmonths.forEach(month => {
    month.addEventListener('click', function() {
        enmonths.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
armonths.forEach(month => {
    month.addEventListener('click', function() {
        armonths.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

oneMonthButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        oneMonthPlans.forEach(plan => plan.style.display = "block");
        threeMonthPlans.forEach(plan => plan.style.display = "none");
    });
});
threeMonthButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        oneMonthPlans.forEach(plan => plan.style.display = "none");
        threeMonthPlans.forEach(plan => plan.style.display = "block");
    });
});
// End Plans

// Start Contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const enName = document.getElementById("nameInput").value.trim();
    const arPhone = document.getElementById("phoneInput").value.trim();
    const message = `Hello, my name is ${enName}, I need more info`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+971568733402"; // Replace with your real WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
});

document.getElementById("arContactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const arName = document.getElementById("arNameInput").value.trim();
    const enPhone = document.getElementById("arPhoneInput").value.trim();
    const message = `مرحبا, انا اسمي ${arName}, احتاج لمزيد من التفاصيل`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+971568733402"; // Replace with your real WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
});
// End Contact

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