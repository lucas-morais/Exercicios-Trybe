let nota = 12;

if(nota>100 || nota<0){
  console.log("Nota inválida");
}
else if (nota>=90){
  console.log(nota + " -> " + "A");
}
else if (nota>=80){
  console.log(nota + " -> " + "B");
}
else if (nota>=70){
  console.log(nota + " -> " + "C");
}
else if (nota>=60){
  console.log(nota + " -> " + "D");
}
else if (nota>=50){
  console.log(nota + " -> " + "E");
}
else{
  console.log(nota + " -> " + "F");
}