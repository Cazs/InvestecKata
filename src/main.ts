export function add(numbers: string)
{
    if(!numbers)
        return 0;
    let total = 0;
    // const regex = new RegExp('./d+(,|\n|$)');
    const regex = new RegExp('\n|,|\\\\n'); // \\\\n to support new-line chars from command-line args
    console.log('regex arr: ', numbers.split(regex));
    numbers.split(regex).forEach((number) =>
                            total+=Number(number));
    console.log('total: %s', total);
    return total;
}

export default add(process.argv[2]);