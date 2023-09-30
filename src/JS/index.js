import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import header from "./components/header";
import mainAdative from "./components/mainAdapitve";
import calculator from "./components/calculator";

document.addEventListener('DOMContentLoaded', function () {

    header();
    mainAdative();
    calculator();

    if (document.querySelector(".footer__slider")) {
        const footerSlider = new Swiper('.footer__slider', {
            modules: [Navigation],
            loop: true,
            navigation: {
                nextEl: ".footer__slider-arrow--right",
                prevEl: ".footer__slider-arrow--left",
            }
        })
    }
});