const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Quantidade de morangos em Kg: ", function(morangos) {

    entrada.question("Quantidade de maçãs em Kg: ", function(macas) {

        morangos = Number(morangos);
        macas = Number(macas);

        let precoMorango;
        let precoMaca;

        if (morangos <= 5) {
            precoMorango = 2.50;
        } else {
            precoMorango = 2.20;
        }

        if (macas <= 5) {
            precoMaca = 1.80;
        } else {
            precoMaca = 1.50;
        }

        let total = (morangos * precoMorango) + (macas * precoMaca);

        let quantidadeTotal = morangos + macas;

        if (quantidadeTotal > 8 || total > 25) {
            total = total - (total * 0.10);
        }

        console.log("Valor a pagar: R$", total.toFixed(2));

        entrada.close();
    });
});