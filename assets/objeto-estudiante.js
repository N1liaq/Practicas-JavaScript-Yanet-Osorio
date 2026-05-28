const estudiante = {
  nombre: "Yanet",
  apellido: "Osorio",
  nota: 7,
};
console.log(
  `Nombre: ${estudiante.nombre},  Apellido: ${estudiante.apellido}, Nota: ${estudiante.nota}`,
);

if (estudiante.nota >= 6 && estudiante.nota <= 10) {
  let aprobado = true;
  console.log(`Aprobado: ${aprobado}`);
} else {
  let aprobado = false;
  console.log(`Aprobado: ${aprobado}`);
}
