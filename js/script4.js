let largura = prompt("Digite a largura do retângulo:");
let altura = prompt("Digite a altura do retângulo:");

largura = parseFloat(largura);
altura = parseFloat(altura);

function calculaArea(largura, altura) {
    return largura * altura;
}



let area = calculaArea(largura, altura);

console.log("A área do retângulo é: " + area);
