const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o lado A: ", function(a) {

    entrada.question("Digite o lado B: ", function(b) {

        entrada.question("Digite o lado C: ", function(c) {

            a = Number(a);
            b = Number(b);
            c = Number(c);

            if (a < b + c && b < a + c && c < a + b) {
                console.log("Formam um triângulo.");
            } else {
                console.log("Não formam um triângulo.");
            }

            entrada.close();
        });
    });
});