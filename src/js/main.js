import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";


const menu = document.querySelector(".header__menu"),
    burger = document.querySelector(".header__burger"),
    close = document.querySelector(".header__menu-close");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu-active")
})

close.addEventListener("click", () => {
    menu.classList.remove("header__menu-active")
})

try {
    new Swiper(".popular__slider", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1920: {
                spaceBetween: 30
            }
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }

try {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            header.classList.toggle("active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
} catch (e) { }

try {
    let tabsContent = document.querySelectorAll(".photo img"),
        tabsParent = document.querySelector('.info__pagenation'),
        tabsItems = document.querySelectorAll('.info__pagenations');

    function hideTabs() {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('active', 'fade')

        });

        tabsItems.forEach(item => {
            item.classList.remove('info__pagenations-active')
        })
    }


    function showTabs(i = 0, withFade = true) {
        tabsContent[i].classList.add('active');
        tabsContent[i].classList.remove('hide');

        if (withFade) {
            tabsContent[i].classList.add('fade');
        }

        tabsItems[i].classList.add("info__pagenations-active");
    }

    hideTabs();
    showTabs(0, false);

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;

        if (target) {
            tabsItems.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i); // тут fade спрацює
                }
            });
        }
    });
} catch (e) { }

