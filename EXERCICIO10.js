const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o custo de fábrica: ", function(custo) {

    custo = Number(custo);

    let distribuidor = custo * 28 / 100;
    let impostos = custo * 45 / 100;

    let custoFinal = custo + distribuidor + impostos;

    console.log("Custo final ao consumidor:", custoFinal);

    entrada.close();
});