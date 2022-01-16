function fatorial(n) {
  if(n <= 1){
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

const n = 5
let resultado = fatorial(5);
console.log(resultado);

const fatorial2 = n => (n <= 1) ?  1 : n*fatorial2(n-1) ; 
resultado = fatorial2(5);
console.log(resultado);


