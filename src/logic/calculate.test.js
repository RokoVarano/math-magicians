import calculate from './calculate';

describe('calculate', () => {
  const operations = ['%', '÷', '-', '+', 'x'];

  const example1 = {
    total: null,
    next: 0,
    operation: null,
  };

  const example2 = {
    total: 4,
    next: 2,
    operation: null,
  };

  const example3 = {
    total: null,
    next: null,
    operation: null,
  };

  test('should return all null on AC', () => {
    expect(calculate(example1, 'AC')).toMatchObject(example3);
  });

  test('should return an object with next and operation', () => {
    operations.forEach((operation) => {
      expect(calculate(example2, operation)).toMatchObject({
        total: 2,
        next: null,
        operation,
      });
    });
  });
});
