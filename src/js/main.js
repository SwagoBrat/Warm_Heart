import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

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
