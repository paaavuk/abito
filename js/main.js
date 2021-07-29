const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});


const mb = document.querySelector('.menu-button');
const cb = document.querySelector('.menu-close');

function toggleMenu() {
    document.querySelector('.navbar-panel').classList.toggle('navbar-panel--active');
}

mb.addEventListener('click', toggleMenu);
cb.addEventListener('click', toggleMenu);