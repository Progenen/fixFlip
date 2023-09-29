
import noUiSlider from "nouislider";
import Swiper from "swiper";
import {Navigation} from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {
    const burgerOpen = document.querySelector(".menu-open");
    const burgerClose = document.querySelector(".menu-close");
    const burger = document.querySelector(".burger");
    const modalWrapper = document.querySelector(".modal-wrapper");
    const menu = document.querySelector(".mobile-menu");
    const header = document.querySelector("header");
    const range = document.querySelector("#calcFormRange");
    
    function insertAfter(newNode, existingNode) {
        console.log(existingNode.parentNode.children.length);
        if (existingNode.parentNode.children.length > 1) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        } else {
            existingNode.parentNode.append(newNode);
        }
    }

    function calculator(value) {
        const val = value[0].replace(/\./g, '');
        console.log(val);
        const calcRes2 = ((val / 100) * 30) + val;
        // const calcRes1 = val  - calcRes2;

        // document.querySelector("#calcFormRes1").textContent = calcRes1.toLocaleString("ru-RU");
        document.querySelector("#calcFormRes2").textContent = calcRes2.toLocaleString("ru-RU");
    }

    const calcRange = noUiSlider.create(range, {
        start: [0],
        connect: true,
        tooltips: true,
        range: {
            'min': 1000000,
            'max': 30000000
        },
        step: 250000,
        format: {
            to: (value) => {
                return value.toLocaleString('de-DE');
            },
            from: (value) => {
                return value.replace('.', '');
            }
        }
    });

    range.noUiSlider.on("update", (values) => {
        calculator(values)
    })

    // burgerOpen.addEventListener("click", () => {
    //     burger.classList.add("active");
    //     modalWrapper.classList.add("active");
    //     setTimeout(() => {
    //         menu.classList.add("active");
    //     }, 500)
    //     document.body.classList.add("lock");

    // })

    // burgerClose.addEventListener("click", () => {
    //     burger.classList.remove("active");
    //     modalWrapper.classList.remove("active");
    //     setTimeout(() => {
    //         menu.classList.remove("active");
    //     }, 500)
    //     document.body.classList.remove("lock");
    // })

    // if (window.innerWidth <= 576) {
    //     const headerPhone = document.querySelector(".header__phone");
    //     const menuContacts = document.querySelector(".mobile-menu__contacts");

    //     menuContacts.append(headerPhone);
    // }

    // document.querySelector(".offer").style.paddingTop = header.clientHeight + "px";

    if (window.innerWidth <= 876) {
        const cardsSection =  document.createElement("section");
        const offerSection = document.querySelector(".offer");
        const offerCards = document.querySelector(".offer__cards");
        cardsSection.classList.add("offer-cards");

        cardsSection.innerHTML = `
            <div class="container">
                <div class="row">
                </div>
            </div>
        `;

        cardsSection.querySelector(".row").append(offerCards);

        insertAfter(cardsSection, offerSection);
    }

    if (window.innerWidth <= 1020) {
        document.querySelector(".liquid .liquid__col--right").append(document.querySelector(".liquid__btn"));
    }

    if (window.innerWidth <= 620) {;
        document.querySelector(".offer .row").append(document.querySelector(".offer__dominates-item--1"))
    }

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