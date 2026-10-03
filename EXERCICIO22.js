const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite as horas trabalhadas no mês: ", function(horas) {

    entrada.question("Digite o salário por hora: ", function(valorHora) {

        horas = Number(horas);
        valorHora = Number(valorHora);

        let salario;

        if (horas <= 160) {
            salario = horas * valorHora;
        } else {
            let horasExtras = horas - 160;
            let valorHoraExtra = valorHora * 1.5;

            salario = (160 * valorHora) + (horasExtras * valorHoraExtra);
        }

        console.log("Salário total:", salario);

        entrada.close();
    });
});