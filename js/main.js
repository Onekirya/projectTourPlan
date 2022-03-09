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
                    required: "Please specify your name",
                    minlength: "Name must not be shorter than 2 letters"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "Please specify your phone number",
                    minlength: "Number must be in the format +7 (999) 999-9999"
                },
            },
        });
        $(".subscribe").validate({
            messages: {
                emailnewsletter: {
                    required: "We need your email address to contact you",
                    email: "Email must be in the format of name@domain.com"
                },
            },
        });
        $(".form").ready(function() {
            $("#phone").mask("+7 (999) 999-9999");
        });
        $(".form").ready(function() {
            $("#modal__input-phone").mask("+7 (999) 999-9999");
        });
        $(".form").ready(function() {
            $("#footer__phone").mask("+7 (999) 999-9999");
        });
    });
    AOS.init();
});