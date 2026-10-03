const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um valor: ", function(valor) {

    valor = Number(valor);

    if (valor > 10) {
        console.log("É MAIOR QUE 10!");
    } else {
        console.log("NÃO É MAIOR QUE 10!");
    }

    entrada.close();
});