"use strict";
exports.__esModule = true;
function add(numbers) {
    if (!numbers)
        return 0;
    var total = 0;
    var regex = new RegExp('/d+(,|\n|$)');
    console.log('regex arr: ', numbers.split(regex));
    numbers.split(',').forEach(function (number) {
        return total += Number(number);
    });
    console.log('total: %s', total);
    return total;
}
exports.add = add;
exports["default"] = add(process.argv[2]);
