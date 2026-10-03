const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Número de carros vendidos: ", function(carros) {

    entrada.question("Valor total das vendas: ", function(vendas) {

        entrada.question("Salário fixo: ", function(salario) {

            entrada.question("Valor recebido por carro: ", function(valorCarro) {

                carros = Number(carros);
                vendas = Number(vendas);
                salario = Number(salario);
                valorCarro = Number(valorCarro);

                let comissaoCarros = carros * valorCarro;
                let comissaoVendas = vendas * 5 / 100;

                let salarioFinal = salario + comissaoCarros + comissaoVendas;

                console.log("Salário final:", salarioFinal);

                entrada.close();
            });
        });
    });
});