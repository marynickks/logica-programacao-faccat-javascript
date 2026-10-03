const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a quantidade de litros: ", function(litros) {

    entrada.question("Digite o tipo de combustível (A ou G): ", function(tipo) {

        litros = Number(litros);
        tipo = tipo.toUpperCase();

        let preco;
        let desconto;

        if (tipo === "A") {
            preco = 2.90;

            if (litros <= 20) {
                desconto = 0.03;
            } else {
                desconto = 0.05;
            }

        } else if (tipo === "G") {
            preco = 3.30;

            if (litros <= 20) {
                desconto = 0.04;
            } else {
                desconto = 0.06;
            }

        } else {
            console.log("Tipo de combustível inválido.");
            entrada.close();
            return;
        }

        let total = litros * preco;
        let valorDesconto = total * desconto;
        let valorPagar = total - valorDesconto;

        console.log("Valor a pagar: R$", valorPagar.toFixed(2));

        entrada.close();
    });
});