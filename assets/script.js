const mediaQ = window.matchMedia("(max-width: 600px)")
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const buyBtn = document.querySelector('#buy-btn');
const sellBtn = document.querySelector('#sell-btn');
const tradeBtn = document.querySelector('#trade-btn')
const mainSection = document.querySelector('#product-landing-page');
const imgHeader = document.querySelector('#header-img');
const aboutSection = document.querySelector('.about-sect');
const navLink = document.querySelectorAll('.nav-link');
const toggleBtn = document.querySelector('.toggle');
console.log(toggleBtn);
console.log(aboutBtn);
console.log(mainSection);
console.log(navLink)

function aboutDisplay() {
    aboutBtn.addEventListener('click', function displayAbout() {
        mainSection.style.display = 'none';
        imgHeader.style.display = 'none';
        aboutSection.style.display = 'flex';
    });
}
aboutDisplay();

function otherBtns() {
    homeBtn.addEventListener('click', function home() {
        imgHeader.style.display = 'block';
        mainSection.style.display = 'block';
        aboutSection.style.display = 'none';
    })
    buyBtn.addEventListener('click', function buy() {
        imgHeader.style.display = 'block';
        mainSection.style.display = 'block';
        aboutSection.style.display = 'none';
    })
    sellBtn.addEventListener('click', function sell() {
        imgHeader.style.display = 'block';
        mainSection.style.display = 'block';
        aboutSection.style.display = 'none';
    })
    tradeBtn.addEventListener('click', function trade() {
        imgHeader.style.display = 'block';
        mainSection.style.display = 'block';
        aboutSection.style.display = 'none';
    })
};
otherBtns();

function toggleNav() {
    toggleBtn.addEventListener('click', function responsiveNav() {
        for (let i = 0; i < navLink.length; i++) {
            if (navLink[i].style.display === 'none') {
                navLink[i].style.display = 'block';
            } else {
                navLink[i].style.display = 'none';
            }
        }
    }
    )
}
toggleNav();