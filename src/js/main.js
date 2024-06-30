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
    const primaryPopup = document.getElementById("primaryPopup"); // Получаем модальное окно
    const openPopupBtn = document.getElementById("openPopupBtn"); // Кнопка для открытия popup
    const popupCloseBtn = document.getElementById("popupCloseBtn"); // Кнопка для закрытия popup
    const popupSubmitBtn = document.getElementById("popupSubmit"); // Кнопка "Contact" внутри popup

    // Функция для открытия popup
    function openPopup() {
        primaryPopup.style.display = "flex"; // Отображаем popup
        document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
    }

    // Функция для закрытия popup
    function closePopup() {
        primaryPopup.style.display = "none"; // Скрываем popup
        document.body.style.overflow = ""; // Разрешаем прокрутку фона
    }

    // Обработчики событий для открытия и закрытия popup
    openPopupBtn.addEventListener("click", openPopup);
    popupCloseBtn.addEventListener("click", closePopup);
    popupSubmitBtn.addEventListener("click", closePopup); // Закрываем при отправке формы

    // Закрытие popup при клике за его пределами (на затемненный фон)
    primaryPopup.addEventListener("click", function(event) {
        if (event.target === primaryPopup) {
            closePopup();
        }
    });

    // Закрытие popup при нажатии клавиши Esc
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && primaryPopup.style.display === "flex") {
            closePopup();
        }
    });
});
