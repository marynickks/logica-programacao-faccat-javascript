const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o número da conta: ", function(conta) {

    entrada.question("Digite o saldo: ", function(saldo) {

        entrada.question("Digite o débito: ", function(debito) {

            entrada.question("Digite o crédito: ", function(credito) {

                saldo = Number(saldo);
                debito = Number(debito);
                credito = Number(credito);

                let saldoAtual = saldo - debito + credito;

                console.log("Conta:", conta);
                console.log("Saldo atual:", saldoAtual);

                if (saldoAtual >= 0) {
                    console.log("Saldo Positivo");
                } else {
                    console.log("Saldo Negativo");
                }

                entrada.close();
            });
        });
    });
});