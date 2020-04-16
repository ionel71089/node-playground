const Dinero = require("dinero.js");
require("./financial");

const amount = Dinero({ amount: 13625 });
const vat = amount.percentage(22);
const total = amount.add(vat);

console.log(`amount: ${amount.toFinancial()}`);
console.log(`vat: ${vat.toFinancialSwapped()}`);
console.log(`total: ${total.toFinancialSwapped()}`);
