"use strict";
exports.__esModule = true;
function add(numbers) {
    if (!numbers) {
        return 0;
    }
    var custom_delimiter_regex = new RegExp('//\\[(.*)\\]\\\\n');
    var delimiter = '\n|,|\\\\n';
    var numbers_arr = numbers.split(custom_delimiter_regex);
    console.log('numbers_arr: ', numbers_arr);
    if (numbers_arr && numbers_arr.length > 1) {
        delimiter = escapeString(numbers_arr[1].trim());
        console.log('found custom delimiter: ', delimiter);
    }
    var total = 0;
    // const regex = new RegExp('./d+(,|\n|$)');
    var regex = new RegExp(delimiter); // \\\\n to support new-line chars from command-line args
    console.log('regex arr: ', numbers.replace(custom_delimiter_regex, '').split(regex));
    numbers.trim()
        .replace(custom_delimiter_regex, '')
        .split(regex)
        .forEach(function (number) {
        return total += Number(number.trim());
    });
    console.log('total: %s', total);
    return total;
}
exports.add = add;
function escapeString(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
exports["default"] = add(process.argv[2]);
