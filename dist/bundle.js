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
/* harmony import */ var _utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
    Weather.prototype.ofCity = function (city) {
        this.city = __assign({}, city);
        console.log(this.city);
        (0,_utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataOfCity)(this.city).then(function (weatherDataOfCity) {
            return console.log(weatherDataOfCity);
        });
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


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherDataOfCity": () => (/* binding */ getWeatherDataOfCity)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getWeatherDataOfCity(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact?";
                    return [4 /*yield*/, fetch(apiUrl + "lat=" + city.latitude + "&lon=" + city.longitude + "&altitude=" + city.altitude).then(function (response) { return response.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
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
new _Weather_Weather__WEBPACK_IMPORTED_MODULE_0__.Weather().ofCity(kharkiv).renderIn("#weather");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9FO0FBSXBFO0lBS0U7SUFBZSxDQUFDO0lBRVQsMEJBQVEsR0FBZixVQUFnQixxQkFBNkI7UUFDM0MsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx3QkFBTSxHQUFiLFVBQWMsSUFBVTtRQUN0QixJQUFJLENBQUMsSUFBSSxnQkFBUSxJQUFJLENBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixpRkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsaUJBQWlCO1lBQ3JELGNBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFBOUIsQ0FBOEIsQ0FDL0IsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGtDQUFnQixHQUF4QixVQUF5QixxQkFBNkI7UUFDcEQsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCTSxTQUFTLFVBQVUsQ0FBQyxPQUFhO0lBQ3RDLG9CQUFZLE9BQU8sRUFBRztBQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZNLFNBQWUsb0JBQW9CLENBQUMsSUFBVTs7Ozs7O29CQUM3QyxNQUFNLEdBQ1YsNkRBQTZELENBQUM7b0JBRXpELHFCQUFNLEtBQUssQ0FDYixNQUFNLFlBQU8sSUFBSSxDQUFDLFFBQVEsYUFBUSxJQUFJLENBQUMsU0FBUyxrQkFBYSxJQUFJLENBQUMsUUFBVSxDQUNoRixDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3dCQUZyQyxzQkFBTyxTQUU4QixFQUFDOzs7O0NBQ3ZDOzs7Ozs7VUNURDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ040QztBQUVZO0FBRXhELElBQU0sT0FBTyxHQUFTLHFFQUFVLENBQUM7SUFDL0IsSUFBSSxFQUFFLFNBQVM7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsR0FBRztDQUNkLENBQUMsQ0FBQztBQUVILElBQUkscURBQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyL1dlYXRoZXIudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlci91dGlscy9jcmVhdGVDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXIvdXRpbHMvZ2V0V2VhdGhlckRhdGFPZkNpdHkudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YU9mQ2l0eSB9IGZyb20gXCIuL3V0aWxzL2dldFdlYXRoZXJEYXRhT2ZDaXR5XCI7XHJcblxyXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XHJcbiAgcHJpdmF0ZSB0YXJnZXRFbGVtZW50OiBFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIHdlYXRoZXJFbGVtZW50OiBFbGVtZW50O1xyXG4gIHByaXZhdGUgY2l0eTogQ2l0eTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgcmVuZGVySW4odGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9mQ2l0eShjaXR5OiBDaXR5KTogdGhpcyB7XHJcbiAgICB0aGlzLmNpdHkgPSB7IC4uLmNpdHkgfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eSk7XHJcblxyXG4gICAgZ2V0V2VhdGhlckRhdGFPZkNpdHkodGhpcy5jaXR5KS50aGVuKCh3ZWF0aGVyRGF0YU9mQ2l0eSkgPT5cclxuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGFPZkNpdHkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXRFbGVtZW50KHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXR5KG9wdGlvbnM6IENpdHkpOiBDaXR5IHtcclxuICByZXR1cm4geyAuLi5vcHRpb25zIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YU9mQ2l0eShjaXR5OiBDaXR5KTogUHJvbWlzZTxPYmplY3Q+IHtcclxuICBjb25zdCBhcGlVcmw6IHN0cmluZyA9XHJcbiAgICBcImh0dHBzOi8vYXBpLm1ldC5uby93ZWF0aGVyYXBpL2xvY2F0aW9uZm9yZWNhc3QvMi4wL2NvbXBhY3Q/XCI7XHJcblxyXG4gIHJldHVybiBhd2FpdCBmZXRjaChcclxuICAgIGAke2FwaVVybH1sYXQ9JHtjaXR5LmxhdGl0dWRlfSZsb249JHtjaXR5LmxvbmdpdHVkZX0mYWx0aXR1ZGU9JHtjaXR5LmFsdGl0dWRlfWBcclxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuL1dlYXRoZXIvV2VhdGhlclwiO1xyXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vV2VhdGhlci9pbnRlcmZhY2VzL0NpdHlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2l0eSB9IGZyb20gXCIuL1dlYXRoZXIvdXRpbHMvY3JlYXRlQ2l0eVwiO1xyXG5cclxuY29uc3Qga2hhcmtpdjogQ2l0eSA9IGNyZWF0ZUNpdHkoe1xyXG4gIG5hbWU6IFwiS2hhcmtpdlwiLFxyXG4gIGxhdGl0dWRlOiA0OS45ODA4MSxcclxuICBsb25naXR1ZGU6IDM2LjI1MjcyLFxyXG4gIGFsdGl0dWRlOiAxNTIsXHJcbn0pO1xyXG5cclxubmV3IFdlYXRoZXIoKS5vZkNpdHkoa2hhcmtpdikucmVuZGVySW4oXCIjd2VhdGhlclwiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9