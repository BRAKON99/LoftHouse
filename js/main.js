const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-wrap');

navBtn.onclick = function() {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-wrap--mobile');
    document.body.classList.toggle('no-scrolle');
}

