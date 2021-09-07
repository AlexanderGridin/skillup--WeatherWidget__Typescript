/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Weather = /** @class */ (function () {
    function Weather() {
    }
    Weather.prototype.renderIn = function (targetElementSelector) {
        var targetElement = this.getTargetElement(targetElementSelector);
        console.log(targetElement);
        return this;
    };
    Weather.prototype.of = function (city) {
        this.city = __assign({}, city);
        console.log(this.city);
        return this;
    };
    Weather.prototype.getTargetElement = function (targetElementSelector) {
        return document.querySelector(targetElementSelector);
    };
    return Weather;
}());



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCity": () => (/* binding */ createCity)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCity(options) {
    return __assign({}, options);
}


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weather_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Weather_utils_createCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var kharkiv = (0,_Weather_utils_createCity__WEBPACK_IMPORTED_MODULE_1__.createCity)({
    name: "Kharkiv",
    latitude: 49.98081,
    longitude: 36.25272,
    altitude: 152,
});
new _Weather_Weather__WEBPACK_IMPORTED_MODULE_0__.Weather().of(kharkiv).renderIn("#weather");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUtFO0lBQWUsQ0FBQztJQUVULDBCQUFRLEdBQWYsVUFBZ0IscUJBQTZCO1FBQzNDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sb0JBQUUsR0FBVCxVQUFVLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksZ0JBQVEsSUFBSSxDQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sa0NBQWdCLEdBQXhCLFVBQXlCLHFCQUE2QjtRQUNwRCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJNLFNBQVMsVUFBVSxDQUFDLE9BQWE7SUFDdEMsb0JBQVksT0FBTyxFQUFHO0FBQ3hCLENBQUM7Ozs7OztVQ0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjRDO0FBRVk7QUFFeEQsSUFBTSxPQUFPLEdBQVMscUVBQVUsQ0FBQztJQUMvQixJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsSUFBSSxxREFBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXIvV2VhdGhlci50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyL3V0aWxzL2NyZWF0ZUNpdHkudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XHJcbiAgcHJpdmF0ZSB0YXJnZXRFbGVtZW50OiBFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGNhbGVuZGFyRWxlbWVudDogRWxlbWVudDtcclxuICBwcml2YXRlIGNpdHk6IENpdHk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHJlbmRlckluKHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogdGhpcyB7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGhpcy5nZXRUYXJnZXRFbGVtZW50KHRhcmdldEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvZihjaXR5OiBDaXR5KTogdGhpcyB7XHJcbiAgICB0aGlzLmNpdHkgPSB7IC4uLmNpdHkgfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0RWxlbWVudCh0YXJnZXRFbGVtZW50U2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2l0eShvcHRpb25zOiBDaXR5KTogQ2l0eSB7XHJcbiAgcmV0dXJuIHsgLi4ub3B0aW9ucyB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuL1dlYXRoZXIvV2VhdGhlclwiO1xyXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vV2VhdGhlci9pbnRlcmZhY2VzL0NpdHlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2l0eSB9IGZyb20gXCIuL1dlYXRoZXIvdXRpbHMvY3JlYXRlQ2l0eVwiO1xyXG5cclxuY29uc3Qga2hhcmtpdjogQ2l0eSA9IGNyZWF0ZUNpdHkoe1xyXG4gIG5hbWU6IFwiS2hhcmtpdlwiLFxyXG4gIGxhdGl0dWRlOiA0OS45ODA4MSxcclxuICBsb25naXR1ZGU6IDM2LjI1MjcyLFxyXG4gIGFsdGl0dWRlOiAxNTIsXHJcbn0pO1xyXG5cclxubmV3IFdlYXRoZXIoKS5vZihraGFya2l2KS5yZW5kZXJJbihcIiN3ZWF0aGVyXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=