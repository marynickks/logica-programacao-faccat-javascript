const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a quantidade de maçãs: ", function(quantidade) {

    quantidade = Number(quantidade);

    let preco;

    if (quantidade < 12) {
        preco = 1.30;
    } else {
        preco = 1.00;
    }

    let total = quantidade * preco;

    console.log("Custo total:", total);

    entrada.close();
});