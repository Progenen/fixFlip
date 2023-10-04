function insertAfter(newNode, existingNode) {
    console.log(existingNode.parentNode.children.length);
    if (existingNode.parentNode.children.length > 1) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    } else {
        existingNode.parentNode.append(newNode);
    }
}

function mainAdative () {

    if (window.innerWidth >= 786) {
        document.querySelector("main").style.marginTop = "-" + document.querySelector("header").clientHeight + "px";
    }
    
    if (document.querySelector(".liquid") && document.querySelector(".offer")) {


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
    }
}

export default mainAdative;