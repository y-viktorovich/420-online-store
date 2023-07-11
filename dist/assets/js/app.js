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

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//  Блок галереї\r\n\r\nlet mainPhoto = document.querySelectorAll('.product__gallery-header__photo'),\r\n    tabPhoto = document.querySelectorAll('.product__gallery-footer__photo');\r\n\r\nfunction hideTab() {\r\n    mainPhoto.forEach(item => {\r\n        item.classList.remove('fade');\r\n        item.classList.remove('show');\r\n        item.classList.add('hide');\r\n    });\r\n}\r\n\r\nfunction showTab(i) {\r\n    mainPhoto[i].classList.remove('hide');\r\n    mainPhoto[i].classList.add('show');\r\n    mainPhoto[i].classList.add('fade');\r\n}\r\n\r\ntabPhoto.forEach((item, i) => {\r\n    item.addEventListener('click', event => {\r\n        event.preventDefault();\r\n        hideTab();\r\n        showTab(i);\r\n    });\r\n});\r\n\r\n\r\n\r\n// Стилізація select.\r\n\r\nlet dropdownNav = document.querySelectorAll('.dropdown'),\r\n    choiceResult = 0, // Записуємо обране значення з форми select.\r\n    dropdownButton = document.querySelectorAll('.dropdown__button'),\r\n    dropdownList = document.querySelectorAll('.dropdown__list'),\r\n    dropdownItem = document.querySelectorAll('.dropdown__item');\r\n\r\n\r\nfunction hideDropDown(i) {\r\n    dropdownButton[i].classList.remove('active');\r\n    dropdownList[i].classList.remove('show');\r\n}\r\n\r\nfunction toggleDropDown(i) {\r\n    dropdownButton[i].classList.toggle('active');\r\n    dropdownList[i].classList.toggle('show');\r\n}\r\n\r\ndropdownList.forEach((item, i) => {\r\n    item.addEventListener('click', event => {\r\n        choiceResult = event.target.dataset.value;\r\n        dropdownButton[i].textContent = choiceResult;\r\n        hideDropDown(i);\r\n    });\r\n});\r\n\r\ndropdownButton.forEach((item, i) => {\r\n    item.addEventListener('click', event => {\r\n        toggleDropDown(i);\r\n    });\r\n});\r\n\r\ndocument.addEventListener('click', (event) => {\r\n    dropdownButton.forEach((item, i) => {\r\n        if (event.target !== item) {\r\n            hideDropDown(i);\r\n        }\r\n    });\r\n});\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Tab' || event.key === 'Escape') {\r\n        dropdownNav.forEach((item, i) => {\r\n            hideDropDown(i);\r\n        });\r\n    }\r\n});\r\n\r\n\r\n// Закриття карти з товаром\r\n\r\nlet cart = document.getElementsByClassName('cart__item'),\r\n    test = document.querySelectorAll('[data-cart]'),\r\n    closeBtn = document.querySelectorAll('[data-close]'),\r\n    massage = document.querySelector('.massage'),\r\n    request = document.querySelector('.request');\r\n\r\n    \r\ncloseBtn.forEach((item, i) => {\r\n    item.addEventListener('click', event => {\r\n        test[i].remove();\r\n        console.log(cart);\r\n\r\n        if (0 == cart.length) {\r\n            massage.style.display = 'block';\r\n            request.style.display = 'none';\r\n        }\r\n    });\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;