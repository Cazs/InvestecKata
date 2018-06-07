export function add(numbers: string)
{
    if(!numbers)
        return 0;
    let total = 0;
    numbers.split(',').forEach((number) =>
                            total+=Number(number));
    return total;
}

export default add(process.argv[2]);