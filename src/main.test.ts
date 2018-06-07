// import * as Main from './main';

describe('Main Tests', () =>
{
    it('adds 1,2 to equal 3', () =>
    {
        // process.argv[2] = "1,2";
        // const { add } = Main;
        const {add} = require('./main');
        expect(add('1,2')).toBe(3);
    })

    it('adds 1,2,3 to equal 6', () =>
    {
        const {add} = require('./main');
        expect(add('1,2,3')).toBe(6);
    })

    it('adds 1,2,3\\n4 to equal 10', () =>
    {
        const {add} = require('./main');
        expect(add("1,2,3\n4")).toBe(10);
    })

    it('adds //[+]\\n1+2+3+4 to equal 10', () =>
    {
        const {add} = require('./main');
        expect(add("//[+]\\n1+2+3+4")).toBe(10);
    })
});