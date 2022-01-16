let moment = require('moment');

let brasiTetra = moment('17041994', 'DDMMYYYY');
let fromNow = brasiTetra.fromNow() 

console.log('Ouvimos o "É TETRAAA!!" há: ' + fromNow);

