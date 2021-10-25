// SLICK SWIPER HOME
$('.slick-items ').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true
        // fade: true
});
// carousel about
var swiper = new Swiper(".about_swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 4,
        },
    }

});
// Carousel gallery
var swiper = new Swiper(".list_box", {
    slidesPerView: 1,
    autoplay: false,
    spaceBetween: 100,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

// Active menu
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-item .nav-link');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}
// SCROOL HIDE MENU TOP
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header_top").style.display = "none";


    } else {
        document.getElementById("header_top").style.display = "block";

    }
}
// Playvideo
$('#videolink').magnificPopup({
        type: 'inline',
        midClick: true,
        autoplay: false,
    })
    // document.getElementsByClassName("mfp-close").addEventListener("click", function() {
    //     document.getElementById("#videostory").style.display = "none";
    //     console.log('hello')
    // });