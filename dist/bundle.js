/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherWidget": () => (/* binding */ WeatherWidget)
/* harmony export */ });
/* harmony import */ var _utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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


var WeatherWidget = /** @class */ (function () {
    function WeatherWidget() {
        this.createWeatherWidgetElement();
    }
    WeatherWidget.prototype.renderIn = function (targetElementSelector) {
        var targetElement = this.getTargetElement(targetElementSelector);
        targetElement === null || targetElement === void 0 ? void 0 : targetElement.append(this.weatherWidgetElement);
        console.log(this.weatherWidgetElement);
        return this;
    };
    WeatherWidget.prototype.ofCity = function (city) {
        this.city = __assign({}, city);
        (0,_utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataOfCity)(this.city).then(function (weatherDataOfCity) {
            console.log(weatherDataOfCity);
            return weatherDataOfCity;
        });
        return this;
    };
    WeatherWidget.prototype.getTargetElement = function (targetElementSelector) {
        return document.querySelector(targetElementSelector);
    };
    WeatherWidget.prototype.createWeatherWidgetElement = function () {
        this.weatherWidgetElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget"],
            textContent: "weather-widget text content",
        }).get();
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());
    };
    WeatherWidget.prototype.createWeatherWidgetHeader = function () {
        var weatherWidgetHeader = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__header"],
            textContent: "weather-widget__header text content",
        }).get();
        return weatherWidgetHeader;
    };
    WeatherWidget.prototype.createWeatherWidgetBody = function () {
        var weatherWidgetBody = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__body"],
            textContent: "weather-widget__body text content",
        }).get();
        return weatherWidgetBody;
    };
    WeatherWidget.prototype.createWeatherWidgetFooter = function () {
        var weatherWidgetFooter = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__footer"],
            textContent: "weather-widget__footer text content",
        }).get();
        return weatherWidgetFooter;
    };
    return WeatherWidget;
}());



/***/ }),
/* 2 */
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


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMElement": () => (/* binding */ DOMElement)
/* harmony export */ });
var DOMElement = /** @class */ (function () {
    function DOMElement(props) {
        this.createElement(props.tagName)
            .setClassNames(props.classNames)
            .setAttributes(props.attributes)
            .setTextContent(props.textContent)
            .setInnerHTML(props.innerHTML);
    }
    DOMElement.prototype.get = function () {
        return this.element;
    };
    DOMElement.prototype.appendChild = function (child) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(child);
        return this;
    };
    DOMElement.prototype.createElement = function (tagName) {
        var createdElement = document.createElement(tagName);
        this.element = createdElement;
        return this;
    };
    DOMElement.prototype.setClassNames = function (classNames) {
        if (classNames) {
            for (var _i = 0, classNames_1 = classNames; _i < classNames_1.length; _i++) {
                var className = classNames_1[_i];
                this.element.classList.add(className);
            }
        }
        return this;
    };
    DOMElement.prototype.setAttributes = function (attributes) {
        if (attributes) {
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var attribute = attributes_1[_i];
                this.element.setAttribute(attribute.name, attribute.value);
            }
        }
        return this;
    };
    DOMElement.prototype.setTextContent = function (textContent) {
        if (textContent) {
            this.element.textContent = textContent;
        }
        return this;
    };
    DOMElement.prototype.setInnerHTML = function (innerHTML) {
        if (innerHTML) {
            this.element.innerHTML = innerHTML;
        }
        return this;
    };
    return DOMElement;
}());



/***/ }),
/* 4 */
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
/* harmony import */ var _WeatherWidget_WeatherWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _WeatherWidget_utils_createCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var kharkiv = (0,_WeatherWidget_utils_createCity__WEBPACK_IMPORTED_MODULE_1__.createCity)({
    name: "Kharkiv",
    latitude: 49.98081,
    longitude: 36.25272,
    altitude: 152,
});
new _WeatherWidget_WeatherWidget__WEBPACK_IMPORTED_MODULE_0__.WeatherWidget().ofCity(kharkiv).renderIn("#weather");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjhEO0FBRUE7QUFFOUQsSUFBTSxPQUFPLEdBQVMsMkVBQVUsQ0FBQztJQUMvQixJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsSUFBSSx1RUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvV2VhdGhlcldpZGdldC50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldFdlYXRoZXJEYXRhT2ZDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvbW9kZWxzL0RPTUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGFPZkNpdHkgfSBmcm9tIFwiLi91dGlscy9nZXRXZWF0aGVyRGF0YU9mQ2l0eVwiO1xyXG5pbXBvcnQgeyBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMgfSBmcm9tIFwiLi91dGlscy9nZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXNcIjtcclxuXHJcbmltcG9ydCB7IERPTUVsZW1lbnQgfSBmcm9tIFwiLi9tb2RlbHMvRE9NRWxlbWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJXaWRnZXQge1xyXG4gIHByaXZhdGUgd2VhdGhlcldpZGdldEVsZW1lbnQhOiBOb2RlO1xyXG4gIHByaXZhdGUgY2l0eSE6IENpdHk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jcmVhdGVXZWF0aGVyV2lkZ2V0RWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlckluKHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogdGhpcyB7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGhpcy5nZXRUYXJnZXRFbGVtZW50KHRhcmdldEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgICB0YXJnZXRFbGVtZW50Py5hcHBlbmQodGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudCk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvZkNpdHkoY2l0eTogQ2l0eSk6IHRoaXMge1xyXG4gICAgdGhpcy5jaXR5ID0geyAuLi5jaXR5IH07XHJcblxyXG4gICAgZ2V0V2VhdGhlckRhdGFPZkNpdHkodGhpcy5jaXR5KS50aGVuKCh3ZWF0aGVyRGF0YU9mQ2l0eSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YU9mQ2l0eSk7XHJcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YU9mQ2l0eTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXRFbGVtZW50KHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlV2VhdGhlcldpZGdldEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLXdpZGdldFwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IFwid2VhdGhlci13aWRnZXQgdGV4dCBjb250ZW50XCIsXHJcbiAgICB9KS5nZXQoKTtcclxuXHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlV2VhdGhlcldpZGdldEhlYWRlcigpKTtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVXZWF0aGVyV2lkZ2V0Qm9keSgpKTtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVXZWF0aGVyV2lkZ2V0Rm9vdGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0SGVhZGVyKCk6IE5vZGUge1xyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEhlYWRlciA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2hlYWRlclwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IFwid2VhdGhlci13aWRnZXRfX2hlYWRlciB0ZXh0IGNvbnRlbnRcIixcclxuICAgIH0pLmdldCgpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyV2lkZ2V0SGVhZGVyIGFzIE5vZGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJXaWRnZXRCb2R5KCk6IE5vZGUge1xyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEJvZHkgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcIndlYXRoZXItd2lkZ2V0X19ib2R5XCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogXCJ3ZWF0aGVyLXdpZGdldF9fYm9keSB0ZXh0IGNvbnRlbnRcIixcclxuICAgIH0pLmdldCgpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyV2lkZ2V0Qm9keSBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0Rm9vdGVyKCk6IE5vZGUge1xyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEZvb3RlciA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2Zvb3RlclwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IFwid2VhdGhlci13aWRnZXRfX2Zvb3RlciB0ZXh0IGNvbnRlbnRcIixcclxuICAgIH0pLmdldCgpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyV2lkZ2V0Rm9vdGVyIGFzIE5vZGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGFPZkNpdHkoY2l0eTogQ2l0eSk6IFByb21pc2U8T2JqZWN0PiB7XHJcbiAgY29uc3QgYXBpVXJsOiBzdHJpbmcgPVxyXG4gICAgXCJodHRwczovL2FwaS5tZXQubm8vd2VhdGhlcmFwaS9sb2NhdGlvbmZvcmVjYXN0LzIuMC9jb21wYWN0P1wiO1xyXG5cclxuICByZXR1cm4gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHthcGlVcmx9bGF0PSR7Y2l0eS5sYXRpdHVkZX0mbG9uPSR7Y2l0eS5sb25naXR1ZGV9JmFsdGl0dWRlPSR7Y2l0eS5hbHRpdHVkZX1gXHJcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBWaXJ0dWFsRWxlbWVudCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1ZpcnR1YWxFbGVtZW50XCI7XHJcbmltcG9ydCB7IFZpcnR1YWxBdHRyaWJ1dGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9WaXJ0dWFsQXR0cmlidXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRE9NRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSBlbGVtZW50ITogRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFZpcnR1YWxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnTmFtZSlcclxuICAgICAgLnNldENsYXNzTmFtZXMocHJvcHMuY2xhc3NOYW1lcylcclxuICAgICAgLnNldEF0dHJpYnV0ZXMocHJvcHMuYXR0cmlidXRlcylcclxuICAgICAgLnNldFRleHRDb250ZW50KHByb3BzLnRleHRDb250ZW50KVxyXG4gICAgICAuc2V0SW5uZXJIVE1MKHByb3BzLmlubmVySFRNTCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudCBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGVuZENoaWxkKGNoaWxkOiBFbGVtZW50KTogdGhpcyB7XHJcbiAgICB0aGlzLmVsZW1lbnQ/LmFwcGVuZChjaGlsZCBhcyBOb2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgIGxldCBjcmVhdGVkRWxlbWVudDogRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVkRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lcyhjbGFzc05hbWVzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKGNsYXNzTmFtZXMpIHtcclxuICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlczogVmlydHVhbEF0dHJpYnV0ZVtdIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAoYXR0cmlidXRlcykge1xyXG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGV4dENvbnRlbnQodGV4dENvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKHRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbm5lckhUTUwoaW5uZXJIVE1MOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB0aGlzIHtcclxuICAgIGlmIChpbm5lckhUTUwpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXR5KG9wdGlvbnM6IENpdHkpOiBDaXR5IHtcclxuICByZXR1cm4geyAuLi5vcHRpb25zIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBXZWF0aGVyV2lkZ2V0IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC9XZWF0aGVyV2lkZ2V0XCI7XHJcbmltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDaXR5IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5XCI7XHJcblxyXG5jb25zdCBraGFya2l2OiBDaXR5ID0gY3JlYXRlQ2l0eSh7XHJcbiAgbmFtZTogXCJLaGFya2l2XCIsXHJcbiAgbGF0aXR1ZGU6IDQ5Ljk4MDgxLFxyXG4gIGxvbmdpdHVkZTogMzYuMjUyNzIsXHJcbiAgYWx0aXR1ZGU6IDE1MixcclxufSk7XHJcblxyXG5uZXcgV2VhdGhlcldpZGdldCgpLm9mQ2l0eShraGFya2l2KS5yZW5kZXJJbihcIiN3ZWF0aGVyXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=