const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Total de eleitores: ", function(total) {

    entrada.question("Votos brancos: ", function(brancos) {

        entrada.question("Votos nulos: ", function(nulos) {

            entrada.question("Votos válidos: ", function(validos) {

                total = Number(total);
                brancos = Number(brancos);
                nulos = Number(nulos);
                validos = Number(validos);

                console.log("Brancos:", (brancos / total) * 100 + "%");
                console.log("Nulos:", (nulos / total) * 100 + "%");
                console.log("Válidos:", (validos / total) * 100 + "%");

                entrada.close();
            });
        });
    });
});