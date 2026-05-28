let numero = 5;
let contador = 0;
let tabla = 0;

console.log(`Tabla de multiplicar del ${numero}`);
for (let i = 0; i < 10; i++) {
  contador = contador + 1;
  tabla = numero * contador;
  console.log(tabla);
}
