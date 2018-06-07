export function add(numbers: string)
{
    if(!numbers)
    {
        return 0;
    }
    const custom_delimiter_regex = new RegExp('//\\[(.*)\\]\\\\n');
    // by default use new-line char & commas as delimiter
    let delimiter = '\n|,|\\\\n';// \\\\n to support new-line chars from command-line args
    const custom_delimiter_arr = numbers.split(custom_delimiter_regex);
    if(custom_delimiter_arr && custom_delimiter_arr.length > 1)
    {
        delimiter = escapeString(custom_delimiter_arr[1].trim());
        console.log('found custom delimiter: ', delimiter);
    }

    let total = 0;

    // const regex = new RegExp('./d+(,|\n|$)');
    const regex = new RegExp(delimiter); 

    numbers.trim() // remote whitespace around input
            .replace(custom_delimiter_regex, '') // make first line blank
            .split(regex) // split 
            .forEach((number) => 
                total += Number(number.trim()));
    console.log('total: %s', total);
    return total;
}

function escapeString(str: string)
{
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

export default add(process.argv[2]);