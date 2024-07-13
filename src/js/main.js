const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const primaryPopup = document.getElementById("primaryPopup");
    const openPopupBtn = document.getElementById("openPopupBtn");
    const popupCloseBtn = document.getElementById("popupCloseBtn");
    const popupSubmitBtn = document.getElementById("popupSubmit");

    function openPopup() {
        primaryPopup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        primaryPopup.style.display = "none";
        document.body.style.overflow = "";
    }


    openPopupBtn.addEventListener("click", openPopup);
    popupCloseBtn.addEventListener("click", closePopup);
    popupSubmitBtn.addEventListener("click", closePopup);

    primaryPopup.addEventListener("click", function(event) {
        if (event.target === primaryPopup) {
            closePopup();
        }
    });


    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && primaryPopup.style.display === "flex") {
            closePopup();
        }
    });

    const servicesPopup = document.getElementById("servicesPopup");
    const serviceOpenPopupBtn = document.getElementById("serviceOpenPopupBtn");
    const servicesCloseBtn = document.getElementById("servicesCloseBtn");
    const servicesSubmit = document.getElementById("servicesSubmit");

    function servicesOpenPopup() {
        servicesPopup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function servicesClosePopup() {
        servicesPopup.style.display = "none";
        document.body.style.overflow = "";
    }


    serviceOpenPopupBtn.addEventListener("click", servicesOpenPopup);
    servicesCloseBtn.addEventListener("click", servicesClosePopup);
    servicesSubmit.addEventListener("click", servicesClosePopup);

    servicesPopup.addEventListener("click", function(event) {
        if (event.target === servicesPopup) {
            servicesClosePopup();
        }
    });


    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && servicesPopup.style.display === "flex") {
            servicesClosePopup();
        }
    });
});


const headerNav = document.getElementById('headerNav')
const headerBurger = document.getElementById('headerBurger')

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll');
})


