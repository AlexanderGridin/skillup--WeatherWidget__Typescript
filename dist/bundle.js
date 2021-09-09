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
/* harmony import */ var _utils_getWindDirectionAbbreviationFromDegrees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _utils_getReadableWeatherTypeFromSymbolCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _utils_getDailyIntervalNameFromTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _utils_isDailyIntervalPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
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
            _this.createWeatherWidgetElement().render();
            return weatherDataOfCity;
        });
        return this;
    };
    WeatherWidget.prototype.ofCity = function (city) {
        this.city = __assign({}, city);
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
        this.weatherWidgetElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget"],
        }).getNode();
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetHeader());
        this.weatherWidgetElement.appendChild(this.createWeatherWidgetBody());
        // this.weatherWidgetElement.appendChild(this.createWeatherWidgetFooter());
        return this;
    };
    WeatherWidget.prototype.createWeatherWidgetHeader = function () {
        var cityName = this.city.name;
        var weatherSymbolCode = this.currentWeatherData.data.next_1_hours.summary.symbol_code;
        var temperature = this.currentWeatherData.data.instant.details.air_temperature;
        var fullTemperatureValue = (0,_utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_2__.getFullTemperatureValue)(temperature);
        var cityNameElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["city-name"],
            textContent: "" + cityName,
        }).getNode();
        var weatherIconElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["current-weather-icon"],
        }).getNode();
        weatherIconElement.appendChild((0,_utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_5__.createWeatherTypeIconByWeatherSymbolCode)(weatherSymbolCode));
        var temperatureElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["current-temperature"],
            textContent: fullTemperatureValue,
        }).getNode();
        var weatherWidgetHeader = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__header"],
        }).getNode();
        weatherWidgetHeader.appendChild(cityNameElement);
        weatherWidgetHeader.appendChild(weatherIconElement);
        weatherWidgetHeader.appendChild(temperatureElement);
        return weatherWidgetHeader;
    };
    WeatherWidget.prototype.createWeatherWidgetBody = function () {
        var weatherWidgetBody = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__body"],
        }).getNode();
        weatherWidgetBody.appendChild(this.createCurrentWeatherElement());
        weatherWidgetBody.appendChild(this.createWeatherOfDailyIntervalsElement());
        return weatherWidgetBody;
    };
    WeatherWidget.prototype.createCurrentWeatherElement = function () {
        var weatherSymbolCode = this.currentWeatherData.data.next_1_hours.summary.symbol_code;
        var weatherTypeName = (0,_utils_getReadableWeatherTypeFromSymbolCode__WEBPACK_IMPORTED_MODULE_3__.getWeatherTypeNameFromSymbolCode)(weatherSymbolCode);
        var windSpeed = this.currentWeatherData.data.instant.details.wind_speed;
        var windDirectionInDegrees = this.currentWeatherData.data.instant.details.wind_from_direction;
        var windDirectionAbbreviation = (0,_utils_getWindDirectionAbbreviationFromDegrees__WEBPACK_IMPORTED_MODULE_1__.getWindDirectionAbbreviationFromDegrees)(windDirectionInDegrees);
        var weatherTypeElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "p",
            textContent: "" + weatherTypeName,
        }).getNode();
        var windElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "p",
            textContent: windSpeed + "\u043C/\u0441, " + windDirectionAbbreviation,
        }).getNode();
        var currentWeatherElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["current-weather"],
        }).getNode();
        currentWeatherElement.appendChild(weatherTypeElement);
        currentWeatherElement.appendChild(windElement);
        return currentWeatherElement;
    };
    WeatherWidget.prototype.createWeatherOfDailyIntervalsElement = function () {
        var totalDailyIntervalPoints = 0;
        var LIMIT_OF_DAILY_INTERVAL_POINTS = 4;
        var weatherOfDayliIntervalsElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["daily-intervals"],
        }).getNode();
        for (var i = 0; i < this.weatherData.length; i++) {
            // TODO: fix data type
            var weatherDataItem = this.weatherData[i];
            var time = weatherDataItem.time;
            if ((0,_utils_isDailyIntervalPoint__WEBPACK_IMPORTED_MODULE_6__.isDailyIntervalPoint)(time)) {
                weatherOfDayliIntervalsElement.appendChild(this.createDailyIntervalElement(weatherDataItem));
                totalDailyIntervalPoints++;
            }
            if (totalDailyIntervalPoints === LIMIT_OF_DAILY_INTERVAL_POINTS) {
                break;
            }
        }
        return weatherOfDayliIntervalsElement;
    };
    WeatherWidget.prototype.createDailyIntervalElement = function (weatherDataItem) {
        var time = weatherDataItem.time;
        var weatherSymbolCode = weatherDataItem.data.next_1_hours.summary.symbol_code;
        var temperature = weatherDataItem.data.instant.details.air_temperature;
        var fullTemperatureValue = (0,_utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_2__.getFullTemperatureValue)(temperature);
        var dailyIntervalTitle = (0,_utils_getDailyIntervalNameFromTime__WEBPACK_IMPORTED_MODULE_4__.getDailyIntervalNameFromTime)(time);
        var dailyIntervalTitleElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["daily-interval__title"],
            textContent: "" + dailyIntervalTitle,
        }).getNode();
        var weatherIconElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["daily-interval__weather-icon"],
        }).getNode();
        weatherIconElement.appendChild((0,_utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_5__.createWeatherTypeIconByWeatherSymbolCode)(weatherSymbolCode));
        var dailyIntervalTemperature = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["daily-interval__temerature"],
            textContent: "" + fullTemperatureValue,
        }).getNode();
        var dailyIntervalItemElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["daily-interval"],
        }).getNode();
        dailyIntervalItemElement.appendChild(dailyIntervalTitleElement);
        dailyIntervalItemElement.appendChild(weatherIconElement);
        dailyIntervalItemElement.appendChild(dailyIntervalTemperature);
        return dailyIntervalItemElement;
    };
    WeatherWidget.prototype.createWeatherWidgetFooter = function () {
        var weatherWidgetFooter = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
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
        classNames: ["weather-icon__img"],
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


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherTypeNameFromSymbolCode": () => (/* binding */ getWeatherTypeNameFromSymbolCode)
/* harmony export */ });
/* harmony import */ var _constants_weatherTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var getWeatherTypeNameFromSymbolCode = function (symbolCode) {
    for (var _i = 0, WEATHER_TYPES_1 = _constants_weatherTypes__WEBPACK_IMPORTED_MODULE_0__.WEATHER_TYPES; _i < WEATHER_TYPES_1.length; _i++) {
        var weatherType = WEATHER_TYPES_1[_i];
        if (symbolCode.includes(weatherType.code)) {
            return weatherType.name;
        }
    }
    return "";
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEATHER_TYPES": () => (/* binding */ WEATHER_TYPES)
/* harmony export */ });
var WEATHER_TYPES = [
    {
        code: "clearsky",
        name: "Чистое небо",
    },
    {
        code: "cloudy",
        name: "Облачно",
    },
    {
        code: "fair",
        name: "Ясно",
    },
    {
        code: "fog",
        name: "Туман",
    },
    {
        code: "heavyrain",
        name: "Ливень",
    },
    {
        code: "heavyrainandthunder",
        name: "Ливень с грозой",
    },
    {
        code: "heavyrainshowers",
        name: "Сильный дождь",
    },
    {
        code: "heavyrainshowersandthunder",
        name: "Сильный дождь с грозой",
    },
    {
        code: "heavysleet",
        name: "Сильный мокрый снег",
    },
    {
        code: "heavysleetandthunder",
        name: "Сильный мокрый снег с грозой",
    },
    {
        code: "heavysleetshowers",
        name: "Сильный дождь с мокрым снегом",
    },
    {
        code: "heavysleetshowersandthunder",
        name: "Сильный дождь с мокрым снегом и грозой",
    },
    {
        code: "heavysnow",
        name: "Снегопад",
    },
    {
        code: "heavysnowandthunder",
        name: "Сильный снег с грозой",
    },
    {
        code: "heavysnowshowers",
        name: "Сильный снегопад",
    },
    {
        code: "heavysnowshowersandthunder",
        name: "Сильный снегопад с грозой",
    },
    {
        code: "lightrain",
        name: "Легкий дождь",
    },
    {
        code: "lightrainandthunder",
        name: "Легкий дожь с грозой",
    },
    {
        code: "lightrainshowers",
        name: "Небольшой дождь",
    },
    {
        code: "lightrainshowersandthunder",
        name: "Небольшой ливневый дождь с грозой",
    },
    {
        code: "lightsleet",
        name: "Легкий мокрый снег",
    },
    {
        code: "lightsleetandthunder",
        name: "Небольшой мокрый снег с грозой",
    },
    {
        code: "lightsleetshowers",
        name: "Небольшой дождь с мокрым снегом",
    },
    {
        code: "lightsnow",
        name: "Легкий снег",
    },
    {
        code: "lightsnowandthunder",
        name: "Небольшой снег с грозой",
    },
    {
        code: "lightsnowshowers",
        name: "Небольшой снегопад",
    },
    {
        code: "lightssleetshowersandthunder",
        name: "Дождь с мокрым снегом и грозой",
    },
    {
        code: "lightssnowshowersandthunder",
        name: "Снег с грозой",
    },
    {
        code: "partlycloudy",
        name: "Переменная облачность",
    },
    {
        code: "rain",
        name: "Дождь",
    },
    {
        code: "rainandthunder",
        name: "Дожь с грозой",
    },
    {
        code: "rainshowers",
        name: "Ливень",
    },
    {
        code: "rainshowersandthunder",
        name: "Ливень с грозой",
    },
    {
        code: "sleet",
        name: "Мокрый снег",
    },
    {
        code: "sleetandthunder",
        name: "Мокрый снег с грозой",
    },
    {
        code: "sleetshowers",
        name: "Дождь с мокрым снегом",
    },
    {
        code: "sleetshowersandthunder",
        name: "Дождь с мокрым снегом и грозой",
    },
    {
        code: "snow",
        name: "Снег",
    },
    {
        code: "snowandthunder",
        name: "Снег с грозой",
    },
    {
        code: "snowshowers",
        name: "Снегопад",
    },
    {
        code: "snowshowersandthunder",
        name: "Снегопад с грозой",
    },
];


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWindDirectionAbbreviationFromDegrees": () => (/* binding */ getWindDirectionAbbreviationFromDegrees)
/* harmony export */ });
/* harmony import */ var _constants_russianAbbreviationsForTheCardinalPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

function getWindDirectionAbbreviationFromDegrees(windDirectionInDegrees) {
    var FULL_ANGLE = 360;
    var abbreviationPositionOfCardinalPoint = Math.round((windDirectionInDegrees / FULL_ANGLE) * 10) - 1;
    return _constants_russianAbbreviationsForTheCardinalPoints__WEBPACK_IMPORTED_MODULE_0__.RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS[abbreviationPositionOfCardinalPoint];
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS": () => (/* binding */ RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS)
/* harmony export */ });
var RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS = [
    "С",
    "СВ",
    "В",
    "ЮВ",
    "Ю",
    "ЮЗ",
    "З",
    "СЗ",
    "С",
];


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDailyIntervalNameFromTime": () => (/* binding */ getDailyIntervalNameFromTime)
/* harmony export */ });
/* harmony import */ var _getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var getDailyIntervalNameFromTime = function (time) {
    var dailyIntervalName = "";
    var hours = (0,_getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__.getHoursFromDateTimeString)(time);
    switch (hours) {
        case 0:
            dailyIntervalName += "Ночью";
            break;
        case 6:
            dailyIntervalName += "Утром";
            break;
        case 12:
            dailyIntervalName += "Днем";
            break;
        case 18:
            dailyIntervalName += "Вечером";
            break;
    }
    return dailyIntervalName;
};


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDailyIntervalPoint": () => (/* binding */ isDailyIntervalPoint)
/* harmony export */ });
/* harmony import */ var _getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var isDailyIntervalPoint = function (time) {
    var hours = (0,_getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__.getHoursFromDateTimeString)(time);
    return hours === 0 || hours % 6 === 0 ? true : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUNzQztBQUNoQztBQUNzQjtBQUNaO0FBQ3dCO0FBQ3hDO0FBRW5CO0FBSWpEO0lBQUE7SUFtT0EsQ0FBQztJQTVOUSxnQ0FBUSxHQUFmLFVBQWdCLHFCQUE2QjtRQUE3QyxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVsRSxpRkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsaUJBQWlCO1lBRXJDLGNBQVUsR0FDdEIsaUJBQXdCLHNCQURGLENBQ0csQ0FBQyxxQkFBcUI7WUFFbkQsS0FBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXJDLEtBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTNDLE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsSUFBVTtRQUN0QixJQUFJLENBQUMsSUFBSSxnQkFBUSxJQUFJLENBQUUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyw4QkFBTSxHQUFkOztRQUNFLFVBQUksQ0FBQyxhQUFhLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sd0NBQWdCLEdBQXhCLFVBQXlCLHFCQUE2QjtRQUNwRCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sa0RBQTBCLEdBQWxDO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksMERBQVUsQ0FBQztZQUN6QyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQy9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDdEUsMkVBQTJFO1FBRTNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGlEQUF5QixHQUFqQztRQUNFLElBQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhDLElBQU0saUJBQWlCLEdBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFaEUsSUFBTSxXQUFXLEdBQ2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvRCxJQUFNLG9CQUFvQixHQUFXLHVGQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFFLElBQU0sZUFBZSxHQUFHLElBQUksMERBQVUsQ0FBQztZQUNyQyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QixXQUFXLEVBQUUsS0FBRyxRQUFVO1NBQzNCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0sa0JBQWtCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDckMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsa0JBQWtCLENBQUMsV0FBVyxDQUM1Qix5SEFBd0MsQ0FBQyxpQkFBaUIsQ0FBQyxDQUM1RCxDQUFDO1FBRUYsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLDBEQUFVLENBQUM7WUFDeEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNuQyxXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0sbUJBQW1CLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdkMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsbUJBQW1CLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BELG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXBELE9BQU8sbUJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUVPLCtDQUF1QixHQUEvQjtRQUNFLElBQU0saUJBQWlCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDckMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUM7UUFDbEUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLENBQUM7UUFFM0UsT0FBTyxpQkFBeUIsQ0FBQztJQUNuQyxDQUFDO0lBRU8sbURBQTJCLEdBQW5DO1FBQ0UsSUFBTSxpQkFBaUIsR0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNoRSxJQUFNLGVBQWUsR0FDbkIsNkdBQWdDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV0RCxJQUFNLFNBQVMsR0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFELElBQU0sc0JBQXNCLEdBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRSxJQUFNLHlCQUF5QixHQUM3Qix1SEFBdUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxHQUFHO1lBQ1osV0FBVyxFQUFFLEtBQUcsZUFBaUI7U0FDbEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsSUFBTSxXQUFXLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxHQUFHO1lBQ1osV0FBVyxFQUFLLFNBQVMsdUJBQVEseUJBQTJCO1NBQzdELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0scUJBQXFCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQ2pELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDaEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIscUJBQXFCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQscUJBQXFCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9DLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVPLDREQUFvQyxHQUE1QztRQUNFLElBQUksd0JBQXdCLEdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sOEJBQThCLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQU0sOEJBQThCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDaEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELHNCQUFzQjtZQUN0QixJQUFNLGVBQWUsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQU0sSUFBSSxHQUFXLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFFMUMsSUFBSSxpRkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsOEJBQThCLENBQUMsV0FBVyxDQUN4QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQ2pELENBQUM7Z0JBRUYsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUVELElBQUksd0JBQXdCLEtBQUssOEJBQThCLEVBQUU7Z0JBQy9ELE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyw4QkFBOEIsQ0FBQztJQUN4QyxDQUFDO0lBRU8sa0RBQTBCLEdBQWxDLFVBQW1DLGVBQW9CO1FBQ3JELElBQU0sSUFBSSxHQUFXLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBTSxpQkFBaUIsR0FDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxJQUFNLFdBQVcsR0FDZixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3ZELElBQU0sb0JBQW9CLEdBQUcsdUZBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsSUFBTSxrQkFBa0IsR0FBVyxpR0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxJQUFNLHlCQUF5QixHQUFHLElBQUksMERBQVUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLFdBQVcsRUFBRSxLQUFHLGtCQUFvQjtTQUNyQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFYixJQUFNLGtCQUFrQixHQUFHLElBQUksMERBQVUsQ0FBQztZQUN4QyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzdDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLGtCQUFrQixDQUFDLFdBQVcsQ0FDNUIseUhBQXdDLENBQUMsaUJBQWlCLENBQUMsQ0FDNUQsQ0FBQztRQUVGLElBQU0sd0JBQXdCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDMUMsV0FBVyxFQUFFLEtBQUcsb0JBQXNCO1NBQ3ZDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0sd0JBQXdCLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDL0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsd0JBQXdCLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDaEUsd0JBQXdCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsd0JBQXdCLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0QsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRU8saURBQXlCLEdBQWpDO1FBQ0UsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLDBEQUFVLENBQUM7WUFDekMsT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUN0QyxXQUFXLEVBQUUscUNBQXFDO1NBQ25ELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLE9BQU8sbUJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09NLFNBQWUsb0JBQW9CLENBQUMsSUFBVTs7Ozs7O29CQUM3QyxNQUFNLEdBQ1YsNkRBQTZELENBQUM7b0JBRXpELHFCQUFNLEtBQUssQ0FDYixNQUFNLFlBQU8sSUFBSSxDQUFDLFFBQVEsYUFBUSxJQUFJLENBQUMsU0FBUyxrQkFBYSxJQUFJLENBQUMsUUFBVSxDQUNoRixDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3dCQUZyQyxzQkFBTyxTQUU4QixFQUFDOzs7O0NBQ3ZDOzs7Ozs7Ozs7OztBQ05EO0lBR0Usb0JBQVksS0FBcUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQzlCLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQy9CLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQy9CLGNBQWMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVNLGdDQUFXLEdBQWxCLFVBQW1CLEtBQWM7O1FBQy9CLFVBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sQ0FBQyxLQUFhLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxrQ0FBYSxHQUFyQixVQUFzQixPQUFlO1FBQ25DLElBQUksY0FBYyxHQUFZLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFBc0IsVUFBZ0M7UUFDcEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxLQUFzQixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtnQkFBN0IsSUFBSSxTQUFTO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGtDQUFhLEdBQXJCLFVBQXNCLFVBQTBDO1FBQzlELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBc0IsVUFBVSxFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVLEVBQUU7Z0JBQTdCLElBQUksU0FBUztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUQ7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLFdBQStCO1FBQ3BELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsU0FBNkI7UUFDaEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVNLFNBQVMsVUFBVSxDQUFDLE9BQWE7SUFDdEMsb0JBQVksT0FBTyxFQUFHO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0FDSk0sSUFBTSwwQkFBMEIsR0FBRyxVQUFDLFVBQWtCO0lBQzNELFdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtBQUEvQixDQUErQixDQUFDOzs7Ozs7Ozs7Ozs7QUNEZ0I7QUFFM0MsSUFBTSx3Q0FBd0MsR0FBRyxVQUN0RCxVQUFrQjtJQUVsQixJQUFNLHNCQUFzQixHQUFXLHlCQUF5QixDQUFDO0lBRWpFLE9BQU8sSUFBSSwwREFBVSxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDakMsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEtBQUcsc0JBQXNCLEdBQUcsVUFBVSxTQUFNO2FBQ3BEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEtBQUcsVUFBWTthQUN2QjtTQUNGO0tBQ0YsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ3JCSyxJQUFNLHVCQUF1QixHQUFHLFVBQUMsZ0JBQXdCO0lBQzlELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUN4QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFL0MsSUFBSSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxJQUFJLENBQUMsQ0FBQztLQUNiO0lBRUQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxJQUFJLE1BQUksZ0JBQWtCLENBQUM7S0FDbEM7SUFFRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRTtRQUN4QixNQUFNLElBQUksTUFBSSxnQkFBa0IsQ0FBQztLQUNsQztJQUVELE1BQU0sSUFBSSxJQUFJLENBQUM7SUFFZixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ25Cd0Q7QUFFbkQsSUFBTSxnQ0FBZ0MsR0FBRyxVQUM5QyxVQUFrQjtJQUVsQixLQUF3QixVQUFhLEVBQWIsb0ZBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRTtRQUFsQyxJQUFJLFdBQVc7UUFDbEIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7S0FDRjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1ZLLElBQU0sYUFBYSxHQUFrQjtJQUMxQztRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxxQkFBcUI7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLDhCQUE4QjtLQUNyQztJQUNEO1FBQ0UsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSx3Q0FBd0M7S0FDL0M7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSx1QkFBdUI7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxJQUFJLEVBQUUsMkJBQTJCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxpQkFBaUI7S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsSUFBSSxFQUFFLG1DQUFtQztLQUMxQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLElBQUksRUFBRSxpQ0FBaUM7S0FDeEM7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsSUFBSSxFQUFFLGlCQUFpQjtLQUN4QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLElBQUksRUFBRSxnQ0FBZ0M7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsSUFBSSxFQUFFLG1CQUFtQjtLQUMxQjtDQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZLb0g7QUFFL0csU0FBUyx1Q0FBdUMsQ0FDckQsc0JBQThCO0lBRTlCLElBQU0sVUFBVSxHQUFXLEdBQUcsQ0FBQztJQUUvQixJQUFJLG1DQUFtQyxHQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdELE9BQU8sOEhBQTZDLENBQ2xELG1DQUFtQyxDQUNwQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7QUNiTSxJQUFNLDZDQUE2QyxHQUFhO0lBQ3JFLEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztJQUNILElBQUk7SUFDSixHQUFHO0lBQ0gsSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztDQUNKLENBQUM7Ozs7Ozs7Ozs7OztBQ1Z3RTtBQUVuRSxJQUFNLDRCQUE0QixHQUFHLFVBQUMsSUFBWTtJQUN2RCxJQUFJLGlCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUNuQyxJQUFJLEtBQUssR0FBVyx1RkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyRCxRQUFRLEtBQUssRUFBRTtRQUNiLEtBQUssQ0FBQztZQUNKLGlCQUFpQixJQUFJLE9BQU8sQ0FBQztZQUM3QixNQUFNO1FBRVIsS0FBSyxDQUFDO1lBQ0osaUJBQWlCLElBQUksT0FBTyxDQUFDO1lBQzdCLE1BQU07UUFFUixLQUFLLEVBQUU7WUFDTCxpQkFBaUIsSUFBSSxNQUFNLENBQUM7WUFDNUIsTUFBTTtRQUVSLEtBQUssRUFBRTtZQUNMLGlCQUFpQixJQUFJLFNBQVMsQ0FBQztZQUMvQixNQUFNO0tBQ1Q7SUFFRCxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDekJ3RTtBQUVuRSxJQUFNLG9CQUFvQixHQUFHLFVBQUMsSUFBWTtJQUMvQyxJQUFJLEtBQUssR0FBVyx1RkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxPQUFPLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZELENBQUMsQ0FBQzs7Ozs7O1VDTEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOOEQ7QUFFQTtBQUU5RCxJQUFNLE9BQU8sR0FBUywyRUFBVSxDQUFDO0lBQy9CLElBQUksRUFBRSxTQUFTO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsUUFBUSxFQUFFLEdBQUc7Q0FDZCxDQUFDLENBQUM7QUFFSCxJQUFJLHVFQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC9XZWF0aGVyV2lkZ2V0LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvZ2V0V2VhdGhlckRhdGFPZkNpdHkudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC9tb2RlbHMvRE9NRWxlbWVudC50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2NyZWF0ZUNpdHkudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZy50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2NyZWF0ZVdlYXRoZXJUeXBlSWNvbkJ5V2VhdGhlclN5bWJvbENvZGUudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXRGdWxsVGVtcGVyYXR1cmVWYWx1ZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldFJlYWRhYmxlV2VhdGhlclR5cGVGcm9tU3ltYm9sQ29kZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L2NvbnN0YW50cy93ZWF0aGVyVHlwZXMudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC9jb25zdGFudHMvcnVzc2lhbkFiYnJldmlhdGlvbnNGb3JUaGVDYXJkaW5hbFBvaW50cy50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldERhaWx5SW50ZXJ2YWxOYW1lRnJvbVRpbWUudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9pc0RhaWx5SW50ZXJ2YWxQb2ludC50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlYXRoZXJEYXRhT2ZDaXR5IH0gZnJvbSBcIi4vdXRpbHMvZ2V0V2VhdGhlckRhdGFPZkNpdHlcIjtcclxuaW1wb3J0IHsgZ2V0V2luZERpcmVjdGlvbkFiYnJldmlhdGlvbkZyb21EZWdyZWVzIH0gZnJvbSBcIi4vdXRpbHMvZ2V0V2luZERpcmVjdGlvbkFiYnJldmlhdGlvbkZyb21EZWdyZWVzXCI7XHJcbmltcG9ydCB7IGdldEZ1bGxUZW1wZXJhdHVyZVZhbHVlIH0gZnJvbSBcIi4vdXRpbHMvZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWVcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlclR5cGVOYW1lRnJvbVN5bWJvbENvZGUgfSBmcm9tIFwiLi91dGlscy9nZXRSZWFkYWJsZVdlYXRoZXJUeXBlRnJvbVN5bWJvbENvZGVcIjtcclxuaW1wb3J0IHsgZ2V0RGFpbHlJbnRlcnZhbE5hbWVGcm9tVGltZSB9IGZyb20gXCIuL3V0aWxzL2dldERhaWx5SW50ZXJ2YWxOYW1lRnJvbVRpbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZSB9IGZyb20gXCIuL3V0aWxzL2NyZWF0ZVdlYXRoZXJUeXBlSWNvbkJ5V2VhdGhlclN5bWJvbENvZGVcIjtcclxuaW1wb3J0IHsgaXNEYWlseUludGVydmFsUG9pbnQgfSBmcm9tIFwiLi91dGlscy9pc0RhaWx5SW50ZXJ2YWxQb2ludFwiO1xyXG5cclxuaW1wb3J0IHsgRE9NRWxlbWVudCB9IGZyb20gXCIuL21vZGVscy9ET01FbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9DaXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlcldpZGdldCB7XHJcbiAgcHJpdmF0ZSB0YXJnZXRFbGVtZW50ITogRWxlbWVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSB3ZWF0aGVyV2lkZ2V0RWxlbWVudCE6IE5vZGU7XHJcbiAgcHJpdmF0ZSBjaXR5ITogQ2l0eTtcclxuICBwcml2YXRlIHdlYXRoZXJEYXRhITogYW55OyAvLyBUT0RPOiBmaXggZGF0YSB0eXBlXHJcbiAgcHJpdmF0ZSBjdXJyZW50V2VhdGhlckRhdGEhOiBhbnk7IC8vIFRPRE86IGZpeCBkYXRhIHR5cGVcclxuXHJcbiAgcHVibGljIHJlbmRlckluKHRhcmdldEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogdGhpcyB7XHJcbiAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yKTtcclxuXHJcbiAgICBnZXRXZWF0aGVyRGF0YU9mQ2l0eSh0aGlzLmNpdHkpLnRoZW4oKHdlYXRoZXJEYXRhT2ZDaXR5KSA9PiB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgcHJvcGVydGllczogeyB0aW1lc2VyaWVzIH0sXHJcbiAgICAgIH0gPSB3ZWF0aGVyRGF0YU9mQ2l0eSBhcyBhbnk7IC8vVE9ETzogZml4IGRhdGEgdHlwZVxyXG5cclxuICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRpbWVzZXJpZXM7XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhID0gdGltZXNlcmllc1swXTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlckRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRFbGVtZW50KCkucmVuZGVyKCk7XHJcblxyXG4gICAgICByZXR1cm4gd2VhdGhlckRhdGFPZkNpdHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvZkNpdHkoY2l0eTogQ2l0eSk6IHRoaXMge1xyXG4gICAgdGhpcy5jaXR5ID0geyAuLi5jaXR5IH07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50Py5hcHBlbmQodGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbGVtZW50U2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0RWxlbWVudCgpOiB0aGlzIHtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcIndlYXRoZXItd2lkZ2V0XCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVXZWF0aGVyV2lkZ2V0SGVhZGVyKCkpO1xyXG4gICAgdGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRCb2R5KCkpO1xyXG4gICAgLy8gdGhpcy53ZWF0aGVyV2lkZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVdlYXRoZXJXaWRnZXRGb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJXaWRnZXRIZWFkZXIoKTogTm9kZSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZTogc3RyaW5nID0gdGhpcy5jaXR5Lm5hbWU7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbENvZGU6IHN0cmluZyA9XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhLmRhdGEubmV4dF8xX2hvdXJzLnN1bW1hcnkuc3ltYm9sX2NvZGU7XHJcblxyXG4gICAgY29uc3QgdGVtcGVyYXR1cmU6IG51bWJlciA9XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhLmRhdGEuaW5zdGFudC5kZXRhaWxzLmFpcl90ZW1wZXJhdHVyZTtcclxuICAgIGNvbnN0IGZ1bGxUZW1wZXJhdHVyZVZhbHVlOiBzdHJpbmcgPSBnZXRGdWxsVGVtcGVyYXR1cmVWYWx1ZSh0ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJjaXR5LW5hbWVcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBgJHtjaXR5TmFtZX1gLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJJY29uRWxlbWVudCA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiY3VycmVudC13ZWF0aGVyLWljb25cIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgd2VhdGhlckljb25FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlKHdlYXRoZXJTeW1ib2xDb2RlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcImN1cnJlbnQtdGVtcGVyYXR1cmVcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBmdWxsVGVtcGVyYXR1cmVWYWx1ZSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyV2lkZ2V0SGVhZGVyID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLXdpZGdldF9faGVhZGVyXCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIHdlYXRoZXJXaWRnZXRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWVFbGVtZW50KTtcclxuICAgIHdlYXRoZXJXaWRnZXRIZWFkZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb25FbGVtZW50KTtcclxuICAgIHdlYXRoZXJXaWRnZXRIZWFkZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlcldpZGdldEhlYWRlciBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVXZWF0aGVyV2lkZ2V0Qm9keSgpOiBOb2RlIHtcclxuICAgIGNvbnN0IHdlYXRoZXJXaWRnZXRCb2R5ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLXdpZGdldF9fYm9keVwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICB3ZWF0aGVyV2lkZ2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUN1cnJlbnRXZWF0aGVyRWxlbWVudCgpKTtcclxuICAgIHdlYXRoZXJXaWRnZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlV2VhdGhlck9mRGFpbHlJbnRlcnZhbHNFbGVtZW50KCkpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyV2lkZ2V0Qm9keSBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDdXJyZW50V2VhdGhlckVsZW1lbnQoKTogTm9kZSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sQ29kZTogc3RyaW5nID1cclxuICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5uZXh0XzFfaG91cnMuc3VtbWFyeS5zeW1ib2xfY29kZTtcclxuICAgIGNvbnN0IHdlYXRoZXJUeXBlTmFtZTogc3RyaW5nID1cclxuICAgICAgZ2V0V2VhdGhlclR5cGVOYW1lRnJvbVN5bWJvbENvZGUod2VhdGhlclN5bWJvbENvZGUpO1xyXG5cclxuICAgIGNvbnN0IHdpbmRTcGVlZDogbnVtYmVyID1cclxuICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5pbnN0YW50LmRldGFpbHMud2luZF9zcGVlZDtcclxuICAgIGNvbnN0IHdpbmREaXJlY3Rpb25JbkRlZ3JlZXM6IG51bWJlciA9XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhLmRhdGEuaW5zdGFudC5kZXRhaWxzLndpbmRfZnJvbV9kaXJlY3Rpb247XHJcbiAgICBjb25zdCB3aW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uOiBzdHJpbmcgPVxyXG4gICAgICBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMod2luZERpcmVjdGlvbkluRGVncmVlcyk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlclR5cGVFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcInBcIixcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke3dlYXRoZXJUeXBlTmFtZX1gLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGNvbnN0IHdpbmRFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcInBcIixcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke3dpbmRTcGVlZH3QvC/RgSwgJHt3aW5kRGlyZWN0aW9uQWJicmV2aWF0aW9ufWAsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJFbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJjdXJyZW50LXdlYXRoZXJcIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY3VycmVudFdlYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlRWxlbWVudCk7XHJcbiAgICBjdXJyZW50V2VhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQod2luZEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50V2VhdGhlckVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJPZkRhaWx5SW50ZXJ2YWxzRWxlbWVudCgpOiBOb2RlIHtcclxuICAgIGxldCB0b3RhbERhaWx5SW50ZXJ2YWxQb2ludHM6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdCBMSU1JVF9PRl9EQUlMWV9JTlRFUlZBTF9QT0lOVFMgPSA0O1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJPZkRheWxpSW50ZXJ2YWxzRWxlbWVudCA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiZGFpbHktaW50ZXJ2YWxzXCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLndlYXRoZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIFRPRE86IGZpeCBkYXRhIHR5cGVcclxuICAgICAgY29uc3Qgd2VhdGhlckRhdGFJdGVtOiBhbnkgPSB0aGlzLndlYXRoZXJEYXRhW2ldO1xyXG4gICAgICBjb25zdCB0aW1lOiBzdHJpbmcgPSB3ZWF0aGVyRGF0YUl0ZW0udGltZTtcclxuXHJcbiAgICAgIGlmIChpc0RhaWx5SW50ZXJ2YWxQb2ludCh0aW1lKSkge1xyXG4gICAgICAgIHdlYXRoZXJPZkRheWxpSW50ZXJ2YWxzRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIHRoaXMuY3JlYXRlRGFpbHlJbnRlcnZhbEVsZW1lbnQod2VhdGhlckRhdGFJdGVtKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRvdGFsRGFpbHlJbnRlcnZhbFBvaW50cysrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG90YWxEYWlseUludGVydmFsUG9pbnRzID09PSBMSU1JVF9PRl9EQUlMWV9JTlRFUlZBTF9QT0lOVFMpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2ZEYXlsaUludGVydmFsc0VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURhaWx5SW50ZXJ2YWxFbGVtZW50KHdlYXRoZXJEYXRhSXRlbTogYW55KTogTm9kZSB7XHJcbiAgICBjb25zdCB0aW1lOiBzdHJpbmcgPSB3ZWF0aGVyRGF0YUl0ZW0udGltZTtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2xDb2RlOiBzdHJpbmcgPVxyXG4gICAgICB3ZWF0aGVyRGF0YUl0ZW0uZGF0YS5uZXh0XzFfaG91cnMuc3VtbWFyeS5zeW1ib2xfY29kZTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZTogbnVtYmVyID1cclxuICAgICAgd2VhdGhlckRhdGFJdGVtLmRhdGEuaW5zdGFudC5kZXRhaWxzLmFpcl90ZW1wZXJhdHVyZTtcclxuICAgIGNvbnN0IGZ1bGxUZW1wZXJhdHVyZVZhbHVlID0gZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUodGVtcGVyYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IGRhaWx5SW50ZXJ2YWxUaXRsZTogc3RyaW5nID0gZ2V0RGFpbHlJbnRlcnZhbE5hbWVGcm9tVGltZSh0aW1lKTtcclxuXHJcbiAgICBjb25zdCBkYWlseUludGVydmFsVGl0bGVFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJkYWlseS1pbnRlcnZhbF9fdGl0bGVcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBgJHtkYWlseUludGVydmFsVGl0bGV9YCxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcImRhaWx5LWludGVydmFsX193ZWF0aGVyLWljb25cIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgd2VhdGhlckljb25FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlKHdlYXRoZXJTeW1ib2xDb2RlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYWlseUludGVydmFsVGVtcGVyYXR1cmUgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcImRhaWx5LWludGVydmFsX190ZW1lcmF0dXJlXCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogYCR7ZnVsbFRlbXBlcmF0dXJlVmFsdWV9YCxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBjb25zdCBkYWlseUludGVydmFsSXRlbUVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcImRhaWx5LWludGVydmFsXCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGRhaWx5SW50ZXJ2YWxJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkYWlseUludGVydmFsVGl0bGVFbGVtZW50KTtcclxuICAgIGRhaWx5SW50ZXJ2YWxJdGVtRWxlbWVudC5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbkVsZW1lbnQpO1xyXG4gICAgZGFpbHlJbnRlcnZhbEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRhaWx5SW50ZXJ2YWxUZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgcmV0dXJuIGRhaWx5SW50ZXJ2YWxJdGVtRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlV2VhdGhlcldpZGdldEZvb3RlcigpOiBOb2RlIHtcclxuICAgIGNvbnN0IHdlYXRoZXJXaWRnZXRGb290ZXIgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcIndlYXRoZXItd2lkZ2V0X19mb290ZXJcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBcIndlYXRoZXItd2lkZ2V0X19mb290ZXIgdGV4dCBjb250ZW50XCIsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJXaWRnZXRGb290ZXIgYXMgTm9kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YU9mQ2l0eShjaXR5OiBDaXR5KTogUHJvbWlzZTxPYmplY3Q+IHtcclxuICBjb25zdCBhcGlVcmw6IHN0cmluZyA9XHJcbiAgICBcImh0dHBzOi8vYXBpLm1ldC5uby93ZWF0aGVyYXBpL2xvY2F0aW9uZm9yZWNhc3QvMi4wL2NvbXBhY3Q/XCI7XHJcblxyXG4gIHJldHVybiBhd2FpdCBmZXRjaChcclxuICAgIGAke2FwaVVybH1sYXQ9JHtjaXR5LmxhdGl0dWRlfSZsb249JHtjaXR5LmxvbmdpdHVkZX0mYWx0aXR1ZGU9JHtjaXR5LmFsdGl0dWRlfWBcclxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IFZpcnR1YWxFbGVtZW50IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvVmlydHVhbEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVmlydHVhbEF0dHJpYnV0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1ZpcnR1YWxBdHRyaWJ1dGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBET01FbGVtZW50IHtcclxuICBwcml2YXRlIGVsZW1lbnQhOiBFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVmlydHVhbEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lKVxyXG4gICAgICAuc2V0Q2xhc3NOYW1lcyhwcm9wcy5jbGFzc05hbWVzKVxyXG4gICAgICAuc2V0QXR0cmlidXRlcyhwcm9wcy5hdHRyaWJ1dGVzKVxyXG4gICAgICAuc2V0VGV4dENvbnRlbnQocHJvcHMudGV4dENvbnRlbnQpXHJcbiAgICAgIC5zZXRJbm5lckhUTUwocHJvcHMuaW5uZXJIVE1MKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlKCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudCBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGVuZENoaWxkKGNoaWxkOiBFbGVtZW50KTogdGhpcyB7XHJcbiAgICB0aGlzLmVsZW1lbnQ/LmFwcGVuZChjaGlsZCBhcyBOb2RlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgIGxldCBjcmVhdGVkRWxlbWVudDogRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVkRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lcyhjbGFzc05hbWVzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKGNsYXNzTmFtZXMpIHtcclxuICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlczogVmlydHVhbEF0dHJpYnV0ZVtdIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAoYXR0cmlidXRlcykge1xyXG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGV4dENvbnRlbnQodGV4dENvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKHRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbm5lckhUTUwoaW5uZXJIVE1MOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB0aGlzIHtcclxuICAgIGlmIChpbm5lckhUTUwpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXR5KG9wdGlvbnM6IENpdHkpOiBDaXR5IHtcclxuICByZXR1cm4geyAuLi5vcHRpb25zIH07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nID0gKGRhdGVTdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PlxyXG4gIG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldEhvdXJzKCk7XHJcbiIsImltcG9ydCB7IERPTUVsZW1lbnQgfSBmcm9tIFwiLi4vbW9kZWxzL0RPTUVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlID0gKFxyXG4gIHN5bWJvbENvZGU6IHN0cmluZ1xyXG4pOiBOb2RlID0+IHtcclxuICBjb25zdCB3ZWF0aGVySWNvbnNGb2xkZXJQYXRoOiBzdHJpbmcgPSBcIi4vaW1hZ2VzL3dlYXRoZXItaWNvbnMvXCI7XHJcblxyXG4gIHJldHVybiBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICB0YWdOYW1lOiBcImltZ1wiLFxyXG4gICAgY2xhc3NOYW1lczogW1wid2VhdGhlci1pY29uX19pbWdcIl0sXHJcbiAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcInNyY1wiLFxyXG4gICAgICAgIHZhbHVlOiBgJHt3ZWF0aGVySWNvbnNGb2xkZXJQYXRofSR7c3ltYm9sQ29kZX0uc3ZnYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWx0XCIsXHJcbiAgICAgICAgdmFsdWU6IGAke3N5bWJvbENvZGV9YCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSkuZ2V0Tm9kZSgpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUgPSAodGVtcGVyYXR1cmVWYWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHRlbXBlcmF0dXJlVmFsdWUgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmVWYWx1ZSk7XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID09PSAwKSB7XHJcbiAgICByZXN1bHQgKz0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID4gMCkge1xyXG4gICAgcmVzdWx0ICs9IGArJHt0ZW1wZXJhdHVyZVZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBpZiAodGVtcGVyYXR1cmVWYWx1ZSA8IDApIHtcclxuICAgIHJlc3VsdCArPSBgLSR7dGVtcGVyYXR1cmVWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcmVzdWx0ICs9IFwiwrDQoVwiO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBXRUFUSEVSX1RZUEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy93ZWF0aGVyVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyVHlwZU5hbWVGcm9tU3ltYm9sQ29kZSA9IChcclxuICBzeW1ib2xDb2RlOiBzdHJpbmdcclxuKTogc3RyaW5nID0+IHtcclxuICBmb3IgKGxldCB3ZWF0aGVyVHlwZSBvZiBXRUFUSEVSX1RZUEVTKSB7XHJcbiAgICBpZiAoc3ltYm9sQ29kZS5pbmNsdWRlcyh3ZWF0aGVyVHlwZS5jb2RlKSkge1xyXG4gICAgICByZXR1cm4gd2VhdGhlclR5cGUubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBXZWF0aGVyVHlwZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1dlYXRoZXJUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9UWVBFUzogV2VhdGhlclR5cGVbXSA9IFtcclxuICB7XHJcbiAgICBjb2RlOiBcImNsZWFyc2t5XCIsXHJcbiAgICBuYW1lOiBcItCn0LjRgdGC0L7QtSDQvdC10LHQvlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJjbG91ZHlcIixcclxuICAgIG5hbWU6IFwi0J7QsdC70LDRh9C90L5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiZmFpclwiLFxyXG4gICAgbmFtZTogXCLQr9GB0L3QvlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJmb2dcIixcclxuICAgIG5hbWU6IFwi0KLRg9C80LDQvVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXJhaW5cIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImhlYXZ5cmFpbmFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXJhaW5zaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INC00L7QttC00YxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlyYWluc2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQuNC70YzQvdGL0Lkg0LTQvtC20LTRjCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldFwiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDQvNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldGFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQuNC70YzQvdGL0Lkg0LzQvtC60YDRi9C5INGB0L3QtdCzINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXNsZWV0c2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDQtNC+0LbQtNGMINGBINC80L7QutGA0YvQvCDRgdC90LXQs9C+0LxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldHNob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INC00L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvCDQuCDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93XCIsXHJcbiAgICBuYW1lOiBcItCh0L3QtdCz0L7Qv9Cw0LRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93YW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93c2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDRgdC90LXQs9C+0L/QsNC0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImhlYXZ5c25vd3Nob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INGB0L3QtdCz0L7Qv9Cw0LQg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0cmFpblwiLFxyXG4gICAgbmFtZTogXCLQm9C10LPQutC40Lkg0LTQvtC20LTRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHJhaW5hbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCb0LXQs9C60LjQuSDQtNC+0LbRjCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRyYWluc2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQndC10LHQvtC70YzRiNC+0Lkg0LTQvtC20LTRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHJhaW5zaG93ZXJzYW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQndC10LHQvtC70YzRiNC+0Lkg0LvQuNCy0L3QtdCy0YvQuSDQtNC+0LbQtNGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNsZWV0XCIsXHJcbiAgICBuYW1lOiBcItCb0LXQs9C60LjQuSDQvNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRzbGVldGFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INC80L7QutGA0YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRzbGVldHNob3dlcnNcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INC00L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNub3dcIixcclxuICAgIG5hbWU6IFwi0JvQtdCz0LrQuNC5INGB0L3QtdCzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0c25vd2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INGB0L3QtdCzINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNub3dzaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCd0LXQsdC+0LvRjNGI0L7QuSDRgdC90LXQs9C+0L/QsNC0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0c3NsZWV0c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JTQvtC20LTRjCDRgSDQvNC+0LrRgNGL0Lwg0YHQvdC10LPQvtC8INC4INCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNzbm93c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LMg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcInBhcnRseWNsb3VkeVwiLFxyXG4gICAgbmFtZTogXCLQn9C10YDQtdC80LXQvdC90LDRjyDQvtCx0LvQsNGH0L3QvtGB0YLRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJyYWluXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00YxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwicmFpbmFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JTQvtC20Ywg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcInJhaW5zaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCb0LjQstC10L3RjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJyYWluc2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbGVldFwiLFxyXG4gICAgbmFtZTogXCLQnNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic2xlZXRhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCc0L7QutGA0YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic2xlZXRzaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbGVldHNob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvCDQuCDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic25vd1wiLFxyXG4gICAgbmFtZTogXCLQodC90LXQs1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbm93YW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQodC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic25vd3Nob3dlcnNcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LPQvtC/0LDQtFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbm93c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LPQvtC/0LDQtCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBSVVNTSUFOX0FCQlJFVklBVElPTlNfRk9SX1RIRV9DQVJESU5BTF9QT0lOVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3J1c3NpYW5BYmJyZXZpYXRpb25zRm9yVGhlQ2FyZGluYWxQb2ludHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMoXHJcbiAgd2luZERpcmVjdGlvbkluRGVncmVlczogbnVtYmVyXHJcbik6IHN0cmluZyB7XHJcbiAgY29uc3QgRlVMTF9BTkdMRTogbnVtYmVyID0gMzYwO1xyXG5cclxuICBsZXQgYWJicmV2aWF0aW9uUG9zaXRpb25PZkNhcmRpbmFsUG9pbnQ6IG51bWJlciA9XHJcbiAgICBNYXRoLnJvdW5kKCh3aW5kRGlyZWN0aW9uSW5EZWdyZWVzIC8gRlVMTF9BTkdMRSkgKiAxMCkgLSAxO1xyXG5cclxuICByZXR1cm4gUlVTU0lBTl9BQkJSRVZJQVRJT05TX0ZPUl9USEVfQ0FSRElOQUxfUE9JTlRTW1xyXG4gICAgYWJicmV2aWF0aW9uUG9zaXRpb25PZkNhcmRpbmFsUG9pbnRcclxuICBdO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBSVVNTSUFOX0FCQlJFVklBVElPTlNfRk9SX1RIRV9DQVJESU5BTF9QT0lOVFM6IHN0cmluZ1tdID0gW1xyXG4gIFwi0KFcIixcclxuICBcItCh0JJcIixcclxuICBcItCSXCIsXHJcbiAgXCLQrtCSXCIsXHJcbiAgXCLQrlwiLFxyXG4gIFwi0K7Ql1wiLFxyXG4gIFwi0JdcIixcclxuICBcItCh0JdcIixcclxuICBcItChXCIsXHJcbl07XHJcbiIsImltcG9ydCB7IGdldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nIH0gZnJvbSBcIi4vZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYWlseUludGVydmFsTmFtZUZyb21UaW1lID0gKHRpbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGRhaWx5SW50ZXJ2YWxOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGxldCBob3VyczogbnVtYmVyID0gZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcodGltZSk7XHJcblxyXG4gIHN3aXRjaCAoaG91cnMpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgZGFpbHlJbnRlcnZhbE5hbWUgKz0gXCLQndC+0YfRjNGOXCI7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgNjpcclxuICAgICAgZGFpbHlJbnRlcnZhbE5hbWUgKz0gXCLQo9GC0YDQvtC8XCI7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgMTI6XHJcbiAgICAgIGRhaWx5SW50ZXJ2YWxOYW1lICs9IFwi0JTQvdC10LxcIjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAxODpcclxuICAgICAgZGFpbHlJbnRlcnZhbE5hbWUgKz0gXCLQktC10YfQtdGA0L7QvFwiO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBkYWlseUludGVydmFsTmFtZTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcgfSBmcm9tIFwiLi9nZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGFpbHlJbnRlcnZhbFBvaW50ID0gKHRpbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBob3VyczogbnVtYmVyID0gZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcodGltZSk7XHJcbiAgcmV0dXJuIGhvdXJzID09PSAwIHx8IGhvdXJzICUgNiA9PT0gMCA/IHRydWUgOiBmYWxzZTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBXZWF0aGVyV2lkZ2V0IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC9XZWF0aGVyV2lkZ2V0XCI7XHJcbmltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDaXR5IH0gZnJvbSBcIi4vV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5XCI7XHJcblxyXG5jb25zdCBraGFya2l2OiBDaXR5ID0gY3JlYXRlQ2l0eSh7XHJcbiAgbmFtZTogXCJLaGFya2l2XCIsXHJcbiAgbGF0aXR1ZGU6IDQ5Ljk4MDgxLFxyXG4gIGxvbmdpdHVkZTogMzYuMjUyNzIsXHJcbiAgYWx0aXR1ZGU6IDE1MixcclxufSk7XHJcblxyXG5uZXcgV2VhdGhlcldpZGdldCgpLm9mQ2l0eShraGFya2l2KS5yZW5kZXJJbihcIiN3ZWF0aGVyXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=