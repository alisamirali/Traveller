let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
    search.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let theme = document.querySelector('#theme-btn');
theme.onclick = () => {
    theme.classList.toggle('fa-sun');

    if (theme.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});