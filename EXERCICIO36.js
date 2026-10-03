const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Idade do primeiro homem: ", function(homem1) {

    entrada.question("Idade do segundo homem: ", function(homem2) {

        entrada.question("Idade da primeira mulher: ", function(mulher1) {

            entrada.question("Idade da segunda mulher: ", function(mulher2) {

                homem1 = Number(homem1);
                homem2 = Number(homem2);
                mulher1 = Number(mulher1);
                mulher2 = Number(mulher2);

                let homemMaisVelho;
                let homemMaisNovo;
                let mulherMaisVelha;
                let mulherMaisNova;

                if (homem1 > homem2) {
                    homemMaisVelho = homem1;
                    homemMaisNovo = homem2;
                } else {
                    homemMaisVelho = homem2;
                    homemMaisNovo = homem1;
                }

                if (mulher1 > mulher2) {
                    mulherMaisVelha = mulher1;
                    mulherMaisNova = mulher2;
                } else {
                    mulherMaisVelha = mulher2;
                    mulherMaisNova = mulher1;
                }

                let soma = homemMaisVelho + mulherMaisNova;
                let produto = homemMaisNovo * mulherMaisVelha;

                console.log("Soma:", soma);
                console.log("Produto:", produto);

                entrada.close();
            });
        });
    });
});