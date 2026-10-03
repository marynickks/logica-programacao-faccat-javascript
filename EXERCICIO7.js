const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a idade em anos: ", function(anos) {

    entrada.question("Digite a idade em meses: ", function(meses) {

        entrada.question("Digite a idade em dias: ", function(dias) {

            anos = Number(anos);
            meses = Number(meses);
            dias = Number(dias);

            let idadeDias = (anos * 365) + (meses * 30) + dias;

            console.log("Idade em dias:", idadeDias);

            entrada.close();
        });
    });
});