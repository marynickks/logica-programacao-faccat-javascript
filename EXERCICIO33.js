const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o primeiro valor: ", function(valor1) {

    entrada.question("Digite o segundo valor: ", function(valor2) {

        valor1 = Number(valor1);
        valor2 = Number(valor2);

        if (valor1 === valor2) {
            console.log("Números iguais");
        } else if (valor1 > valor2) {
            console.log("Primeiro é maior");
        } else {
            console.log("Segundo maior");
        }

        entrada.close();
    });
});