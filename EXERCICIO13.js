const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a primeira nota: ", function(n1) {

    entrada.question("Digite a segunda nota: ", function(n2) {

        entrada.question("Digite a terceira nota: ", function(n3) {

            n1 = Number(n1);
            n2 = Number(n2);
            n3 = Number(n3);

            let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

            console.log("Média final:", media);

            entrada.close();
        });
    });
});