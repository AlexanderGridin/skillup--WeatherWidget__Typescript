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
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 4 */
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
    DOMElement.prototype.get = function () {
        return this.element;
    };
    return DOMElement;
}());



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
/* harmony import */ var _WeatherWidget_utils_createCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOOEQ7QUFFQTtBQUU5RCxJQUFNLE9BQU8sR0FBUywyRUFBVSxDQUFDO0lBQy9CLElBQUksRUFBRSxTQUFTO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsUUFBUSxFQUFFLEdBQUc7Q0FDZCxDQUFDLENBQUM7QUFFSCxJQUFJLHVFQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC9XZWF0aGVyV2lkZ2V0LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvZ2V0V2VhdGhlckRhdGFPZkNpdHkudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvbW9kZWxzL0RPTUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YU9mQ2l0eSB9IGZyb20gXCIuL3V0aWxzL2dldFdlYXRoZXJEYXRhT2ZDaXR5XCI7XHJcbmltcG9ydCB7IGdldFdpbmREaXJlY3Rpb25BYmJyZXZpYXRpb25Gcm9tRGVncmVlcyB9IGZyb20gXCIuL3V0aWxzL2dldFdpbmREaXJlY3Rpb25BYmJyZXZpYXRpb25Gcm9tRGVncmVlc1wiO1xyXG5cclxuaW1wb3J0IHsgRE9NRWxlbWVudCB9IGZyb20gXCIuL21vZGVscy9ET01FbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlcldpZGdldCB7XHJcbiAgcHJpdmF0ZSB3ZWF0aGVyV2lkZ2V0RWxlbWVudCE6IE5vZGU7XHJcbiAgcHJpdmF0ZSBjaXR5ITogQ2l0eTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVySW4odGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuICAgIHRhcmdldEVsZW1lbnQ/LmFwcGVuZCh0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9mQ2l0eShjaXR5OiBDaXR5KTogdGhpcyB7XHJcbiAgICB0aGlzLmNpdHkgPSB7IC4uLmNpdHkgfTtcclxuXHJcbiAgICBnZXRXZWF0aGVyRGF0YU9mQ2l0eSh0aGlzLmNpdHkpLnRoZW4oKHdlYXRoZXJEYXRhT2ZDaXR5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhT2ZDaXR5KTtcclxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhT2ZDaXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbGVtZW50U2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0RWxlbWVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcIndlYXRoZXItd2lkZ2V0XCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogXCJ3ZWF0aGVyLXdpZGdldCB0ZXh0IGNvbnRlbnRcIixcclxuICAgIH0pLmdldCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhT2ZDaXR5KGNpdHk6IENpdHkpOiBQcm9taXNlPE9iamVjdD4ge1xyXG4gIGNvbnN0IGFwaVVybDogc3RyaW5nID1cclxuICAgIFwiaHR0cHM6Ly9hcGkubWV0Lm5vL3dlYXRoZXJhcGkvbG9jYXRpb25mb3JlY2FzdC8yLjAvY29tcGFjdD9cIjtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxyXG4gICAgYCR7YXBpVXJsfWxhdD0ke2NpdHkubGF0aXR1ZGV9Jmxvbj0ke2NpdHkubG9uZ2l0dWRlfSZhbHRpdHVkZT0ke2NpdHkuYWx0aXR1ZGV9YFxyXG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXR5KG9wdGlvbnM6IENpdHkpOiBDaXR5IHtcclxuICByZXR1cm4geyAuLi5vcHRpb25zIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlydHVhbEVsZW1lbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9WaXJ0dWFsRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBWaXJ0dWFsQXR0cmlidXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvVmlydHVhbEF0dHJpYnV0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERPTUVsZW1lbnQge1xyXG4gIHByaXZhdGUgZWxlbWVudCE6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBWaXJ0dWFsRWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KHByb3BzLnRhZ05hbWUpXHJcbiAgICAgIC5zZXRDbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZXMpXHJcbiAgICAgIC5zZXRBdHRyaWJ1dGVzKHByb3BzLmF0dHJpYnV0ZXMpXHJcbiAgICAgIC5zZXRUZXh0Q29udGVudChwcm9wcy50ZXh0Q29udGVudClcclxuICAgICAgLnNldElubmVySFRNTChwcm9wcy5pbm5lckhUTUwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgbGV0IGNyZWF0ZWRFbGVtZW50OiBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZWRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAoY2xhc3NOYW1lcykge1xyXG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBWaXJ0dWFsQXR0cmlidXRlW10gfCB1bmRlZmluZWQpOiB0aGlzIHtcclxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAodGV4dENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElubmVySFRNTChpbm5lckhUTUw6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKGlubmVySFRNTCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCgpOiBOb2RlIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQgYXMgTm9kZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBXZWF0aGVyV2lkZ2V0IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC9XZWF0aGVyV2lkZ2V0XCI7XHJcbmltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDaXR5IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5XCI7XHJcblxyXG5jb25zdCBraGFya2l2OiBDaXR5ID0gY3JlYXRlQ2l0eSh7XHJcbiAgbmFtZTogXCJLaGFya2l2XCIsXHJcbiAgbGF0aXR1ZGU6IDQ5Ljk4MDgxLFxyXG4gIGxvbmdpdHVkZTogMzYuMjUyNzIsXHJcbiAgYWx0aXR1ZGU6IDE1MixcclxufSk7XHJcblxyXG5uZXcgV2VhdGhlcldpZGdldCgpLm9mQ2l0eShraGFya2l2KS5yZW5kZXJJbihcIiN3ZWF0aGVyXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=