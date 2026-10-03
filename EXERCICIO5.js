const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um valor: ", function(valor) {

    valor = Number(valor);

    console.log("O antecessor é:", valor - 1);

    entrada.close();
});