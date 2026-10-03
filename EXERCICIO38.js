const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o código do usuário: ", function(codigo) {

    codigo = Number(codigo);

    if (codigo !== 1234) {
        console.log("Usuário inválido!");
        entrada.close();
    } else {

        entrada.question("Digite a senha: ", function(senha) {

            senha = Number(senha);

            if (senha !== 9999) {
                console.log("senha incorreta");
            } else {
                console.log("Acesso permitido");
            }

            entrada.close();
        });
    }
});