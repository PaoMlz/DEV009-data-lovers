import { sorted, anotherExample } from '../src/data.js';


describe('sorted', () => {
  it('is a function', () => {
    expect(typeof sorted).toBe('function');
  });

  it('returns an array', () => {
    const result = sorted()
    expect(Array.isArray(result)).toBe(true);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
