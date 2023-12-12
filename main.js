/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/dateSections/storage.js":
/*!*************************************!*\
  !*** ./src/dateSections/storage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlltasksArray": () => (/* binding */ AlltasksArray),
/* harmony export */   "DayOfWeek": () => (/* binding */ DayOfWeek),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "TemplateProject": () => (/* binding */ TemplateProject),
/* harmony export */   "deleProject": () => (/* binding */ deleProject),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "loclstrgProjects": () => (/* binding */ loclstrgProjects),
/* harmony export */   "populateData": () => (/* binding */ populateData),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "setArrayData": () => (/* binding */ setArrayData),
/* harmony export */   "setData": () => (/* binding */ setData),
/* harmony export */   "taskDone": () => (/* binding */ taskDone),
/* harmony export */   "thisWeekArray": () => (/* binding */ thisWeekArray),
/* harmony export */   "todayTasksArray": () => (/* binding */ todayTasksArray),
/* harmony export */   "updateArray": () => (/* binding */ updateArray),
/* harmony export */   "weekCalc": () => (/* binding */ weekCalc)
/* harmony export */ });

class Task {
    constructor(name, date, section, project, tag, note, done, deleted, edited) {
        this.name = name;
        this.date = date;
        this.section = section;
        this.project = project;
        this.tag = tag;
        this.note = note;
        this.done = done;
        this.deleted = deleted;
        this.edited = edited;
    }
}



class DayOfWeek {
    constructor(name, date, tasks) {
        this.name = name;
        this.date = date;
        this.tasks = tasks;
    }
}


class TemplateProject {
    constructor(icon, name, category, discription, deleted) {
        this.icon = icon;
        this.name = name;
        this.category = category;
        this.discription = discription;
        this.deleted = deleted;
    }
}


let AlltasksArray = [];
let todayTasksArray = [];
let thisWeekArray = [];
let projectsArray = [];
let loclstrgProjects = setArrayData('projectsArray')




function weekCalc() {
    let weekrange = [];
    // I declared new currentDate variable because the public CurrentDate variable is affected by calculations in this function
    let currentDate = new Date();
    for (let i = 0; i < 7; i++) {
        let firstDay;
        i > 0 ? firstDay = currentDate.getDate() + 1 : firstDay = currentDate.getDate();
        let day = new Date(currentDate.setDate(firstDay)).toISOString().slice(0, 10)
        weekrange.push(day);
    }

    return weekrange;
}


function setData() {
    if (localStorage.getItem('fName')) {
        const fName = localStorage.getItem("fName");
        const lName = localStorage.getItem('lName');
        document.getElementById('user-name').textContent = `${fName} ${lName}`;
    }
}



function populateData(name, array) {
    return localStorage.setItem(name, JSON.stringify(array))
}

function setArrayData(arraLocalStorage) {
    arraLocalStorage = JSON.parse(localStorage.getItem(arraLocalStorage))
    return arraLocalStorage
}


function updateArray(item, array) {
    let today = new Date()
    array.forEach((elem) => {
        if (elem.deleted === true) {
            array.splice(array.indexOf(elem), 1);
        }

        //update tasks per day
        elem.date !== null ?
            (new Date(elem.date).getDate() < today.getDate()
                && new Date(elem.date).getMonth() === today.getMonth())
                ? array.splice(array.indexOf(elem), 1) : false : false;
    })
    populateData(`${item}`, array);
}

function deleProject(item, array, tasksAry, project) {
    if (project.deleted == true) {
        tasksAry.forEach((elem) => {
            if (elem.project == project.name) {
                elem.deleted = true;
            }
        })
        populateData(`AlltasksArray`, tasksAry);
        updateArray(item, array);
    }
}


function editTask(parentFunc, array, element, prop) {
    let editedArray = setArrayData('AlltasksArray')
    console.log(editedArray)
    let card = document.getElementById('add-task-card');
    card.classList.add('edit-mode');
    let editableItems = document.getElementsByClassName('editable');
    for (let i = 0; i < editableItems.length; i++) {
        editableItems[i].value = element[prop[i]]
        console.log(editableItems[i].value)
        console.log(editableItems[i])
    }
    document.getElementById("task-set-btn").addEventListener('click', function (e) {
        e.stopPropagation()
        if (card.classList.contains('edit-mode')) {
            console.log(card.classList.contains('edit-mode'))
            let editedItemIndex = editedArray.findIndex((e) => e.edited == true);
            console.log(editedItemIndex)
            for (let i = 0; i < editableItems.length; i++) {
                console.log(editedArray[editedItemIndex][prop[i]])
                console.log(editableItems[i].value)
                editedArray[editedItemIndex][prop[i]] = editableItems[i].value;
                element.edited = false;
                populateData('AlltasksArray', editedArray);
            }
            card.classList.remove('edit-mode')
            document.getElementById('add-task-card').style.display = 'none';
            parentFunc()
        }
    })

    document.getElementById('card-close-icon').addEventListener('click', () => {
        element.edited = false;
        populateData('AlltasksArray', array)
        parentFunc()
    })
}


function taskDone(task, name, array) {
    task.done === false ? task.done = true : task.done = false;
    populateData(name, array)
}




/***/ }),

/***/ "./src/formPg.js":
/*!***********************!*\
  !*** ./src/formPg.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
function atributes(elem, args) {
    elem.setAttribute(`${args[0]}`, `${args[1]}`)
}




function form() {
    document.body.textContent = '';
    (0,_start__WEBPACK_IMPORTED_MODULE_0__.header)()
    let formPage = document.createElement('div');
    let picContainer = document.createElement('img');
    let content = document.createElement('div');
    let formHeader = document.createElement('h1');

    document.body.appendChild(formPage).setAttribute('id', 'form-page');
    formPage.appendChild(content).setAttribute('id', 'form-content');
    content.classList.add('content');


    content.appendChild(formHeader).setAttribute('id', 'form-header');
    content.appendChild(picContainer).setAttribute('src', './images/2206_w039_n003_266b_p1_266.jpg')

    formHeader.textContent = 'welcome to DOIT';

    //form elements

    let formElem = document.createElement('form');
    content.appendChild(formElem).setAttribute('id', 'form')
    formElem.method = 'POST';
    let textRegx = new RegExp(/^[a-zA-Z]+$|^[a-zA-Z]+(-|_)+[a-zA-Z]+$/)
    let labelsNames = ['first-name', 'last-name', 'email']
    let inputAtrs = [[['type', 'text'], ['name', 'first-name'], ['id', 'first-name'], ['placeholder', 'Your First Name'], ['required', '']],
    [['type', 'text'], ['name', 'last-name'], ['id', 'last-name'], ['placeholder', 'Your Last Name'], ['required', '']]];
    let radioAttr = [[['type', 'radio'], ['id', 'male'], ['name', 'gender'], ['value', 'male'], ['required', '']],
    [['type', 'radio'], ['id', 'female'], ['name', 'gender'], ['value', 'female'], ['required', '']]];
    let radioSpan = ['male', 'female']


    for (let i = 0; i < 2; i++) {
        let label = document.createElement('label')
        let inputElement = document.createElement("input");
        formElem.appendChild(label).setAttribute('for', `${labelsNames[i]}`);

        label.appendChild(inputElement)
        for (let j = 0; j < inputAtrs[i].length; j++) {
            atributes(inputElement, inputAtrs[i][j])
        }
    }

    let radioContainer = document.createElement('fieldset');
    formElem.appendChild(radioContainer).setAttribute('id', 'radio-container');
    for (let i = 0; i < 2; i++) {
        let label = document.createElement('label');
        let inputElement = document.createElement('input');
        radioContainer.appendChild(label).setAttribute('for', `${radioSpan[i]}`);
        label.classList.add('gender-label');

        label.appendChild(inputElement)
        for (let j = 0; j < radioAttr[i].length; j++) {
            atributes(inputElement, radioAttr[i][j])
        }

        let span = document.createElement('span');
        span.textContent = radioSpan[i]
        label.appendChild(span);
    }


    let inputFname = document.getElementById('first-name')
    let inputLname = document.getElementById('last-name')

    function inputValidity(event) {
        if (!textRegx.test(event.target.value)) {
            console.log(textRegx.test(event.target.value))
            event.target.setCustomValidity('please, remove white space. you can use - or _ instead')
        }
        else {
            event.target.setCustomValidity('')
        }
    }

    inputFname.addEventListener('input', inputValidity)
    inputLname.addEventListener('input', inputValidity)

    //submition
    let submit = document.createElement('button');
    submit.textContent = 'Submit';
    formElem.appendChild(submit).setAttribute('id', 'submit')

    submit.addEventListener('click', function (e) {
        if (inputFname.checkValidity() === true && inputLname.checkValidity() === true) {
            e.preventDefault();
            populateStorage()
            document.body.textContent = '';
            (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
        }
    })
}


function populateStorage() {
    localStorage.setItem("fName", document.getElementById("first-name").value);
    localStorage.setItem("lName", document.getElementById("last-name").value);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "projectGenerator": () => (/* binding */ projectGenerator),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "tagsArray": () => (/* binding */ tagsArray),
/* harmony export */   "taskGenerator": () => (/* binding */ taskGenerator),
/* harmony export */   "tasksPage": () => (/* binding */ tasksPage)
/* harmony export */ });
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateSections/storage.js */ "./src/dateSections/storage.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/templates.js");







let currentDate = new Date();

let iconsArray = [`./icons/bullseye-solid.svg`, `./icons/calendar-days-solid.svg`, `./icons/list-check-solid.svg`, `./icons/diagram-project-solid.svg`, '', `./icons/hashtag-solid.svg`, '']


function home() {
    ;(0,_start__WEBPACK_IMPORTED_MODULE_0__.header)();
    tasksPage();
    today()
}

let projectsArray = [];
let tagsArray = ['low', 'medium', 'high'];

// console.log(weekCalc())

function togglingLeftBar() {
    let leftBar = document.getElementById('left-bar')
    if (window.innerWidth < 1200) {
        if (leftBar.classList.contains('closed')) {
            leftBar.style.display = 'block';
            leftBar.classList.remove('closed')
        }

        else {
            leftBar.classList.add('closed');
            leftBar.style.display = 'none'
        }
    }
}
function tasksPage() {
    let logo = document.getElementById('header-logo')
    logo.style.display = 'none'

    let barIcon = document.getElementById('bar-icon')
    barIcon.style.display = 'flex'
    barIcon.addEventListener('click', togglingLeftBar)


    //home page styling
    let tasksWindow = document.createElement('div')
    let leftBar = document.createElement('div');
    let homePage = document.createElement('div');
    document.body.appendChild(tasksWindow).setAttribute('id', 'tasks-window')
    tasksWindow.appendChild(leftBar).setAttribute('id', 'left-bar');
    tasksWindow.appendChild(homePage).setAttribute('id', 'home-page')

    //left bar
    let todayTasks = document.createElement('div');
    let weekTasks = document.createElement('div');
    let allTasks = document.createElement('div');
    let projects = document.createElement('div');
    let projectsList = document.createElement('div');
    let tags = document.createElement('div');
    let tagsList = document.createElement('div');



    let leftBarItems = [todayTasks, weekTasks, allTasks, projects, projectsList, tags, tagsList]
    let leftBarItemsText = ['today', 'this week', 'all tasks', 'my projects', 'projects-list', 'tags', 'tags list']



    for (let i = 0; i < leftBarItems.length; i++) {
        let icon = document.createElement('div')
        leftBar.appendChild(leftBarItems[i]).setAttribute('id', `${leftBarItemsText[i].replace(/\s/g, "-")}`)
        leftBarItems[i].appendChild(icon).classList.add('left-bar-icon')
        leftBarItems[i].appendChild(document.createElement('span')).textContent = `${leftBarItemsText[i]}`
        icon.style.backgroundImage = `url(${iconsArray[i]})`
    }

    //add project button 
    projects.appendChild(document.createElement('div')).setAttribute('id', 'add-project');
    document.getElementById('add-project').addEventListener('click', function (e) {
        // homePage.style = 'filter: blur(9px)'
        e.stopPropagation()
        if (!document.getElementById('add-project-card')) {
            addProject()
            document.getElementById('add-project-card').style.display = 'flex';
            window.innerWidth < 1225 ? leftBar.style.display = 'none' : false
        }
        else {
            document.getElementById('add-project-card').style.display = 'flex';
            window.innerWidth < 1225 ? leftBar.style.display = 'none' : false
        }
    })



    //remove text generated from the above for loop for all left bar divs
    projectsList.textContent = '';
    tagsList.textContent = '';
    projectsList.setAttribute('id', 'projects-list')


    //tagsList items 
    function tagsGenerator() {
        for (let i = 0; i < tagsArray.length; i++) {
            let tagBtn = document.createElement('div')
            let tagColor = document.createElement('div');
            let tagItem = document.createElement('div');
            tagsList.appendChild(tagBtn).setAttribute('class', 'tag-btn')
            tagBtn.appendChild(tagColor).setAttribute('id', `${tagsArray[i]}`)
            tagBtn.appendChild(tagItem);
            tagItem.textContent = tagsArray[i];
            tagBtn.addEventListener('click', function () {
                if (localStorage.getItem('AlltasksArray')) {
                    togglingLeftBar()//onlywork for phones
                    _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray('AlltasksArray', (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray'))

                    let tagPage = document.createElement('div');
                    let tagName = document.createElement('h1');

                    let container = document.createElement('div');
                    document.getElementById('home-page').textContent = '';
                    document.getElementById('home-page').appendChild(tagPage).setAttribute('id', "tags-page");
                    tagPage.appendChild(tagName).setAttribute('id', 'tag-header');
                    tagName.textContent = `${tagsArray[i]} priorty tasks`
                    tagPage.appendChild(container).setAttribute('id', 'tag-container');
                    taskGenerator(tagsGenerator, container, 'tag', `${tagsArray[i]}`)
                    addTask()
                }
            })
        }
    }
    tagsGenerator()


    //eventlisteners for projects button and tag list button
    projects.addEventListener('click', function (e) {
        if (projectsList.style.display === 'none') {
            projectsList.style.display = 'flex';
            projectsList.textContent = '';
            projectGenerator()
        }
        else {
            projectsList.style.display = 'none';
        }
    })

    tags.addEventListener('click', function (e) {
        tagsList.style.display === 'none' ? tagsList.style.display = 'flex' : tagsList.style.display = 'none'
    })


    if (window.innerWidth > 1225) {
        let logoutBtn = document.createElement('div');
        leftBar.appendChild(logoutBtn).setAttribute('id', 'log-out-btn')
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('fName');
            document.body.textContent = '';
            (0,_start__WEBPACK_IMPORTED_MODULE_0__.start)();
        })
    }



    // storageModule.setArrayData('todayTasksArray')



    addTask()
    todayTasks.addEventListener('click', today);
    weekTasks.addEventListener('click', thisWeek);
    allTasks.addEventListener('click', allTasksGanerator)

}


function addProject() {
    let container = document.createElement('form');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let set = document.createElement('button');
    let orP = document.createElement('p');
    let templatesBtn = document.createElement('button');
    let closeBtn = document.createElement('div');
    document.getElementById('home-page').appendChild(container).setAttribute('id', 'add-project-card');
    container.appendChild(label);
    container.appendChild(set).setAttribute('id', 'set-brjct-btn');
    container.appendChild(orP)
    container.appendChild(templatesBtn).setAttribute('id', 'chosse-temp-btn')
    container.appendChild(closeBtn).setAttribute('id', 'close-btn-project-card')


    set.textContent = 'add'
    orP.textContent = 'or';
    templatesBtn.textContent = 'choose project';

    let icon = './icons/circle-dot-regular.svg'
    label.textContent = 'project name';
    label.appendChild(input)
    input.setAttribute('required', '');

    set.addEventListener('click', (e) => {
        if (input.checkValidity()) {
            e.preventDefault();
            if (localStorage.getItem('projectsArray')) {
                let projectsArray = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('projectsArray')
                projectsArray.push(new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(icon, input.value, '', '', false))
                ;(0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)('projectsArray', projectsArray);
                // console.log(projectsArray)
                container.style.display = 'none';
                projectGenerator()
            }
        }
    })

    closeBtn.addEventListener('click', () => {
        container.style.display = 'none'
    })

    templatesBtn.addEventListener('click', function () {
        document.body.textContent = '';
        (0,_templates__WEBPACK_IMPORTED_MODULE_2__.templates)()
    })
}


function projectGenerator() {
    document.getElementById("projects-list").textContent = ''
    if (!localStorage.getItem("projectsArray")) {
        projectsArray.push(new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/briefcase-solid.svg`, 'work', 'work', `Don’t let yesterday take up too much of today. Use work template now!`))
        projectsArray.push(new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/phone-solid.svg`, 'calls', 'home', `Arrange your phone calls so you don't forget any of them`))
        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData('projectsArray', projectsArray)
    }

    //delet deleted projects before
    let loclstrgProjects = _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData('projectsArray');
    for (let j = 0; j < loclstrgProjects.length; j++) {
        let allArray = _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData('AlltasksArray')
        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.deleProject('projectsArray', loclstrgProjects, allArray, loclstrgProjects[j])
    }

    //update the projects array
    loclstrgProjects = _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData('projectsArray');
    for (let j = 0; j < loclstrgProjects.length; j++) {
        let allArray = _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData('AlltasksArray')
        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.deleProject('projectsArray', loclstrgProjects, allArray, loclstrgProjects[j])

        let project = document.createElement('div');
        let projectIcon = document.createElement('div');
        let projectName = document.createElement('div');
        let deletPrjctBtn = document.createElement('div');
        document.getElementById("projects-list").appendChild(project).setAttribute('class', 'project-btn')
        project.appendChild(projectIcon).setAttribute('class', 'left-bar-prjct-icon');
        project.appendChild(projectName).setAttribute('class', 'left-bar-prjct-name');
        project.appendChild(deletPrjctBtn).setAttribute('class', 'delete-prjct-btn');
        let deletBtns = document.getElementsByClassName('delete-prjct-btn')


        deletBtns[j].addEventListener('click', function (e) {
            e.stopPropagation()
            loclstrgProjects[j].deleted = true;
            project.remove();
            (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)('projectsArray', loclstrgProjects);
        })

        projectIcon.style.backgroundImage = `url(${loclstrgProjects[j].icon})`
        projectName.textContent = loclstrgProjects[j].name;
        project.addEventListener('click', function () {
            togglingLeftBar()//onlywork for phones
            // console.log(loclstrgProjects[j])
            _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray('projectsArray', (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('projectsArray'))
            let projectPage = document.createElement('div');
            let projectsHeader = document.createElement('h1');
            let container = document.createElement('div');
            document.getElementById('home-page').textContent = '';
            document.getElementById('home-page').appendChild(projectPage).setAttribute('id', "projects-page");
            projectPage.appendChild(projectsHeader);
            projectsHeader.textContent = `your ${loclstrgProjects[j].name} tasks`
            projectPage.appendChild(container).setAttribute('id', 'projects-container')
            taskGenerator(projectGenerator, container, 'project', `${loclstrgProjects[j].name}`)
            addTask()
        })
    }
}



function addTask() {
    let addTaskBtn = document.createElement('div');
    let newTaskCard = document.createElement('form');
    document.getElementById("home-page").appendChild(addTaskBtn).setAttribute('id', 'add-task');
    document.getElementById("home-page").appendChild(newTaskCard).setAttribute('id', 'add-task-card');


    addTaskBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        newTaskCard.style.display = 'flex';
    });

    newTaskCard.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    //making new task card elements
    let closeIcon = document.createElement('div');
    let taskTitle = document.createElement('input');
    let taskNote = document.createElement('textarea');
    let taskProject = document.createElement('select');
    let taskTag = document.createElement('select');
    let taskDate = document.createElement('input');
    let setBtn = document.createElement('button');

    closeIcon.addEventListener('click', () => {
        newTaskCard.style.display = 'none';
    })

    let labelNames = ["task title", 'notes', '', '', 'choose task date']
    let cardElems = [taskTitle, taskNote, taskProject, taskTag, taskDate];
    let cardsElemsAttrs = [{ "placeholder": "task title", 'required': '', 'maxlength': 40 }, { 'maxlength': 120, "placeholder": "insert your notes here" },
    { "name": "projects" }, { "name": "tags" }, { "type": "date", "required": "" }
    ]

    newTaskCard.appendChild(closeIcon).setAttribute('id', 'card-close-icon');
    for (let i = 0; i < cardElems.length; i++) {
        let lable = document.createElement('label');
        lable.textContent = labelNames[i]
        newTaskCard.appendChild(lable).setAttribute('id', `lable-${i + 1}`);
        for (const key in cardsElemsAttrs[i]) {
            cardElems[i].setAttribute(`${key}`, `${cardsElemsAttrs[i][key]}`)
        }
        lable.appendChild(cardElems[i]).setAttribute('id', `input-${i + 1}`);

        //adding editable class so I can manpulate them without reapeting the same line of code
        cardElems[i].setAttribute('class', 'editable')
    }
    newTaskCard.appendChild(setBtn).setAttribute('id', 'task-set-btn');
    setBtn.textContent = 'set';


    //projects list
    if (localStorage.getItem('projectsArray')) {
        let projectStorage = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('projectsArray')
        let allTasks = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray')
        for (let i = 0; i < projectStorage.length; i++) {
            (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.deleProject)('projectsArray', projectStorage, allTasks, projectStorage[i])
        }
        projectStorage = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('projectsArray')
        if (projectStorage.filter(elem => elem.deleted === true).length === 0) {
            for (let i = 0; i < projectStorage.length; i++) {
                let option = document.createElement('option')
                taskProject.appendChild(option);
                option.textContent = projectStorage[i].name;
                option.value = projectStorage[i].name;
            }
        }
    }

    //tags list
    for (let i = 0; i < tagsArray.length; i++) {
        let option = document.createElement('option');
        taskTag.appendChild(option);
        option.textContent = tagsArray[i]
        option.value = tagsArray[i];
    }

    function addTaskFun(e) {
        if (taskTitle.checkValidity() && taskDate.checkValidity()) {
            e.preventDefault();
            if (!newTaskCard.classList.contains('edit-mode')) {
                let currentWeek = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.weekCalc)()
                let currentDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDate, "yyyy-LL-dd")
                let allArray = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray')

                function checkLocalStorage(newTask) {
                    if (localStorage.getItem('AlltasksArray')) {
                        allArray.push(newTask);
                        (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)("AlltasksArray", allArray);
                    }
                    else {
                        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.AlltasksArray.push(newTask)
                        ;(0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)("AlltasksArray", _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.AlltasksArray)
                    }
                }

                if (taskDate.value == currentDay) {
                    // console.log('today')
                    let newTask = new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle.value, taskDate.value, ['all tasks', 'today', 'this week'], taskProject.value, taskTag.value, taskNote.value, false, false, false);
                    checkLocalStorage(newTask)
                    today()
                    // console.log(setArrayData('AlltasksArray'))
                }


                else if (currentWeek.includes(taskDate.value)) {
                    // console.log('this week')
                    let newTask = new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle.value, taskDate.value, ['all tasks', 'this week'], taskProject.value, taskTag.value, taskNote.value, false, false, false)
                    checkLocalStorage(newTask)
                    thisWeek()

                    // console.log(setArrayData('AlltasksArray'))
                }

                else {
                    // console.log('all')
                    let newTask = new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle.value, taskDate.value, ['all tasks'], taskProject.value, taskTag.value, taskNote.value, false, false)
                    checkLocalStorage(newTask)
                    allTasksGanerator()
                    // console.log(setArrayData('AlltasksArray'))
                }

                newTaskCard.style.display = 'none'
            }
        }
    }


    //adding tasks to their sections
    document.getElementById("task-set-btn").addEventListener('click', addTaskFun)


}




function taskGenerator(parentFunc, container, prop, condetion) {
    // console.log('hello')
    if (localStorage.getItem('AlltasksArray')) {
        let localStorageArray = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray')
        //I sorted them so I can edit without missing position between tasks
        let allArray = localStorageArray.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        allArray.forEach(element => {
            // console.log(new Date(element.date))
            if (element[prop].includes(condetion) || element[prop] == condetion) {
                let task = document.createElement('div');
                let checkIcon = document.createElement('div');
                let taskText = document.createElement('div');
                let taskTextDate = document.createElement('p')
                let deleteBtn = document.createElement('div');
                let editBtn = document.createElement('div');


                container.appendChild(task).setAttribute('class', 'task today-task');
                task.appendChild(checkIcon).setAttribute('class', 'task-check-btn');
                task.appendChild(taskText).setAttribute('class', 'task-text');
                task.appendChild(deleteBtn).setAttribute('class', 'task-delete');
                task.appendChild(editBtn).setAttribute('class', 'task-edit');

                taskText.textContent = element.name;
                taskText.appendChild(taskTextDate).setAttribute('class', 'task-date')
                taskTextDate.textContent = element.date;

                if (element.done == true) {
                    task.classList.add('task-done')
                    // console.log(task.classList)
                }

                //check
                checkIcon.addEventListener('click', function () {
                    (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.taskDone)(element, `AlltasksArray`, allArray)
                    element.done == true ? task.classList.add('task-done') : task.classList.remove('task-done')
                });

                //delete
                deleteBtn.addEventListener('click', function () {
                    element.deleted = true;
                    (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)("AlltasksArray", allArray);
                    // console.log(element.deleted)
                    task.remove()
                })
                //edit 
                editBtn.addEventListener('click', function (e) {
                    element.edited = true;
                    (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)('AlltasksArray', allArray)
                    e.stopPropagation();
                    document.getElementById("add-task-card").style.display = 'flex';
                    let props = ['name', 'note', 'project', 'tag', 'date']
                    // console.log(element[props[0]])
                    _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.editTask(parentFunc, allArray, element, props)
                })
            }
        });

        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray('AlltasksArray', allArray)
    }
    // console.log(allArray)
}



function today() {
    let currentDate = new Date();
    let homePage = document.getElementById('home-page');
    let todaySection = document.createElement('div');
    homePage.textContent = '';
    homePage.appendChild(todaySection).setAttribute('id', 'today-section');
    // console.log(todaySection)

    //heading 
    let todayHeading = document.createElement('h1');
    let todayDate = document.createElement('div');
    let todayTasks = document.createElement('div');

    todaySection.appendChild(todayHeading).setAttribute('id', 'today-heading');
    todaySection.appendChild(todayDate).setAttribute('id', 'today-date');
    todaySection.appendChild(todayTasks).setAttribute('id', 'today-tasks');

    addTask();
    //svg icon
    let userName = localStorage.getItem("fName")
    currentDate.getHours() > 12 && currentDate.getHours() < 3 ? todayHeading.textContent = `good afternoon, ${userName}` :
        currentDate.getHours() > 13 && currentDate.getHours() < 24 ? todayHeading.textContent = `good evening, ${userName}` : todayHeading.textContent = `good morning, ${userName}`
    todayDate.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDate, 'iii-LLL-dd');

    if (localStorage.getItem('AlltasksArray')) {
        togglingLeftBar() //only work in phones 

        ;(0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray)('AlltasksArray', (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray'))
        taskGenerator(today, todayTasks, 'section', 'today');
        // console.log(setArrayData('AlltasksArray'))
    }
}


function thisWeek() {
    if (localStorage.getItem('AlltasksArray')) {
        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray('AlltasksArray', (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray'))
        tasksContainer(thisWeek, 'this-week-page', "week-container", 'this week tasks', 'this week')
    }
}


function allTasksGanerator() {
    if (localStorage.getItem('AlltasksArray')) {
        _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.updateArray('AlltasksArray', (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('AlltasksArray'))
        tasksContainer(allTasksGanerator, 'all-tasks-page', 'all-tasks-container', 'all tasks', 'all tasks')
    }
}

function tasksContainer(parentFunc, pageId, containerId, headerName, section) {
    let page = document.createElement('div');
    let title = document.createElement('h1');
    page.appendChild(title);
    title.textContent = headerName;
    let container = document.createElement('div');
    document.getElementById('home-page').textContent = '';
    document.getElementById('home-page').appendChild(page).setAttribute('id', `${pageId}`)
    page.appendChild(container).setAttribute('id', `${containerId}`);
    togglingLeftBar() //only work in phones 
    taskGenerator(parentFunc, container, 'section', `${section}`)
    addTask()
}



/***/ }),

/***/ "./src/productivityMthds.js":
/*!**********************************!*\
  !*** ./src/productivityMthds.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductivtyMthdsPage": () => (/* binding */ ProductivtyMthdsPage)
/* harmony export */ });
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.js");


class MethodObj {
    constructor(title, discription) {
        this.title = title;
        this.discription = discription;
    }
}

const methodsArray = [
    new MethodObj('1. Plan Your Day Ahead of Time', `The first step to being productive is planning a day's schedule in advance.
    You should know what you're doing, when you're doing it, and how long on any given day. Without a schedule, you're likely to miss out on important tasks. \n \n 
    Write down a detailed plan of the day early morning or the night before. Write everything you need to do so that you have a sense of direction and know what to focus on next.
    This eliminates all guesswork, and there's less chance of you drifting away and wasting time because you do not know what you'll do next.  `),

    new MethodObj('2. Write Down the Three Most Important Daily Tasks ', `Jot down the three most important tasks for the day. Describe the tasks in detail 
    to avoid any ambiguity. Focus on important tasks rather than urgent ones. `),

    new MethodObj(`3. Use Any Productivity Technique`, `Supercharge your productivity by using a productivity method. An incredibly powerful productivity 
    tool can you stay focused during work time. A productivity system will help you manage your day by setting accomplishable goals. Select a productivity method 
    that is right for you that helps you increase your daily output.`),

    new MethodObj(`4. Set a Single Goal for Each Day`, `Set a single goal for each working day so you can focus on individual tasks. A good idea can be breaking down daily goals
    into multiple tasks, where you'll only tend to that particular task in the allotted time`),

    new MethodObj(`5. Set Specific Times to Check Email`, `Email checking accounts for one of the main distractions that wastes valuable time during the workday. Choose two times
    a day for checking emails, preferably before lunch and before finishing the day's work.`),

    new MethodObj(`6. Learn to Say “No”`, `Saying no can be hard for some, but if you want to boost your productivity, you can't allow others to order you around every now and then. `),
    new MethodObj(`7. Use Website Blockers`, `Use website blockers to stop distracting websites from popping up in the middle of your work.`),
    new MethodObj(`8. Use red and blue colors more often`, `Remove clutter from your desk. Studies suggest that red and blue colors improve brain performance, with red known to increase 
    attention to details while blue sparks creativity. Surround your workplace with these colors to enhance productivity. `),

    new MethodObj(`9. Two-Minute Rule for Small Tasks`, `Do not waste time deciding whether you should do small tasks that keep cropping up throughout your day. Instead, ask yourself if you 
    can complete the task in 2 minutes or less – if yes, go ahead with the task. If not, add the task to your to-do list for later.`),

    new MethodObj(`10. Listen to Productive Music`, `Music is an excellent therapy to help maintain focus and stay productive. Choose music that enables you to focus on the task at hand.`),
    new MethodObj(`11. Use Templates for Regular Tasks`, `Create templates for routine tasks that are created the same way every time. This will save you a lot of time and increase your 
    overall productivity.`),

    new MethodObj(`12. Group Similar Tasks`, `Batch similar tasks so you can complete them with the same frame of mind. This will make your work process flow smoothly and help you do more in less time.`),
    new MethodObj(`13. Avoid Multitasking`, `It might be tempting to do two things simultaneously, but multitasking does more harm than good. Research shows that about 98% of people are less
     productive when they multitask as they are not focusing on a single task.`),

    new MethodObj(`14. Use an Important/Urgent Matrix for Decision Making`, `An effective time management tool called Important/Urgent Matrix or Eisenhower Matrix helps prioritize tasks on the basis
     of how important or urgent they are. The matrix divides tasks into four different quadrants - Important & Urgent, Important & not urgent, Not important & urgent, Not important & not urgent. This
     method ensures you spend your time effectively as well as efficiently. `),

    new MethodObj(`15. Start Your Day With a Tough or Easy Task`, `The way you start your day dictates the flow of the rest of the day. You can either start by doing the most demanding task first,
     so everything else feels more effortless, or do the easiest thing first to gain valuable momentum.`),

    new MethodObj(`16. Use the “One and Done” Rule`, `Most of us tend to keep some tasks aside, thinking of taking care of those tasks later. But rarely do we actually do those later because we won't 
    add them to our to-do- lists. To avoid this, add each new task to a to-do list, so there's no risk of forgetting later.`),

    new MethodObj(`17. Take Regular Breaks`, `Breaks give your mind a much-needed chance to recover from intense focus, but you must maximize the benefit of breaks. Zone out completely or meditate
     during breaks to relax your mind and body.`),

    new MethodObj(`18. Create a Break Agenda`, `List everything you want to do on your break and squeeze these between work time. This will help accomplish tasks efficiently during work time. Thus,
     you'll wisely use your break time to do things you enjoy. `),

    new MethodObj(`19. Work in Short Bursts`, `The human mind can concentrate on the same thing for a short span. So, it makes sense to work in short bursts like the Pomodoro technique, where you 
    work in 25-minute sessions with 5-minute breaks in between. This helps motivate you to complete tasks in a short time.`),

    new MethodObj(`20. Create a Dedicated Workspace`, `If you are working from home or remotely, create a dedicated workspace where you'll go to work and leave once you're finished.`),
    new MethodObj(`21. Work Near Natural Light`, `A simple productivity hack is to create your workspace near natural light. Exposure to sunlight is believed to improve sleep, thereby contributing
     to your well-being and productivity levels.`),

    new MethodObj(`22. Eliminate Possible Distractions`, `It's easy to give in to distractions, but you must find ways to avoid distractions while working. Distractions cause a lot of wasted time 
    trying to regain focus on the task. Getting rid of distractions can result in more productive work being done in lesser time.`),

    new MethodObj(`23. Break Down Your Goals`, `Instead of procrastinating on your far-fetched ultimate goals, break down the goals into smaller, more attainable goals that seem more realistic.
     These goals should be easy to accomplish and fit into your schedule.`),

    new MethodObj(`24. Take Time to Reattach Yourself to Work Every Morning`, `Once you're finished with the day's work, you probably try to detach from work. Take a few minutes in the morning to 
    reattach yourself to work by thinking about what you achieved the day before or what you hope to accomplish during the given day.`),

    new MethodObj(`25. Wake Up Early`, `This can give you a great head start on any working day because you feel entirely re-energized at the beginning of a day. You can get a lot of work done early
     in the morning when there are fewer distractions than at midday`),

    new MethodObj(`26. Make Sure Every Task Is Related to a Goal`, `Before taking up a task, make sure it is related to a long-term goal like one of your SMART goals. If the task is unrelated to your
     advancement, either eliminate it or assign it to someone else`),

    new MethodObj(`27. Follow Deadlines`, `Regardless of how long you have to complete a task, make sure you do it in the given amount of time. Your productivity will improve if you know a deadline is
     approaching.`),

    new MethodObj(`28. Schedule Time for Self-Care`, `Schedule self-care activities to recharge yourself to prevent burnout from work pressure. It could be anything that helps you relax and unwind — 
    leisurely reading on your favorite couch, a relaxing bedtime ritual, a 10-minute walk, meditating, painting, or anything else. `),

    new MethodObj(`29. Let Go of Perfectionism`, `Nothing is perfect, so don't waste time trying to make every task perfect. If the work is good enough, move on to the next thing.`),
    new MethodObj(`30. Identify the ‘Why’ Behind Your Job`, `Ask yourself why you chose to go into the field that you did. Make sure to keep those reasons in your mind while working so you stay
     motivated to be productive and successful in your job.`)
]


function ProductivtyMthdsPage() {
    ;(0,_start__WEBPACK_IMPORTED_MODULE_0__.header)();
    let mthdsStartPage = document.createElement('div');
    let introContainer = document.createElement('div');
    let imageContainer = document.createElement('div');
    let image = document.createElement('img')

    document.body.appendChild(mthdsStartPage).setAttribute('id', 'mthd-start-page');
    mthdsStartPage.appendChild(introContainer).setAttribute('id', 'mthds-intro-container');
    mthdsStartPage.appendChild(imageContainer).setAttribute('id', 'mthds-STpage-image');

    let introTitle = document.createElement('h1');
    let intro = document.createElement('p');

    let productivityDiscription = document.createElement('div');
    let productivityQuestion = document.createElement('h2');
    let productivtyAnswer = document.createElement('p');

    introTitle.textContent = 'Top 30 Productivity Hacks to Get More Done in 2023';
    intro.textContent = `Are you struggling to stay on task? Do you ever feel a little incomplete at the end of your workday, 
    feeling like you could've done more? Well, it doesn't have to be this way. You can leave work feeling euphoric and fulfilled with what you have accomplished.
     It takes a few productivity hacks to help you work more efficiently and, most importantly, leave you with more free moments every day.`;

    productivityQuestion.textContent = `what is productivty?`
    productivtyAnswer.textContent = `Productivity is more than doing more things or ticking tasks off your to-do list. 
    Productivity means only focusing on accomplishing important things. The road to being more productive can be long, so do not panic – take one positive step at a time`

    imageContainer.appendChild(introTitle).setAttribute('id', 'mthds-intro-title');
    imageContainer.appendChild(image).setAttribute('src', './images/Door.jpg')
    introContainer.appendChild(intro).setAttribute('id', 'mthds-intro-p');
    introContainer.appendChild(productivityDiscription).appendChild(productivityQuestion);
    productivityDiscription.appendChild(productivtyAnswer);


    //methods
    let mthdspage = document.createElement('div');
    let mthdsTitle = document.createElement('h1');
    let mthdsContainer = document.createElement('div');

    document.body.appendChild(mthdspage).setAttribute('id', 'mthds-page');
    mthdspage.appendChild(mthdsTitle)
    mthdspage.appendChild(mthdsContainer).setAttribute('id', 'mthds-container');

    mthdsTitle.textContent = `Top 30 Productivity Hacks to Maximize Productivity in 2023`;
    for (let i = 0; i < methodsArray.length; i++) {
        let title = document.createElement('h3');
        let discription = document.createElement('p');

        title.textContent = methodsArray[i].title;
        discription.textContent = methodsArray[i].discription;

        mthdsContainer.appendChild(title)
        mthdsContainer.appendChild(discription)
    }

    //footer
    let footer = document.createElement('div');
    document.body.appendChild(footer).setAttribute('id', 'mthds-footer');

    footer.appendChild(document.createElement('p'))
    let SimplilearnLink = document.createElement('a');
    SimplilearnLink.href = 'https://www.simplilearn.com/best-productivity-hacks-to-get-more-done-article'
    SimplilearnLink.textContent = `here`
    footer.firstChild.textContent = `This text was taken from Simplilearn website For the original article, click `
    footer.firstChild.appendChild(SimplilearnLink)

}

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _formPg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPg */ "./src/formPg.js");
/* harmony import */ var _productivityMthds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productivityMthds */ "./src/productivityMthds.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _dateSections_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateSections/storage.js */ "./src/dateSections/storage.js");






function header() {
    let header = document.createElement('header')
    document.body.appendChild(header).setAttribute('id', 'header')

    let logo = document.createElement('div');
    header.appendChild(logo).setAttribute('id', 'header-logo')
    logo.addEventListener('click', function () {
        document.body.textContent = ''
        start()
    })


    let nav = document.createElement('nav')


    let btnArray = ['home', 'templates', 'productivty methods', 'about us'];

    function navGenerator(container) {
        for (let i = 0; i < 4; i++) {
            let navBtn = document.createElement('button');
            container.appendChild(navBtn).setAttribute('id', `nav-btn${i + 1}`)
            navBtn.classList.add('nav-btn');
            navBtn.textContent = btnArray[i]
        }
    }

    let profile = document.createElement('div');
    let logInBtn = document.createElement('button');
    let startFreeBtn = document.createElement('button');
    header.appendChild(profile).setAttribute('id', 'user-profile')
    profile.appendChild(logInBtn).setAttribute('id', 'nav-btn5')
    logInBtn.setAttribute('class', 'nav-btn')

    logInBtn.textContent = 'log in';
    navGenerator(nav)
    header.appendChild(nav).setAttribute('id', 'nav');

    logInBtn.addEventListener('click', _formPg__WEBPACK_IMPORTED_MODULE_0__.form)

    if (!localStorage.getItem('fName')) {
        document.getElementById('nav-btn5').style.display = 'flex';
        // document.getElementById('nav-btn6').style.display = 'flex';
    }
    else {
        document.getElementById('nav-btn5').style.display = 'none';
        // document.getElementById('nav-btn6').style.display = 'none';
        let userName = document.createElement('span')
        let userPic = document.createElement('div')
        profile.appendChild(userName).setAttribute('id', 'user-name');
        profile.appendChild(userPic).setAttribute('id', 'user-pic');

        if (window.innerWidth < 1225) {


            let logoutBtn = document.createElement('div');
            nav.appendChild(logoutBtn).setAttribute('id', 'log-out-btn')
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('fName');
                document.body.textContent = '';
                start();
            })


            profile.addEventListener('click', (e) => {
                e.stopPropagation()
                if (nav.style.display === 'none') {
                    for (const btn of nav.children) {
                        btn.textContent = ''
                    }

                    nav.style.display = 'flex'
                }
                else {
                    nav.style.display = 'none';
                }
            })

            document.addEventListener('click', function () {
                if (nav.style.display === 'flex') {
                    nav.style.display = 'none'
                }
            })
        }
    }

    (0,_dateSections_storage_js__WEBPACK_IMPORTED_MODULE_4__.setData)()
    //===================================================================================================================================================
    let barIcon = document.createElement('div');
    header.appendChild(barIcon).setAttribute('id', 'bar-icon');
    barIcon.style.display = 'none'


    let homeBtn = document.getElementById('nav-btn1');
    homeBtn.addEventListener('click', function () {
        document.body.textContent = '';
        start()
    });

    let templatesBtn = document.getElementById('nav-btn2');
    templatesBtn.addEventListener('click', function () {
        document.body.textContent = ''
        console.log("Ive been clicked")
        ;(0,_templates__WEBPACK_IMPORTED_MODULE_2__.templates)()
    });

    let resourcesBtn = document.getElementById('nav-btn3');
    resourcesBtn.addEventListener('click', () => {
        document.body.textContent = '';
        (0,_productivityMthds__WEBPACK_IMPORTED_MODULE_1__.ProductivtyMthdsPage)();
    })

}


function start() {
    //adding header

    if (!localStorage.getItem("fName")) {
        header()

        let startPage = document.createElement('div')
        let content = document.createElement('div');
        let h1 = document.createElement('h1');
        let para = document.createElement('p')
        let picContainer = document.createElement('img');
        let startBtn = document.createElement('button');

        document.body.appendChild(startPage).setAttribute('id', 'start-page');

        startPage.appendChild(content).setAttribute('id', 'start-content')
        content.classList.add('content');

        content.appendChild(h1)
        content.appendChild(para)

        h1.textContent = 'welcome to DoIt';
        para.textContent = `You can't keep today's hour for tomorrow – we all 
        know that, but still tend to procrastinate. Benjamin Franklin warns that
         time is a scarce resource, and if it's wasted, it cannot be recovered later. 
         This is why mindful planning and work on productivity are so important, DoIt will help
         you to manage your time, get started now!
        `

        startPage.appendChild(picContainer).setAttribute('src', './images/6272295.jpg')

        content.appendChild(startBtn).setAttribute('id', 'start-button')
        startBtn.textContent = 'get started'

        startBtn.addEventListener('click', _formPg__WEBPACK_IMPORTED_MODULE_0__.form)
    }
    else {
        (0,_home__WEBPACK_IMPORTED_MODULE_3__.home)()
    }
}



/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templates": () => (/* binding */ templates)
/* harmony export */ });
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.js");
/* harmony import */ var _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateSections/storage */ "./src/dateSections/storage.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _productivityMthds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productivityMthds */ "./src/productivityMthds.js");





let templatesArray = [new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/bath-solid.svg`, 'Personal hygiene', 'home', `If you don't smell good, then you don't look good`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/book-open-reader-solid.svg`, 'reading', 'hobbies', `Carry your book(s) everywhere. There's always an opportunity to read`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/briefcase-solid.svg`, 'work', 'work', `Don’t let yesterday take up too much of today. Use work template now!`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/building-columns-solid.svg`, 'financial tasks', 'personal activities', `Manage your financial tasks today. Time has value in your money`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/cart-shopping-solid.svg`, 'shopping', 'home', 'This template helps you not to forget the things you need to buy. Try it now!', false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/children-solid.svg`, 'family', 'home', `Spend more time with your family, it helps you feel better about everything`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/dumbbell-solid.svg`, 'fitness', 'personal activities', 'Stay healthy by adding your favorite exercises to your daily to-do list.', false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/graduation-cap-solid.svg`, 'studying', 'education', `Studying is one of your top priorities today. Organize your time for it now`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/handshake-solid.svg`, 'meetings', 'work', `Take care of your interviews and organize your ideas for them before you begin. to make the best impression`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/heart-pulse-solid.svg`, 'health', 'personnal activities', `the perfect mind in healthy body. Put your healthy steps into your tasks today`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/heart-solid.svg`, 'your relations', 'personnal activities', `Your relationships in life have an impact on your daily productivity. Try to make it better`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/money-bill-trend-up-solid.svg`, 'investments', 'personal activities', `Arrange your investment times according to the market to get the highest profit and the safest decisions`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/palette-solid.svg`, 'art', 'hobbies', `Give time to your imagination to be creative and add beauty to your day`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/person-walking-solid.svg`, 'sports', 'hobbies', 'Start your day with exercise to get the energy needed to perform your other tasks', false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/phone-solid.svg`, 'calls', 'home', `Arrange your phone calls so you don't forget any of them`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/plane-solid.svg`, 'travel', 'hobbies', `Arrange your trips according to your time and work`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/seedling-solid.svg`, 'planting', 'home', `Green gives you inspiration. Take care of your plants now`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/utensils-solid.svg`, 'cooking', 'home', `Make your own meals to be healthier. I believe your food tastes great`, false),
new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(`./icons/volleyball-solid.svg`, 'sports', 'hobbies', `Playing sports daily helps you to be in good health and a better condition`, false),
]

let instructionsArray = ['choose the template you want', 'open projects section in your home page', 'edit, add, remove what you want']
// console.log(templatesArray)

let footerSectionsData = [['Features', 'how it works', 'pricing', 'templates'],
['resources', 'help center', 'productivty methods'], ['about us', 'careers', 'blog']]

let contactsArray = ['./icons/facebook.svg', './icons/github.svg', './icons/twitter.svg', './icons/medium.svg', './icons/instagram.svg', './icons/youtube.svg']

function templates() {
    ;(0,_start__WEBPACK_IMPORTED_MODULE_0__.header)()
    let templatesWindow = document.createElement('div')
    document.body.appendChild(templatesWindow).setAttribute('id', 'templates-window');
    templatesStart()
    templatesSection()
    templatesFooter()
}

function templatesStart() {
    let templatesWindow = document.getElementById('templates-window')
    let templatesStartPage = document.createElement('div');
    templatesWindow.appendChild(templatesStartPage).setAttribute('id', 'templates-start');

    let firstSection = document.createElement('div');
    templatesStartPage.appendChild(firstSection).setAttribute('id', 'templates-para');
    firstSection.textContent = `start your next project\n with DOIt templates`;

    let templatesInstructions = document.createElement('div');
    templatesStartPage.appendChild(templatesInstructions).setAttribute('id', 'template-instructions');

    for (let i = 0; i < 3; i++) {
        let instruction = document.createElement('div');
        templatesInstructions.appendChild(instruction).setAttribute('class', 'instruction')
        let number = document.createElement('h3');
        instruction.appendChild(number)
        number.textContent = i + 1;

        let text = document.createElement('p');
        instruction.appendChild(text)
        text.textContent = instructionsArray[i]
    }

    let secondSection = document.createElement('img');
    templatesStartPage.appendChild(secondSection).setAttribute('src', './images/7596.jpg');
}




function templatesSection() {
    let templatesWindow = document.getElementById('templates-window')
    let templatesPage = document.createElement('div');
    templatesWindow.appendChild(templatesPage).setAttribute('id', 'templates-page');

    //templates category card
    let categoryContainer = document.createElement('div');
    templatesPage.appendChild(categoryContainer).setAttribute('id', 'categories-container')

    let searchBar = document.createElement('input')
    categoryContainer.appendChild(searchBar).setAttribute('id', 'search');
    searchBar.setAttribute('placeholder', 'search...')

    let categoriesList = document.createElement('div');
    categoryContainer.appendChild(categoriesList).setAttribute('id', 'categories-list');

    let categoriesListTitle = document.createElement('p')
    categoriesList.appendChild(categoriesListTitle).setAttribute('class', 'listP');
    categoriesListTitle.textContent = 'categories';

    let list = document.createElement('div');
    categoriesList.appendChild(list).setAttribute('class', 'list');

    let categoriesArray = ['all templates', 'work', 'education', 'home', 'design', 'clients-marketing', 'sport', 'hobbies', 'personal activities']

    for (let i = 0; i < categoriesArray.length; i++) {
        let listElem = document.createElement('div');
        list.appendChild(listElem).setAttribute('class', 'list-element');
        listElem.textContent = categoriesArray[i]
    }

    let templatesContainer = document.createElement('div');
    templatesPage.appendChild(templatesContainer).setAttribute('id', 'templates-container');

    let tempH1 = document.createElement('h1');
    templatesContainer.appendChild(tempH1).setAttribute('id', 'templates-header');
    tempH1.textContent = 'DoIt templates';


    let templates = document.createElement('div');
    templatesContainer.appendChild(templates).setAttribute('id', 'templates');

    let chosenCategoryTitle = document.createElement('h3');
    templates.appendChild(chosenCategoryTitle).setAttribute('id', 'chosen-category-title')
    chosenCategoryTitle.textContent = 'All templates' //=====================================================================>

    let chosenCategoryTemplates = document.createElement('div')
    templates.appendChild(chosenCategoryTemplates).setAttribute('id', 'chosen-category-templates');


    for (let i = 0; i < templatesArray.length; i++) {
        let templateCard = document.createElement('div');
        chosenCategoryTemplates.appendChild(templateCard).setAttribute('class', 'template')

        let iconContainer = document.createElement('div');
        templateCard.appendChild(iconContainer).setAttribute('class', 'temp-icon')
        let icon = document.createElement('div');
        iconContainer.appendChild(icon).setAttribute('class', 'icon');
        icon.style.cssText = `background-image: url(${templatesArray[i].icon})`

        let templateText = document.createElement('div');
        templateCard.appendChild(templateText).setAttribute('class', 'template-text')

        let templateTitle = document.createElement('h3')
        templateText.appendChild(templateTitle)
        templateTitle.textContent = templatesArray[i].name;

        let templateBerief = document.createElement('p');
        templateText.appendChild(templateBerief)
        templateBerief.textContent = templatesArray[i].discription;

        templateCard.addEventListener('click', function () {
            if (localStorage.getItem('fName')) {
                let projectsArray = (0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.setArrayData)('projectsArray')
                if (projectsArray.filter((elem) => elem.name === templatesArray[i].name).length === 0) {
                    document.body.textContent = '';
                    projectsArray.push(new _dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.TemplateProject(templatesArray[i].icon, templatesArray[i].name, templatesArray[i].category, templatesArray[i].discription, templatesArray[i].deleted))
                    ;(0,_dateSections_storage__WEBPACK_IMPORTED_MODULE_1__.populateData)('projectsArray', projectsArray);
                    (0,_home__WEBPACK_IMPORTED_MODULE_2__.home)()
                }
            }
        })
    }
}






function templatesFooter() {
    let templatesWindow = document.getElementById('templates-window')
    let footerSec = document.createElement('div');
    templatesWindow.appendChild(footerSec).setAttribute('id', 'templates-footer');


    let footerContent = document.createElement('div');
    footerSec.appendChild(footerContent).setAttribute('id', 'footer-content');

    let footerLogo = document.createElement('div');
    footerContent.appendChild(footerLogo).setAttribute('id', 'logo-container');

    let logo = document.createElement('div');
    footerLogo.appendChild(logo).setAttribute('id', 'logo');

    let fotLogoPara = document.createElement('p');
    footerLogo.appendChild(fotLogoPara)
    fotLogoPara.textContent = 'makes you accomplish your tasks efficiently';

    let productivtyBtn = document.createElement('button');
    footerLogo.appendChild(productivtyBtn).setAttribute('class', 'productvity-Btn')
    productivtyBtn.textContent = `helpful tips`;

    productivtyBtn.addEventListener('click', () => {
        document.body.textContent = '';
        (0,_productivityMthds__WEBPACK_IMPORTED_MODULE_3__.ProductivtyMthdsPage)()
    })

    let contentSecsContainer = document.createElement('div');
    footerContent.appendChild(contentSecsContainer).setAttribute('id', 'footer-sec-container');


    for (let i = 0; i < 3; i++) {
        let section = document.createElement('div');
        contentSecsContainer.appendChild(section).setAttribute('class', 'footer-section');

        for (let j = 0; j < 3; j++) {
            let secElement = document.createElement('div')
            section.appendChild(secElement).setAttribute('class', 'elements');

            secElement.textContent = footerSectionsData[i][j]
        }
    }

    let paragraph = document.createElement('p');
    footerContent.appendChild(paragraph);
    paragraph.textContent = 'keep in touch with us:'

    let contacts = document.createElement('div');
    footerContent.appendChild(contacts).setAttribute('id', 'contacts-container');

    for (let i = 0; i < 6; i++) {
        let contact = document.createElement('div');
        contacts.appendChild(contact).setAttribute('class', 'contact');

        contact.style.cssText = `background-image: url(${contactsArray[i]})`
    }


    let addingTemplateSec = document.createElement('div');
    footerSec.appendChild(addingTemplateSec).setAttribute('id', 'add-tem-container');

    let addTempPara = document.createElement('P');
    addingTemplateSec.appendChild(addTempPara).setAttribute('id', 'add-temp-para');
    addTempPara.textContent = 'do you have any idea for a new template?'

    let addTempBtn = document.createElement('button');
    addingTemplateSec.appendChild(addTempBtn).setAttribute('id', 'add-temp-btn');
    addTempBtn.textContent = 'send it to us';

    let footerPic = document.createElement('img');
    addingTemplateSec.appendChild(footerPic).setAttribute('src', './images/6217503.jpg');

}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.js");


(0,_start__WEBPACK_IMPORTED_MODULE_0__.start)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVHdEO0FBQ3hELGlFQUFlLDhEQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYyxpQkFBaUI7O0FBRXhELDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWhDLDZDQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZGF0ZVNlY3Rpb25zL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Zvcm1QZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvZHVjdGl2aXR5TXRoZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0YXJ0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHNlY3Rpb24sIHByb2plY3QsIHRhZywgbm90ZSwgZG9uZSwgZGVsZXRlZCwgZWRpdGVkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBkZWxldGVkO1xuICAgICAgICB0aGlzLmVkaXRlZCA9IGVkaXRlZDtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgRGF5T2ZXZWVrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCB0YXNrcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGljb24sIG5hbWUsIGNhdGVnb3J5LCBkaXNjcmlwdGlvbiwgZGVsZXRlZCkge1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kZWxldGVkID0gZGVsZXRlZDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGxldCBBbGx0YXNrc0FycmF5ID0gW107XG5leHBvcnQgbGV0IHRvZGF5VGFza3NBcnJheSA9IFtdO1xuZXhwb3J0IGxldCB0aGlzV2Vla0FycmF5ID0gW107XG5leHBvcnQgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbmV4cG9ydCBsZXQgbG9jbHN0cmdQcm9qZWN0cyA9IHNldEFycmF5RGF0YSgncHJvamVjdHNBcnJheScpXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrQ2FsYygpIHtcbiAgICBsZXQgd2Vla3JhbmdlID0gW107XG4gICAgLy8gSSBkZWNsYXJlZCBuZXcgY3VycmVudERhdGUgdmFyaWFibGUgYmVjYXVzZSB0aGUgcHVibGljIEN1cnJlbnREYXRlIHZhcmlhYmxlIGlzIGFmZmVjdGVkIGJ5IGNhbGN1bGF0aW9ucyBpbiB0aGlzIGZ1bmN0aW9uXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgZmlyc3REYXk7XG4gICAgICAgIGkgPiAwID8gZmlyc3REYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxIDogZmlyc3REYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBkYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5zZXREYXRlKGZpcnN0RGF5KSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICAgICAgd2Vla3JhbmdlLnB1c2goZGF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla3JhbmdlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRhKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZk5hbWUnKSkge1xuICAgICAgICBjb25zdCBmTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZk5hbWVcIik7XG4gICAgICAgIGNvbnN0IGxOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xOYW1lJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKS50ZXh0Q29udGVudCA9IGAke2ZOYW1lfSAke2xOYW1lfWA7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRGF0YShuYW1lLCBhcnJheSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnJheSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBcnJheURhdGEoYXJyYUxvY2FsU3RvcmFnZSkge1xuICAgIGFycmFMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFycmFMb2NhbFN0b3JhZ2UpKVxuICAgIHJldHVybiBhcnJhTG9jYWxTdG9yYWdlXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFycmF5KGl0ZW0sIGFycmF5KSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGFycmF5LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgaWYgKGVsZW0uZGVsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGFycmF5LmluZGV4T2YoZWxlbSksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy91cGRhdGUgdGFza3MgcGVyIGRheVxuICAgICAgICBlbGVtLmRhdGUgIT09IG51bGwgP1xuICAgICAgICAgICAgKG5ldyBEYXRlKGVsZW0uZGF0ZSkuZ2V0RGF0ZSgpIDwgdG9kYXkuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgJiYgbmV3IERhdGUoZWxlbS5kYXRlKS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpKVxuICAgICAgICAgICAgICAgID8gYXJyYXkuc3BsaWNlKGFycmF5LmluZGV4T2YoZWxlbSksIDEpIDogZmFsc2UgOiBmYWxzZTtcbiAgICB9KVxuICAgIHBvcHVsYXRlRGF0YShgJHtpdGVtfWAsIGFycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGVQcm9qZWN0KGl0ZW0sIGFycmF5LCB0YXNrc0FyeSwgcHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0LmRlbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICB0YXNrc0FyeS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS5wcm9qZWN0ID09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW0uZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHBvcHVsYXRlRGF0YShgQWxsdGFza3NBcnJheWAsIHRhc2tzQXJ5KTtcbiAgICAgICAgdXBkYXRlQXJyYXkoaXRlbSwgYXJyYXkpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2socGFyZW50RnVuYywgYXJyYXksIGVsZW1lbnQsIHByb3ApIHtcbiAgICBsZXQgZWRpdGVkQXJyYXkgPSBzZXRBcnJheURhdGEoJ0FsbHRhc2tzQXJyYXknKVxuICAgIGNvbnNvbGUubG9nKGVkaXRlZEFycmF5KVxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWNhcmQnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kZScpO1xuICAgIGxldCBlZGl0YWJsZUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdGFibGUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRhYmxlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWRpdGFibGVJdGVtc1tpXS52YWx1ZSA9IGVsZW1lbnRbcHJvcFtpXV1cbiAgICAgICAgY29uc29sZS5sb2coZWRpdGFibGVJdGVtc1tpXS52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coZWRpdGFibGVJdGVtc1tpXSlcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNldC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1tb2RlJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LW1vZGUnKSlcbiAgICAgICAgICAgIGxldCBlZGl0ZWRJdGVtSW5kZXggPSBlZGl0ZWRBcnJheS5maW5kSW5kZXgoKGUpID0+IGUuZWRpdGVkID09IHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdGVkSXRlbUluZGV4KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0YWJsZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdGVkQXJyYXlbZWRpdGVkSXRlbUluZGV4XVtwcm9wW2ldXSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0YWJsZUl0ZW1zW2ldLnZhbHVlKVxuICAgICAgICAgICAgICAgIGVkaXRlZEFycmF5W2VkaXRlZEl0ZW1JbmRleF1bcHJvcFtpXV0gPSBlZGl0YWJsZUl0ZW1zW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZWRpdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVEYXRhKCdBbGx0YXNrc0FycmF5JywgZWRpdGVkQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LW1vZGUnKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcGFyZW50RnVuYygpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtY2xvc2UtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmVkaXRlZCA9IGZhbHNlO1xuICAgICAgICBwb3B1bGF0ZURhdGEoJ0FsbHRhc2tzQXJyYXknLCBhcnJheSlcbiAgICAgICAgcGFyZW50RnVuYygpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0RvbmUodGFzaywgbmFtZSwgYXJyYXkpIHtcbiAgICB0YXNrLmRvbmUgPT09IGZhbHNlID8gdGFzay5kb25lID0gdHJ1ZSA6IHRhc2suZG9uZSA9IGZhbHNlO1xuICAgIHBvcHVsYXRlRGF0YShuYW1lLCBhcnJheSlcbn1cblxuXG4iLCJmdW5jdGlvbiBhdHJpYnV0ZXMoZWxlbSwgYXJncykge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKGAke2FyZ3NbMF19YCwgYCR7YXJnc1sxXX1gKVxufVxuXG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9zdGFydFwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm0oKSB7XG4gICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhlYWRlcigpXG4gICAgbGV0IGZvcm1QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHBpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXBhZ2UnKTtcbiAgICBmb3JtUGFnZS5hcHBlbmRDaGlsZChjb250ZW50KS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tY29udGVudCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1oZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBpY0NvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvMjIwNl93MDM5X24wMDNfMjY2Yl9wMV8yNjYuanBnJylcblxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSAnd2VsY29tZSB0byBET0lUJztcblxuICAgIC8vZm9ybSBlbGVtZW50c1xuXG4gICAgbGV0IGZvcm1FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUVsZW0pLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpXG4gICAgZm9ybUVsZW0ubWV0aG9kID0gJ1BPU1QnO1xuICAgIGxldCB0ZXh0UmVneCA9IG5ldyBSZWdFeHAoL15bYS16QS1aXSskfF5bYS16QS1aXSsoLXxfKStbYS16QS1aXSskLylcbiAgICBsZXQgbGFiZWxzTmFtZXMgPSBbJ2ZpcnN0LW5hbWUnLCAnbGFzdC1uYW1lJywgJ2VtYWlsJ11cbiAgICBsZXQgaW5wdXRBdHJzID0gW1tbJ3R5cGUnLCAndGV4dCddLCBbJ25hbWUnLCAnZmlyc3QtbmFtZSddLCBbJ2lkJywgJ2ZpcnN0LW5hbWUnXSwgWydwbGFjZWhvbGRlcicsICdZb3VyIEZpcnN0IE5hbWUnXSwgWydyZXF1aXJlZCcsICcnXV0sXG4gICAgW1sndHlwZScsICd0ZXh0J10sIFsnbmFtZScsICdsYXN0LW5hbWUnXSwgWydpZCcsICdsYXN0LW5hbWUnXSwgWydwbGFjZWhvbGRlcicsICdZb3VyIExhc3QgTmFtZSddLCBbJ3JlcXVpcmVkJywgJyddXV07XG4gICAgbGV0IHJhZGlvQXR0ciA9IFtbWyd0eXBlJywgJ3JhZGlvJ10sIFsnaWQnLCAnbWFsZSddLCBbJ25hbWUnLCAnZ2VuZGVyJ10sIFsndmFsdWUnLCAnbWFsZSddLCBbJ3JlcXVpcmVkJywgJyddXSxcbiAgICBbWyd0eXBlJywgJ3JhZGlvJ10sIFsnaWQnLCAnZmVtYWxlJ10sIFsnbmFtZScsICdnZW5kZXInXSwgWyd2YWx1ZScsICdmZW1hbGUnXSwgWydyZXF1aXJlZCcsICcnXV1dO1xuICAgIGxldCByYWRpb1NwYW4gPSBbJ21hbGUnLCAnZmVtYWxlJ11cblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBmb3JtRWxlbS5hcHBlbmRDaGlsZChsYWJlbCkuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtsYWJlbHNOYW1lc1tpXX1gKTtcblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW5wdXRBdHJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBhdHJpYnV0ZXMoaW5wdXRFbGVtZW50LCBpbnB1dEF0cnNbaV1bal0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGZvcm1FbGVtLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JhZGlvLWNvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCkuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtyYWRpb1NwYW5baV19YCk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2dlbmRlci1sYWJlbCcpO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudClcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYWRpb0F0dHJbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGF0cmlidXRlcyhpbnB1dEVsZW1lbnQsIHJhZGlvQXR0cltpXVtqXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcmFkaW9TcGFuW2ldXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cblxuXG4gICAgbGV0IGlucHV0Rm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QtbmFtZScpXG4gICAgbGV0IGlucHV0TG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1uYW1lJylcblxuICAgIGZ1bmN0aW9uIGlucHV0VmFsaWRpdHkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0ZXh0UmVneC50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRSZWd4LnRlc3QoZXZlbnQudGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgncGxlYXNlLCByZW1vdmUgd2hpdGUgc3BhY2UuIHlvdSBjYW4gdXNlIC0gb3IgXyBpbnN0ZWFkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgnJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0Rm5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dFZhbGlkaXR5KVxuICAgIGlucHV0TG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dFZhbGlkaXR5KVxuXG4gICAgLy9zdWJtaXRpb25cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgZm9ybUVsZW0uYXBwZW5kQ2hpbGQoc3VibWl0KS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpXG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaW5wdXRGbmFtZS5jaGVja1ZhbGlkaXR5KCkgPT09IHRydWUgJiYgaW5wdXRMbmFtZS5jaGVja1ZhbGlkaXR5KCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBob21lKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZk5hbWVcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdC1uYW1lXCIpLnZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxOYW1lXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFzdC1uYW1lXCIpLnZhbHVlKTtcbn1cbiIsImltcG9ydCB7IGhlYWRlciwgc3RhcnQgfSBmcm9tIFwiLi9zdGFydFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBUYXNrLCB0YXNrRG9uZSwgd2Vla0NhbGMsIFRlbXBsYXRlUHJvamVjdCwgcG9wdWxhdGVEYXRhLCBzZXRBcnJheURhdGEsIGRlbGVQcm9qZWN0LCB1cGRhdGVBcnJheSB9IGZyb20gXCIuL2RhdGVTZWN0aW9ucy9zdG9yYWdlXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlTW9kdWxlIGZyb20gXCIuL2RhdGVTZWN0aW9ucy9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXNcIjtcblxuXG5sZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5sZXQgaWNvbnNBcnJheSA9IFtgLi9pY29ucy9idWxsc2V5ZS1zb2xpZC5zdmdgLCBgLi9pY29ucy9jYWxlbmRhci1kYXlzLXNvbGlkLnN2Z2AsIGAuL2ljb25zL2xpc3QtY2hlY2stc29saWQuc3ZnYCwgYC4vaWNvbnMvZGlhZ3JhbS1wcm9qZWN0LXNvbGlkLnN2Z2AsICcnLCBgLi9pY29ucy9oYXNodGFnLXNvbGlkLnN2Z2AsICcnXVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBob21lKCkge1xuICAgIGhlYWRlcigpO1xuICAgIHRhc2tzUGFnZSgpO1xuICAgIHRvZGF5KClcbn1cblxuZXhwb3J0IGxldCBwcm9qZWN0c0FycmF5ID0gW107XG5leHBvcnQgbGV0IHRhZ3NBcnJheSA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG5cbi8vIGNvbnNvbGUubG9nKHdlZWtDYWxjKCkpXG5cbmZ1bmN0aW9uIHRvZ2dsaW5nTGVmdEJhcigpIHtcbiAgICBsZXQgbGVmdEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWJhcicpXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCkge1xuICAgICAgICBpZiAobGVmdEJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlZCcpKSB7XG4gICAgICAgICAgICBsZWZ0QmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgbGVmdEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZWZ0QmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgbGVmdEJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdGFza3NQYWdlKCkge1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2dvJylcbiAgICBsb2dvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGxldCBiYXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhci1pY29uJylcbiAgICBiYXJJY29uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBiYXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xpbmdMZWZ0QmFyKVxuXG5cbiAgICAvL2hvbWUgcGFnZSBzdHlsaW5nXG4gICAgbGV0IHRhc2tzV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgbGVmdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza3NXaW5kb3cpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3Mtd2luZG93JylcbiAgICB0YXNrc1dpbmRvdy5hcHBlbmRDaGlsZChsZWZ0QmFyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnQtYmFyJyk7XG4gICAgdGFza3NXaW5kb3cuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1wYWdlJylcblxuICAgIC8vbGVmdCBiYXJcbiAgICBsZXQgdG9kYXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB3ZWVrVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGFnc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG5cbiAgICBsZXQgbGVmdEJhckl0ZW1zID0gW3RvZGF5VGFza3MsIHdlZWtUYXNrcywgYWxsVGFza3MsIHByb2plY3RzLCBwcm9qZWN0c0xpc3QsIHRhZ3MsIHRhZ3NMaXN0XVxuICAgIGxldCBsZWZ0QmFySXRlbXNUZXh0ID0gWyd0b2RheScsICd0aGlzIHdlZWsnLCAnYWxsIHRhc2tzJywgJ215IHByb2plY3RzJywgJ3Byb2plY3RzLWxpc3QnLCAndGFncycsICd0YWdzIGxpc3QnXVxuXG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdEJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0QmFySXRlbXNbaV0pLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtsZWZ0QmFySXRlbXNUZXh0W2ldLnJlcGxhY2UoL1xccy9nLCBcIi1cIil9YClcbiAgICAgICAgbGVmdEJhckl0ZW1zW2ldLmFwcGVuZENoaWxkKGljb24pLmNsYXNzTGlzdC5hZGQoJ2xlZnQtYmFyLWljb24nKVxuICAgICAgICBsZWZ0QmFySXRlbXNbaV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS50ZXh0Q29udGVudCA9IGAke2xlZnRCYXJJdGVtc1RleHRbaV19YFxuICAgICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpY29uc0FycmF5W2ldfSlgXG4gICAgfVxuXG4gICAgLy9hZGQgcHJvamVjdCBidXR0b24gXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGhvbWVQYWdlLnN0eWxlID0gJ2ZpbHRlcjogYmx1cig5cHgpJ1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWNhcmQnKSkge1xuICAgICAgICAgICAgYWRkUHJvamVjdCgpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtY2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMjUgPyBsZWZ0QmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggPCAxMjI1ID8gbGVmdEJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pXG5cblxuXG4gICAgLy9yZW1vdmUgdGV4dCBnZW5lcmF0ZWQgZnJvbSB0aGUgYWJvdmUgZm9yIGxvb3AgZm9yIGFsbCBsZWZ0IGJhciBkaXZzXG4gICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGFnc0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBwcm9qZWN0c0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1saXN0JylcblxuXG4gICAgLy90YWdzTGlzdCBpdGVtcyBcbiAgICBmdW5jdGlvbiB0YWdzR2VuZXJhdG9yKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBsZXQgdGFnQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0YWdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YWdzTGlzdC5hcHBlbmRDaGlsZCh0YWdCdG4pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFnLWJ0bicpXG4gICAgICAgICAgICB0YWdCdG4uYXBwZW5kQ2hpbGQodGFnQ29sb3IpLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YWdzQXJyYXlbaV19YClcbiAgICAgICAgICAgIHRhZ0J0bi5hcHBlbmRDaGlsZCh0YWdJdGVtKTtcbiAgICAgICAgICAgIHRhZ0l0ZW0udGV4dENvbnRlbnQgPSB0YWdzQXJyYXlbaV07XG4gICAgICAgICAgICB0YWdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGx0YXNrc0FycmF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xpbmdMZWZ0QmFyKCkvL29ubHl3b3JrIGZvciBwaG9uZXNcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZU1vZHVsZS51cGRhdGVBcnJheSgnQWxsdGFza3NBcnJheScsIHNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXBhZ2UnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1wYWdlJykuYXBwZW5kQ2hpbGQodGFnUGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsIFwidGFncy1wYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0YWdQYWdlLmFwcGVuZENoaWxkKHRhZ05hbWUpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFnLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lLnRleHRDb250ZW50ID0gYCR7dGFnc0FycmF5W2ldfSBwcmlvcnR5IHRhc2tzYFxuICAgICAgICAgICAgICAgICAgICB0YWdQYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdpZCcsICd0YWctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tHZW5lcmF0b3IodGFnc0dlbmVyYXRvciwgY29udGFpbmVyLCAndGFnJywgYCR7dGFnc0FycmF5W2ldfWApXG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2soKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFnc0dlbmVyYXRvcigpXG5cblxuICAgIC8vZXZlbnRsaXN0ZW5lcnMgZm9yIHByb2plY3RzIGJ1dHRvbiBhbmQgdGFnIGxpc3QgYnV0dG9uXG4gICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAocHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHByb2plY3RHZW5lcmF0b3IoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRhZ3NMaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/IHRhZ3NMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCcgOiB0YWdzTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSlcblxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTIyNSkge1xuICAgICAgICBsZXQgbG9nb3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnRCYXIuYXBwZW5kQ2hpbGQobG9nb3V0QnRuKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZy1vdXQtYnRuJylcbiAgICAgICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZOYW1lJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICAvLyBzdG9yYWdlTW9kdWxlLnNldEFycmF5RGF0YSgndG9kYXlUYXNrc0FycmF5JylcblxuXG5cbiAgICBhZGRUYXNrKClcbiAgICB0b2RheVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kYXkpO1xuICAgIHdlZWtUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXNXZWVrKTtcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFRhc2tzR2FuZXJhdG9yKVxuXG59XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IG9yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgdGVtcGxhdGVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtcGFnZScpLmFwcGVuZENoaWxkKGNvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1jYXJkJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0KS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NldC1icmpjdC1idG4nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3JQKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wbGF0ZXNCdG4pLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hvc3NlLXRlbXAtYnRuJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtYnRuLXByb2plY3QtY2FyZCcpXG5cblxuICAgIHNldC50ZXh0Q29udGVudCA9ICdhZGQnXG4gICAgb3JQLnRleHRDb250ZW50ID0gJ29yJztcbiAgICB0ZW1wbGF0ZXNCdG4udGV4dENvbnRlbnQgPSAnY2hvb3NlIHByb2plY3QnO1xuXG4gICAgbGV0IGljb24gPSAnLi9pY29ucy9jaXJjbGUtZG90LXJlZ3VsYXIuc3ZnJ1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ3Byb2plY3QgbmFtZSc7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIHNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnJheScpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBzZXRBcnJheURhdGEoJ3Byb2plY3RzQXJyYXknKVxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXcgVGVtcGxhdGVQcm9qZWN0KGljb24sIGlucHV0LnZhbHVlLCAnJywgJycsIGZhbHNlKSlcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZURhdGEoJ3Byb2plY3RzQXJyYXknLCBwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHByb2plY3RHZW5lcmF0b3IoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH0pXG5cbiAgICB0ZW1wbGF0ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGVtcGxhdGVzKClcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0R2VuZXJhdG9yKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS50ZXh0Q29udGVudCA9ICcnXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikpIHtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvYnJpZWZjYXNlLXNvbGlkLnN2Z2AsICd3b3JrJywgJ3dvcmsnLCBgRG9u4oCZdCBsZXQgeWVzdGVyZGF5IHRha2UgdXAgdG9vIG11Y2ggb2YgdG9kYXkuIFVzZSB3b3JrIHRlbXBsYXRlIG5vdyFgKSlcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvcGhvbmUtc29saWQuc3ZnYCwgJ2NhbGxzJywgJ2hvbWUnLCBgQXJyYW5nZSB5b3VyIHBob25lIGNhbGxzIHNvIHlvdSBkb24ndCBmb3JnZXQgYW55IG9mIHRoZW1gKSlcbiAgICAgICAgc3RvcmFnZU1vZHVsZS5wb3B1bGF0ZURhdGEoJ3Byb2plY3RzQXJyYXknLCBwcm9qZWN0c0FycmF5KVxuICAgIH1cblxuICAgIC8vZGVsZXQgZGVsZXRlZCBwcm9qZWN0cyBiZWZvcmVcbiAgICBsZXQgbG9jbHN0cmdQcm9qZWN0cyA9IHN0b3JhZ2VNb2R1bGUuc2V0QXJyYXlEYXRhKCdwcm9qZWN0c0FycmF5Jyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2Nsc3RyZ1Byb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBhbGxBcnJheSA9IHN0b3JhZ2VNb2R1bGUuc2V0QXJyYXlEYXRhKCdBbGx0YXNrc0FycmF5JylcbiAgICAgICAgc3RvcmFnZU1vZHVsZS5kZWxlUHJvamVjdCgncHJvamVjdHNBcnJheScsIGxvY2xzdHJnUHJvamVjdHMsIGFsbEFycmF5LCBsb2Nsc3RyZ1Byb2plY3RzW2pdKVxuICAgIH1cblxuICAgIC8vdXBkYXRlIHRoZSBwcm9qZWN0cyBhcnJheVxuICAgIGxvY2xzdHJnUHJvamVjdHMgPSBzdG9yYWdlTW9kdWxlLnNldEFycmF5RGF0YSgncHJvamVjdHNBcnJheScpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jbHN0cmdQcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgYWxsQXJyYXkgPSBzdG9yYWdlTW9kdWxlLnNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpXG4gICAgICAgIHN0b3JhZ2VNb2R1bGUuZGVsZVByb2plY3QoJ3Byb2plY3RzQXJyYXknLCBsb2Nsc3RyZ1Byb2plY3RzLCBhbGxBcnJheSwgbG9jbHN0cmdQcm9qZWN0c1tqXSlcblxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkZWxldFByamN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0KS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtYnRuJylcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbikuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsZWZ0LWJhci1wcmpjdC1pY29uJyk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGVmdC1iYXItcHJqY3QtbmFtZScpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0UHJqY3RCdG4pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlLXByamN0LWJ0bicpO1xuICAgICAgICBsZXQgZGVsZXRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlLXByamN0LWJ0bicpXG5cblxuICAgICAgICBkZWxldEJ0bnNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgbG9jbHN0cmdQcm9qZWN0c1tqXS5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZURhdGEoJ3Byb2plY3RzQXJyYXknLCBsb2Nsc3RyZ1Byb2plY3RzKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0SWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bG9jbHN0cmdQcm9qZWN0c1tqXS5pY29ufSlgXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbG9jbHN0cmdQcm9qZWN0c1tqXS5uYW1lO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9nZ2xpbmdMZWZ0QmFyKCkvL29ubHl3b3JrIGZvciBwaG9uZXNcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2xzdHJnUHJvamVjdHNbal0pXG4gICAgICAgICAgICBzdG9yYWdlTW9kdWxlLnVwZGF0ZUFycmF5KCdwcm9qZWN0c0FycmF5Jywgc2V0QXJyYXlEYXRhKCdwcm9qZWN0c0FycmF5JykpXG4gICAgICAgICAgICBsZXQgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1wYWdlJykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXBhZ2UnKS5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsIFwicHJvamVjdHMtcGFnZVwiKTtcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICAgICAgICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gYHlvdXIgJHtsb2Nsc3RyZ1Byb2plY3RzW2pdLm5hbWV9IHRhc2tzYFxuICAgICAgICAgICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzLWNvbnRhaW5lcicpXG4gICAgICAgICAgICB0YXNrR2VuZXJhdG9yKHByb2plY3RHZW5lcmF0b3IsIGNvbnRhaW5lciwgJ3Byb2plY3QnLCBgJHtsb2Nsc3RyZ1Byb2plY3RzW2pdLm5hbWV9YClcbiAgICAgICAgICAgIGFkZFRhc2soKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG5ld1Rhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlXCIpLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2snKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZVwiKS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FyZCkuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1jYXJkJyk7XG5cblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBuZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuXG4gICAgbmV3VGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy9tYWtpbmcgbmV3IHRhc2sgY2FyZCBlbGVtZW50c1xuICAgIGxldCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgdGFza05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxldCB0YXNrVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Rhc2tDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSlcblxuICAgIGxldCBsYWJlbE5hbWVzID0gW1widGFzayB0aXRsZVwiLCAnbm90ZXMnLCAnJywgJycsICdjaG9vc2UgdGFzayBkYXRlJ11cbiAgICBsZXQgY2FyZEVsZW1zID0gW3Rhc2tUaXRsZSwgdGFza05vdGUsIHRhc2tQcm9qZWN0LCB0YXNrVGFnLCB0YXNrRGF0ZV07XG4gICAgbGV0IGNhcmRzRWxlbXNBdHRycyA9IFt7IFwicGxhY2Vob2xkZXJcIjogXCJ0YXNrIHRpdGxlXCIsICdyZXF1aXJlZCc6ICcnLCAnbWF4bGVuZ3RoJzogNDAgfSwgeyAnbWF4bGVuZ3RoJzogMTIwLCBcInBsYWNlaG9sZGVyXCI6IFwiaW5zZXJ0IHlvdXIgbm90ZXMgaGVyZVwiIH0sXG4gICAgeyBcIm5hbWVcIjogXCJwcm9qZWN0c1wiIH0sIHsgXCJuYW1lXCI6IFwidGFnc1wiIH0sIHsgXCJ0eXBlXCI6IFwiZGF0ZVwiLCBcInJlcXVpcmVkXCI6IFwiXCIgfVxuICAgIF1cblxuICAgIG5ld1Rhc2tDYXJkLmFwcGVuZENoaWxkKGNsb3NlSWNvbikuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkLWNsb3NlLWljb24nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJsZS50ZXh0Q29udGVudCA9IGxhYmVsTmFtZXNbaV1cbiAgICAgICAgbmV3VGFza0NhcmQuYXBwZW5kQ2hpbGQobGFibGUpLnNldEF0dHJpYnV0ZSgnaWQnLCBgbGFibGUtJHtpICsgMX1gKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2FyZHNFbGVtc0F0dHJzW2ldKSB7XG4gICAgICAgICAgICBjYXJkRWxlbXNbaV0uc2V0QXR0cmlidXRlKGAke2tleX1gLCBgJHtjYXJkc0VsZW1zQXR0cnNbaV1ba2V5XX1gKVxuICAgICAgICB9XG4gICAgICAgIGxhYmxlLmFwcGVuZENoaWxkKGNhcmRFbGVtc1tpXSkuc2V0QXR0cmlidXRlKCdpZCcsIGBpbnB1dC0ke2kgKyAxfWApO1xuXG4gICAgICAgIC8vYWRkaW5nIGVkaXRhYmxlIGNsYXNzIHNvIEkgY2FuIG1hbnB1bGF0ZSB0aGVtIHdpdGhvdXQgcmVhcGV0aW5nIHRoZSBzYW1lIGxpbmUgb2YgY29kZVxuICAgICAgICBjYXJkRWxlbXNbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0YWJsZScpXG4gICAgfVxuICAgIG5ld1Rhc2tDYXJkLmFwcGVuZENoaWxkKHNldEJ0bikuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXNldC1idG4nKTtcbiAgICBzZXRCdG4udGV4dENvbnRlbnQgPSAnc2V0JztcblxuXG4gICAgLy9wcm9qZWN0cyBsaXN0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycmF5JykpIHtcbiAgICAgICAgbGV0IHByb2plY3RTdG9yYWdlID0gc2V0QXJyYXlEYXRhKCdwcm9qZWN0c0FycmF5JylcbiAgICAgICAgbGV0IGFsbFRhc2tzID0gc2V0QXJyYXlEYXRhKCdBbGx0YXNrc0FycmF5JylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVsZVByb2plY3QoJ3Byb2plY3RzQXJyYXknLCBwcm9qZWN0U3RvcmFnZSwgYWxsVGFza3MsIHByb2plY3RTdG9yYWdlW2ldKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTdG9yYWdlID0gc2V0QXJyYXlEYXRhKCdwcm9qZWN0c0FycmF5JylcbiAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlLmZpbHRlcihlbGVtID0+IGVsZW0uZGVsZXRlZCA9PT0gdHJ1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0U3RvcmFnZVtpXS5uYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3RTdG9yYWdlW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RhZ3MgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGFza1RhZy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0YWdzQXJyYXlbaV1cbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdGFnc0FycmF5W2ldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2tGdW4oZSkge1xuICAgICAgICBpZiAodGFza1RpdGxlLmNoZWNrVmFsaWRpdHkoKSAmJiB0YXNrRGF0ZS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghbmV3VGFza0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LW1vZGUnKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50V2VlayA9IHdlZWtDYWxjKClcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudERheSA9IGZvcm1hdChjdXJyZW50RGF0ZSwgXCJ5eXl5LUxMLWRkXCIpXG4gICAgICAgICAgICAgICAgbGV0IGFsbEFycmF5ID0gc2V0QXJyYXlEYXRhKCdBbGx0YXNrc0FycmF5JylcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKG5ld1Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGx0YXNrc0FycmF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEFycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURhdGEoXCJBbGx0YXNrc0FycmF5XCIsIGFsbEFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VNb2R1bGUuQWxsdGFza3NBcnJheS5wdXNoKG5ld1Rhc2spXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURhdGEoXCJBbGx0YXNrc0FycmF5XCIsIHN0b3JhZ2VNb2R1bGUuQWxsdGFza3NBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZS52YWx1ZSA9PSBjdXJyZW50RGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2RheScpXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgWydhbGwgdGFza3MnLCAndG9kYXknLCAndGhpcyB3ZWVrJ10sIHRhc2tQcm9qZWN0LnZhbHVlLCB0YXNrVGFnLnZhbHVlLCB0YXNrTm90ZS52YWx1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTG9jYWxTdG9yYWdlKG5ld1Rhc2spXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5KClcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2V0QXJyYXlEYXRhKCdBbGx0YXNrc0FycmF5JykpXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50V2Vlay5pbmNsdWRlcyh0YXNrRGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMgd2VlaycpXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgWydhbGwgdGFza3MnLCAndGhpcyB3ZWVrJ10sIHRhc2tQcm9qZWN0LnZhbHVlLCB0YXNrVGFnLnZhbHVlLCB0YXNrTm90ZS52YWx1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2NhbFN0b3JhZ2UobmV3VGFzaylcbiAgICAgICAgICAgICAgICAgICAgdGhpc1dlZWsoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWxsJylcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCBbJ2FsbCB0YXNrcyddLCB0YXNrUHJvamVjdC52YWx1ZSwgdGFza1RhZy52YWx1ZSwgdGFza05vdGUudmFsdWUsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMb2NhbFN0b3JhZ2UobmV3VGFzaylcbiAgICAgICAgICAgICAgICAgICAgYWxsVGFza3NHYW5lcmF0b3IoKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXRBcnJheURhdGEoJ0FsbHRhc2tzQXJyYXknKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXdUYXNrQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vYWRkaW5nIHRhc2tzIHRvIHRoZWlyIHNlY3Rpb25zXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXNldC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrRnVuKVxuXG5cbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tHZW5lcmF0b3IocGFyZW50RnVuYywgY29udGFpbmVyLCBwcm9wLCBjb25kZXRpb24pIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsdGFza3NBcnJheScpKSB7XG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VBcnJheSA9IHNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpXG4gICAgICAgIC8vSSBzb3J0ZWQgdGhlbSBzbyBJIGNhbiBlZGl0IHdpdGhvdXQgbWlzc2luZyBwb3NpdGlvbiBiZXR3ZWVuIHRhc2tzXG4gICAgICAgIGxldCBhbGxBcnJheSA9IGxvY2FsU3RvcmFnZUFycmF5LnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpIH0pXG4gICAgICAgIGFsbEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXcgRGF0ZShlbGVtZW50LmRhdGUpKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbcHJvcF0uaW5jbHVkZXMoY29uZGV0aW9uKSB8fCBlbGVtZW50W3Byb3BdID09IGNvbmRldGlvbikge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrVGV4dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzayB0b2RheS10YXNrJyk7XG4gICAgICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0ljb24pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1jaGVjay1idG4nKTtcbiAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stdGV4dCcpO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChlZGl0QnRuKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZWRpdCcpO1xuXG4gICAgICAgICAgICAgICAgdGFza1RleHQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICAgICAgdGFza1RleHQuYXBwZW5kQ2hpbGQodGFza1RleHREYXRlKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stZGF0ZScpXG4gICAgICAgICAgICAgICAgdGFza1RleHREYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kYXRlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZG9uZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzay5jbGFzc0xpc3QpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9jaGVja1xuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RvbmUoZWxlbWVudCwgYEFsbHRhc2tzQXJyYXlgLCBhbGxBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kb25lID09IHRydWUgPyB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpIDogdGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRvbmUnKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRGF0YShcIkFsbHRhc2tzQXJyYXlcIiwgYWxsQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmRlbGV0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vZWRpdCBcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lZGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZURhdGEoJ0FsbHRhc2tzQXJyYXknLCBhbGxBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1jYXJkXCIpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IFsnbmFtZScsICdub3RlJywgJ3Byb2plY3QnLCAndGFnJywgJ2RhdGUnXVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50W3Byb3BzWzBdXSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZU1vZHVsZS5lZGl0VGFzayhwYXJlbnRGdW5jLCBhbGxBcnJheSwgZWxlbWVudCwgcHJvcHMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RvcmFnZU1vZHVsZS51cGRhdGVBcnJheSgnQWxsdGFza3NBcnJheScsIGFsbEFycmF5KVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhhbGxBcnJheSlcbn1cblxuXG5cbmZ1bmN0aW9uIHRvZGF5KCkge1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtcGFnZScpO1xuICAgIGxldCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lUGFnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHRvZGF5U2VjdGlvbikuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheS1zZWN0aW9uJyk7XG4gICAgLy8gY29uc29sZS5sb2codG9kYXlTZWN0aW9uKVxuXG4gICAgLy9oZWFkaW5nIFxuICAgIGxldCB0b2RheUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCB0b2RheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdG9kYXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kYXlTZWN0aW9uLmFwcGVuZENoaWxkKHRvZGF5SGVhZGluZykuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheS1oZWFkaW5nJyk7XG4gICAgdG9kYXlTZWN0aW9uLmFwcGVuZENoaWxkKHRvZGF5RGF0ZSkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheS1kYXRlJyk7XG4gICAgdG9kYXlTZWN0aW9uLmFwcGVuZENoaWxkKHRvZGF5VGFza3MpLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXktdGFza3MnKTtcblxuICAgIGFkZFRhc2soKTtcbiAgICAvL3N2ZyBpY29uXG4gICAgbGV0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmTmFtZVwiKVxuICAgIGN1cnJlbnREYXRlLmdldEhvdXJzKCkgPiAxMiAmJiBjdXJyZW50RGF0ZS5nZXRIb3VycygpIDwgMyA/IHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IGBnb29kIGFmdGVybm9vbiwgJHt1c2VyTmFtZX1gIDpcbiAgICAgICAgY3VycmVudERhdGUuZ2V0SG91cnMoKSA+IDEzICYmIGN1cnJlbnREYXRlLmdldEhvdXJzKCkgPCAyNCA/IHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IGBnb29kIGV2ZW5pbmcsICR7dXNlck5hbWV9YCA6IHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IGBnb29kIG1vcm5pbmcsICR7dXNlck5hbWV9YFxuICAgIHRvZGF5RGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdChjdXJyZW50RGF0ZSwgJ2lpaS1MTEwtZGQnKTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsdGFza3NBcnJheScpKSB7XG4gICAgICAgIHRvZ2dsaW5nTGVmdEJhcigpIC8vb25seSB3b3JrIGluIHBob25lcyBcblxuICAgICAgICB1cGRhdGVBcnJheSgnQWxsdGFza3NBcnJheScsIHNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpKVxuICAgICAgICB0YXNrR2VuZXJhdG9yKHRvZGF5LCB0b2RheVRhc2tzLCAnc2VjdGlvbicsICd0b2RheScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXRBcnJheURhdGEoJ0FsbHRhc2tzQXJyYXknKSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gdGhpc1dlZWsoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGx0YXNrc0FycmF5JykpIHtcbiAgICAgICAgc3RvcmFnZU1vZHVsZS51cGRhdGVBcnJheSgnQWxsdGFza3NBcnJheScsIHNldEFycmF5RGF0YSgnQWxsdGFza3NBcnJheScpKVxuICAgICAgICB0YXNrc0NvbnRhaW5lcih0aGlzV2VlaywgJ3RoaXMtd2Vlay1wYWdlJywgXCJ3ZWVrLWNvbnRhaW5lclwiLCAndGhpcyB3ZWVrIHRhc2tzJywgJ3RoaXMgd2VlaycpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFsbFRhc2tzR2FuZXJhdG9yKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsdGFza3NBcnJheScpKSB7XG4gICAgICAgIHN0b3JhZ2VNb2R1bGUudXBkYXRlQXJyYXkoJ0FsbHRhc2tzQXJyYXknLCBzZXRBcnJheURhdGEoJ0FsbHRhc2tzQXJyYXknKSlcbiAgICAgICAgdGFza3NDb250YWluZXIoYWxsVGFza3NHYW5lcmF0b3IsICdhbGwtdGFza3MtcGFnZScsICdhbGwtdGFza3MtY29udGFpbmVyJywgJ2FsbCB0YXNrcycsICdhbGwgdGFza3MnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFza3NDb250YWluZXIocGFyZW50RnVuYywgcGFnZUlkLCBjb250YWluZXJJZCwgaGVhZGVyTmFtZSwgc2VjdGlvbikge1xuICAgIGxldCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhlYWRlck5hbWU7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXBhZ2UnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXBhZ2UnKS5hcHBlbmRDaGlsZChwYWdlKS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cGFnZUlkfWApXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250YWluZXIpLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtjb250YWluZXJJZH1gKTtcbiAgICB0b2dnbGluZ0xlZnRCYXIoKSAvL29ubHkgd29yayBpbiBwaG9uZXMgXG4gICAgdGFza0dlbmVyYXRvcihwYXJlbnRGdW5jLCBjb250YWluZXIsICdzZWN0aW9uJywgYCR7c2VjdGlvbn1gKVxuICAgIGFkZFRhc2soKVxufVxuXG4iLCJpbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9zdGFydFwiO1xuXG5jbGFzcyBNZXRob2RPYmoge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkaXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmNvbnN0IG1ldGhvZHNBcnJheSA9IFtcbiAgICBuZXcgTWV0aG9kT2JqKCcxLiBQbGFuIFlvdXIgRGF5IEFoZWFkIG9mIFRpbWUnLCBgVGhlIGZpcnN0IHN0ZXAgdG8gYmVpbmcgcHJvZHVjdGl2ZSBpcyBwbGFubmluZyBhIGRheSdzIHNjaGVkdWxlIGluIGFkdmFuY2UuXG4gICAgWW91IHNob3VsZCBrbm93IHdoYXQgeW91J3JlIGRvaW5nLCB3aGVuIHlvdSdyZSBkb2luZyBpdCwgYW5kIGhvdyBsb25nIG9uIGFueSBnaXZlbiBkYXkuIFdpdGhvdXQgYSBzY2hlZHVsZSwgeW91J3JlIGxpa2VseSB0byBtaXNzIG91dCBvbiBpbXBvcnRhbnQgdGFza3MuIFxcbiBcXG4gXG4gICAgV3JpdGUgZG93biBhIGRldGFpbGVkIHBsYW4gb2YgdGhlIGRheSBlYXJseSBtb3JuaW5nIG9yIHRoZSBuaWdodCBiZWZvcmUuIFdyaXRlIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gZG8gc28gdGhhdCB5b3UgaGF2ZSBhIHNlbnNlIG9mIGRpcmVjdGlvbiBhbmQga25vdyB3aGF0IHRvIGZvY3VzIG9uIG5leHQuXG4gICAgVGhpcyBlbGltaW5hdGVzIGFsbCBndWVzc3dvcmssIGFuZCB0aGVyZSdzIGxlc3MgY2hhbmNlIG9mIHlvdSBkcmlmdGluZyBhd2F5IGFuZCB3YXN0aW5nIHRpbWUgYmVjYXVzZSB5b3UgZG8gbm90IGtub3cgd2hhdCB5b3UnbGwgZG8gbmV4dC4gIGApLFxuXG4gICAgbmV3IE1ldGhvZE9iaignMi4gV3JpdGUgRG93biB0aGUgVGhyZWUgTW9zdCBJbXBvcnRhbnQgRGFpbHkgVGFza3MgJywgYEpvdCBkb3duIHRoZSB0aHJlZSBtb3N0IGltcG9ydGFudCB0YXNrcyBmb3IgdGhlIGRheS4gRGVzY3JpYmUgdGhlIHRhc2tzIGluIGRldGFpbCBcbiAgICB0byBhdm9pZCBhbnkgYW1iaWd1aXR5LiBGb2N1cyBvbiBpbXBvcnRhbnQgdGFza3MgcmF0aGVyIHRoYW4gdXJnZW50IG9uZXMuIGApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMy4gVXNlIEFueSBQcm9kdWN0aXZpdHkgVGVjaG5pcXVlYCwgYFN1cGVyY2hhcmdlIHlvdXIgcHJvZHVjdGl2aXR5IGJ5IHVzaW5nIGEgcHJvZHVjdGl2aXR5IG1ldGhvZC4gQW4gaW5jcmVkaWJseSBwb3dlcmZ1bCBwcm9kdWN0aXZpdHkgXG4gICAgdG9vbCBjYW4geW91IHN0YXkgZm9jdXNlZCBkdXJpbmcgd29yayB0aW1lLiBBIHByb2R1Y3Rpdml0eSBzeXN0ZW0gd2lsbCBoZWxwIHlvdSBtYW5hZ2UgeW91ciBkYXkgYnkgc2V0dGluZyBhY2NvbXBsaXNoYWJsZSBnb2Fscy4gU2VsZWN0IGEgcHJvZHVjdGl2aXR5IG1ldGhvZCBcbiAgICB0aGF0IGlzIHJpZ2h0IGZvciB5b3UgdGhhdCBoZWxwcyB5b3UgaW5jcmVhc2UgeW91ciBkYWlseSBvdXRwdXQuYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGA0LiBTZXQgYSBTaW5nbGUgR29hbCBmb3IgRWFjaCBEYXlgLCBgU2V0IGEgc2luZ2xlIGdvYWwgZm9yIGVhY2ggd29ya2luZyBkYXkgc28geW91IGNhbiBmb2N1cyBvbiBpbmRpdmlkdWFsIHRhc2tzLiBBIGdvb2QgaWRlYSBjYW4gYmUgYnJlYWtpbmcgZG93biBkYWlseSBnb2Fsc1xuICAgIGludG8gbXVsdGlwbGUgdGFza3MsIHdoZXJlIHlvdSdsbCBvbmx5IHRlbmQgdG8gdGhhdCBwYXJ0aWN1bGFyIHRhc2sgaW4gdGhlIGFsbG90dGVkIHRpbWVgKSxcblxuICAgIG5ldyBNZXRob2RPYmooYDUuIFNldCBTcGVjaWZpYyBUaW1lcyB0byBDaGVjayBFbWFpbGAsIGBFbWFpbCBjaGVja2luZyBhY2NvdW50cyBmb3Igb25lIG9mIHRoZSBtYWluIGRpc3RyYWN0aW9ucyB0aGF0IHdhc3RlcyB2YWx1YWJsZSB0aW1lIGR1cmluZyB0aGUgd29ya2RheS4gQ2hvb3NlIHR3byB0aW1lc1xuICAgIGEgZGF5IGZvciBjaGVja2luZyBlbWFpbHMsIHByZWZlcmFibHkgYmVmb3JlIGx1bmNoIGFuZCBiZWZvcmUgZmluaXNoaW5nIHRoZSBkYXkncyB3b3JrLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgNi4gTGVhcm4gdG8gU2F5IOKAnE5v4oCdYCwgYFNheWluZyBubyBjYW4gYmUgaGFyZCBmb3Igc29tZSwgYnV0IGlmIHlvdSB3YW50IHRvIGJvb3N0IHlvdXIgcHJvZHVjdGl2aXR5LCB5b3UgY2FuJ3QgYWxsb3cgb3RoZXJzIHRvIG9yZGVyIHlvdSBhcm91bmQgZXZlcnkgbm93IGFuZCB0aGVuLiBgKSxcbiAgICBuZXcgTWV0aG9kT2JqKGA3LiBVc2UgV2Vic2l0ZSBCbG9ja2Vyc2AsIGBVc2Ugd2Vic2l0ZSBibG9ja2VycyB0byBzdG9wIGRpc3RyYWN0aW5nIHdlYnNpdGVzIGZyb20gcG9wcGluZyB1cCBpbiB0aGUgbWlkZGxlIG9mIHlvdXIgd29yay5gKSxcbiAgICBuZXcgTWV0aG9kT2JqKGA4LiBVc2UgcmVkIGFuZCBibHVlIGNvbG9ycyBtb3JlIG9mdGVuYCwgYFJlbW92ZSBjbHV0dGVyIGZyb20geW91ciBkZXNrLiBTdHVkaWVzIHN1Z2dlc3QgdGhhdCByZWQgYW5kIGJsdWUgY29sb3JzIGltcHJvdmUgYnJhaW4gcGVyZm9ybWFuY2UsIHdpdGggcmVkIGtub3duIHRvIGluY3JlYXNlIFxuICAgIGF0dGVudGlvbiB0byBkZXRhaWxzIHdoaWxlIGJsdWUgc3BhcmtzIGNyZWF0aXZpdHkuIFN1cnJvdW5kIHlvdXIgd29ya3BsYWNlIHdpdGggdGhlc2UgY29sb3JzIHRvIGVuaGFuY2UgcHJvZHVjdGl2aXR5LiBgKSxcblxuICAgIG5ldyBNZXRob2RPYmooYDkuIFR3by1NaW51dGUgUnVsZSBmb3IgU21hbGwgVGFza3NgLCBgRG8gbm90IHdhc3RlIHRpbWUgZGVjaWRpbmcgd2hldGhlciB5b3Ugc2hvdWxkIGRvIHNtYWxsIHRhc2tzIHRoYXQga2VlcCBjcm9wcGluZyB1cCB0aHJvdWdob3V0IHlvdXIgZGF5LiBJbnN0ZWFkLCBhc2sgeW91cnNlbGYgaWYgeW91IFxuICAgIGNhbiBjb21wbGV0ZSB0aGUgdGFzayBpbiAyIG1pbnV0ZXMgb3IgbGVzcyDigJMgaWYgeWVzLCBnbyBhaGVhZCB3aXRoIHRoZSB0YXNrLiBJZiBub3QsIGFkZCB0aGUgdGFzayB0byB5b3VyIHRvLWRvIGxpc3QgZm9yIGxhdGVyLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTAuIExpc3RlbiB0byBQcm9kdWN0aXZlIE11c2ljYCwgYE11c2ljIGlzIGFuIGV4Y2VsbGVudCB0aGVyYXB5IHRvIGhlbHAgbWFpbnRhaW4gZm9jdXMgYW5kIHN0YXkgcHJvZHVjdGl2ZS4gQ2hvb3NlIG11c2ljIHRoYXQgZW5hYmxlcyB5b3UgdG8gZm9jdXMgb24gdGhlIHRhc2sgYXQgaGFuZC5gKSxcbiAgICBuZXcgTWV0aG9kT2JqKGAxMS4gVXNlIFRlbXBsYXRlcyBmb3IgUmVndWxhciBUYXNrc2AsIGBDcmVhdGUgdGVtcGxhdGVzIGZvciByb3V0aW5lIHRhc2tzIHRoYXQgYXJlIGNyZWF0ZWQgdGhlIHNhbWUgd2F5IGV2ZXJ5IHRpbWUuIFRoaXMgd2lsbCBzYXZlIHlvdSBhIGxvdCBvZiB0aW1lIGFuZCBpbmNyZWFzZSB5b3VyIFxuICAgIG92ZXJhbGwgcHJvZHVjdGl2aXR5LmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTIuIEdyb3VwIFNpbWlsYXIgVGFza3NgLCBgQmF0Y2ggc2ltaWxhciB0YXNrcyBzbyB5b3UgY2FuIGNvbXBsZXRlIHRoZW0gd2l0aCB0aGUgc2FtZSBmcmFtZSBvZiBtaW5kLiBUaGlzIHdpbGwgbWFrZSB5b3VyIHdvcmsgcHJvY2VzcyBmbG93IHNtb290aGx5IGFuZCBoZWxwIHlvdSBkbyBtb3JlIGluIGxlc3MgdGltZS5gKSxcbiAgICBuZXcgTWV0aG9kT2JqKGAxMy4gQXZvaWQgTXVsdGl0YXNraW5nYCwgYEl0IG1pZ2h0IGJlIHRlbXB0aW5nIHRvIGRvIHR3byB0aGluZ3Mgc2ltdWx0YW5lb3VzbHksIGJ1dCBtdWx0aXRhc2tpbmcgZG9lcyBtb3JlIGhhcm0gdGhhbiBnb29kLiBSZXNlYXJjaCBzaG93cyB0aGF0IGFib3V0IDk4JSBvZiBwZW9wbGUgYXJlIGxlc3NcbiAgICAgcHJvZHVjdGl2ZSB3aGVuIHRoZXkgbXVsdGl0YXNrIGFzIHRoZXkgYXJlIG5vdCBmb2N1c2luZyBvbiBhIHNpbmdsZSB0YXNrLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTQuIFVzZSBhbiBJbXBvcnRhbnQvVXJnZW50IE1hdHJpeCBmb3IgRGVjaXNpb24gTWFraW5nYCwgYEFuIGVmZmVjdGl2ZSB0aW1lIG1hbmFnZW1lbnQgdG9vbCBjYWxsZWQgSW1wb3J0YW50L1VyZ2VudCBNYXRyaXggb3IgRWlzZW5ob3dlciBNYXRyaXggaGVscHMgcHJpb3JpdGl6ZSB0YXNrcyBvbiB0aGUgYmFzaXNcbiAgICAgb2YgaG93IGltcG9ydGFudCBvciB1cmdlbnQgdGhleSBhcmUuIFRoZSBtYXRyaXggZGl2aWRlcyB0YXNrcyBpbnRvIGZvdXIgZGlmZmVyZW50IHF1YWRyYW50cyAtIEltcG9ydGFudCAmIFVyZ2VudCwgSW1wb3J0YW50ICYgbm90IHVyZ2VudCwgTm90IGltcG9ydGFudCAmIHVyZ2VudCwgTm90IGltcG9ydGFudCAmIG5vdCB1cmdlbnQuIFRoaXNcbiAgICAgbWV0aG9kIGVuc3VyZXMgeW91IHNwZW5kIHlvdXIgdGltZSBlZmZlY3RpdmVseSBhcyB3ZWxsIGFzIGVmZmljaWVudGx5LiBgKSxcblxuICAgIG5ldyBNZXRob2RPYmooYDE1LiBTdGFydCBZb3VyIERheSBXaXRoIGEgVG91Z2ggb3IgRWFzeSBUYXNrYCwgYFRoZSB3YXkgeW91IHN0YXJ0IHlvdXIgZGF5IGRpY3RhdGVzIHRoZSBmbG93IG9mIHRoZSByZXN0IG9mIHRoZSBkYXkuIFlvdSBjYW4gZWl0aGVyIHN0YXJ0IGJ5IGRvaW5nIHRoZSBtb3N0IGRlbWFuZGluZyB0YXNrIGZpcnN0LFxuICAgICBzbyBldmVyeXRoaW5nIGVsc2UgZmVlbHMgbW9yZSBlZmZvcnRsZXNzLCBvciBkbyB0aGUgZWFzaWVzdCB0aGluZyBmaXJzdCB0byBnYWluIHZhbHVhYmxlIG1vbWVudHVtLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTYuIFVzZSB0aGUg4oCcT25lIGFuZCBEb25l4oCdIFJ1bGVgLCBgTW9zdCBvZiB1cyB0ZW5kIHRvIGtlZXAgc29tZSB0YXNrcyBhc2lkZSwgdGhpbmtpbmcgb2YgdGFraW5nIGNhcmUgb2YgdGhvc2UgdGFza3MgbGF0ZXIuIEJ1dCByYXJlbHkgZG8gd2UgYWN0dWFsbHkgZG8gdGhvc2UgbGF0ZXIgYmVjYXVzZSB3ZSB3b24ndCBcbiAgICBhZGQgdGhlbSB0byBvdXIgdG8tZG8tIGxpc3RzLiBUbyBhdm9pZCB0aGlzLCBhZGQgZWFjaCBuZXcgdGFzayB0byBhIHRvLWRvIGxpc3QsIHNvIHRoZXJlJ3Mgbm8gcmlzayBvZiBmb3JnZXR0aW5nIGxhdGVyLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTcuIFRha2UgUmVndWxhciBCcmVha3NgLCBgQnJlYWtzIGdpdmUgeW91ciBtaW5kIGEgbXVjaC1uZWVkZWQgY2hhbmNlIHRvIHJlY292ZXIgZnJvbSBpbnRlbnNlIGZvY3VzLCBidXQgeW91IG11c3QgbWF4aW1pemUgdGhlIGJlbmVmaXQgb2YgYnJlYWtzLiBab25lIG91dCBjb21wbGV0ZWx5IG9yIG1lZGl0YXRlXG4gICAgIGR1cmluZyBicmVha3MgdG8gcmVsYXggeW91ciBtaW5kIGFuZCBib2R5LmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMTguIENyZWF0ZSBhIEJyZWFrIEFnZW5kYWAsIGBMaXN0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gZG8gb24geW91ciBicmVhayBhbmQgc3F1ZWV6ZSB0aGVzZSBiZXR3ZWVuIHdvcmsgdGltZS4gVGhpcyB3aWxsIGhlbHAgYWNjb21wbGlzaCB0YXNrcyBlZmZpY2llbnRseSBkdXJpbmcgd29yayB0aW1lLiBUaHVzLFxuICAgICB5b3UnbGwgd2lzZWx5IHVzZSB5b3VyIGJyZWFrIHRpbWUgdG8gZG8gdGhpbmdzIHlvdSBlbmpveS4gYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGAxOS4gV29yayBpbiBTaG9ydCBCdXJzdHNgLCBgVGhlIGh1bWFuIG1pbmQgY2FuIGNvbmNlbnRyYXRlIG9uIHRoZSBzYW1lIHRoaW5nIGZvciBhIHNob3J0IHNwYW4uIFNvLCBpdCBtYWtlcyBzZW5zZSB0byB3b3JrIGluIHNob3J0IGJ1cnN0cyBsaWtlIHRoZSBQb21vZG9ybyB0ZWNobmlxdWUsIHdoZXJlIHlvdSBcbiAgICB3b3JrIGluIDI1LW1pbnV0ZSBzZXNzaW9ucyB3aXRoIDUtbWludXRlIGJyZWFrcyBpbiBiZXR3ZWVuLiBUaGlzIGhlbHBzIG1vdGl2YXRlIHlvdSB0byBjb21wbGV0ZSB0YXNrcyBpbiBhIHNob3J0IHRpbWUuYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGAyMC4gQ3JlYXRlIGEgRGVkaWNhdGVkIFdvcmtzcGFjZWAsIGBJZiB5b3UgYXJlIHdvcmtpbmcgZnJvbSBob21lIG9yIHJlbW90ZWx5LCBjcmVhdGUgYSBkZWRpY2F0ZWQgd29ya3NwYWNlIHdoZXJlIHlvdSdsbCBnbyB0byB3b3JrIGFuZCBsZWF2ZSBvbmNlIHlvdSdyZSBmaW5pc2hlZC5gKSxcbiAgICBuZXcgTWV0aG9kT2JqKGAyMS4gV29yayBOZWFyIE5hdHVyYWwgTGlnaHRgLCBgQSBzaW1wbGUgcHJvZHVjdGl2aXR5IGhhY2sgaXMgdG8gY3JlYXRlIHlvdXIgd29ya3NwYWNlIG5lYXIgbmF0dXJhbCBsaWdodC4gRXhwb3N1cmUgdG8gc3VubGlnaHQgaXMgYmVsaWV2ZWQgdG8gaW1wcm92ZSBzbGVlcCwgdGhlcmVieSBjb250cmlidXRpbmdcbiAgICAgdG8geW91ciB3ZWxsLWJlaW5nIGFuZCBwcm9kdWN0aXZpdHkgbGV2ZWxzLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMjIuIEVsaW1pbmF0ZSBQb3NzaWJsZSBEaXN0cmFjdGlvbnNgLCBgSXQncyBlYXN5IHRvIGdpdmUgaW4gdG8gZGlzdHJhY3Rpb25zLCBidXQgeW91IG11c3QgZmluZCB3YXlzIHRvIGF2b2lkIGRpc3RyYWN0aW9ucyB3aGlsZSB3b3JraW5nLiBEaXN0cmFjdGlvbnMgY2F1c2UgYSBsb3Qgb2Ygd2FzdGVkIHRpbWUgXG4gICAgdHJ5aW5nIHRvIHJlZ2FpbiBmb2N1cyBvbiB0aGUgdGFzay4gR2V0dGluZyByaWQgb2YgZGlzdHJhY3Rpb25zIGNhbiByZXN1bHQgaW4gbW9yZSBwcm9kdWN0aXZlIHdvcmsgYmVpbmcgZG9uZSBpbiBsZXNzZXIgdGltZS5gKSxcblxuICAgIG5ldyBNZXRob2RPYmooYDIzLiBCcmVhayBEb3duIFlvdXIgR29hbHNgLCBgSW5zdGVhZCBvZiBwcm9jcmFzdGluYXRpbmcgb24geW91ciBmYXItZmV0Y2hlZCB1bHRpbWF0ZSBnb2FscywgYnJlYWsgZG93biB0aGUgZ29hbHMgaW50byBzbWFsbGVyLCBtb3JlIGF0dGFpbmFibGUgZ29hbHMgdGhhdCBzZWVtIG1vcmUgcmVhbGlzdGljLlxuICAgICBUaGVzZSBnb2FscyBzaG91bGQgYmUgZWFzeSB0byBhY2NvbXBsaXNoIGFuZCBmaXQgaW50byB5b3VyIHNjaGVkdWxlLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMjQuIFRha2UgVGltZSB0byBSZWF0dGFjaCBZb3Vyc2VsZiB0byBXb3JrIEV2ZXJ5IE1vcm5pbmdgLCBgT25jZSB5b3UncmUgZmluaXNoZWQgd2l0aCB0aGUgZGF5J3Mgd29yaywgeW91IHByb2JhYmx5IHRyeSB0byBkZXRhY2ggZnJvbSB3b3JrLiBUYWtlIGEgZmV3IG1pbnV0ZXMgaW4gdGhlIG1vcm5pbmcgdG8gXG4gICAgcmVhdHRhY2ggeW91cnNlbGYgdG8gd29yayBieSB0aGlua2luZyBhYm91dCB3aGF0IHlvdSBhY2hpZXZlZCB0aGUgZGF5IGJlZm9yZSBvciB3aGF0IHlvdSBob3BlIHRvIGFjY29tcGxpc2ggZHVyaW5nIHRoZSBnaXZlbiBkYXkuYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGAyNS4gV2FrZSBVcCBFYXJseWAsIGBUaGlzIGNhbiBnaXZlIHlvdSBhIGdyZWF0IGhlYWQgc3RhcnQgb24gYW55IHdvcmtpbmcgZGF5IGJlY2F1c2UgeW91IGZlZWwgZW50aXJlbHkgcmUtZW5lcmdpemVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSBkYXkuIFlvdSBjYW4gZ2V0IGEgbG90IG9mIHdvcmsgZG9uZSBlYXJseVxuICAgICBpbiB0aGUgbW9ybmluZyB3aGVuIHRoZXJlIGFyZSBmZXdlciBkaXN0cmFjdGlvbnMgdGhhbiBhdCBtaWRkYXlgKSxcblxuICAgIG5ldyBNZXRob2RPYmooYDI2LiBNYWtlIFN1cmUgRXZlcnkgVGFzayBJcyBSZWxhdGVkIHRvIGEgR29hbGAsIGBCZWZvcmUgdGFraW5nIHVwIGEgdGFzaywgbWFrZSBzdXJlIGl0IGlzIHJlbGF0ZWQgdG8gYSBsb25nLXRlcm0gZ29hbCBsaWtlIG9uZSBvZiB5b3VyIFNNQVJUIGdvYWxzLiBJZiB0aGUgdGFzayBpcyB1bnJlbGF0ZWQgdG8geW91clxuICAgICBhZHZhbmNlbWVudCwgZWl0aGVyIGVsaW1pbmF0ZSBpdCBvciBhc3NpZ24gaXQgdG8gc29tZW9uZSBlbHNlYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGAyNy4gRm9sbG93IERlYWRsaW5lc2AsIGBSZWdhcmRsZXNzIG9mIGhvdyBsb25nIHlvdSBoYXZlIHRvIGNvbXBsZXRlIGEgdGFzaywgbWFrZSBzdXJlIHlvdSBkbyBpdCBpbiB0aGUgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuIFlvdXIgcHJvZHVjdGl2aXR5IHdpbGwgaW1wcm92ZSBpZiB5b3Uga25vdyBhIGRlYWRsaW5lIGlzXG4gICAgIGFwcHJvYWNoaW5nLmApLFxuXG4gICAgbmV3IE1ldGhvZE9iaihgMjguIFNjaGVkdWxlIFRpbWUgZm9yIFNlbGYtQ2FyZWAsIGBTY2hlZHVsZSBzZWxmLWNhcmUgYWN0aXZpdGllcyB0byByZWNoYXJnZSB5b3Vyc2VsZiB0byBwcmV2ZW50IGJ1cm5vdXQgZnJvbSB3b3JrIHByZXNzdXJlLiBJdCBjb3VsZCBiZSBhbnl0aGluZyB0aGF0IGhlbHBzIHlvdSByZWxheCBhbmQgdW53aW5kIOKAlCBcbiAgICBsZWlzdXJlbHkgcmVhZGluZyBvbiB5b3VyIGZhdm9yaXRlIGNvdWNoLCBhIHJlbGF4aW5nIGJlZHRpbWUgcml0dWFsLCBhIDEwLW1pbnV0ZSB3YWxrLCBtZWRpdGF0aW5nLCBwYWludGluZywgb3IgYW55dGhpbmcgZWxzZS4gYCksXG5cbiAgICBuZXcgTWV0aG9kT2JqKGAyOS4gTGV0IEdvIG9mIFBlcmZlY3Rpb25pc21gLCBgTm90aGluZyBpcyBwZXJmZWN0LCBzbyBkb24ndCB3YXN0ZSB0aW1lIHRyeWluZyB0byBtYWtlIGV2ZXJ5IHRhc2sgcGVyZmVjdC4gSWYgdGhlIHdvcmsgaXMgZ29vZCBlbm91Z2gsIG1vdmUgb24gdG8gdGhlIG5leHQgdGhpbmcuYCksXG4gICAgbmV3IE1ldGhvZE9iaihgMzAuIElkZW50aWZ5IHRoZSDigJhXaHnigJkgQmVoaW5kIFlvdXIgSm9iYCwgYEFzayB5b3Vyc2VsZiB3aHkgeW91IGNob3NlIHRvIGdvIGludG8gdGhlIGZpZWxkIHRoYXQgeW91IGRpZC4gTWFrZSBzdXJlIHRvIGtlZXAgdGhvc2UgcmVhc29ucyBpbiB5b3VyIG1pbmQgd2hpbGUgd29ya2luZyBzbyB5b3Ugc3RheVxuICAgICBtb3RpdmF0ZWQgdG8gYmUgcHJvZHVjdGl2ZSBhbmQgc3VjY2Vzc2Z1bCBpbiB5b3VyIGpvYi5gKVxuXVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0aXZ0eU10aGRzUGFnZSgpIHtcbiAgICBoZWFkZXIoKTtcbiAgICBsZXQgbXRoZHNTdGFydFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaW50cm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtdGhkc1N0YXJ0UGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkLXN0YXJ0LXBhZ2UnKTtcbiAgICBtdGhkc1N0YXJ0UGFnZS5hcHBlbmRDaGlsZChpbnRyb0NvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkcy1pbnRyby1jb250YWluZXInKTtcbiAgICBtdGhkc1N0YXJ0UGFnZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkcy1TVHBhZ2UtaW1hZ2UnKTtcblxuICAgIGxldCBpbnRyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsZXQgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBsZXQgcHJvZHVjdGl2aXR5RGlzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvZHVjdGl2aXR5UXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBwcm9kdWN0aXZ0eUFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGludHJvVGl0bGUudGV4dENvbnRlbnQgPSAnVG9wIDMwIFByb2R1Y3Rpdml0eSBIYWNrcyB0byBHZXQgTW9yZSBEb25lIGluIDIwMjMnO1xuICAgIGludHJvLnRleHRDb250ZW50ID0gYEFyZSB5b3Ugc3RydWdnbGluZyB0byBzdGF5IG9uIHRhc2s/IERvIHlvdSBldmVyIGZlZWwgYSBsaXR0bGUgaW5jb21wbGV0ZSBhdCB0aGUgZW5kIG9mIHlvdXIgd29ya2RheSwgXG4gICAgZmVlbGluZyBsaWtlIHlvdSBjb3VsZCd2ZSBkb25lIG1vcmU/IFdlbGwsIGl0IGRvZXNuJ3QgaGF2ZSB0byBiZSB0aGlzIHdheS4gWW91IGNhbiBsZWF2ZSB3b3JrIGZlZWxpbmcgZXVwaG9yaWMgYW5kIGZ1bGZpbGxlZCB3aXRoIHdoYXQgeW91IGhhdmUgYWNjb21wbGlzaGVkLlxuICAgICBJdCB0YWtlcyBhIGZldyBwcm9kdWN0aXZpdHkgaGFja3MgdG8gaGVscCB5b3Ugd29yayBtb3JlIGVmZmljaWVudGx5IGFuZCwgbW9zdCBpbXBvcnRhbnRseSwgbGVhdmUgeW91IHdpdGggbW9yZSBmcmVlIG1vbWVudHMgZXZlcnkgZGF5LmA7XG5cbiAgICBwcm9kdWN0aXZpdHlRdWVzdGlvbi50ZXh0Q29udGVudCA9IGB3aGF0IGlzIHByb2R1Y3RpdnR5P2BcbiAgICBwcm9kdWN0aXZ0eUFuc3dlci50ZXh0Q29udGVudCA9IGBQcm9kdWN0aXZpdHkgaXMgbW9yZSB0aGFuIGRvaW5nIG1vcmUgdGhpbmdzIG9yIHRpY2tpbmcgdGFza3Mgb2ZmIHlvdXIgdG8tZG8gbGlzdC4gXG4gICAgUHJvZHVjdGl2aXR5IG1lYW5zIG9ubHkgZm9jdXNpbmcgb24gYWNjb21wbGlzaGluZyBpbXBvcnRhbnQgdGhpbmdzLiBUaGUgcm9hZCB0byBiZWluZyBtb3JlIHByb2R1Y3RpdmUgY2FuIGJlIGxvbmcsIHNvIGRvIG5vdCBwYW5pYyDigJMgdGFrZSBvbmUgcG9zaXRpdmUgc3RlcCBhdCBhIHRpbWVgXG5cbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb1RpdGxlKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ210aGRzLWludHJvLXRpdGxlJyk7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL0Rvb3IuanBnJylcbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybykuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkcy1pbnRyby1wJyk7XG4gICAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdGl2aXR5RGlzY3JpcHRpb24pLmFwcGVuZENoaWxkKHByb2R1Y3Rpdml0eVF1ZXN0aW9uKTtcbiAgICBwcm9kdWN0aXZpdHlEaXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9kdWN0aXZ0eUFuc3dlcik7XG5cblxuICAgIC8vbWV0aG9kc1xuICAgIGxldCBtdGhkc3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbXRoZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IG10aGRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG10aGRzcGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkcy1wYWdlJyk7XG4gICAgbXRoZHNwYWdlLmFwcGVuZENoaWxkKG10aGRzVGl0bGUpXG4gICAgbXRoZHNwYWdlLmFwcGVuZENoaWxkKG10aGRzQ29udGFpbmVyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ210aGRzLWNvbnRhaW5lcicpO1xuXG4gICAgbXRoZHNUaXRsZS50ZXh0Q29udGVudCA9IGBUb3AgMzAgUHJvZHVjdGl2aXR5IEhhY2tzIHRvIE1heGltaXplIFByb2R1Y3Rpdml0eSBpbiAyMDIzYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBsZXQgZGlzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBtZXRob2RzQXJyYXlbaV0udGl0bGU7XG4gICAgICAgIGRpc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWV0aG9kc0FycmF5W2ldLmRpc2NyaXB0aW9uO1xuXG4gICAgICAgIG10aGRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBtdGhkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICAvL2Zvb3RlclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcikuc2V0QXR0cmlidXRlKCdpZCcsICdtdGhkcy1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpXG4gICAgbGV0IFNpbXBsaWxlYXJuTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBTaW1wbGlsZWFybkxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5zaW1wbGlsZWFybi5jb20vYmVzdC1wcm9kdWN0aXZpdHktaGFja3MtdG8tZ2V0LW1vcmUtZG9uZS1hcnRpY2xlJ1xuICAgIFNpbXBsaWxlYXJuTGluay50ZXh0Q29udGVudCA9IGBoZXJlYFxuICAgIGZvb3Rlci5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYFRoaXMgdGV4dCB3YXMgdGFrZW4gZnJvbSBTaW1wbGlsZWFybiB3ZWJzaXRlIEZvciB0aGUgb3JpZ2luYWwgYXJ0aWNsZSwgY2xpY2sgYFxuICAgIGZvb3Rlci5maXJzdENoaWxkLmFwcGVuZENoaWxkKFNpbXBsaWxlYXJuTGluaylcblxufSIsImltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9mb3JtUGdcIjtcbmltcG9ydCB7IFByb2R1Y3RpdnR5TXRoZHNQYWdlIH0gZnJvbSBcIi4vcHJvZHVjdGl2aXR5TXRoZHNcIjtcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tICcuL2RhdGVTZWN0aW9ucy9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpXG5cbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvJylcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgc3RhcnQoKVxuICAgIH0pXG5cblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuXG5cbiAgICBsZXQgYnRuQXJyYXkgPSBbJ2hvbWUnLCAndGVtcGxhdGVzJywgJ3Byb2R1Y3RpdnR5IG1ldGhvZHMnLCAnYWJvdXQgdXMnXTtcblxuICAgIGZ1bmN0aW9uIG5hdkdlbmVyYXRvcihjb250YWluZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCdG4pLnNldEF0dHJpYnV0ZSgnaWQnLCBgbmF2LWJ0biR7aSArIDF9YClcbiAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBidG5BcnJheVtpXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbG9nSW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3RhcnRGcmVlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1wcm9maWxlJylcbiAgICBwcm9maWxlLmFwcGVuZENoaWxkKGxvZ0luQnRuKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1idG41JylcbiAgICBsb2dJbkJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1idG4nKVxuXG4gICAgbG9nSW5CdG4udGV4dENvbnRlbnQgPSAnbG9nIGluJztcbiAgICBuYXZHZW5lcmF0b3IobmF2KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG5cbiAgICBsb2dJbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm0pXG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmTmFtZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtYnRuNScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtYnRuNicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJ0bjUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJ0bjYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbGV0IHVzZXJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9maWxlLmFwcGVuZENoaWxkKHVzZXJOYW1lKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItbmFtZScpO1xuICAgICAgICBwcm9maWxlLmFwcGVuZENoaWxkKHVzZXJQaWMpLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1waWMnKTtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjI1KSB7XG5cblxuICAgICAgICAgICAgbGV0IGxvZ291dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxvZ291dEJ0bikuc2V0QXR0cmlidXRlKCdpZCcsICdsb2ctb3V0LWJ0bicpXG4gICAgICAgICAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZOYW1lJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ0biBvZiBuYXYuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YSgpXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsZXQgYmFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYXJJY29uKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Jhci1pY29uJyk7XG4gICAgYmFySWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cblxuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1idG4xJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBzdGFydCgpXG4gICAgfSk7XG5cbiAgICBsZXQgdGVtcGxhdGVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1idG4yJyk7XG4gICAgdGVtcGxhdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgY29uc29sZS5sb2coXCJJdmUgYmVlbiBjbGlja2VkXCIpXG4gICAgICAgIHRlbXBsYXRlcygpXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzb3VyY2VzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1idG4zJyk7XG4gICAgcmVzb3VyY2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIFByb2R1Y3RpdnR5TXRoZHNQYWdlKCk7XG4gICAgfSlcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAvL2FkZGluZyBoZWFkZXJcblxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmTmFtZVwiKSkge1xuICAgICAgICBoZWFkZXIoKVxuXG4gICAgICAgIGxldCBzdGFydFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBsZXQgcGljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRQYWdlKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0LXBhZ2UnKTtcblxuICAgICAgICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCkuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydC1jb250ZW50JylcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoMSlcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKVxuXG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ3dlbGNvbWUgdG8gRG9JdCc7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgWW91IGNhbid0IGtlZXAgdG9kYXkncyBob3VyIGZvciB0b21vcnJvdyDigJMgd2UgYWxsIFxuICAgICAgICBrbm93IHRoYXQsIGJ1dCBzdGlsbCB0ZW5kIHRvIHByb2NyYXN0aW5hdGUuIEJlbmphbWluIEZyYW5rbGluIHdhcm5zIHRoYXRcbiAgICAgICAgIHRpbWUgaXMgYSBzY2FyY2UgcmVzb3VyY2UsIGFuZCBpZiBpdCdzIHdhc3RlZCwgaXQgY2Fubm90IGJlIHJlY292ZXJlZCBsYXRlci4gXG4gICAgICAgICBUaGlzIGlzIHdoeSBtaW5kZnVsIHBsYW5uaW5nIGFuZCB3b3JrIG9uIHByb2R1Y3Rpdml0eSBhcmUgc28gaW1wb3J0YW50LCBEb0l0IHdpbGwgaGVscFxuICAgICAgICAgeW91IHRvIG1hbmFnZSB5b3VyIHRpbWUsIGdldCBzdGFydGVkIG5vdyFcbiAgICAgICAgYFxuXG4gICAgICAgIHN0YXJ0UGFnZS5hcHBlbmRDaGlsZChwaWNDb250YWluZXIpLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzLzYyNzIyOTUuanBnJylcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0QnRuKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0LWJ1dHRvbicpXG4gICAgICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ2dldCBzdGFydGVkJ1xuXG4gICAgICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGhvbWUoKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vc3RhcnRcIjtcbmltcG9ydCB7IFRlbXBsYXRlUHJvamVjdCwgcG9wdWxhdGVEYXRhLCBzZXRBcnJheURhdGEgfSBmcm9tIFwiLi9kYXRlU2VjdGlvbnMvc3RvcmFnZVwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IFByb2R1Y3RpdnR5TXRoZHNQYWdlIH0gZnJvbSBcIi4vcHJvZHVjdGl2aXR5TXRoZHNcIjtcblxubGV0IHRlbXBsYXRlc0FycmF5ID0gW25ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvYmF0aC1zb2xpZC5zdmdgLCAnUGVyc29uYWwgaHlnaWVuZScsICdob21lJywgYElmIHlvdSBkb24ndCBzbWVsbCBnb29kLCB0aGVuIHlvdSBkb24ndCBsb29rIGdvb2RgLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL2Jvb2stb3Blbi1yZWFkZXItc29saWQuc3ZnYCwgJ3JlYWRpbmcnLCAnaG9iYmllcycsIGBDYXJyeSB5b3VyIGJvb2socykgZXZlcnl3aGVyZS4gVGhlcmUncyBhbHdheXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhZGAsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvYnJpZWZjYXNlLXNvbGlkLnN2Z2AsICd3b3JrJywgJ3dvcmsnLCBgRG9u4oCZdCBsZXQgeWVzdGVyZGF5IHRha2UgdXAgdG9vIG11Y2ggb2YgdG9kYXkuIFVzZSB3b3JrIHRlbXBsYXRlIG5vdyFgLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL2J1aWxkaW5nLWNvbHVtbnMtc29saWQuc3ZnYCwgJ2ZpbmFuY2lhbCB0YXNrcycsICdwZXJzb25hbCBhY3Rpdml0aWVzJywgYE1hbmFnZSB5b3VyIGZpbmFuY2lhbCB0YXNrcyB0b2RheS4gVGltZSBoYXMgdmFsdWUgaW4geW91ciBtb25leWAsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvY2FydC1zaG9wcGluZy1zb2xpZC5zdmdgLCAnc2hvcHBpbmcnLCAnaG9tZScsICdUaGlzIHRlbXBsYXRlIGhlbHBzIHlvdSBub3QgdG8gZm9yZ2V0IHRoZSB0aGluZ3MgeW91IG5lZWQgdG8gYnV5LiBUcnkgaXQgbm93IScsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvY2hpbGRyZW4tc29saWQuc3ZnYCwgJ2ZhbWlseScsICdob21lJywgYFNwZW5kIG1vcmUgdGltZSB3aXRoIHlvdXIgZmFtaWx5LCBpdCBoZWxwcyB5b3UgZmVlbCBiZXR0ZXIgYWJvdXQgZXZlcnl0aGluZ2AsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvZHVtYmJlbGwtc29saWQuc3ZnYCwgJ2ZpdG5lc3MnLCAncGVyc29uYWwgYWN0aXZpdGllcycsICdTdGF5IGhlYWx0aHkgYnkgYWRkaW5nIHlvdXIgZmF2b3JpdGUgZXhlcmNpc2VzIHRvIHlvdXIgZGFpbHkgdG8tZG8gbGlzdC4nLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL2dyYWR1YXRpb24tY2FwLXNvbGlkLnN2Z2AsICdzdHVkeWluZycsICdlZHVjYXRpb24nLCBgU3R1ZHlpbmcgaXMgb25lIG9mIHlvdXIgdG9wIHByaW9yaXRpZXMgdG9kYXkuIE9yZ2FuaXplIHlvdXIgdGltZSBmb3IgaXQgbm93YCwgZmFsc2UpLFxubmV3IFRlbXBsYXRlUHJvamVjdChgLi9pY29ucy9oYW5kc2hha2Utc29saWQuc3ZnYCwgJ21lZXRpbmdzJywgJ3dvcmsnLCBgVGFrZSBjYXJlIG9mIHlvdXIgaW50ZXJ2aWV3cyBhbmQgb3JnYW5pemUgeW91ciBpZGVhcyBmb3IgdGhlbSBiZWZvcmUgeW91IGJlZ2luLiB0byBtYWtlIHRoZSBiZXN0IGltcHJlc3Npb25gLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL2hlYXJ0LXB1bHNlLXNvbGlkLnN2Z2AsICdoZWFsdGgnLCAncGVyc29ubmFsIGFjdGl2aXRpZXMnLCBgdGhlIHBlcmZlY3QgbWluZCBpbiBoZWFsdGh5IGJvZHkuIFB1dCB5b3VyIGhlYWx0aHkgc3RlcHMgaW50byB5b3VyIHRhc2tzIHRvZGF5YCwgZmFsc2UpLFxubmV3IFRlbXBsYXRlUHJvamVjdChgLi9pY29ucy9oZWFydC1zb2xpZC5zdmdgLCAneW91ciByZWxhdGlvbnMnLCAncGVyc29ubmFsIGFjdGl2aXRpZXMnLCBgWW91ciByZWxhdGlvbnNoaXBzIGluIGxpZmUgaGF2ZSBhbiBpbXBhY3Qgb24geW91ciBkYWlseSBwcm9kdWN0aXZpdHkuIFRyeSB0byBtYWtlIGl0IGJldHRlcmAsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvbW9uZXktYmlsbC10cmVuZC11cC1zb2xpZC5zdmdgLCAnaW52ZXN0bWVudHMnLCAncGVyc29uYWwgYWN0aXZpdGllcycsIGBBcnJhbmdlIHlvdXIgaW52ZXN0bWVudCB0aW1lcyBhY2NvcmRpbmcgdG8gdGhlIG1hcmtldCB0byBnZXQgdGhlIGhpZ2hlc3QgcHJvZml0IGFuZCB0aGUgc2FmZXN0IGRlY2lzaW9uc2AsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvcGFsZXR0ZS1zb2xpZC5zdmdgLCAnYXJ0JywgJ2hvYmJpZXMnLCBgR2l2ZSB0aW1lIHRvIHlvdXIgaW1hZ2luYXRpb24gdG8gYmUgY3JlYXRpdmUgYW5kIGFkZCBiZWF1dHkgdG8geW91ciBkYXlgLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL3BlcnNvbi13YWxraW5nLXNvbGlkLnN2Z2AsICdzcG9ydHMnLCAnaG9iYmllcycsICdTdGFydCB5b3VyIGRheSB3aXRoIGV4ZXJjaXNlIHRvIGdldCB0aGUgZW5lcmd5IG5lZWRlZCB0byBwZXJmb3JtIHlvdXIgb3RoZXIgdGFza3MnLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL3Bob25lLXNvbGlkLnN2Z2AsICdjYWxscycsICdob21lJywgYEFycmFuZ2UgeW91ciBwaG9uZSBjYWxscyBzbyB5b3UgZG9uJ3QgZm9yZ2V0IGFueSBvZiB0aGVtYCwgZmFsc2UpLFxubmV3IFRlbXBsYXRlUHJvamVjdChgLi9pY29ucy9wbGFuZS1zb2xpZC5zdmdgLCAndHJhdmVsJywgJ2hvYmJpZXMnLCBgQXJyYW5nZSB5b3VyIHRyaXBzIGFjY29yZGluZyB0byB5b3VyIHRpbWUgYW5kIHdvcmtgLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL3NlZWRsaW5nLXNvbGlkLnN2Z2AsICdwbGFudGluZycsICdob21lJywgYEdyZWVuIGdpdmVzIHlvdSBpbnNwaXJhdGlvbi4gVGFrZSBjYXJlIG9mIHlvdXIgcGxhbnRzIG5vd2AsIGZhbHNlKSxcbm5ldyBUZW1wbGF0ZVByb2plY3QoYC4vaWNvbnMvdXRlbnNpbHMtc29saWQuc3ZnYCwgJ2Nvb2tpbmcnLCAnaG9tZScsIGBNYWtlIHlvdXIgb3duIG1lYWxzIHRvIGJlIGhlYWx0aGllci4gSSBiZWxpZXZlIHlvdXIgZm9vZCB0YXN0ZXMgZ3JlYXRgLCBmYWxzZSksXG5uZXcgVGVtcGxhdGVQcm9qZWN0KGAuL2ljb25zL3ZvbGxleWJhbGwtc29saWQuc3ZnYCwgJ3Nwb3J0cycsICdob2JiaWVzJywgYFBsYXlpbmcgc3BvcnRzIGRhaWx5IGhlbHBzIHlvdSB0byBiZSBpbiBnb29kIGhlYWx0aCBhbmQgYSBiZXR0ZXIgY29uZGl0aW9uYCwgZmFsc2UpLFxuXVxuXG5sZXQgaW5zdHJ1Y3Rpb25zQXJyYXkgPSBbJ2Nob29zZSB0aGUgdGVtcGxhdGUgeW91IHdhbnQnLCAnb3BlbiBwcm9qZWN0cyBzZWN0aW9uIGluIHlvdXIgaG9tZSBwYWdlJywgJ2VkaXQsIGFkZCwgcmVtb3ZlIHdoYXQgeW91IHdhbnQnXVxuLy8gY29uc29sZS5sb2codGVtcGxhdGVzQXJyYXkpXG5cbmxldCBmb290ZXJTZWN0aW9uc0RhdGEgPSBbWydGZWF0dXJlcycsICdob3cgaXQgd29ya3MnLCAncHJpY2luZycsICd0ZW1wbGF0ZXMnXSxcblsncmVzb3VyY2VzJywgJ2hlbHAgY2VudGVyJywgJ3Byb2R1Y3RpdnR5IG1ldGhvZHMnXSwgWydhYm91dCB1cycsICdjYXJlZXJzJywgJ2Jsb2cnXV1cblxubGV0IGNvbnRhY3RzQXJyYXkgPSBbJy4vaWNvbnMvZmFjZWJvb2suc3ZnJywgJy4vaWNvbnMvZ2l0aHViLnN2ZycsICcuL2ljb25zL3R3aXR0ZXIuc3ZnJywgJy4vaWNvbnMvbWVkaXVtLnN2ZycsICcuL2ljb25zL2luc3RhZ3JhbS5zdmcnLCAnLi9pY29ucy95b3V0dWJlLnN2ZyddXG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZXMoKSB7XG4gICAgaGVhZGVyKClcbiAgICBsZXQgdGVtcGxhdGVzV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlc1dpbmRvdykuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wbGF0ZXMtd2luZG93Jyk7XG4gICAgdGVtcGxhdGVzU3RhcnQoKVxuICAgIHRlbXBsYXRlc1NlY3Rpb24oKVxuICAgIHRlbXBsYXRlc0Zvb3RlcigpXG59XG5cbmZ1bmN0aW9uIHRlbXBsYXRlc1N0YXJ0KCkge1xuICAgIGxldCB0ZW1wbGF0ZXNXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGxhdGVzLXdpbmRvdycpXG4gICAgbGV0IHRlbXBsYXRlc1N0YXJ0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBsYXRlc1dpbmRvdy5hcHBlbmRDaGlsZCh0ZW1wbGF0ZXNTdGFydFBhZ2UpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcGxhdGVzLXN0YXJ0Jyk7XG5cbiAgICBsZXQgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcGxhdGVzU3RhcnRQYWdlLmFwcGVuZENoaWxkKGZpcnN0U2VjdGlvbikuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wbGF0ZXMtcGFyYScpO1xuICAgIGZpcnN0U2VjdGlvbi50ZXh0Q29udGVudCA9IGBzdGFydCB5b3VyIG5leHQgcHJvamVjdFxcbiB3aXRoIERPSXQgdGVtcGxhdGVzYDtcblxuICAgIGxldCB0ZW1wbGF0ZXNJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wbGF0ZXNTdGFydFBhZ2UuYXBwZW5kQ2hpbGQodGVtcGxhdGVzSW5zdHJ1Y3Rpb25zKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RlbXBsYXRlLWluc3RydWN0aW9ucycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgbGV0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBsYXRlc0luc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbikuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnN0cnVjdGlvbicpXG4gICAgICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBpbnN0cnVjdGlvbi5hcHBlbmRDaGlsZChudW1iZXIpXG4gICAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IGkgKyAxO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpbnN0cnVjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gaW5zdHJ1Y3Rpb25zQXJyYXlbaV1cbiAgICB9XG5cbiAgICBsZXQgc2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRlbXBsYXRlc1N0YXJ0UGFnZS5hcHBlbmRDaGlsZChzZWNvbmRTZWN0aW9uKS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy83NTk2LmpwZycpO1xufVxuXG5cblxuXG5mdW5jdGlvbiB0ZW1wbGF0ZXNTZWN0aW9uKCkge1xuICAgIGxldCB0ZW1wbGF0ZXNXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGxhdGVzLXdpbmRvdycpXG4gICAgbGV0IHRlbXBsYXRlc1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wbGF0ZXNXaW5kb3cuYXBwZW5kQ2hpbGQodGVtcGxhdGVzUGFnZSkuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wbGF0ZXMtcGFnZScpO1xuXG4gICAgLy90ZW1wbGF0ZXMgY2F0ZWdvcnkgY2FyZFxuICAgIGxldCBjYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBsYXRlc1BhZ2UuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDb250YWluZXIpLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2F0ZWdvcmllcy1jb250YWluZXInKVxuXG4gICAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCYXIpLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoJyk7XG4gICAgc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnc2VhcmNoLi4uJylcblxuICAgIGxldCBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3JpZXNMaXN0KS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhdGVnb3JpZXMtbGlzdCcpO1xuXG4gICAgbGV0IGNhdGVnb3JpZXNMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjYXRlZ29yaWVzTGlzdC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzTGlzdFRpdGxlKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RQJyk7XG4gICAgY2F0ZWdvcmllc0xpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdjYXRlZ29yaWVzJztcblxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2F0ZWdvcmllc0xpc3QuYXBwZW5kQ2hpbGQobGlzdCkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0Jyk7XG5cbiAgICBsZXQgY2F0ZWdvcmllc0FycmF5ID0gWydhbGwgdGVtcGxhdGVzJywgJ3dvcmsnLCAnZWR1Y2F0aW9uJywgJ2hvbWUnLCAnZGVzaWduJywgJ2NsaWVudHMtbWFya2V0aW5nJywgJ3Nwb3J0JywgJ2hvYmJpZXMnLCAncGVyc29uYWwgYWN0aXZpdGllcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbGlzdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWVsZW1lbnQnKTtcbiAgICAgICAgbGlzdEVsZW0udGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzQXJyYXlbaV1cbiAgICB9XG5cbiAgICBsZXQgdGVtcGxhdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcGxhdGVzUGFnZS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZXNDb250YWluZXIpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcGxhdGVzLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IHRlbXBIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGVtcGxhdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBIMSkuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wbGF0ZXMtaGVhZGVyJyk7XG4gICAgdGVtcEgxLnRleHRDb250ZW50ID0gJ0RvSXQgdGVtcGxhdGVzJztcblxuXG4gICAgbGV0IHRlbXBsYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBsYXRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wbGF0ZXMpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcGxhdGVzJyk7XG5cbiAgICBsZXQgY2hvc2VuQ2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGVtcGxhdGVzLmFwcGVuZENoaWxkKGNob3NlbkNhdGVnb3J5VGl0bGUpLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hvc2VuLWNhdGVnb3J5LXRpdGxlJylcbiAgICBjaG9zZW5DYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCB0ZW1wbGF0ZXMnIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PlxuXG4gICAgbGV0IGNob3NlbkNhdGVnb3J5VGVtcGxhdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wbGF0ZXMuYXBwZW5kQ2hpbGQoY2hvc2VuQ2F0ZWdvcnlUZW1wbGF0ZXMpLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hvc2VuLWNhdGVnb3J5LXRlbXBsYXRlcycpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBsYXRlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hvc2VuQ2F0ZWdvcnlUZW1wbGF0ZXMuYXBwZW5kQ2hpbGQodGVtcGxhdGVDYXJkKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXBsYXRlJylcblxuICAgICAgICBsZXQgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wbGF0ZUNhcmQuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcikuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wLWljb24nKVxuICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgICAgICBpY29uLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGVtcGxhdGVzQXJyYXlbaV0uaWNvbn0pYFxuXG4gICAgICAgIGxldCB0ZW1wbGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcGxhdGVDYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlVGV4dCkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wbGF0ZS10ZXh0JylcblxuICAgICAgICBsZXQgdGVtcGxhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGVtcGxhdGVUZXh0LmFwcGVuZENoaWxkKHRlbXBsYXRlVGl0bGUpXG4gICAgICAgIHRlbXBsYXRlVGl0bGUudGV4dENvbnRlbnQgPSB0ZW1wbGF0ZXNBcnJheVtpXS5uYW1lO1xuXG4gICAgICAgIGxldCB0ZW1wbGF0ZUJlcmllZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcGxhdGVUZXh0LmFwcGVuZENoaWxkKHRlbXBsYXRlQmVyaWVmKVxuICAgICAgICB0ZW1wbGF0ZUJlcmllZi50ZXh0Q29udGVudCA9IHRlbXBsYXRlc0FycmF5W2ldLmRpc2NyaXB0aW9uO1xuXG4gICAgICAgIHRlbXBsYXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZk5hbWUnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0c0FycmF5ID0gc2V0QXJyYXlEYXRhKCdwcm9qZWN0c0FycmF5JylcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNBcnJheS5maWx0ZXIoKGVsZW0pID0+IGVsZW0ubmFtZSA9PT0gdGVtcGxhdGVzQXJyYXlbaV0ubmFtZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBUZW1wbGF0ZVByb2plY3QodGVtcGxhdGVzQXJyYXlbaV0uaWNvbiwgdGVtcGxhdGVzQXJyYXlbaV0ubmFtZSwgdGVtcGxhdGVzQXJyYXlbaV0uY2F0ZWdvcnksIHRlbXBsYXRlc0FycmF5W2ldLmRpc2NyaXB0aW9uLCB0ZW1wbGF0ZXNBcnJheVtpXS5kZWxldGVkKSlcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVEYXRhKCdwcm9qZWN0c0FycmF5JywgcHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiB0ZW1wbGF0ZXNGb290ZXIoKSB7XG4gICAgbGV0IHRlbXBsYXRlc1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZXMtd2luZG93JylcbiAgICBsZXQgZm9vdGVyU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcGxhdGVzV2luZG93LmFwcGVuZENoaWxkKGZvb3RlclNlYykuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wbGF0ZXMtZm9vdGVyJyk7XG5cblxuICAgIGxldCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyU2VjLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLWNvbnRlbnQnKTtcblxuICAgIGxldCBmb290ZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXJMb2dvKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28tY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckxvZ28uYXBwZW5kQ2hpbGQobG9nbykuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5cbiAgICBsZXQgZm90TG9nb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyTG9nby5hcHBlbmRDaGlsZChmb3RMb2dvUGFyYSlcbiAgICBmb3RMb2dvUGFyYS50ZXh0Q29udGVudCA9ICdtYWtlcyB5b3UgYWNjb21wbGlzaCB5b3VyIHRhc2tzIGVmZmljaWVudGx5JztcblxuICAgIGxldCBwcm9kdWN0aXZ0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvb3RlckxvZ28uYXBwZW5kQ2hpbGQocHJvZHVjdGl2dHlCdG4pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdHZpdHktQnRuJylcbiAgICBwcm9kdWN0aXZ0eUJ0bi50ZXh0Q29udGVudCA9IGBoZWxwZnVsIHRpcHNgO1xuXG4gICAgcHJvZHVjdGl2dHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgUHJvZHVjdGl2dHlNdGhkc1BhZ2UoKVxuICAgIH0pXG5cbiAgICBsZXQgY29udGVudFNlY3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRTZWNzQ29udGFpbmVyKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci1zZWMtY29udGFpbmVyJyk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRTZWNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vdGVyLXNlY3Rpb24nKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgbGV0IHNlY0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChzZWNFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VsZW1lbnRzJyk7XG5cbiAgICAgICAgICAgIHNlY0VsZW1lbnQudGV4dENvbnRlbnQgPSBmb290ZXJTZWN0aW9uc0RhdGFbaV1bal1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdrZWVwIGluIHRvdWNoIHdpdGggdXM6J1xuXG4gICAgbGV0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0cykuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy1jb250YWluZXInKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKGNvbnRhY3QpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdCcpO1xuXG4gICAgICAgIGNvbnRhY3Quc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjb250YWN0c0FycmF5W2ldfSlgXG4gICAgfVxuXG5cbiAgICBsZXQgYWRkaW5nVGVtcGxhdGVTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJTZWMuYXBwZW5kQ2hpbGQoYWRkaW5nVGVtcGxhdGVTZWMpLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRlbS1jb250YWluZXInKTtcblxuICAgIGxldCBhZGRUZW1wUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICBhZGRpbmdUZW1wbGF0ZVNlYy5hcHBlbmRDaGlsZChhZGRUZW1wUGFyYSkuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGVtcC1wYXJhJyk7XG4gICAgYWRkVGVtcFBhcmEudGV4dENvbnRlbnQgPSAnZG8geW91IGhhdmUgYW55IGlkZWEgZm9yIGEgbmV3IHRlbXBsYXRlPydcblxuICAgIGxldCBhZGRUZW1wQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkaW5nVGVtcGxhdGVTZWMuYXBwZW5kQ2hpbGQoYWRkVGVtcEJ0bikuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGVtcC1idG4nKTtcbiAgICBhZGRUZW1wQnRuLnRleHRDb250ZW50ID0gJ3NlbmQgaXQgdG8gdXMnO1xuXG4gICAgbGV0IGZvb3RlclBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZGluZ1RlbXBsYXRlU2VjLmFwcGVuZENoaWxkKGZvb3RlclBpYykuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvNjIxNzUwMy5qcGcnKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi9zdGFydFwiO1xuXG5zdGFydCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=