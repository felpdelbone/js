let numero = prompt("Digite um número para ver sua tabuada:");
numero = parseInt(numero);

if (numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, insira um número válido.");
}
