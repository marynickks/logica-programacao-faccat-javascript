const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o primeiro valor: ", function(valor1) {

    entrada.question("Digite o segundo valor: ", function(valor2) {

        entrada.question("Digite o terceiro valor: ", function(valor3) {

            valor1 = Number(valor1);
            valor2 = Number(valor2);
            valor3 = Number(valor3);

            let maior;

            if (valor1 > valor2 && valor1 > valor3) {
                maior = valor1;
            } else if (valor2 > valor1 && valor2 > valor3) {
                maior = valor2;
            } else {
                maior = valor3;
            }

            console.log("Maior valor:", maior);

            entrada.close();
        });
    });
});