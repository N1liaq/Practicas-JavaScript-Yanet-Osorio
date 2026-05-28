let nota = [8, 6, 9, 7, 6];
let nota_total = 0;
let contador = 0;

for (let i = 0; i < 5; i++) {
  if ((contador = 0)) {
    nota_total = nota_total + nota[contador];
    console.log(nota_total);
  } else {
    contador = contador + 1;
    nota_total = nota_total + nota[contador];
    console.log(nota_total);
  }
}

console.log(`Promedio de notas: ${nota_total.length}`);
