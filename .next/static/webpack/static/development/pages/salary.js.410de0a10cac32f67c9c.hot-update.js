webpackHotUpdate("static\\development\\pages\\salary.js",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/
var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

var localeSubpaths = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")["default"]().publicRuntimeConfig.localeSubpaths;

var options = {
  localeSubpaths: true
};
var localeSubpathVariations = {
  none: {},
  foreign: {
    de: 'de'
  },
  all: {
    en: 'en',
    de: 'de'
  }
};
module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'de',
    en: 'en'
  }
}); // import NextI18Next from 'next-i18next'
// const options = new NextI18Next({ localeSubpaths: true })
// export default new NextI18Next(options)

/***/ })

})
//# sourceMappingURL=salary.js.410de0a10cac32f67c9c.hot-update.js.map