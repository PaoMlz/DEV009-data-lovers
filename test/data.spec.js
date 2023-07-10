import { sorted, selectYear, selectDirPro, searchmovies } from '../src/data.js';

const data = [
  {
    "title": "Castle in the Sky",
    "release_date": "1986",  
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
  },
  {
    "title": "My Neighbor Totoro", 
    "release_date": "1988",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
  },
  {
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
  }, 
];

describe('sorted', () => {
  it('Is a function', () => {
    expect(typeof sorted).toBe('function');
  });

  it('sorts data in ascending order by title', () => {
    

    const result = sorted(data, 'asc');
    expect(result[0].title).toEqual("Castle in the Sky");
    expect(result[1].title).toEqual("Kiki's Delivery Service");
    expect(result[2].title).toEqual("My Neighbor Totoro");

  });
});

describe('selectYear', () => {
  it('Is a function', () => {
    expect(typeof selectYear).toBe('function');
  }); 
  
  it('returns movies released in a specific year', () => {
    const result = selectYear(data, '1988');
    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual("My Neighbor Totoro");
  });
});

describe('selectDirPro', () => {
  it('Is a function', () => {
    expect(typeof selectDirPro).toBe('function');
  });

  it('returns movies directed or produced by a specific person', () => {
    const result = selectDirPro(data, 'Hayao Miyazaki');
    expect(result.length).toEqual(3);
    expect(result[0].title).toEqual("Castle in the Sky");
    expect(result[1].title).toEqual("My Neighbor Totoro");
    expect(result[2].title).toEqual("Kiki's Delivery Service");
  });
});

describe('searchmovies', () => {
  it('Is a function', () => {
    expect(typeof searchmovies).toBe('function');
  });

  it('returns movies that match the search input', () => {
    const result = searchmovies(data, 'Totoro');
    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual("My Neighbor Totoro");
  });
});

