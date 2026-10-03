const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite X: ", function(x) {

    entrada.question("Digite Y: ", function(y) {

        x = Number(x);
        y = Number(y);

        let z = (x * y) + 5;
        let resposta;

        if (z <= 0) {
            resposta = "A";
        } else if (z <= 100) {
            resposta = "B";
        } else {
            resposta = "C";
        }

        console.log("Z:", z);
        console.log("Resposta:", resposta);

        entrada.close();
    });
});