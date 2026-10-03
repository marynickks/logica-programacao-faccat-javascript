const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a primeira nota: ", function(nota1) {

    entrada.question("Digite a segunda nota: ", function(nota2) {

        nota1 = Number(nota1);
        nota2 = Number(nota2);

        let media = (nota1 + nota2) / 2;

        console.log("Média:", media);

        if (media >= 6) {
            console.log("Aluno aprovado.");
        } else {
            console.log("Aluno não aprovado.");
        }

        entrada.close();
    });
});