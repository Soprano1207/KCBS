window.onload = () => {
    let burger_click = false;
    document.getElementsByClassName("header-burger")[0].onclick = function() {
        let array_header_elements = [document.getElementsByClassName("header-burger")[0], document.getElementsByClassName("header-menu")[0]];
        array_header_elements.forEach((element) => {
            element.classList.toggle(element.classList.item(0) + "_active");
        })
        burger_click = (!burger_click) ? true : false;
        document.getElementsByTagName("body")[0].classList.toggle("lock");
        if (burger_click) {
            $(".hidden-dropdown").removeClass("hidden-dropdown").addClass("hidden-dropdown-mobile");
            $(".hidden-dropdown_menu").removeClass("hidden-dropdown_menu").addClass("hidden-dropdown_menu-mobile");

            classForHeaderMenu(2);
        } else {
            if ($(".hidden-dropdown_menu-mobile__active")) {
                $(".hidden-dropdown_menu-mobile__active").removeClass("hidden-dropdown_menu-mobile__active");

            }
        }
        console.log(burger_click);

    }


    if (document.body.clientWidth <= 767) {
        classForHeaderMenu(2);
    } else {
        classForHeaderMenu(1);
    }


    function headerMenu_check_span(element) {
        switch (element.tagName) {
            case "SPAN":
                return element.parentNode.nextElementSibling;
                break;

            case "A":
                return element.nextElementSibling;
                break;

            default:
                break;
        }
    }


    var saveElement = null;
    var saveElement_mobile = null;

    function classForHeaderMenu(device) {
        let next_element;
        saveElement = null;
        saveElement_mobile = null;
        switch (device) {
            case 1:
                [].forEach.call($(".hidden-dropdown"), (element) => {
                    if (('ontouchstart' in window) ||
                        window.DocumentTouch &&
                        document instanceof DocumentTouch) {

                        console.log('touch device');
                        element.onclick = (element) => {
                            next_element = headerMenu_check_span(element.target);
                            next_element.classList.toggle("hidden-dropdown_menu__active");
                            console.log("клик на пк версии");

                            if (saveElement && saveElement != next_element) {
                                saveElement.classList.remove("hidden-dropdown_menu__active");
                            }

                            saveElement = next_element;
                        }
                    } else {
                        function over(element) {
                            console.log(element.target);
                            if (element.target.classList.item(0) === "hidden-dropdown_menu" || element.target.tagName === "A" || element.target.tagName === "SPAN") {

                            } else {
                                $(".hidden-dropdown_menu").css({
                                    "display": "none"
                                });
                                document.removeEventListener("mouseover", over);
                            }
                        }

                        element.onmouseenter = (element) => {
                            element.target.nextElementSibling.style.display = "block";

                        }
                        element.onmouseout = (element) => {
                            document.addEventListener("mouseover", over);
                        }

                    }


                    $(".our-libraries_contents").css({
                        "flex-direction": "row"
                    });
                    $(".our-libraries_contents").html("<div class='our-libraries_contents'><div class='our-libraries_content'><ul><li><a>Центральная библиотека</a></li><li><a>Центральная детская библиотека</a></li><li><a>Городская библиотека № 1</a></li><li><a>Павшинская городская библиотека</a></li><li><a>Городская библиотека № 6</a></li><li><a>Опалиховская городская библиотека</a></li></ul></div><div class='our-libraries_content'><ul><li><a>Детская библиотека № 22</a></li><li><a>Нахабинская городская библиотека</a></li><li><a>Архангельская сельская библиотека</a></li><li><a>Петрово-Дальневская сельская библиотека</a></li><li><a>Николо-Урюпинская сельская библиотека</a></li><li><a>Ильинско-Усовская сельская библиотека</a></li></ul></div><div class='our-libraries_content'><ul><li><a>Грибановская сельская библиотека</a></li><li><a>Степановская сельская библиотека</a></li><li><a>Путилковская сельская библиотека</a></li><li><a>Коростовская сельская библиотека</a></li><li><a>Марьинская сельская библиотека</a></li></ul></div></div>");

                });
                break;

            case 2:
                [].forEach.call($(".hidden-dropdown-mobile"), (element) => {
                    element.onclick = (element) => {
                        next_element = headerMenu_check_span(element.target);
                        next_element.classList.toggle("hidden-dropdown_menu-mobile__active");
                        console.log("клик на мобильной версии");

                        if (saveElement_mobile && saveElement_mobile != element.target) {
                            saveElement_mobile.nextElementSibling.classList.remove("hidden-dropdown_menu-mobile__active");
                        }


                        if (saveElement && saveElement != next_element) {
                            saveElement.classList.remove("hidden-dropdown_menu__active");
                        }

                        saveElement = next_element;
                        saveElement_mobile = element.target;

                        console.log(saveElement_mobile);
                    }

                    $(".our-libraries_contents").css({
                        "flex-direction": "column"
                    });
                    $(".our-libraries_contents").html("<div class='our-libraries_dropdown-title'>Раскрыть список</div><ul class='our-libraries_dropdown-content'><li class='our-libraries_dropdown-item'><a>Центральная библиотека</a></li><li class='our-libraries_dropdown-item'><a>Центральная детская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Городская библиотека № 1</a></li><li class='our-libraries_dropdown-item'><a>Павшинская городская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Городская библиотека № 6</a></li><li class='our-libraries_dropdown-item'><a>Опалиховская городская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Детская библиотека № 22</a></li><li class='our-libraries_dropdown-item'><a>Нахабинская городская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Архангельская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Петрово-Дальневская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Николо-Урюпинская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Ильинско-Усовская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Грибановская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Степановская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Путилковская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Коростовская сельская библиотека</a></li><li class='our-libraries_dropdown-item'><a>Марьинская сельская библиотека</a></li></ul>");

                    $(".our-libraries_dropdown-title").click((element) => {
                        element.target.classList.toggle("our-libraries_dropdown-title__active");
                        $(".our-libraries_dropdown-content").toggleClass("our-libraries_dropdown-content__active");
                    });
                });

                break;

            default:
                break;
        }

    }


    // if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    //  	console.log('touch device');
    // } else {
    // 	console.log('not touch device');
    // }

    let flag_menu_pc = false;
    let flag_menu_mobile = false;

    //Мобильная версия меню
    window.onresize = () => {
        if (document.body.clientWidth > 767 && !flag_menu_pc) {
            if ($(".hidden-dropdown_menu-mobile__active")) {
                $(".hidden-dropdown_menu-mobile__active").removeClass("hidden-dropdown_menu-mobile__active");
            }
            $(".hidden-dropdown-mobile").removeClass("hidden-dropdown-mobile").addClass("hidden-dropdown");
            $(".hidden-dropdown_menu-mobile").removeClass("hidden-dropdown_menu-mobile").addClass("hidden-dropdown_menu");
            flag_menu_pc = true;
            flag_menu_mobile = false;

            classForHeaderMenu(1);
        }

        if (document.body.clientWidth <= 767 && !flag_menu_mobile) {
            if ($(".hidden-dropdown_menu__active")) {
                $(".hidden-dropdown_menu__active").removeClass("hidden-dropdown_menu__active");
            }
            $(".hidden-dropdown").removeClass("hidden-dropdown").addClass("hidden-dropdown-mobile");
            $(".hidden-dropdown_menu").removeClass("hidden-dropdown_menu").addClass("hidden-dropdown_menu-mobile");
            flag_menu_mobile = true;
            flag_menu_pc = false;
            classForHeaderMenu(2);
        }
    }

    //Карусель библиотек
    $(".carousel_bibls .owl-carousel").owlCarousel({
        loop: true, //Зацикливаем слайдер
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 8000, //Время смены слайда
        autoplayHoverPause: true,
        items: 1,
        nav: false,
        dots: false
    });

    //Карусель с книгами
    $(".new-books .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        items: 2,
        nav: true,
        dots: false,

        responsive: {
            600: {
                items: 3
            },

        }
    });

    $(".owl-prev").after("<div class='allNewBooks'>Все новинки</div>");


    //Карусель с баннерами
    $(".banners .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        items: 2,
        nav: false,
        dots: false,

        responsive: {
            600: {
                items: 3,
                //    autoplayTimeout: 3000,
                // autoplaySpeed: 3000,
            }
        }
    });


};