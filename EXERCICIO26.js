const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a quantidade atual: ", function(atual) {

    entrada.question("Digite a quantidade máxima: ", function(maxima) {

        entrada.question("Digite a quantidade mínima: ", function(minima) {

            atual = Number(atual);
            maxima = Number(maxima);
            minima = Number(minima);

            let media = (maxima + minima) / 2;

            console.log("Quantidade média:", media);

            if (atual >= media) {
                console.log("Não efetuar compra");
            } else {
                console.log("Efetuar compra");
            }

            entrada.close();
        });
    });
});