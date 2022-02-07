/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage.js */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_loadHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadHome.js */ \"./src/modules/loadHome.js\");\n/* harmony import */ var _modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadMenu.js */ \"./src/modules/loadMenu.js\");\n/* harmony import */ var _modules_loadContact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadContact.js */ \"./src/modules/loadContact.js\");\n\n\n\n\n\ninitialPageLoad()\n\nfunction addNavEvents() {\n    const homeBtn = document.getElementById(\"home-btn\")\n    const menuBtn = document.getElementById(\"menu-btn\")\n    const contactBtn = document.getElementById(\"contact-btn\")\n\n    homeBtn.addEventListener(\"click\", _modules_loadHome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    menuBtn.addEventListener(\"click\", _modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    contactBtn.addEventListener(\"click\", _modules_loadContact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n\n}\n\n\n\nfunction initialPageLoad() {\n    //nav bar & initial page\n    (0,_modules_loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    //front page - default tab content\n    ;(0,_modules_loadHome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    //click events for menu\n    addNavEvents()\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadContact.js":
/*!************************************!*\
  !*** ./src/modules/loadContact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction createContact() {\n    //about section\n    const contactContainer = document.createElement(\"div\")\n    contactContainer.classList.add(\"contact-container\")\n    const contactTitle = document.createElement(\"h2\")\n    contactTitle.textContent = \"Contact Us\"\n    contactContainer.appendChild(contactTitle)\n\n    const contactWords = document.createElement(\"p\")\n    contactWords.innerHTML = `<p><i>For questions or concerns please feel free to contact us with one of the methods below!</i></p>\n    <p><b>Email:</b> hello@joshschinesecuisine.com</p>\n    <p><b>Phone:</b> 1-800-ChineseFood</p>`\n\n    contactContainer.appendChild(contactWords)\n\n    return contactContainer\n\n}\n\nfunction loadContact() {\n    const tabContent = document.getElementById(\"tab-content\")\n    tabContent.classList.add(\"flex\")\n    \n    //prevents it from adding it to the page multiple times\n    tabContent.innerHTML = \"\"\n\n    const contactSection = createContact()\n    tabContent.appendChild(contactSection)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loadContact.js?");

/***/ }),

/***/ "./src/modules/loadHome.js":
/*!*********************************!*\
  !*** ./src/modules/loadHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createAbout() {\n    //about div container\n    const about = document.createElement(\"div\")\n    about.setAttribute(\"id\", \"about-container\")\n\n\n    // h2 & words container\n    const welcomeContainer = document.createElement(\"div\")\n    welcomeContainer.setAttribute(\"class\", \"welcome-container\")\n\n\n    //about words paragraph\n    const aboutWords = document.createElement(\"p\")\n    aboutWords.innerHTML = `<p>Do you love Chinese Food? Then you will love Josh's Chinese Cuisine! It's the best in San Diego, CA!</p>\n    <p>You will get authentic Hong Kong Style chinese food like all your favorite goodies such as Chow Fun, General Chicken, Lo Sa Bao, \n    Ham Yu Guy Lop Fan, Scallop Fried Rice, Fried Tofu, Flounder and much much more!</p>\n    <p>So stop on by and say hello! We love meeting new people and sharing our Chinese culture all around San Diego!</p>`\n\n\n    //about h2 title\n    const title = document.createElement(\"h2\")\n    title.textContent = \"Welcome to San Diego's #1 Chinese Restaurant\"\n    title.setAttribute(\"class\", \"welcome-title\")\n  \n\n    //about image\n    const homeImage = document.createElement(\"img\")\n    homeImage.setAttribute(\"src\", \"https://www.thespruceeats.com/thmb/noIa6Wr8DKHmRlm9OH6dOHsHEbQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg\")\n    homeImage.setAttribute(\"class\", \"home-image\")\n\n\n    //append home image to about container\n    about.appendChild(homeImage)\n    //append title to about container\n    about.appendChild(title)\n    //append words to about container\n    about.appendChild(aboutWords)\n    //append welcomecontainer to about\n    about.appendChild(welcomeContainer)\n\n    // append h2 title and words paragraph to welcomeContainer\n    welcomeContainer.append(title)\n    welcomeContainer.append(aboutWords)\n    \n    //return about\n    return about\n\n}\n\n\n\n\nfunction loadHome() {\n    const tabContent = document.getElementById(\"tab-content\")\n    tabContent.classList.add(\"flex\")\n    \n    //prevents it from adding it to the page multiple times\n    tabContent.innerHTML = \"\"\n\n    const aboutSection = createAbout()\n\n    tabContent.appendChild(aboutSection)\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loadHome.js?");

/***/ }),

/***/ "./src/modules/loadMenu.js":
/*!*********************************!*\
  !*** ./src/modules/loadMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createImageContainer(src, alt, text, about, price, className) {\n\n    //create container for image gallery\n    const container = document.createElement(\"div\")\n    container.classList.add(\"menu-container\")\n\n    //create images and set source and alt text\n    const img = document.createElement(\"img\")\n    img.setAttribute(\"src\", src)\n    img.setAttribute(\"alt\", alt)\n    img.setAttribute(\"class\", className)\n\n    //description for images\n    const descImg = document.createElement(\"div\")\n    descImg.classList.add(\"description\")\n\n    const foodName = document.createElement(\"div\")\n    foodName.innerHTML = text\n    foodName.classList.add(\"food-name\")\n\n    const aboutFood = document.createElement(\"div\")\n    aboutFood.innerHTML = about\n    aboutFood.classList.add(\"about-food\")\n\n    const cost = document.createElement(\"div\")\n    cost.innerHTML = price\n    cost.classList.add(\"cost\")\n\n    //append item details to description\n    descImg.appendChild(foodName)\n    descImg.appendChild(aboutFood)\n    descImg.appendChild(cost)\n\n    //append desc and img to container\n    container.appendChild(img)\n    container.appendChild(descImg)\n\n    return container\n\n}\n\nfunction loadMenu() {\n    const tabContent = document.getElementById(\"tab-content\")\n\n    tabContent.classList.add(\"flex\")\n    tabContent.textContent = \"\"\n\n    const menuItems = [\n\n        createImageContainer(\n            \"https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2014/10/Beef-Chow-Fun_main-2-500x375.jpg\",\n            \"Chow Fun Noodles\",\n            \"Chow Fun Noodles\",\n            \"Flat Stir Fried Noodles with beef or chicken.\",\n            \"- $8.00\",\n            \"chowfun\"\n        ),\n\n        createImageContainer(\n            \"https://www.dinneratthezoo.com/wp-content/uploads/2019/07/general-tsos-chicken-4.jpg\",\n            \"General Chicken\",\n            \"General Chicken\",\n            \"The best fried chicken dripped in sauce that you'll love forever.\",\n            \"- $9.00\",\n            \"general-chicken\"\n        )\n    ]\n\n    menuItems.forEach(food => {\n        tabContent.append(food)\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loadMenu.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadPage() {\n    const content = document.getElementById(\"content\")\n \n    //create header\n    const header = document.createElement(\"header\")\n    header.setAttribute(\"id\", \"header\")\n    //append header to content\n    content.appendChild(header)\n    //header title\n    header.textContent = `JOSH'S CHINESE CUISINE`\n\n    //create nav\n    const navBar = document.createElement(\"nav\")\n    navBar.setAttribute(\"id\", \"nav-bar\")\n    content.appendChild(navBar)\n\n        //create nav buttons\n        // home button\n        const homeBtn = document.createElement(\"button\")\n        homeBtn.setAttribute(\"id\", \"home-btn\")\n        homeBtn.innerHTML = \"Home\"\n        navBar.appendChild(homeBtn)\n\n        //menu button\n        const menuBtn = document.createElement(\"button\")\n        menuBtn.setAttribute(\"id\", \"menu-btn\")\n        menuBtn.innerHTML = \"Menu\"\n        navBar.appendChild(menuBtn)\n\n        //contact button\n        const contactBtn = document.createElement(\"button\")\n        contactBtn.setAttribute(\"id\", \"contact-btn\")\n        contactBtn.innerHTML = \"Contact\"\n        navBar.appendChild(contactBtn)\n\n        //create tab content\n        const tabContent = document.createElement(\"main\")\n        tabContent.setAttribute(\"id\", \"tab-content\")\n        content.appendChild(tabContent)\n\n\n    //create footer\n\n  \n    const footer = document.createElement(\"footer\")\n    footer.setAttribute(\"class\", \"footer\")\n    footer.innerHTML = `Josh's Chinese Food 2022`\n    content.appendChild(footer)\n    \n\n    \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loadPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;