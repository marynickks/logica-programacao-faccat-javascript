const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite a temperatura em Fahrenheit: ", function(fahrenheit) {

    fahrenheit = Number(fahrenheit);

    let celsius = (fahrenheit - 32) * 5 / 9;

    console.log("Temperatura em Celsius:", celsius);

    entrada.close();
});