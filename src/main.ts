export function add(numbers: string)
{
    if(!numbers)
    {
        return 0;
    }
    const custom_delimiter_regex = new RegExp('//\\[(.*)\\]\\\\n');
    
    /*
     * by default use new-line char & commas as delimiter,
     * \\\\n to support new-line chars from command-line args
     */
    let delimiter = '\n|,|\\\\n';

    const custom_delimiter_arr = numbers.split(custom_delimiter_regex);

    if(custom_delimiter_arr && custom_delimiter_arr.length > 1)
    {
        delimiter = escapeString(custom_delimiter_arr[1].trim());
        console.log('found custom delimiter: ', delimiter);
    }

    let total = 0;

    // const regex = new RegExp('./d+(,|\n|$)');
    const regex = new RegExp(delimiter); 
    const negatives : Number[] = [];

    numbers.trim() // remote whitespace around input
            .replace(custom_delimiter_regex, '') // make first line blank
            .split(regex)
            .forEach((number) =>
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
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

export default add(process.argv[2]);