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
/* harmony import */ var _utils_getWindDirectionAbbreviationFromDegrees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_getFullTemperatureValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _utils_getWeatherTypeNameBySymbolCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _utils_getDailyIntervalNameByTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _utils_isDailyIntervalPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
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
    WeatherWidget.prototype.ofCity = function (city) {
        this.city = __assign({}, city);
        return this;
    };
    WeatherWidget.prototype.renderIn = function (targetElementSelector) {
        this.targetElement = this.getTargetElement(targetElementSelector);
        if (this.targetElement) {
            this.loadWeatherDataOfCity();
        }
        if (!this.targetElement) {
            console.warn("[Weather Widget]: Target element not found");
        }
        return this;
    };
    WeatherWidget.prototype.getTargetElement = function (targetElementSelector) {
        return document.querySelector(targetElementSelector);
    };
    WeatherWidget.prototype.loadWeatherDataOfCity = function () {
        var _this = this;
        (0,_utils_getWeatherDataOfCity__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataOfCity)(this.city)
            .then(function (weatherDataOfCity) {
            _this.handleWeatherDataOfCity(weatherDataOfCity)
                .createElement()
                .render();
        })
            .catch(function (err) {
            _this.renderError("[Weather Widget]: Something went wrong...");
        });
        return this;
    };
    WeatherWidget.prototype.handleWeatherDataOfCity = function (weatherDataOfCity) {
        var timeseries = weatherDataOfCity.properties.timeseries; //TODO: fix data type
        this.weatherData = timeseries;
        this.currentWeatherData = timeseries[0];
        // console.log(this.weatherData);
        // console.log(this.currentWeatherData);
        return this;
    };
    WeatherWidget.prototype.createElement = function () {
        this.weatherWidgetElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget"],
        }).getNode();
        this.weatherWidgetElement.appendChild(this.createHeader());
        this.weatherWidgetElement.appendChild(this.createBody());
        this.weatherWidgetElement.appendChild(this.createFooter());
        return this;
    };
    WeatherWidget.prototype.createHeader = function () {
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
            classNames: ["weather-icon"],
        }).getNode();
        weatherIconElement.appendChild((0,_utils_createWeatherTypeIconByWeatherSymbolCode__WEBPACK_IMPORTED_MODULE_5__.createWeatherTypeIconByWeatherSymbolCode)(weatherSymbolCode));
        var temperatureElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["temperature"],
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
    WeatherWidget.prototype.createBody = function () {
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
        var weatherTypeName = (0,_utils_getWeatherTypeNameBySymbolCode__WEBPACK_IMPORTED_MODULE_3__.getWeatherTypeNameBySymbolCode)(weatherSymbolCode);
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
        var dailyIntervalTitle = (0,_utils_getDailyIntervalNameByTime__WEBPACK_IMPORTED_MODULE_4__.getDailyIntervalNameByTime)(time);
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
    WeatherWidget.prototype.createFooter = function () {
        var viewMoreLinkElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "a",
            classNames: ["view-more__link"],
            textContent: "Погода на 2 недели",
            attributes: [
                {
                    name: "href",
                    value: "https://www.gismeteo.ua/weather-kharkiv-5053/2-weeks/",
                },
                {
                    name: "target",
                    value: "_blank",
                },
            ],
        }).getNode();
        var viewMoreElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["view-more"],
        }).getNode();
        viewMoreElement.appendChild(viewMoreLinkElement);
        var weatherWidgetFooter = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__footer"],
        }).getNode();
        weatherWidgetFooter.appendChild(viewMoreElement);
        return weatherWidgetFooter;
    };
    WeatherWidget.prototype.render = function () {
        var _a;
        (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.append(this.weatherWidgetElement);
        return this;
    };
    WeatherWidget.prototype.renderError = function (errorText) {
        var _a;
        var errorElement = new _models_DOMElement__WEBPACK_IMPORTED_MODULE_7__.DOMElement({
            tagName: "div",
            classNames: ["weather-widget__error"],
            textContent: errorText,
        }).getNode();
        (_a = this.targetElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorElement);
        return this;
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
/* harmony export */   "getWindDirectionAbbreviationFromDegrees": () => (/* binding */ getWindDirectionAbbreviationFromDegrees)
/* harmony export */ });
/* harmony import */ var _constants_russianAbbreviationsForTheCardinalPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function getWindDirectionAbbreviationFromDegrees(windDirectionInDegrees) {
    var FULL_ANGLE = 360;
    var abbreviationPositionOfCardinalPoint = Math.round((windDirectionInDegrees / FULL_ANGLE) * 10) - 1;
    return _constants_russianAbbreviationsForTheCardinalPoints__WEBPACK_IMPORTED_MODULE_0__.RUSSIAN_ABBREVIATIONS_FOR_THE_CARDINAL_POINTS[abbreviationPositionOfCardinalPoint];
}


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherTypeNameBySymbolCode": () => (/* binding */ getWeatherTypeNameBySymbolCode)
/* harmony export */ });
/* harmony import */ var _constants_weatherTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var getWeatherTypeNameBySymbolCode = function (symbolCode) {
    for (var _i = 0, WEATHER_TYPES_1 = _constants_weatherTypes__WEBPACK_IMPORTED_MODULE_0__.WEATHER_TYPES; _i < WEATHER_TYPES_1.length; _i++) {
        var weatherType = WEATHER_TYPES_1[_i];
        if (symbolCode.includes(weatherType.code)) {
            return weatherType.name;
        }
    }
    return "";
};


/***/ }),
/* 7 */
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
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDailyIntervalNameByTime": () => (/* binding */ getDailyIntervalNameByTime)
/* harmony export */ });
/* harmony import */ var _getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var getDailyIntervalNameByTime = function (time) {
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
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHoursFromDateTimeString": () => (/* binding */ getHoursFromDateTimeString)
/* harmony export */ });
var getHoursFromDateTimeString = function (dateString) {
    return new Date(dateString).getHours();
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeatherTypeIconByWeatherSymbolCode": () => (/* binding */ createWeatherTypeIconByWeatherSymbolCode)
/* harmony export */ });
/* harmony import */ var _models_DOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDailyIntervalPoint": () => (/* binding */ isDailyIntervalPoint)
/* harmony export */ });
/* harmony import */ var _getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var isDailyIntervalPoint = function (time) {
    var hours = (0,_getHoursFromDateTimeString__WEBPACK_IMPORTED_MODULE_0__.getHoursFromDateTimeString)(time);
    return hours === 0 || hours % 6 === 0 ? true : false;
};


/***/ }),
/* 13 */
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
/* harmony import */ var _WeatherWidget_utils_createCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUNzQztBQUNoQztBQUNjO0FBQ1I7QUFDNEI7QUFDeEM7QUFFbkI7QUFJakQ7SUFBQTtJQTZSQSxDQUFDO0lBdFJRLDhCQUFNLEdBQWIsVUFBYyxJQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLGdCQUFRLElBQUksQ0FBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IscUJBQTZCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbEUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sd0NBQWdCLEdBQXhCLFVBQXlCLHFCQUE2QjtRQUNwRCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sNkNBQXFCLEdBQTdCO1FBQUEsaUJBWUM7UUFYQyxpRkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLElBQUksQ0FBQyxVQUFDLGlCQUFpQjtZQUN0QixLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7aUJBQzVDLGFBQWEsRUFBRTtpQkFDZixNQUFNLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTywrQ0FBdUIsR0FBL0IsVUFBZ0MsaUJBQXNCO1FBRXBDLGNBQVUsR0FDdEIsaUJBQXdCLHNCQURGLENBQ0csQ0FBQyxxQkFBcUI7UUFFbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxpQ0FBaUM7UUFDakMsd0NBQXdDO1FBRXhDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksMERBQVUsQ0FBQztZQUN6QyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQy9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRTNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0UsSUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEMsSUFBTSxpQkFBaUIsR0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVoRSxJQUFNLFdBQVcsR0FDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQU0sb0JBQW9CLEdBQVcsdUZBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUUsSUFBTSxlQUFlLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQzNDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxLQUFHLFFBQVU7U0FDM0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsSUFBTSxrQkFBa0IsR0FBUyxJQUFJLDBEQUFVLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDN0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsa0JBQWtCLENBQUMsV0FBVyxDQUM1Qix5SEFBd0MsQ0FBQyxpQkFBaUIsQ0FBQyxDQUM1RCxDQUFDO1FBRUYsSUFBTSxrQkFBa0IsR0FBUyxJQUFJLDBEQUFVLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDM0IsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFYixJQUFNLG1CQUFtQixHQUFTLElBQUksMERBQVUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3ZDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVwRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBVSxHQUFsQjtRQUNFLElBQU0saUJBQWlCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQzdDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDckMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUM7UUFDbEUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLENBQUM7UUFFM0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRU8sbURBQTJCLEdBQW5DO1FBQ0UsSUFBTSxpQkFBaUIsR0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNoRSxJQUFNLGVBQWUsR0FDbkIscUdBQThCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVwRCxJQUFNLFNBQVMsR0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFELElBQU0sc0JBQXNCLEdBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRSxJQUFNLHlCQUF5QixHQUM3Qix1SEFBdUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxFLElBQU0sa0JBQWtCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQzlDLE9BQU8sRUFBRSxHQUFHO1lBQ1osV0FBVyxFQUFFLEtBQUcsZUFBaUI7U0FDbEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsSUFBTSxXQUFXLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxHQUFHO1lBQ1osV0FBVyxFQUFLLFNBQVMsdUJBQVEseUJBQTJCO1NBQzdELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0scUJBQXFCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQ2pELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDaEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIscUJBQXFCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQscUJBQXFCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9DLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVPLDREQUFvQyxHQUE1QztRQUNFLElBQUksd0JBQXdCLEdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sOEJBQThCLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQU0sOEJBQThCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQzFELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDaEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELHNCQUFzQjtZQUN0QixJQUFNLGVBQWUsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQU0sSUFBSSxHQUFXLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFFMUMsSUFBSSxpRkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsOEJBQThCLENBQUMsV0FBVyxDQUN4QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQ2pELENBQUM7Z0JBRUYsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUVELElBQUksd0JBQXdCLEtBQUssOEJBQThCLEVBQUU7Z0JBQy9ELE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyw4QkFBOEIsQ0FBQztJQUN4QyxDQUFDO0lBRU8sa0RBQTBCLEdBQWxDLFVBQW1DLGVBQW9CO1FBQ3JELElBQU0sSUFBSSxHQUFXLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBTSxpQkFBaUIsR0FDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxJQUFNLFdBQVcsR0FDZixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3ZELElBQU0sb0JBQW9CLEdBQUcsdUZBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsSUFBTSxrQkFBa0IsR0FBVyw2RkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFNLHlCQUF5QixHQUFTLElBQUksMERBQVUsQ0FBQztZQUNyRCxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLFdBQVcsRUFBRSxLQUFHLGtCQUFvQjtTQUNyQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFYixJQUFNLGtCQUFrQixHQUFTLElBQUksMERBQVUsQ0FBQztZQUM5QyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzdDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLGtCQUFrQixDQUFDLFdBQVcsQ0FDNUIseUhBQXdDLENBQUMsaUJBQWlCLENBQUMsQ0FDNUQsQ0FBQztRQUVGLElBQU0sd0JBQXdCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDMUMsV0FBVyxFQUFFLEtBQUcsb0JBQXNCO1NBQ3ZDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLElBQU0sd0JBQXdCLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDL0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsd0JBQXdCLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDaEUsd0JBQXdCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsd0JBQXdCLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0QsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDRSxJQUFNLG1CQUFtQixHQUFTLElBQUksMERBQVUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsR0FBRztZQUNaLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQy9CLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFO2dCQUNWO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSx1REFBdUQ7aUJBQy9EO2dCQUNEO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsSUFBTSxlQUFlLEdBQVMsSUFBSSwwREFBVSxDQUFDO1lBQzNDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQzFCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLGVBQWUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVqRCxJQUFNLG1CQUFtQixHQUFTLElBQUksMERBQVUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3ZDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVqRCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFTyw4QkFBTSxHQUFkOztRQUNFLFVBQUksQ0FBQyxhQUFhLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV0RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixTQUFpQjs7UUFDbkMsSUFBTSxZQUFZLEdBQUcsSUFBSSwwREFBVSxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDckMsV0FBVyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsVUFBSSxDQUFDLGFBQWEsMENBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlNNLFNBQWUsb0JBQW9CLENBQUMsSUFBVTs7Ozs7O29CQUM3QyxNQUFNLEdBQ1YsNkRBQTZELENBQUM7b0JBRXpELHFCQUFNLEtBQUssQ0FDYixNQUFNLFlBQU8sSUFBSSxDQUFDLFFBQVEsYUFBUSxJQUFJLENBQUMsU0FBUyxrQkFBYSxJQUFJLENBQUMsUUFBVSxDQUNoRixDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3dCQUZyQyxzQkFBTyxTQUU4QixFQUFDOzs7O0NBQ3ZDOzs7Ozs7Ozs7Ozs7QUNUcUg7QUFFL0csU0FBUyx1Q0FBdUMsQ0FDckQsc0JBQThCO0lBRTlCLElBQU0sVUFBVSxHQUFXLEdBQUcsQ0FBQztJQUUvQixJQUFJLG1DQUFtQyxHQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdELE9BQU8sOEhBQTZDLENBQ2xELG1DQUFtQyxDQUNwQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7QUNiTSxJQUFNLDZDQUE2QyxHQUFhO0lBQ3JFLEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztJQUNILElBQUk7SUFDSixHQUFHO0lBQ0gsSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztDQUNKLENBQUM7Ozs7Ozs7Ozs7O0FDVkssSUFBTSx1QkFBdUIsR0FBRyxVQUFDLGdCQUF3QjtJQUM5RCxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDeEIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRS9DLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDYjtJQUVELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxNQUFJLGdCQUFrQixDQUFDO0tBQ2xDO0lBRUQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxJQUFJLE1BQUksZ0JBQWtCLENBQUM7S0FDbEM7SUFFRCxNQUFNLElBQUksSUFBSSxDQUFDO0lBRWYsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQndEO0FBRW5ELElBQU0sOEJBQThCLEdBQUcsVUFBQyxVQUFrQjtJQUMvRCxLQUF3QixVQUFhLEVBQWIsb0ZBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRTtRQUFsQyxJQUFJLFdBQVc7UUFDbEIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7S0FDRjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1JLLElBQU0sYUFBYSxHQUFrQjtJQUMxQztRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxxQkFBcUI7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLDhCQUE4QjtLQUNyQztJQUNEO1FBQ0UsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSx3Q0FBd0M7S0FDL0M7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSx1QkFBdUI7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxJQUFJLEVBQUUsMkJBQTJCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxpQkFBaUI7S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsSUFBSSxFQUFFLG1DQUFtQztLQUMxQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLElBQUksRUFBRSxpQ0FBaUM7S0FDeEM7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsSUFBSSxFQUFFLGlCQUFpQjtLQUN4QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLElBQUksRUFBRSxnQ0FBZ0M7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsSUFBSSxFQUFFLG1CQUFtQjtLQUMxQjtDQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZLd0U7QUFFbkUsSUFBTSwwQkFBMEIsR0FBRyxVQUFDLElBQVk7SUFDckQsSUFBSSxpQkFBaUIsR0FBVyxFQUFFLENBQUM7SUFDbkMsSUFBSSxLQUFLLEdBQVcsdUZBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckQsUUFBUSxLQUFLLEVBQUU7UUFDYixLQUFLLENBQUM7WUFDSixpQkFBaUIsSUFBSSxPQUFPLENBQUM7WUFDN0IsTUFBTTtRQUVSLEtBQUssQ0FBQztZQUNKLGlCQUFpQixJQUFJLE9BQU8sQ0FBQztZQUM3QixNQUFNO1FBRVIsS0FBSyxFQUFFO1lBQ0wsaUJBQWlCLElBQUksTUFBTSxDQUFDO1lBQzVCLE1BQU07UUFFUixLQUFLLEVBQUU7WUFDTCxpQkFBaUIsSUFBSSxTQUFTLENBQUM7WUFDL0IsTUFBTTtLQUNUO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQztBQUMzQixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDekJLLElBQU0sMEJBQTBCLEdBQUcsVUFBQyxVQUFrQjtJQUMzRCxXQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFBL0IsQ0FBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDRGdCO0FBRTNDLElBQU0sd0NBQXdDLEdBQUcsVUFDdEQsVUFBa0I7SUFFbEIsSUFBTSxzQkFBc0IsR0FBVyx5QkFBeUIsQ0FBQztJQUVqRSxPQUFPLElBQUksMERBQVUsQ0FBQztRQUNwQixPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2pDLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxLQUFHLHNCQUFzQixHQUFHLFVBQVUsU0FBTTthQUNwRDtZQUNEO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxLQUFHLFVBQVk7YUFDdkI7U0FDRjtLQUNGLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNsQkY7SUFHRSxvQkFBWSxLQUFxQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDOUIsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDL0IsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDL0IsY0FBYyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sNEJBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQWUsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFBc0IsT0FBZTtRQUNuQyxJQUFJLGNBQWMsR0FBWSxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGtDQUFhLEdBQXJCLFVBQXNCLFVBQWdDO1FBQ3BELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBc0IsVUFBVSxFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVLEVBQUU7Z0JBQTdCLElBQUksU0FBUztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxrQ0FBYSxHQUFyQixVQUFzQixVQUEwQztRQUM5RCxJQUFJLFVBQVUsRUFBRTtZQUNkLEtBQXNCLFVBQVUsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVSxFQUFFO2dCQUE3QixJQUFJLFNBQVM7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVEO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxtQ0FBYyxHQUF0QixVQUF1QixXQUErQjtRQUNwRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGlDQUFZLEdBQXBCLFVBQXFCLFNBQTZCO1FBQ2hELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNUR5RTtBQUVuRSxJQUFNLG9CQUFvQixHQUFHLFVBQUMsSUFBWTtJQUMvQyxJQUFJLEtBQUssR0FBVyx1RkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxPQUFPLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hLLFNBQVMsVUFBVSxDQUFDLE9BQWE7SUFDdEMsb0JBQVksT0FBTyxFQUFHO0FBQ3hCLENBQUM7Ozs7OztVQ0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjhEO0FBRUE7QUFFOUQsSUFBTSxPQUFPLEdBQVMsMkVBQVUsQ0FBQztJQUMvQixJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsSUFBSSx1RUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvV2VhdGhlcldpZGdldC50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldFdlYXRoZXJEYXRhT2ZDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvZ2V0V2luZERpcmVjdGlvbkFiYnJldmlhdGlvbkZyb21EZWdyZWVzLnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvY29uc3RhbnRzL3J1c3NpYW5BYmJyZXZpYXRpb25zRm9yVGhlQ2FyZGluYWxQb2ludHMudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXRGdWxsVGVtcGVyYXR1cmVWYWx1ZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldFdlYXRoZXJUeXBlTmFtZUJ5U3ltYm9sQ29kZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L2NvbnN0YW50cy93ZWF0aGVyVHlwZXMudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9nZXREYWlseUludGVydmFsTmFtZUJ5VGltZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L3V0aWxzL2dldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nLnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZS50cyIsIndlYnBhY2s6Ly9jYWxlbmRhci8uL3NyYy9XZWF0aGVyV2lkZ2V0L21vZGVscy9ET01FbGVtZW50LnRzIiwid2VicGFjazovL2NhbGVuZGFyLy4vc3JjL1dlYXRoZXJXaWRnZXQvdXRpbHMvaXNEYWlseUludGVydmFsUG9pbnQudHMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvV2VhdGhlcldpZGdldC91dGlscy9jcmVhdGVDaXR5LnRzIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGVuZGFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsZW5kYXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGFPZkNpdHkgfSBmcm9tIFwiLi91dGlscy9nZXRXZWF0aGVyRGF0YU9mQ2l0eVwiO1xyXG5pbXBvcnQgeyBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMgfSBmcm9tIFwiLi91dGlscy9nZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXNcIjtcclxuaW1wb3J0IHsgZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUgfSBmcm9tIFwiLi91dGlscy9nZXRGdWxsVGVtcGVyYXR1cmVWYWx1ZVwiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyVHlwZU5hbWVCeVN5bWJvbENvZGUgfSBmcm9tIFwiLi91dGlscy9nZXRXZWF0aGVyVHlwZU5hbWVCeVN5bWJvbENvZGVcIjtcclxuaW1wb3J0IHsgZ2V0RGFpbHlJbnRlcnZhbE5hbWVCeVRpbWUgfSBmcm9tIFwiLi91dGlscy9nZXREYWlseUludGVydmFsTmFtZUJ5VGltZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlIH0gZnJvbSBcIi4vdXRpbHMvY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZVwiO1xyXG5pbXBvcnQgeyBpc0RhaWx5SW50ZXJ2YWxQb2ludCB9IGZyb20gXCIuL3V0aWxzL2lzRGFpbHlJbnRlcnZhbFBvaW50XCI7XHJcblxyXG5pbXBvcnQgeyBET01FbGVtZW50IH0gZnJvbSBcIi4vbW9kZWxzL0RPTUVsZW1lbnRcIjtcclxuXHJcbmltcG9ydCB7IENpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0NpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyV2lkZ2V0IHtcclxuICBwcml2YXRlIHRhcmdldEVsZW1lbnQhOiBFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIHdlYXRoZXJXaWRnZXRFbGVtZW50ITogTm9kZTtcclxuICBwcml2YXRlIGNpdHkhOiBDaXR5O1xyXG4gIHByaXZhdGUgd2VhdGhlckRhdGEhOiBhbnk7IC8vIFRPRE86IGZpeCBkYXRhIHR5cGVcclxuICBwcml2YXRlIGN1cnJlbnRXZWF0aGVyRGF0YSE6IGFueTsgLy8gVE9ETzogZml4IGRhdGEgdHlwZVxyXG5cclxuICBwdWJsaWMgb2ZDaXR5KGNpdHk6IENpdHkpOiB0aGlzIHtcclxuICAgIHRoaXMuY2l0eSA9IHsgLi4uY2l0eSB9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVySW4odGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudCh0YXJnZXRFbGVtZW50U2VsZWN0b3IpO1xyXG5cclxuICAgIGlmICh0aGlzLnRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5sb2FkV2VhdGhlckRhdGFPZkNpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJbV2VhdGhlciBXaWRnZXRdOiBUYXJnZXQgZWxlbWVudCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldEVsZW1lbnQodGFyZ2V0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbGVtZW50U2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkV2VhdGhlckRhdGFPZkNpdHkoKTogdGhpcyB7XHJcbiAgICBnZXRXZWF0aGVyRGF0YU9mQ2l0eSh0aGlzLmNpdHkpXHJcbiAgICAgIC50aGVuKCh3ZWF0aGVyRGF0YU9mQ2l0eSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlV2VhdGhlckRhdGFPZkNpdHkod2VhdGhlckRhdGFPZkNpdHkpXHJcbiAgICAgICAgICAuY3JlYXRlRWxlbWVudCgpXHJcbiAgICAgICAgICAucmVuZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihcIltXZWF0aGVyIFdpZGdldF06IFNvbWV0aGluZyB3ZW50IHdyb25nLi4uXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlV2VhdGhlckRhdGFPZkNpdHkod2VhdGhlckRhdGFPZkNpdHk6IGFueSk6IHRoaXMge1xyXG4gICAgbGV0IHtcclxuICAgICAgcHJvcGVydGllczogeyB0aW1lc2VyaWVzIH0sXHJcbiAgICB9ID0gd2VhdGhlckRhdGFPZkNpdHkgYXMgYW55OyAvL1RPRE86IGZpeCBkYXRhIHR5cGVcclxuXHJcbiAgICB0aGlzLndlYXRoZXJEYXRhID0gdGltZXNlcmllcztcclxuICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhID0gdGltZXNlcmllc1swXTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXJEYXRhKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFdlYXRoZXJEYXRhKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpOiB0aGlzIHtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcIndlYXRoZXItd2lkZ2V0XCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoKSk7XHJcbiAgICB0aGlzLndlYXRoZXJXaWRnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQm9keSgpKTtcclxuICAgIHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcigpOiBOb2RlIHtcclxuICAgIGNvbnN0IGNpdHlOYW1lOiBzdHJpbmcgPSB0aGlzLmNpdHkubmFtZTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sQ29kZTogc3RyaW5nID1cclxuICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5uZXh0XzFfaG91cnMuc3VtbWFyeS5zeW1ib2xfY29kZTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZTogbnVtYmVyID1cclxuICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5pbnN0YW50LmRldGFpbHMuYWlyX3RlbXBlcmF0dXJlO1xyXG4gICAgY29uc3QgZnVsbFRlbXBlcmF0dXJlVmFsdWU6IHN0cmluZyA9IGdldEZ1bGxUZW1wZXJhdHVyZVZhbHVlKHRlbXBlcmF0dXJlKTtcclxuXHJcbiAgICBjb25zdCBjaXR5TmFtZUVsZW1lbnQ6IE5vZGUgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcImNpdHktbmFtZVwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke2NpdHlOYW1lfWAsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckljb25FbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLWljb25cIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgd2VhdGhlckljb25FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICBjcmVhdGVXZWF0aGVyVHlwZUljb25CeVdlYXRoZXJTeW1ib2xDb2RlKHdlYXRoZXJTeW1ib2xDb2RlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZUVsZW1lbnQ6IE5vZGUgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcInRlbXBlcmF0dXJlXCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogZnVsbFRlbXBlcmF0dXJlVmFsdWUsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEhlYWRlcjogTm9kZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2hlYWRlclwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICB3ZWF0aGVyV2lkZ2V0SGVhZGVyLmFwcGVuZENoaWxkKGNpdHlOYW1lRWxlbWVudCk7XHJcbiAgICB3ZWF0aGVyV2lkZ2V0SGVhZGVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uRWxlbWVudCk7XHJcbiAgICB3ZWF0aGVyV2lkZ2V0SGVhZGVyLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJXaWRnZXRIZWFkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJvZHkoKTogTm9kZSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyV2lkZ2V0Qm9keTogTm9kZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2JvZHlcIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgd2VhdGhlcldpZGdldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDdXJyZW50V2VhdGhlckVsZW1lbnQoKSk7XHJcbiAgICB3ZWF0aGVyV2lkZ2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVdlYXRoZXJPZkRhaWx5SW50ZXJ2YWxzRWxlbWVudCgpKTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlcldpZGdldEJvZHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1cnJlbnRXZWF0aGVyRWxlbWVudCgpOiBOb2RlIHtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2xDb2RlOiBzdHJpbmcgPVxyXG4gICAgICB0aGlzLmN1cnJlbnRXZWF0aGVyRGF0YS5kYXRhLm5leHRfMV9ob3Vycy5zdW1tYXJ5LnN5bWJvbF9jb2RlO1xyXG4gICAgY29uc3Qgd2VhdGhlclR5cGVOYW1lOiBzdHJpbmcgPVxyXG4gICAgICBnZXRXZWF0aGVyVHlwZU5hbWVCeVN5bWJvbENvZGUod2VhdGhlclN5bWJvbENvZGUpO1xyXG5cclxuICAgIGNvbnN0IHdpbmRTcGVlZDogbnVtYmVyID1cclxuICAgICAgdGhpcy5jdXJyZW50V2VhdGhlckRhdGEuZGF0YS5pbnN0YW50LmRldGFpbHMud2luZF9zcGVlZDtcclxuICAgIGNvbnN0IHdpbmREaXJlY3Rpb25JbkRlZ3JlZXM6IG51bWJlciA9XHJcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXJEYXRhLmRhdGEuaW5zdGFudC5kZXRhaWxzLndpbmRfZnJvbV9kaXJlY3Rpb247XHJcbiAgICBjb25zdCB3aW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uOiBzdHJpbmcgPVxyXG4gICAgICBnZXRXaW5kRGlyZWN0aW9uQWJicmV2aWF0aW9uRnJvbURlZ3JlZXMod2luZERpcmVjdGlvbkluRGVncmVlcyk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlclR5cGVFbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcInBcIixcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke3dlYXRoZXJUeXBlTmFtZX1gLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGNvbnN0IHdpbmRFbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcInBcIixcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke3dpbmRTcGVlZH3QvC/RgSwgJHt3aW5kRGlyZWN0aW9uQWJicmV2aWF0aW9ufWAsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJFbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJjdXJyZW50LXdlYXRoZXJcIl0sXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY3VycmVudFdlYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlRWxlbWVudCk7XHJcbiAgICBjdXJyZW50V2VhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQod2luZEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50V2VhdGhlckVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVdlYXRoZXJPZkRhaWx5SW50ZXJ2YWxzRWxlbWVudCgpOiBOb2RlIHtcclxuICAgIGxldCB0b3RhbERhaWx5SW50ZXJ2YWxQb2ludHM6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdCBMSU1JVF9PRl9EQUlMWV9JTlRFUlZBTF9QT0lOVFMgPSA0O1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJPZkRheWxpSW50ZXJ2YWxzRWxlbWVudDogTm9kZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiZGFpbHktaW50ZXJ2YWxzXCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLndlYXRoZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIFRPRE86IGZpeCBkYXRhIHR5cGVcclxuICAgICAgY29uc3Qgd2VhdGhlckRhdGFJdGVtOiBhbnkgPSB0aGlzLndlYXRoZXJEYXRhW2ldO1xyXG4gICAgICBjb25zdCB0aW1lOiBzdHJpbmcgPSB3ZWF0aGVyRGF0YUl0ZW0udGltZTtcclxuXHJcbiAgICAgIGlmIChpc0RhaWx5SW50ZXJ2YWxQb2ludCh0aW1lKSkge1xyXG4gICAgICAgIHdlYXRoZXJPZkRheWxpSW50ZXJ2YWxzRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIHRoaXMuY3JlYXRlRGFpbHlJbnRlcnZhbEVsZW1lbnQod2VhdGhlckRhdGFJdGVtKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRvdGFsRGFpbHlJbnRlcnZhbFBvaW50cysrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG90YWxEYWlseUludGVydmFsUG9pbnRzID09PSBMSU1JVF9PRl9EQUlMWV9JTlRFUlZBTF9QT0lOVFMpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2ZEYXlsaUludGVydmFsc0VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURhaWx5SW50ZXJ2YWxFbGVtZW50KHdlYXRoZXJEYXRhSXRlbTogYW55KTogTm9kZSB7XHJcbiAgICBjb25zdCB0aW1lOiBzdHJpbmcgPSB3ZWF0aGVyRGF0YUl0ZW0udGltZTtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2xDb2RlOiBzdHJpbmcgPVxyXG4gICAgICB3ZWF0aGVyRGF0YUl0ZW0uZGF0YS5uZXh0XzFfaG91cnMuc3VtbWFyeS5zeW1ib2xfY29kZTtcclxuXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZTogbnVtYmVyID1cclxuICAgICAgd2VhdGhlckRhdGFJdGVtLmRhdGEuaW5zdGFudC5kZXRhaWxzLmFpcl90ZW1wZXJhdHVyZTtcclxuICAgIGNvbnN0IGZ1bGxUZW1wZXJhdHVyZVZhbHVlID0gZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUodGVtcGVyYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IGRhaWx5SW50ZXJ2YWxUaXRsZTogc3RyaW5nID0gZ2V0RGFpbHlJbnRlcnZhbE5hbWVCeVRpbWUodGltZSk7XHJcblxyXG4gICAgY29uc3QgZGFpbHlJbnRlcnZhbFRpdGxlRWxlbWVudDogTm9kZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wiZGFpbHktaW50ZXJ2YWxfX3RpdGxlXCJdLFxyXG4gICAgICB0ZXh0Q29udGVudDogYCR7ZGFpbHlJbnRlcnZhbFRpdGxlfWAsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckljb25FbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJkYWlseS1pbnRlcnZhbF9fd2VhdGhlci1pY29uXCJdLFxyXG4gICAgfSkuZ2V0Tm9kZSgpO1xyXG5cclxuICAgIHdlYXRoZXJJY29uRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgY3JlYXRlV2VhdGhlclR5cGVJY29uQnlXZWF0aGVyU3ltYm9sQ29kZSh3ZWF0aGVyU3ltYm9sQ29kZSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGFpbHlJbnRlcnZhbFRlbXBlcmF0dXJlOiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJkYWlseS1pbnRlcnZhbF9fdGVtZXJhdHVyZVwiXSxcclxuICAgICAgdGV4dENvbnRlbnQ6IGAke2Z1bGxUZW1wZXJhdHVyZVZhbHVlfWAsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgY29uc3QgZGFpbHlJbnRlcnZhbEl0ZW1FbGVtZW50OiBOb2RlID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJkYWlseS1pbnRlcnZhbFwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBkYWlseUludGVydmFsSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGFpbHlJbnRlcnZhbFRpdGxlRWxlbWVudCk7XHJcbiAgICBkYWlseUludGVydmFsSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQod2VhdGhlckljb25FbGVtZW50KTtcclxuICAgIGRhaWx5SW50ZXJ2YWxJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkYWlseUludGVydmFsVGVtcGVyYXR1cmUpO1xyXG5cclxuICAgIHJldHVybiBkYWlseUludGVydmFsSXRlbUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUZvb3RlcigpOiBOb2RlIHtcclxuICAgIGNvbnN0IHZpZXdNb3JlTGlua0VsZW1lbnQ6IE5vZGUgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiYVwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ2aWV3LW1vcmVfX2xpbmtcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBcItCf0L7Qs9C+0LTQsCDQvdCwIDIg0L3QtdC00LXQu9C4XCIsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhyZWZcIixcclxuICAgICAgICAgIHZhbHVlOiBcImh0dHBzOi8vd3d3Lmdpc21ldGVvLnVhL3dlYXRoZXIta2hhcmtpdi01MDUzLzItd2Vla3MvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInRhcmdldFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiX2JsYW5rXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICBjb25zdCB2aWV3TW9yZUVsZW1lbnQ6IE5vZGUgPSBuZXcgRE9NRWxlbWVudCh7XHJcbiAgICAgIHRhZ05hbWU6IFwiZGl2XCIsXHJcbiAgICAgIGNsYXNzTmFtZXM6IFtcInZpZXctbW9yZVwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICB2aWV3TW9yZUVsZW1lbnQuYXBwZW5kQ2hpbGQodmlld01vcmVMaW5rRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldEZvb3RlcjogTm9kZSA9IG5ldyBET01FbGVtZW50KHtcclxuICAgICAgdGFnTmFtZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NOYW1lczogW1wid2VhdGhlci13aWRnZXRfX2Zvb3RlclwiXSxcclxuICAgIH0pLmdldE5vZGUoKTtcclxuXHJcbiAgICB3ZWF0aGVyV2lkZ2V0Rm9vdGVyLmFwcGVuZENoaWxkKHZpZXdNb3JlRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJXaWRnZXRGb290ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB0aGlzIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudD8uYXBwZW5kKHRoaXMud2VhdGhlcldpZGdldEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihlcnJvclRleHQ6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoe1xyXG4gICAgICB0YWdOYW1lOiBcImRpdlwiLFxyXG4gICAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLXdpZGdldF9fZXJyb3JcIl0sXHJcbiAgICAgIHRleHRDb250ZW50OiBlcnJvclRleHQsXHJcbiAgICB9KS5nZXROb2RlKCk7XHJcblxyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50Py5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhT2ZDaXR5KGNpdHk6IENpdHkpOiBQcm9taXNlPE9iamVjdD4ge1xyXG4gIGNvbnN0IGFwaVVybDogc3RyaW5nID1cclxuICAgIFwiaHR0cHM6Ly9hcGkubWV0Lm5vL3dlYXRoZXJhcGkvbG9jYXRpb25mb3JlY2FzdC8yLjAvY29tcGFjdD9cIjtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxyXG4gICAgYCR7YXBpVXJsfWxhdD0ke2NpdHkubGF0aXR1ZGV9Jmxvbj0ke2NpdHkubG9uZ2l0dWRlfSZhbHRpdHVkZT0ke2NpdHkuYWx0aXR1ZGV9YFxyXG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUlVTU0lBTl9BQkJSRVZJQVRJT05TX0ZPUl9USEVfQ0FSRElOQUxfUE9JTlRTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9ydXNzaWFuQWJicmV2aWF0aW9uc0ZvclRoZUNhcmRpbmFsUG9pbnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZERpcmVjdGlvbkFiYnJldmlhdGlvbkZyb21EZWdyZWVzKFxyXG4gIHdpbmREaXJlY3Rpb25JbkRlZ3JlZXM6IG51bWJlclxyXG4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IEZVTExfQU5HTEU6IG51bWJlciA9IDM2MDtcclxuXHJcbiAgbGV0IGFiYnJldmlhdGlvblBvc2l0aW9uT2ZDYXJkaW5hbFBvaW50OiBudW1iZXIgPVxyXG4gICAgTWF0aC5yb3VuZCgod2luZERpcmVjdGlvbkluRGVncmVlcyAvIEZVTExfQU5HTEUpICogMTApIC0gMTtcclxuXHJcbiAgcmV0dXJuIFJVU1NJQU5fQUJCUkVWSUFUSU9OU19GT1JfVEhFX0NBUkRJTkFMX1BPSU5UU1tcclxuICAgIGFiYnJldmlhdGlvblBvc2l0aW9uT2ZDYXJkaW5hbFBvaW50XHJcbiAgXTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUlVTU0lBTl9BQkJSRVZJQVRJT05TX0ZPUl9USEVfQ0FSRElOQUxfUE9JTlRTOiBzdHJpbmdbXSA9IFtcclxuICBcItChXCIsXHJcbiAgXCLQodCSXCIsXHJcbiAgXCLQklwiLFxyXG4gIFwi0K7QklwiLFxyXG4gIFwi0K5cIixcclxuICBcItCu0JdcIixcclxuICBcItCXXCIsXHJcbiAgXCLQodCXXCIsXHJcbiAgXCLQoVwiLFxyXG5dO1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0RnVsbFRlbXBlcmF0dXJlVmFsdWUgPSAodGVtcGVyYXR1cmVWYWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIHRlbXBlcmF0dXJlVmFsdWUgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmVWYWx1ZSk7XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID09PSAwKSB7XHJcbiAgICByZXN1bHQgKz0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0ZW1wZXJhdHVyZVZhbHVlID4gMCkge1xyXG4gICAgcmVzdWx0ICs9IGArJHt0ZW1wZXJhdHVyZVZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBpZiAodGVtcGVyYXR1cmVWYWx1ZSA8IDApIHtcclxuICAgIHJlc3VsdCArPSBgLSR7dGVtcGVyYXR1cmVWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcmVzdWx0ICs9IFwiwrDQoVwiO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBXRUFUSEVSX1RZUEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy93ZWF0aGVyVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyVHlwZU5hbWVCeVN5bWJvbENvZGUgPSAoc3ltYm9sQ29kZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBmb3IgKGxldCB3ZWF0aGVyVHlwZSBvZiBXRUFUSEVSX1RZUEVTKSB7XHJcbiAgICBpZiAoc3ltYm9sQ29kZS5pbmNsdWRlcyh3ZWF0aGVyVHlwZS5jb2RlKSkge1xyXG4gICAgICByZXR1cm4gd2VhdGhlclR5cGUubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBXZWF0aGVyVHlwZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1dlYXRoZXJUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9UWVBFUzogV2VhdGhlclR5cGVbXSA9IFtcclxuICB7XHJcbiAgICBjb2RlOiBcImNsZWFyc2t5XCIsXHJcbiAgICBuYW1lOiBcItCn0LjRgdGC0L7QtSDQvdC10LHQvlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJjbG91ZHlcIixcclxuICAgIG5hbWU6IFwi0J7QsdC70LDRh9C90L5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiZmFpclwiLFxyXG4gICAgbmFtZTogXCLQr9GB0L3QvlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJmb2dcIixcclxuICAgIG5hbWU6IFwi0KLRg9C80LDQvVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXJhaW5cIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImhlYXZ5cmFpbmFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXJhaW5zaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INC00L7QttC00YxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlyYWluc2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQuNC70YzQvdGL0Lkg0LTQvtC20LTRjCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldFwiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDQvNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldGFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQuNC70YzQvdGL0Lkg0LzQvtC60YDRi9C5INGB0L3QtdCzINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJoZWF2eXNsZWV0c2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDQtNC+0LbQtNGMINGBINC80L7QutGA0YvQvCDRgdC90LXQs9C+0LxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbGVldHNob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INC00L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvCDQuCDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93XCIsXHJcbiAgICBuYW1lOiBcItCh0L3QtdCz0L7Qv9Cw0LRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93YW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwiaGVhdnlzbm93c2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQodC40LvRjNC90YvQuSDRgdC90LXQs9C+0L/QsNC0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImhlYXZ5c25vd3Nob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCh0LjQu9GM0L3Ri9C5INGB0L3QtdCz0L7Qv9Cw0LQg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0cmFpblwiLFxyXG4gICAgbmFtZTogXCLQm9C10LPQutC40Lkg0LTQvtC20LTRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHJhaW5hbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCb0LXQs9C60LjQuSDQtNC+0LbRjCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRyYWluc2hvd2Vyc1wiLFxyXG4gICAgbmFtZTogXCLQndC10LHQvtC70YzRiNC+0Lkg0LTQvtC20LTRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHJhaW5zaG93ZXJzYW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQndC10LHQvtC70YzRiNC+0Lkg0LvQuNCy0L3QtdCy0YvQuSDQtNC+0LbQtNGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNsZWV0XCIsXHJcbiAgICBuYW1lOiBcItCb0LXQs9C60LjQuSDQvNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRzbGVldGFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INC80L7QutGA0YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwibGlnaHRzbGVldHNob3dlcnNcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INC00L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNub3dcIixcclxuICAgIG5hbWU6IFwi0JvQtdCz0LrQuNC5INGB0L3QtdCzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0c25vd2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0J3QtdCx0L7Qu9GM0YjQvtC5INGB0L3QtdCzINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNub3dzaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCd0LXQsdC+0LvRjNGI0L7QuSDRgdC90LXQs9C+0L/QsNC0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcImxpZ2h0c3NsZWV0c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JTQvtC20LTRjCDRgSDQvNC+0LrRgNGL0Lwg0YHQvdC10LPQvtC8INC4INCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJsaWdodHNzbm93c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LMg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcInBhcnRseWNsb3VkeVwiLFxyXG4gICAgbmFtZTogXCLQn9C10YDQtdC80LXQvdC90LDRjyDQvtCx0LvQsNGH0L3QvtGB0YLRjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJyYWluXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00YxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwicmFpbmFuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JTQvtC20Ywg0YEg0LPRgNC+0LfQvtC5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiBcInJhaW5zaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCb0LjQstC10L3RjFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJyYWluc2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0JvQuNCy0LXQvdGMINGBINCz0YDQvtC30L7QuVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbGVldFwiLFxyXG4gICAgbmFtZTogXCLQnNC+0LrRgNGL0Lkg0YHQvdC10LNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic2xlZXRhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCc0L7QutGA0YvQuSDRgdC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic2xlZXRzaG93ZXJzXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbGVldHNob3dlcnNhbmR0aHVuZGVyXCIsXHJcbiAgICBuYW1lOiBcItCU0L7QttC00Ywg0YEg0LzQvtC60YDRi9C8INGB0L3QtdCz0L7QvCDQuCDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic25vd1wiLFxyXG4gICAgbmFtZTogXCLQodC90LXQs1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbm93YW5kdGh1bmRlclwiLFxyXG4gICAgbmFtZTogXCLQodC90LXQsyDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IFwic25vd3Nob3dlcnNcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LPQvtC/0LDQtFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogXCJzbm93c2hvd2Vyc2FuZHRodW5kZXJcIixcclxuICAgIG5hbWU6IFwi0KHQvdC10LPQvtC/0LDQtCDRgSDQs9GA0L7Qt9C+0LlcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBnZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZyB9IGZyb20gXCIuL2dldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGFpbHlJbnRlcnZhbE5hbWVCeVRpbWUgPSAodGltZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBsZXQgZGFpbHlJbnRlcnZhbE5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgbGV0IGhvdXJzOiBudW1iZXIgPSBnZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZyh0aW1lKTtcclxuXHJcbiAgc3dpdGNoIChob3Vycykge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICBkYWlseUludGVydmFsTmFtZSArPSBcItCd0L7Rh9GM0Y5cIjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSA2OlxyXG4gICAgICBkYWlseUludGVydmFsTmFtZSArPSBcItCj0YLRgNC+0LxcIjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAxMjpcclxuICAgICAgZGFpbHlJbnRlcnZhbE5hbWUgKz0gXCLQlNC90LXQvFwiO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIDE4OlxyXG4gICAgICBkYWlseUludGVydmFsTmFtZSArPSBcItCS0LXRh9C10YDQvtC8XCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhaWx5SW50ZXJ2YWxOYW1lO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0SG91cnNGcm9tRGF0ZVRpbWVTdHJpbmcgPSAoZGF0ZVN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+XHJcbiAgbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0SG91cnMoKTtcclxuIiwiaW1wb3J0IHsgRE9NRWxlbWVudCB9IGZyb20gXCIuLi9tb2RlbHMvRE9NRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdlYXRoZXJUeXBlSWNvbkJ5V2VhdGhlclN5bWJvbENvZGUgPSAoXHJcbiAgc3ltYm9sQ29kZTogc3RyaW5nXHJcbik6IE5vZGUgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uc0ZvbGRlclBhdGg6IHN0cmluZyA9IFwiLi9pbWFnZXMvd2VhdGhlci1pY29ucy9cIjtcclxuXHJcbiAgcmV0dXJuIG5ldyBET01FbGVtZW50KHtcclxuICAgIHRhZ05hbWU6IFwiaW1nXCIsXHJcbiAgICBjbGFzc05hbWVzOiBbXCJ3ZWF0aGVyLWljb25fX2ltZ1wiXSxcclxuICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic3JjXCIsXHJcbiAgICAgICAgdmFsdWU6IGAke3dlYXRoZXJJY29uc0ZvbGRlclBhdGh9JHtzeW1ib2xDb2RlfS5zdmdgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJhbHRcIixcclxuICAgICAgICB2YWx1ZTogYCR7c3ltYm9sQ29kZX1gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KS5nZXROb2RlKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IFZpcnR1YWxFbGVtZW50IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvVmlydHVhbEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgVmlydHVhbEF0dHJpYnV0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1ZpcnR1YWxBdHRyaWJ1dGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBET01FbGVtZW50IHtcclxuICBwcml2YXRlIGVsZW1lbnQhOiBFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVmlydHVhbEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lKVxyXG4gICAgICAuc2V0Q2xhc3NOYW1lcyhwcm9wcy5jbGFzc05hbWVzKVxyXG4gICAgICAuc2V0QXR0cmlidXRlcyhwcm9wcy5hdHRyaWJ1dGVzKVxyXG4gICAgICAuc2V0VGV4dENvbnRlbnQocHJvcHMudGV4dENvbnRlbnQpXHJcbiAgICAgIC5zZXRJbm5lckhUTUwocHJvcHMuaW5uZXJIVE1MKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlKCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudCBhcyBOb2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgbGV0IGNyZWF0ZWRFbGVtZW50OiBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZWRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAoY2xhc3NOYW1lcykge1xyXG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBWaXJ0dWFsQXR0cmlidXRlW10gfCB1bmRlZmluZWQpOiB0aGlzIHtcclxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUZXh0Q29udGVudCh0ZXh0Q29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkKTogdGhpcyB7XHJcbiAgICBpZiAodGV4dENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElubmVySFRNTChpbm5lckhUTUw6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHRoaXMge1xyXG4gICAgaWYgKGlubmVySFRNTCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZyB9IGZyb20gXCIuL2dldEhvdXJzRnJvbURhdGVUaW1lU3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNEYWlseUludGVydmFsUG9pbnQgPSAodGltZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IGhvdXJzOiBudW1iZXIgPSBnZXRIb3Vyc0Zyb21EYXRlVGltZVN0cmluZyh0aW1lKTtcclxuICByZXR1cm4gaG91cnMgPT09IDAgfHwgaG91cnMgJSA2ID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQ2l0eVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNpdHkob3B0aW9uczogQ2l0eSk6IENpdHkge1xyXG4gIHJldHVybiB7IC4uLm9wdGlvbnMgfTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXJXaWRnZXQgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L1dlYXRoZXJXaWRnZXRcIjtcclxuaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL1dlYXRoZXJXaWRnZXQvaW50ZXJmYWNlcy9DaXR5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNpdHkgfSBmcm9tIFwiLi9XZWF0aGVyV2lkZ2V0L3V0aWxzL2NyZWF0ZUNpdHlcIjtcclxuXHJcbmNvbnN0IGtoYXJraXY6IENpdHkgPSBjcmVhdGVDaXR5KHtcclxuICBuYW1lOiBcIktoYXJraXZcIixcclxuICBsYXRpdHVkZTogNDkuOTgwODEsXHJcbiAgbG9uZ2l0dWRlOiAzNi4yNTI3MixcclxuICBhbHRpdHVkZTogMTUyLFxyXG59KTtcclxuXHJcbm5ldyBXZWF0aGVyV2lkZ2V0KCkub2ZDaXR5KGtoYXJraXYpLnJlbmRlckluKFwiI3dlYXRoZXJcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==