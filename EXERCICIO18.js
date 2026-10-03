const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o ano atual: ", function(anoAtual) {

    entrada.question("Digite o ano de nascimento: ", function(anoNascimento) {

        anoAtual = Number(anoAtual);
        anoNascimento = Number(anoNascimento);

        let idade = anoAtual - anoNascimento;

        if (idade >= 18) {
            console.log("A pessoa poderá votar este ano.");
        } else {
            console.log("A pessoa não poderá votar este ano.");
        }

        entrada.close();
    });
});