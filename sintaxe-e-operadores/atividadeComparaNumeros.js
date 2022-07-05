/* 
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais
Confira se a soma dos números é maior que 10 ou menor que 20
Retorne uma string dizendo "Os numeros num1 e num2 não/são iguais. Sua soma é soma, que é maior/que que 10 e maior/menor que 20"
*/
let num1 = 03;
let num2 = 10;
let resultadoSoma = 0;
let resultConferirSoma = "";

function soma(a, b) {
    return a + b;
}

function conferirSoma(result) {
    //Confira se a soma dos números é maior que 10 ou menor que 20
    if (result < 10 && result < 20) {
        resultConferirSoma = "menor que 10 é menor que 20 ";
    }
    else if (result < 10 && result > 20) {
        resultConferirSoma = "menor que 10 é maior que 20";
    }
    else if (result > 10 && result < 20) {
        resultConferirSoma = "maior que 10 é menor que 20";
    }
    else if (result > 10 && result > 20) {
        resultConferirSoma = "maior que 10 é maior que 20";
    } else if (result == 10) {
        resultConferirSoma = "igua a 10 é menor que 20"
    } else if (result == 20) {
        resultConferirSoma = "maior que 10 é igual a 20"
    }
}

resultadoSoma = soma(num1, num2); // metodo de soma

let condicaoIguaOuNao = (num1 == num2) ? "São Iguais" : "Não São Iguais"; // condicao ternaria verificar se num1 e igual a num2

conferirSoma(resultadoSoma); // medoto de verificação, atribuir texto na variavel resultConferirSoma

//Saida
console.log(`Os números ${num1} e ${num2}, ${condicaoIguaOuNao}, Sua soma é ${resultadoSoma}, que é ${resultConferirSoma}`);
