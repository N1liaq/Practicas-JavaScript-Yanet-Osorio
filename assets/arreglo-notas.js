let notas = [8, 6, 9, 7, 6];
let acumulador = 0,
  promedio = 0;
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
  acumulador = acumulador + notas[i];
}
promedio = acumulador / notas.length;
console.log(`Promedio de notas: ${promedio}`);
