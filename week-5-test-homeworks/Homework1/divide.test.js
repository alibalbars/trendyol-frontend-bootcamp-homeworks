import divide from './divide';

describe('test divide function', () => {
    it('should return divided number', () => {
        const num1 = 9;
        const num2 = 3;

        const result = divide(num1, num2)
        expect(result).toBe(3);
    })

    it('should throw error when at least one argument is not a number', () => {
        const str = 'test';
        const num2 = 3;

        expect(() => divide(str, num2)).toThrowError('num1 or num2 is not number!');
    })

    it('should throw error when second argument is zero', () => {
        const num1 = 9;
        const num2 = 0;

        expect(() => divide(num1, num2)).toThrowError('num2 is zero!');
    })

})