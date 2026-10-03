const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Nome do primeiro time: ", function(time1) {

    entrada.question("Gols do primeiro time: ", function(gols1) {

        entrada.question("Nome do segundo time: ", function(time2) {

            entrada.question("Gols do segundo time: ", function(gols2) {

                gols1 = Number(gols1);
                gols2 = Number(gols2);

                if (gols1 > gols2) {
                    console.log("Vencedor:", time1);
                } else if (gols2 > gols1) {
                    console.log("Vencedor:", time2);
                } else {
                    console.log("EMPATE");
                }

                entrada.close();
            });
        });
    });
});