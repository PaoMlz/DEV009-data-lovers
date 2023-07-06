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


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
describe('sorted', () => {
  it('is a function', () => {
    expect(typeof sorted).toBe('function');
  });

  it('returns an array', () => {
    const data = [
      
    ];
    const result = sorted(data, 'asc');
    expect(Array.isArray(result)).toBe(true);
  });

  it('sorts data in ascending order by title', () => {
    const data = [
     
    ];
    const expected = [
      // { title: 'Movie A' } data,
      
    ];
    const result = sorted(data, 'asc');
    expect(result).toEqual(expected);
  });
});

