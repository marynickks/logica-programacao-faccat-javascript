const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um valor: ", function(valor) {

    valor = Number(valor);

    if (valor > 0) {
        console.log("Positivo");
    } else if (valor < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }

    entrada.close();
});