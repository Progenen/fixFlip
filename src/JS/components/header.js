function header () {
    if (document.querySelector("header")) {
        const burgerOpen = document.querySelector(".menu-open");
        const burgerClose = document.querySelector(".menu-close");
        const burger = document.querySelector(".burger");
        const modalWrapper = document.querySelector(".modal-wrapper");
        const menu = document.querySelector(".mobile-menu");
    
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
    
            menuContacts.prepend(headerPhone);
        }
        
        document.querySelector("section").style.paddingTop = document.querySelector("header").clientHeight + "px";
    }
}

export default header;