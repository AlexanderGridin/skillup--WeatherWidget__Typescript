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
/* harmony import */ var _utils_getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
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
        console.log((0,_utils_getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_1__.getHoursFromDateTimeString)("2021-09-09T09:00:00Z"));
    }
    WeatherWidget.prototype.renderIn = function (targetElementSelector) {
        var _this = this;
        this.targetElement = this.getTargetElement(targetElementSelector);
        (0,_utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataOfCity)(this.city).then(function (weatherDataOfCity) {
            var timeseries = weatherDataOfCity.properties.timeseries; //TODO: fix data type
            _this.weatherData = timeseries;
            _this.currentWeatherData = timeseries[0];
            console.log(_this.weatherData);
            console.log(_this.currentWeatherData);
            _this.createWeatherWidgetElement();
            _this.render();
            return weatherDataOfCity;
        });
        return this;
    };
    WeatherWidget.prototype.ofCity = function (city) {
        this.city = __assign({}, city);
        console.log(this.city);
        return this;
    };
    WeatherWidget.prototype.render = function () {
        var _a;
        (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.append(this.weatherWidgetElement);
    };
    WeatherWidget.prototype.getTargetElement = function (targetElementSelector) {
        return document.querySelector(targetElementSelector);
    };
    WeatherWidget.prototype.createWeatherWidgetElement = function () {
        this.weatherWidgetElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget"],
        }).getNode();
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());
        this.weatherWidgetElement.appendChild((0,_utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_2__.createWeatherTypeIconByWeatherSymbolCode)("fair_day"));
    };
    WeatherWidget.prototype.createWeatherWidgetHeader = function () {
        var cityName = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["city-name"],
            textContent: "" + this.city.name,
        }).getNode();
        var weatherIcon = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["current-weather-icon"],
        }).getNode();
        weatherIcon.appendChild((0,_utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_2__.createWeatherTypeIconByWeatherSymbolCode)(this.currentWeatherData.data.next_1_hours.summary.symbol_code));
        var temperature = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            textContent: (0,_utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_3__.getFullTemperatureValue)(this.currentWeatherData.data.instant.details.air_temperature),
        }).getNode();
        var weatherWidgetHeader = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__header"],
        }).getNode();
        weatherWidgetHeader.appendChild(cityName);
        weatherWidgetHeader.appendChild(weatherIcon);
        weatherWidgetHeader.appendChild(temperature);
        return weatherWidgetHeader;
    };
    WeatherWidget.prototype.createWeatherWidgetBody = function () {
        var weatherWidgetBody = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__body"],
            textContent: "weather-widget__body text content",
        }).getNode();
        return weatherWidgetBody;
    };
    WeatherWidget.prototype.createWeatherWidgetFooter = function () {
        var weatherWidgetFooter = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_4__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__footer"],
            textContent: "weather-widget__footer text content",
        }).getNode();
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
    DOMElement.prototype.getNode = function () {
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


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHoursFromDateTimeString": () => (/* binding */ getHoursFromDateTimeString)
/* harmony export */ });
var getHoursFromDateTimeString = function (dateString) {
    return new Date(dateString).getHours();
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeatherTypeIconByWeatherSymbolCode": () => (/* binding */ createWeatherTypeIconByWeatherSymbolCode)
/* harmony export */ });
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var createWeatherTypeIconByWeatherSymbolCode = function (symbolCode) {
    var weatherIconsFolderPath = "./images/weather-icons/";
    return new _models_DOMElement__WEBPACK_IMPORTED_MODULE_0__.DOMElement({
        tagName: "img",
        attributes: [
            {
                name: "src",
                value: "" + weatherIconsFolderPath + symbolCode + ".svg",
            },
            {
                name: "alt",
                value: "" + symbolCode,
            },
        ],
    }).getNode();
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFullTemperatureValue": () => (/* binding */ getFullTemperatureValue)
/* harmony export */ });
var getFullTemperatureValue = function (temperatureValue) {
    var result = "";
    temperatureValue = Math.ceil(temperatureValue);
    if (temperatureValue === 0) {
        result += 0;
    }
    if (temperatureValue > 0) {
        result += "+" + temperatureValue;
    }
    if (temperatureValue < 0) {
        result += "-" + temperatureValue;
    }
    result += "°С";
    return result;
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ044RDtBQUVBO0FBRTlELElBQU0sT0FBTyxHQUFTLDJFQUFVLENBQUM7SUFDL0IsSUFBSSxFQUFFLFNBQVM7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsR0FBRztDQUNkLENBQUMsQ0FBQztBQUVILElBQUksdUVBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L1dlYXRoZXJXaWRnZXQudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXRXZWF0aGVyRGF0YU9mQ2l0eS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L21vZGVscy9ET01FbGVtZW50LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvY3JlYXRlQ2l0eS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nLnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldEZ1bGxUZW1wZXJhdHVyZVZhbHVlLnRzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGFPZkNpdHkgfSBmcm9tIFwiLi91dGlscy9nZXRXZWF0aGVyRGF0YU9mQ2l0eVwiO1xyXG5pbXBvcnQgeyBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMgfSBmcm9tIFwiLi91dGlscy9nZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXNcIjtcclxuaW1wb3J0IHsgZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcgfSBmcm9tIFwiLi91dGlscy9nZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlIH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZVwiO1xyXG5pbXBvcnQgeyBnZXRGdWxsVGVtcGVyYXR1cmVWYWx1ZSB9IGZyb20gXCIuL3V0aWxzL2dldEZ1bGxUZW1wZXJhdHVyZVZhbHVlXCI7XHJcblxyXG5pbXBvcnQgeyBET01FbGVtZW50IH0gZnJvbSBcIi4vbW9kZWxzL0RPTUVsZW1lbnRcIjtcclxuXHJcbmltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyV2lkZ2V0IHtcclxuICBwcml2YXRlIHRhcmdldEVsZW1lbnQhOiBFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIHdlYXRoZXJXaWRnZXRFbGVtZW50ITogTm9kZTtcclxuICBwcml2YXRlIGNpdHkhOiBDaXR5O1xyXG4gIHByaXZhdGUgd2VhdGhlckRhdGEhOiBhbnk7IC8vIFRPRE86IGZpeCBkYXRhIHR5cGVcclxuICBwcml2YXRlIGN1cnJlbnRXZWF0aGVyRGF0YSE6IGFueTsgLy8gVE9ETzogZml4IGRhdGEgdHlwZVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKGdldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nKFwiMjAyMS0wOS0wOVQwOTowMDowMFpcIikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlckluKHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogdGhpcyB7XHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuXHJcbiAgICBnZXRXZWF0aGVyRGF0YU9mQ2l0eSh0aGlzLmNpdHkpLnRoZW4oKHdlYXRoZXJEYXRhT2ZDaXR5KSA9PiB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgcHJvcGVydGllczogeyB0aW1lc2VyaWVzIH0sXHJcbiAgICAgIH0gPSB3ZWF0aGVyRGF0YU9mQ2l0eSBhcyBhbnk7IC8vVE9ETzogZml4IGRhdGEgdHlwZVxyXG5cclxuICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRpbWVzZXJpZXM7XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhID0gdGltZXNlcmllc1swXTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlckRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICByZXR1cm4gd2VhdGhlckRhdGFPZkNpdHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvZkNpdHkoY2l0eTogQ2l0eSk6IHRoaXMge1xyXG4gICAgdGhpcy5jaXR5ID0geyAuLi5jaXR5IH07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNpdHkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQ/LmFwcGVuZCh0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0RWxlbWVudCh0YXJnZXRFbGVtZW50U2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJXaWRnZXRFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudCA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRcIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgdGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRIZWFkZXIoKSk7XHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlV2VhdGhlcldpZGdldEJvZHkoKSk7XHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlV2VhdGhlcldpZGdldEZvb3RlcigpKTtcclxuXHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlKFwiZmFpcl9kYXlcIilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJXaWRnZXRIZWFkZXIoKTogTm9kZSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiY2l0eS1uYW1lXCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogYCR7dGhpcy5jaXR5Lm5hbWV9YCxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiY3VycmVudC13ZWF0aGVyLWljb25cIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgd2VhdGhlckljb24uYXBwZW5kQ2hpbGQoXHJcbiAgICAgIGNyZWF0ZVdlYXRoZXJUeXBlSWNvbkJ5V2VhdGhlclN5bWJvbENvZGUoXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5uZXh0XzFfaG91cnMuc3VtbWFyeS5zeW1ib2xfY29kZVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICB0ZXh0Q29udGVudDogZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUoXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5pbnN0YW50LmRldGFpbHMuYWlyX3RlbXBlcmF0dXJlXHJcbiAgICAgICksXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEhlYWRlciA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2hlYWRlclwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICB3ZWF0aGVyV2lkZ2V0SGVhZGVyLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICAgIHdlYXRoZXJXaWRnZXRIZWFkZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gICAgd2VhdGhlcldpZGdldEhlYWRlci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJXaWRnZXRIZWFkZXIgYXMgTm9kZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlV2VhdGhlcldpZGdldEJvZHkoKTogTm9kZSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyV2lkZ2V0Qm9keSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2JvZHlcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBcIndlYXRoZXItd2lkZ2V0X19ib2R5IHRleHQgY29udGVudFwiLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyV2lkZ2V0Qm9keSBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0Rm9vdGVyKCk6IE5vZGUge1xyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEZvb3RlciA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2Zvb3RlclwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IFwid2VhdGhlci13aWRnZXRfX2Zvb3RlciB0ZXh0IGNvbnRlbnRcIixcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlcldpZGdldEZvb3RlciBhcyBOb2RlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhT2ZDaXR5KGNpdHk6IENpdHkpOiBQcm9taXNlPE9iamVjdD4ge1xyXG4gIGNvbnN0IGFwaVVybDogc3RyaW5nID1cclxuICAgIFwiaHR0cHM6Ly9hcGkubWV0Lm5vL3dlYXRoZXJhcGkvbG9jYXRpb25mb3JlY2FzdC8yLjAvY29tcGFjdD9cIjtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxyXG4gICAgYCR7YXBpVXJsfWxhdD0ke2NpdHkubGF0aXR1ZGV9Jmxvbj0ke2NpdHkubG9uZ2l0dWRlfSZhbHRpdHVkZT0ke2NpdHkuYWx0aXR1ZGV9YFxyXG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmlydHVhbEVsZW1lbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9WaXJ0dWFsRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBWaXJ0dWFsQXR0cmlidXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvVmlydHVhbEF0dHJpYnV0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERPTUVsZW1lbnQge1xyXG4gIHByaXZhdGUgZWxlbWVudCE6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBWaXJ0dWFsRWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KHByb3BzLnRhZ05hbWUpXHJcbiAgICAgIC5zZXRDbGFzc05hbWVzKHByb3BzLmNsYXNzTmFtZXMpXHJcbiAgICAgIC5zZXRBdHRyaWJ1dGVzKHByb3BzLmF0dHJpYnV0ZXMpXHJcbiAgICAgIC5zZXRUZXh0Q29udGVudChwcm9wcy50ZXh0Q29udGVudClcclxuICAgICAgLnNldElubmVySFRNTChwcm9wcy5pbm5lckhUTUwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGUoKTogTm9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50IGFzIE5vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwZW5kQ2hpbGQoY2hpbGQ6IEVsZW1lbnQpOiB0aGlzIHtcclxuICAgIHRoaXMuZWxlbWVudD8uYXBwZW5kKGNoaWxkIGFzIE5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgbGV0IGNyZWF0ZWRFbGVtZW50OiBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZWRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAoY2xhc3NOYW1lcykge1xyXG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBWaXJ0dWFsQXR0cmlidXRlW10gfCB1bmRlZmluZWQpOiB0aGlzIHtcclxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAodGV4dENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElubmVySFRNTChpbm5lckhUTUw6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKGlubmVySFRNTCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNpdHkob3B0aW9uczogQ2l0eSk6IENpdHkge1xyXG4gIHJldHVybiB7IC4uLm9wdGlvbnMgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcgPSAoZGF0ZVN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+XHJcbiAgbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0SG91cnMoKTtcclxuIiwiaW1wb3J0IHsgRE9NRWxlbWVudCB9IGZyb20gXCIuLi9tb2RlbHMvRE9NRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdlYXRoZXJUeXBlSWNvbkJ5V2VhdGhlclN5bWJvbENvZGUgPSAoXHJcbiAgc3ltYm9sQ29kZTogc3RyaW5nXHJcbik6IE5vZGUgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uc0ZvbGRlclBhdGg6IHN0cmluZyA9IFwiLi9pbWFnZXMvd2VhdGhlci1pY29ucy9cIjtcclxuXHJcbiAgcmV0dXJuIG5ldyBET01FbGVtZW50KHtcclxuICAgIHRhZ05hbWU6IFwiaW1nXCIsXHJcbiAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcInNyY1wiLFxyXG4gICAgICAgIHZhbHVlOiBgJHt3ZWF0aGVySWNvbnNGb2xkZXJQYXRofSR7c3ltYm9sQ29kZX0uc3ZnYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWx0XCIsXHJcbiAgICAgICAgdmFsdWU6IGAke3N5bWJvbENvZGV9YCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSkuZ2V0Tm9kZSgpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUgPSAodGVtcGVyYXR1cmVWYWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHRlbXBlcmF0dXJlVmFsdWUgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmVWYWx1ZSk7XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID09PSAwKSB7XHJcbiAgICByZXN1bHQgKz0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID4gMCkge1xyXG4gICAgcmVzdWx0ICs9IGArJHt0ZW1wZXJhdHVyZVZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBpZiAodGVtcGVyYXR1cmVWYWx1ZSA8IDApIHtcclxuICAgIHJlc3VsdCArPSBgLSR7dGVtcGVyYXR1cmVWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcmVzdWx0ICs9IFwiwrDQoVwiO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXJXaWRnZXQgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L1dlYXRoZXJXaWRnZXRcIjtcclxuaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL1dlYXRoZXJXaWRnZXQvaW50ZXJmYWNlcy9DaXR5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNpdHkgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L3V0aWxzL2NyZWF0ZUNpdHlcIjtcclxuXHJcbmNvbnN0IGtoYXJraXY6IENpdHkgPSBjcmVhdGVDaXR5KHtcclxuICBuYW1lOiBcIktoYXJraXZcIixcclxuICBsYXRpdHVkZTogNDkuOTgwODEsXHJcbiAgbG9uZ2l0dWRlOiAzNi4yNTI3MixcclxuICBhbHRpdHVkZTogMTUyLFxyXG59KTtcclxuXHJcbm5ldyBXZWF0aGVyV2lkZ2V0KCkub2ZDaXR5KGtoYXJraXYpLnJlbmRlckluKFwiI3dlYXRoZXJcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==