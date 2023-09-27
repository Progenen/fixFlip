/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const burgerOpen = document.querySelector(\".menu-open\");\r\n    const burgerClose = document.querySelector(\".menu-close\");\r\n    const burger = document.querySelector(\".burger\");\r\n    const modalWrapper = document.querySelector(\".modal-wrapper\");\r\n    const menu = document.querySelector(\".mobile-menu\");\r\n    const header = document.querySelector(\"header\");\r\n    const offer = document.querySelector(\".offer\");\r\n    \r\n    function insertAfter(newNode, existingNode) {\r\n        console.log(existingNode.parentNode.children.length);\r\n        if (existingNode.parentNode.children.length > 1) {\r\n            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\r\n        } else {\r\n            existingNode.parentNode.append(newNode);\r\n        }\r\n    }\r\n\r\n    burgerOpen.addEventListener(\"click\", () => {\r\n        burger.classList.add(\"active\");\r\n        modalWrapper.classList.add(\"active\");\r\n        setTimeout(() => {\r\n            menu.classList.add(\"active\");\r\n        }, 500)\r\n        document.body.classList.add(\"lock\");\r\n\r\n    })\r\n\r\n    burgerClose.addEventListener(\"click\", () => {\r\n        burger.classList.remove(\"active\");\r\n        modalWrapper.classList.remove(\"active\");\r\n        setTimeout(() => {\r\n            menu.classList.remove(\"active\");\r\n        }, 500)\r\n        document.body.classList.remove(\"lock\");\r\n    })\r\n\r\n    if (window.innerWidth <= 576) {\r\n        const headerPhone = document.querySelector(\".header__phone\");\r\n        const menuContacts = document.querySelector(\".mobile-menu__contacts\");\r\n\r\n        menuContacts.append(headerPhone);\r\n    }\r\n\r\n    offer.style.paddingTop = header.clientHeight + \"px\";\r\n\r\n    if (window.innerWidth <= 876) {\r\n        const cardsSection =  document.createElement(\"section\");\r\n        const offerSection = document.querySelector(\".offer\");\r\n        const offerCards = document.querySelector(\".offer__cards\");\r\n        cardsSection.classList.add(\"offer-cards\");\r\n\r\n        cardsSection.innerHTML = `\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        cardsSection.querySelector(\".row\").append(offerCards);\r\n\r\n        insertAfter(cardsSection, offerSection);\r\n    }\r\n\r\n    if (window.innerWidth <= 1020) {\r\n        document.querySelector(\".liquid .liquid__col--right\").append(document.querySelector(\".liquid__btn\"));\r\n    }\r\n\r\n    if (window.innerWidth <= 620) {;\r\n        document.querySelector(\".offer .row\").append(document.querySelector(\".offer__dominates-item--1\"))\r\n    }\r\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;