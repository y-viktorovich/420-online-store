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

eval("////// Стилізація select.\r\nlet dropdownNav = document.querySelectorAll('.dropdown');\r\nlet choiceResult = 0; // Записуємо обране значення з форми select.\r\n\r\ndropdownNav.forEach( item => {\r\n    \r\n    let dropdownButton = item.querySelector('.dropdown__button');\r\n    let dropdownList = item.querySelector('.dropdown__list');\r\n    let dropdownItem = dropdownList.querySelectorAll('.dropdown__item');\r\n\r\n    function closeDropdown() {\r\n        dropdownButton.classList.remove('active');\r\n        dropdownList.classList.remove('show');\r\n    }\r\n\r\n    dropdownButton.addEventListener('click', (event) => {\r\n        dropdownButton.classList.toggle('active');\r\n        dropdownList.classList.toggle('show');\r\n    });\r\n\r\n    dropdownItem.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            choiceResult = event.target.dataset.value;\r\n            closeDropdown();\r\n        });\r\n    });\r\n\r\n    document.addEventListener('keydown', (event) => {\r\n        if (event.key === 'Tab' || event.key === 'Escape') {\r\n            closeDropdown();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n        if (event.target !== dropdownButton) {\r\n            choiceResult = event.target.dataset.value;\r\n            closeDropdown();\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

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