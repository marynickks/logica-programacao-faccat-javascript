const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o salário fixo: ", function(salario) {

    entrada.question("Digite o valor das vendas: ", function(vendas) {

        salario = Number(salario);
        vendas = Number(vendas);

        let comissao;

        if (vendas <= 1500) {
            comissao = vendas * 3 / 100;
        } else {
            comissao = 1500 * 3 / 100;
            comissao = comissao + (vendas - 1500) * 5 / 100;
        }

        let salarioTotal = salario + comissao;

        console.log("Salário total:", salarioTotal);

        entrada.close();
    });
});