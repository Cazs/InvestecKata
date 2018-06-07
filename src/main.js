"use strict";
exports.__esModule = true;
function add(numbers) {
    if (!numbers)
        return 0;
    var total = 0;
    // const regex = new RegExp('./d+(,|\n|$)');
    var regex = new RegExp('\n|,|\\\\n'); // \\\\n to support new-line chars from command-line args
    console.log('regex arr: ', numbers.split(regex));
    numbers.split(regex).forEach(function (number) {
        return total += Number(number);
    });
    console.log('total: %s', total);
    return total;
}
exports.add = add;
exports["default"] = add(process.argv[2]);
