const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a hora de início: ", function(inicio) {

    entrada.question("Digite a hora de fim: ", function(fim) {

        inicio = Number(inicio);
        fim = Number(fim);

        let duracao;

        if (fim >= inicio) {
            duracao = fim - inicio;
        } else {
            duracao = (24 - inicio) + fim;
        }

        console.log("Duração do jogo:", duracao, "horas");

        entrada.close();
    });
});