const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o nome: ", function(nome) {

    entrada.question("Digite a altura: ", function(altura) {

        entrada.question("Digite o sexo (M ou F): ", function(sexo) {

            altura = Number(altura);
            sexo = sexo.toUpperCase();

            let pesoIdeal;

            if (sexo == "M") {
                pesoIdeal = (72.7 * altura) - 58;
            } else {
                pesoIdeal = (62.1 * altura) - 44.7;
            }

            console.log("Nome:", nome);
            console.log("Peso ideal:", pesoIdeal);

            entrada.close();
        });
    });
});