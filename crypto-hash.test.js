const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {

    it('generates a SHA-256 hased output', () => {
        expect(cryptoHash('sdfdfdfdf'))
        .toEqual('765bffa193fc2171dca6eea0ce1997511f8480d491de34e5e16f11161e25820c');

    });

    it('produces the same hash with the sameinput arguments in any order', () => {
        expect(cryptoHash('one','two', 'three'))
        .toEqual(cryptoHash('three', 'one', 'two'));
    });
});