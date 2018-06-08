export function add(numbers: string)
{
    if(!numbers)
    {
        return 0;
    }
    /*
     * by default use new-line char and commas as delimiter,
     * \\\\n to support new-line chars from command-line args
     */
    let number_delimiter_regex = '\n|,|\\\\n';

    // const custom_delimiters_regex = new RegExp('//\\[(.*)\\]+\\\\n');
    
    const custom_delimiters_regex = new RegExp(/\/\/(\[.+\])+\\n/g); // regex to check if a custom delimiter is defined
    const custom_delimiters_arr = numbers.split(custom_delimiters_regex); // element 0 will be empty, 1 will be string of delimiters i.e. [+][&], 2 will be a string of actual numbers

    if(custom_delimiters_arr.length > 1) // if string of numbers defines custom delimiter/s
    {
        custom_delimiters_arr[1].trim()
                                .split(/(\[.\])/g) // convert string of delimiters to string array of delimiters
                                .forEach(delimiter => // iterate over each custom delimiter and add it to the number delimiters regular expression
                                {
                                    if(delimiter) // ignore blank delimiters
                                    {
                                        const custom_delimiter = delimiter.trim().replace(/[\[\]]/g, '');
                                        console.log('found custom delimiter: ', custom_delimiter);
                                        number_delimiter_regex += '|' + escapeString(custom_delimiter);
                                    }
                                });
    }

    const numbers_arr = numbers.trim() // trim whitespace around input
                                .replace(custom_delimiters_regex, '') // make first line (with definition/s of custom delimiter/s) blank
                                .split(RegExp(number_delimiter_regex)); // convert delimited numbers string to array

    let total = 0;

    const negatives : Number[] = [];

    numbers_arr.forEach((number) =>
    {
        const current_number = Number(number.trim());
        if(!isNaN(current_number)) // if current number is a valid number
        {
            if(current_number >= 0 && current_number <= 1000) // if current number is between 0 and 1000
                total+= current_number; // add current number to total
            else if(current_number < 0) // if current number is a negative number
                negatives.push(current_number); // add current number to list of negative numbers
        }
    });

    if(negatives.length > 0)
        throw new Error('negatives not allowed: ' + negatives);
    console.log('total: %s', total);
    return total;
}

function escapeString(str: string)
{
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\&]/g, '\\$&');
}

export default add(process.argv[2]);