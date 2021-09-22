const {
  getCities, 
  retrieveCitiesFromCache,
  requestCities,
  removeCity, 
  isCity,
  resetCities, 
} = require('./cities.js');



describe('Retrieving data from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });
  
  afterEach(() => {
    resetCities();
  });

  it('should have only one city after removing Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1)
  });
  
  it('should have 2 cites after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
  
});

describe('Retrieving cities from api', () => {
  beforeEach(() => {
    return requestCities();
  });
  
  afterEach(() => {
    resetCities()
  });

  it('should have 8 cities after requesting from api', () => {
    expect(getCities().length).toBe(8)
  });

  it('should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });

  it('should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });

  it('should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });

  it('should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });

  it('should have the city of Goiania', () => {
    expect(isCity('Goiania')).toBeTruthy();
  });

  it('should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });

  it('should have the city of Piauí', () => {
    expect(isCity('Piauí')).toBeTruthy();
  });
});
