// import * as Main from './main';

describe('Main Tests', () =>
{
    test('adds 1,2 to equal 3', () =>
    {
        // process.argv[2] = "1,2";
        // const { add } = Main;
        function addTwoNumbers()
        {
            const {add} = require('./main');
            return add('1,2');
        }
        expect(addTwoNumbers()).toBe(3);
    })

    test('adds 1,2,3 to equal 6', () =>
    {
        function addMultipleNumbers()
        {
            const {add} = require('./main');
            return add('1,2,3');
        }
        expect(addMultipleNumbers()).toBe(6);
    })

    test('adds 1,2,3\\n4 to equal 10', () =>
    {
        function addWithMultipleDelimiters()
        {
            const {add} = require('./main');
            return add("1,2,3\n4");
        }
        expect(addWithMultipleDelimiters()).toBe(10);
    })

    test('adds //[+]\\n1+2+3+4 to equal 10', () =>
    {
        function addWithCustomDelimiter()
        {
            const {add} = require('./main');
            return add("//[+]\\n1+2+3+4");
        }
        expect(addWithCustomDelimiter()).toBe(10);
    })
    
    test('1,2,-3,4 should throw exception', () =>
    {
        function addWithNegatives()
        {
            const {add} = require('./main');
            return add("1,2,-3,4")
        }
        expect(addWithNegatives).toThrowError(/negatives not allowed/);
    })
});