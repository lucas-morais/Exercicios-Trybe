const frase = "Antônio foi no banheiro e não sabemos o que aconteceu";

const longestWord = string => string.split(' ')
  .sort((a, b) => a.length - b.length)[0];


console.log(longestWord(frase));

