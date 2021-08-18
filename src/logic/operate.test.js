import operate from './operate';

describe('test operate function', () => {
    test('test plus functionality', () => {
        expect(operate(1,2,'+')).toBe('3');
    })
    test('test minus functionality', () => {
        expect(operate(1,2,'-')).toBe('-1');
    })
    test('test multiply functionality', () => {
        expect(operate(1,2,'x')).toBe('2');
    })
    test('test division functionality', () => {
        expect(operate(1,2,'÷')).toBe('0.5');
    })
    test('test rest functionality', () => {
        expect(operate(1,2,'%')).toBe('1');
    })
})