const code = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5', 
};

const encode = (message) => {
  const arrayMessage = [...message].map((letter) => {
    if(Object.keys(code).includes(letter)) {
      return code[letter]; 
    }
    return letter;
  });
  return arrayMessage.join('');
} 

const decode = (message) => {
  const arrayMessage = [...message].map((letter) => {
    if(Object.values(code).includes(letter)) {
      return Object.keys(code).find((key) => code[key] === letter); 
    }
    return letter;
  });
  return arrayMessage.join('');
} 

module.exports = {
  encode,
  decode,
}
