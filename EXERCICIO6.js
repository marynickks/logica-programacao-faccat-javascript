const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a base: ", function(base) {

    entrada.question("Digite a altura: ", function(altura) {

        base = Number(base);
        altura = Number(altura);

        let area = base * altura;

        console.log("Área do retângulo:", area);

        entrada.close();
    });
});