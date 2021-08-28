import capitalizeAllWords from './capitalize';

describe('capitalizeAllWords function tests', () => {
  it('should return capitalized version of passed title', () => {
    const title = 'test deneme 123';
    const result = capitalizeAllWords(title);

    expect(result).toBe('Test Deneme 123');
  })

  it('should throw error when passing argument is not string', () => {
    const num = 123;

    expect(() => capitalizeAllWords(num)).toThrowError('Argument is not string!');
  })
})