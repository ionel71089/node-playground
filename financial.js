const Dinero = require("dinero.js");

Dinero.globalLocale = "it-IT";
Dinero.defaultCurrency = "EUR";
Dinero.defaultPrecision = 2;
const defaultFormat = "0,0.00";

Object.prototype.toFinancial = function () {
  return this.toFormat(defaultFormat);
};

Object.prototype.toFinancialSwapped = function () {
  return swapCommasAndDots(this.toFinancial());
};

function swapCommasAndDots(string) {
  string = string.replace(/[,]+/g, "#");
  string = string.replace(/[.]+/g, "&");
  string = string.replace(/[#]+/g, ".");
  string = string.replace(/[&]+/g, ",");
  return string;
}
