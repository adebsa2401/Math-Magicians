import calculate from '../../logic/calculate';

describe('calculate', () => {
  it('should return an object', () => {
    expect(typeof calculate({ total: null, next: null, operation: null }, 'AC')).toEqual('object');
  });

  it('should return an object with all properties as null when AC is clicked', () => {
    expect(calculate({ total: null, next: null, operation: null }, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  it('should return an empty object when 0 is clicked twice', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toEqual({});
  });
});
