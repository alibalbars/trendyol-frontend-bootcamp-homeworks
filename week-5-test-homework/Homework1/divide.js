export default function divide(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        throw new Error('num1 or num2 is not number!')
    }
    if(num2 === 0) {
        throw new Error('num2 is zero!')
    }
    return num1 / num2;
}