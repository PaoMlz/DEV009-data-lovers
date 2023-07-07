import { sorted } from '../src/data.js';


describe('sorted', () => {
  it('Is a function', () => {
    expect(typeof sorted).toBe('function');
  });

  it('sorts data in ascending order by title', () => {
    const data = [
      {
        "title": "Castle in the Sky",
        
      },
      {
        "title": "My Neighbor Totoro",
       
      },
      {
        "title": "Kiki's Delivery Service",
        
      }, 
    ];

    const result = sorted(data, 'asc');
    expect(result.title[0]).toEqual("Castle in the Sky");
    expect(result.title[1]).toEqual("Kiki's Delivery Service");
    expect(result.title[2]).toEqual("My Neighbor Totoro");

  });
});
