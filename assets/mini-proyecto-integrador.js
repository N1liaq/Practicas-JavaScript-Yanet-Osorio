let nombre = "Yanet",
  notas = [10, 10, 9, 6, 7],
  acumulador = 0,
  promedio = 0;

for (let i = 0; i < notas.length; i++) {
  acumulador = acumulador + notas[i];
}
promedio = acumulador / notas.length;
promedio = promedio.toFixed(1);
console.log(`nombre: ${nombre}, promedio: ${promedio}`);
if (promedio >= 7) {
  console.log("Nota: Muy bueno");
} else if (promedio >= 6) {
  console.log("Nota: aprobado");
} else {
  console.log("Nota: Desaprobado");
}
