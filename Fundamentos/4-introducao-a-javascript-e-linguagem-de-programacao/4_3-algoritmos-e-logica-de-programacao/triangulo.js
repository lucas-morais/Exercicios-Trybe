let n = 10;

for (let i = 0; i < n; i+=1){
  let linha ='';
  for (let j = 0; j < i + 1; j+=1 ) { 
    linha += '*'
  }
  console.log(linha);
}
