const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o salário atual: ", function(salario) {

    entrada.question("Digite o percentual de reajuste: ", function(reajuste) {

        salario = Number(salario);
        reajuste = Number(reajuste);

        let novoSalario = salario + (salario * reajuste / 100);

        console.log("Novo salário:", novoSalario);

        entrada.close();
    });
});