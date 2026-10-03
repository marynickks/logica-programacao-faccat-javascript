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
            let segundoMaior;

            if (valor1 > valor2 && valor1 > valor3) {
                maior = valor1;

                if (valor2 > valor3) {
                    segundoMaior = valor2;
                } else {
                    segundoMaior = valor3;
                }

            } else if (valor2 > valor1 && valor2 > valor3) {
                maior = valor2;

                if (valor1 > valor3) {
                    segundoMaior = valor1;
                } else {
                    segundoMaior = valor3;
                }

            } else {
                maior = valor3;

                if (valor1 > valor2) {
                    segundoMaior = valor1;
                } else {
                    segundoMaior = valor2;
                }
            }

            console.log("Soma dos dois maiores:", maior + segundoMaior);

            entrada.close();
        });
    });
});