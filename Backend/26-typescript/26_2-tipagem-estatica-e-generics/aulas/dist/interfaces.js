"use strict";
const corsa = {
    marca: 'chevrolet',
    ano: 1996,
    consumo: (km) => `${km}km/L`,
};
console.log(corsa.marca);
console.log(corsa.ano);
console.log(corsa.consumo(12));
