// import * as Main from './main';

describe('Main Tests', () =>
{
    it('adds 1 + 2 to equal 3', () =>
    {
        // process.argv[2] = "1,2";
        // const { add } = Main;
        const {add} = require('./main');
        expect(add('1,2')).toBe(3);
    })
});