const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o primeiro valor: ", function(a) {

    entrada.question("Digite o segundo valor: ", function(b) {

        a = Number(a);
        b = Number(b);

        if (a < b) {
            console.log(a, b);
        } else {
            console.log(b, a);
        }

        entrada.close();
    });
});