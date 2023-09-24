document.addEventListener('DOMContentLoaded', function () {
    const burgerOpen = document.querySelector(".menu-open");
    const burgerClose = document.querySelector(".menu-close");
    const burger = document.querySelector(".burger");
    const modalWrapper = document.querySelector(".modal-wrapper");
    const menu = document.querySelector(".mobile-menu");
    const header = document.querySelector("header");
    const offer = document.querySelector(".offer");
    
    function insertAfter(newNode, existingNode) {
        console.log(existingNode.parentNode.children.length);
        if (existingNode.parentNode.children.length > 1) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        } else {
            existingNode.parentNode.append(newNode);
        }
    }

    burgerOpen.addEventListener("click", () => {
        burger.classList.add("active");
        modalWrapper.classList.add("active");
        setTimeout(() => {
            menu.classList.add("active");
        }, 500)
        document.body.classList.add("lock");

    })

    burgerClose.addEventListener("click", () => {
        burger.classList.remove("active");
        modalWrapper.classList.remove("active");
        setTimeout(() => {
            menu.classList.remove("active");
        }, 500)
        document.body.classList.remove("lock");
    })

    if (window.innerWidth <= 576) {
        const headerPhone = document.querySelector(".header__phone");
        const menuContacts = document.querySelector(".mobile-menu__contacts");

        menuContacts.append(headerPhone);
    }

    offer.style.paddingTop = header.clientHeight + "px";

    if (window.innerWidth <= 786) {
        document.querySelector(".mobile-menu__contacts").append(document.querySelector(".navigate"));
    }

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

    if (window.innerWidth <= 450) {;

        document.querySelector(".offer .row").append(document.querySelector(".offer__dominates-item"))
    }
});