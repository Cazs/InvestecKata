"use strict";
exports.__esModule = true;
function add(numbers) {
    if (!numbers) {
        return 0;
    }
    var custom_delimiter_regex = new RegExp('//\\[(.*)\\]\\\\n');
    // by default use new-line char & commas as delimiter
    var delimiter = '\n|,|\\\\n'; // \\\\n to support new-line chars from command-line args
    var custom_delimiter_arr = numbers.split(custom_delimiter_regex);
    if (custom_delimiter_arr && custom_delimiter_arr.length > 1) {
        delimiter = escapeString(custom_delimiter_arr[1].trim());
        console.log('found custom delimiter: ', delimiter);
    }
    var total = 0;
    // const regex = new RegExp('./d+(,|\n|$)');
    var regex = new RegExp(delimiter);
    var negatives = [];
    numbers.trim() // remote whitespace around input
        .replace(custom_delimiter_regex, '') // make first line blank
        .split(regex) // split 
        .forEach(function (number) {
        var current_number = Number(number.trim());
        if (!isNaN(current_number)) // if current number is a valid number
         {
            if (current_number >= 0)
                total += current_number;
            else
                negatives.push(current_number);
        }
    });
    if (negatives.length > 0)
        throw new Error('negatives not allowed: ' + negatives);
    console.log('total: %s', total);
    return total;
}
exports.add = add;
function escapeString(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
exports["default"] = add(process.argv[2]);
