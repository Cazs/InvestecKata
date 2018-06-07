"use strict";
exports.__esModule = true;
function add(numbers) {
    console.log('numbers: ', numbers);
    return Number(numbers.split(',')[0]) + Number(numbers.split(',')[1]);
}
exports.add = add;
exports["default"] = add(process.argv[2]);
