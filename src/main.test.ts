// import * as Main from './main';

describe('Main Tests', () =>
{
    test('add 1,2 to equal 3', () =>
    {
        // process.argv[2] = "1,2";
        // const { add } = Main;
        function addTwoNumbers()
        {
            const {add} = require('./main');
            return add('1,2');
        }
        expect(addTwoNumbers()).toBe(3);
    });

    test('add 1,2,3 to equal 6', () =>
    {
        function addMultipleNumbers()
        {
            const {add} = require('./main');
            return add('1,2,3');
        }
        expect(addMultipleNumbers()).toBe(6);
    });

    test('add 1,2,3\\n4 to equal 10', () =>
    {
        function addWithMultipleDelimiters()
        {
            const {add} = require('./main');
            return add("1,2,3\n4");
        }
        expect(addWithMultipleDelimiters()).toBe(10);
    });

    test('add //[+]\\n1+2+3+4 to equal 10', () =>
    {
        function addWithCustomDelimiter()
        {
            const {add} = require('./main');
            return add("//[+]\\n1+2+3+4");
        }
        expect(addWithCustomDelimiter()).toBe(10);
    });
    
    test('add -1,2,-3,4 should throw exception for -1 and -3', () =>
    {
        function addWithNegatives()
        {
            const {add} = require('./main');
            return add("-1,2,-3,4")
        }
        expect(addWithNegatives).toThrowError(/negatives not allowed: -1,-3/);
    });

    test('add 8,9,1001,3 should return 20', () =>
    {
        function addWithNumberGreaterThan1000()
        {
            const {add} = require('./main');
            return add("8,9,1001,3")
        }
        expect(addWithNumberGreaterThan1000()).toBe(20);
    });

    test('add //[+][&]\\n1+2&3&4 to equal 10', () =>
    {
        function addWithCustomMultipleDelimiters()
        {
            const {add} = require('./main');
            return add("//[+][&]\\n1+2&3&4");
        }
        expect(addWithCustomMultipleDelimiters()).toBe(10);
    });

    test('add //[**][%][+]\\n7**2%8%5**2+1000 to equal 1024', () =>
    {
        function addWithCustomMultipleMulticharDelimiters()
        {
            const {add} = require('./main');
            return add("//[**][%][+]\\n7**2%8%5**2+1000");
        }
        expect(addWithCustomMultipleMulticharDelimiters()).toBe(1024);
    });
    
    test('add //[**][%][+++]\\n7**2%8%5**2+++1001 to equal 24', () =>
    {
        function addWithCustomMultipleMulticharDelimiters()
        {
            const {add} = require('./main');
            return add("//[**][%][+++]\\n7**2%8%5**2+++1001");
        }
        expect(addWithCustomMultipleMulticharDelimiters()).toBe(24);
    });
});