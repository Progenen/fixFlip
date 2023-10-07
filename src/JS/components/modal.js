export default class Modal {
    constructor(modal, classWrapper, btn) {
        this.modal = document.querySelector(modal);
        this.wrapper = document.createElement("div");
        this.openBtn = document.querySelector(btn);
        this.classWrapper = classWrapper;

        this.wrapper.classList.add("modal-wrapper");
        this.wrapper.classList.add(classWrapper);
        this.wrapper.innerHTML = `
            <button class="burger-close menu-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    <g filter="url(#filter0_bii_242_66)">
                    <rect width="42.4587" height="42.4587" rx="21.2294" fill="white" fill-opacity="0.01"/>
                    <rect x="0.447202" y="0.447202" width="41.5643" height="41.5643" rx="20.7822" stroke="url(#paint0_linear_242_66)" stroke-opacity="0.4" stroke-width="0.894405"/>
                    </g>
                    <path d="M15 16L27 28M15 28L27 16" stroke="#BAE9F1" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <filter id="filter0_bii_242_66" x="-36.7431" y="-36.7431" width="115.945" height="115.945" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18.3716"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_242_66"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_242_66" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="0.816514"/>
                        <feGaussianBlur stdDeviation="4.08257"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_242_66"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="3.26606"/>
                        <feGaussianBlur stdDeviation="6.12385"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0801563 0 0 0 0 0.334748 0 0 0 0 0.3375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect2_innerShadow_242_66" result="effect3_innerShadow_242_66"/>
                    </filter>
                    <linearGradient id="paint0_linear_242_66" x1="-3.3818e-07" y1="-34.8379" x2="21.2294" y2="56.6116" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </button>
        `;
        this.closeBtn = this.wrapper.querySelector(".menu-close");
        document.body.append(this.wrapper);
        this.wrapper.append(this.modal);

        this.openBtn.addEventListener("click", (e) => this.openModal(e));
        this.closeBtn.addEventListener("click", (e) => this.closeModal(e)); 
        this.wrapper.addEventListener("click", (e) => { 
            if (e.target.classList.contains("modal-wrapper")) {
                this.closeModal(e);
            }
        });
    }

    openModal = (event) => {
        event.preventDefault();
        this.openBtn.classList.add("active");
        this.modal.classList.add("active");
        this.wrapper.classList.add(this.classWrapper);
        this.wrapper.classList.add("active");
    }

    closeModal = (event) => {
        event.preventDefault();
        this.openBtn.classList.remove("active");
        this.modal.classList.remove("active");
        setTimeout(500, () => {
            this.wrapper.classList.remove(this.classWrapper);
        })
        this.wrapper.classList.remove("active");
    }
}