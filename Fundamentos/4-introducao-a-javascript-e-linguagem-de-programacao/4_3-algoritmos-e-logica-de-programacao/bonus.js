let n = 9;

for (let i = 1; i <= n; i+=2){
  let linha ='';
  let valorInferior = 1 + (n-i)/2
  let valorSuperior = n - (n-i)/2 
  
  for (let j = 1; j <= n; j+=1 ) { 
    
    
    if(j == valorInferior || j == valorSuperior || i==n){
      linha += '*';
    }
    else{
      linha += ' '
    }
  }
  console.log(linha);
}
