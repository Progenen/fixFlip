import Modal from "./modal";

function header () {
    if (document.querySelector("header")) {

        const mobileMenu = new Modal(".mobile-menu", "mobile-menu-wrapper", ".menu-open");
        
        if (window.innerWidth <= 576) {
            const headerPhone = document.querySelector(".header__phone");
            const menuContacts = document.querySelector(".mobile-menu__contacts");
    
            menuContacts.prepend(headerPhone);
        }
        
        document.querySelector("section").style.paddingTop = document.querySelector("header").clientHeight + "px";
    }
}

export default header;