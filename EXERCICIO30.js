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

            let valores = [valor1, valor2, valor3];

            valores.sort(function(a, b) {
                return a - b;
            });

            console.log("Ordem crescente:", valores);

            entrada.close();
        });
    });
});