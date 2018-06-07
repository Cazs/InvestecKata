export function add(numbers: string)
{
    if(!numbers)
        return 0;
    console.log('numbers: ', numbers);
    return Number(numbers.split(',')[0]) + Number(numbers.split(',')[1]);
}

export default add(process.argv[2]);