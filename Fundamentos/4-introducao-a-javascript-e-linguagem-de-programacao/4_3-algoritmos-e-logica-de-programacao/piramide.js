let n = 9;

for (let i = 1; i <= n; i+=2){
  let linha ='';
  let margemInferior = 1 + (n-i)/2
  let margemSuperior = n - (n-i)/2 
  for (let j = 1; j <= n; j+=1 ) { 
    if(j < margemInferior || j > margemSuperior){
      linha += ' ';
    }
    else{
      linha += '*'
    }
  }
  console.log(linha);
}
