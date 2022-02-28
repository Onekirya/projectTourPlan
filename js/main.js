$(document).ready(function() {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        effect: "fade",
    });
    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
    });

    var menuButton = $(".menu-button");
    menuButton.on("click", function() {
        $(".navbar-bottom").toggleClass('navbar-bottom--visible')
    });

    var modalButton = $('[data-toggle=modal]')
    var closeModalButton = $('.modal__close')
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal)

    function openModal() {
        var targetModal = $(this).attr("data-href");
        $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
        $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    }

    function closeModal() {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
    // Обработка форм
    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Укажите Ваше имя",
                    minlength: "Имя не должно быть короче 2 букв"
                },
                email: {
                    required: "Нам нужен Ваш контактный адрес",
                    email: "Должен быть формата name@domain.com"
                },
                phone: {
                    required: "Телефон обязателен"
                },
            },
        });
        $(".form").ready(function() {
            $(phone).mask("+7 (999) 999-9999")
        })
    });
    AOS.init();
})