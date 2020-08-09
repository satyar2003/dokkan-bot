"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gsheetsAPI = function gsheetsAPI(sheetId) {
  var sheetNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var fetchFunc;

  try {
    fetchFunc = window.fetch;
  } catch (err) {
    fetchFunc = _nodeFetch["default"];
  }

  try {
    var sheetsUrl = "https://spreadsheets.google.com/feeds/cells/".concat(sheetId, "/").concat(sheetNumber, "/public/values?alt=json-in-script");
    return fetchFunc(sheetsUrl).then(function (response) {
      if (!response.ok) {
        throw new Error('Error fetching sheet');
      }

      return response.text();
    }).then(function (resultText) {
      var formattedText = resultText.replace('gdata.io.handleScriptLoaded(', '').slice(0, -2);
      return JSON.parse(formattedText);
    });
  } catch (err) {
    console.log("gsheetsAPI error: ".concat(err));
    return {};
  }
};

var _default = gsheetsAPI;
exports["default"] = _default;