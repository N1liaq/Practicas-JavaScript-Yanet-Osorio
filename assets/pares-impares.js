contador = 0;
for (let i = 0; i < 20; i++) {
  contador = contador + 1;
  if (contador % 2 === 0) {
    console.log(`Par: ${contador}`);
  } else {
    console.log(`Impar: ${contador}`);
  }
}
