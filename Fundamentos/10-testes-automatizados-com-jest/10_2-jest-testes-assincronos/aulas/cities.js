let cities = [];

function getCities() {
  return cities;
} 

function retrieveCitiesFromCache() {
  cities.push('Fortaleza');
  cities.push('Belo Horizonte');
}

function requestCities() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      cities.push('Fortaleza');
      cities.push('Belo Horizonte');
      cities.push('São Paulo');
      cities.push('Recife');
      cities.push('Porto Alegre');
      cities.push('Goiania');
      cities.push('Manaus');
      cities.push('Piauí');
      resolve();
    }, 200);
  });
}

function removeCity(city) {
  const index = cities.indexOf(city);
  if(index > -1) {
    cities.splice(index, 1);
  }
}

function isCity(city) {
  return cities.includes(city);
}

function resetCities() {
  cities = [];
}

module.exports = {
  resetCities, 
  getCities, 
  removeCity, 
  retrieveCitiesFromCache,
  isCity,
  requestCities,
};
