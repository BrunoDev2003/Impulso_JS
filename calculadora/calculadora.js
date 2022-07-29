function calculadora () {
    const operacao = prompt('entre com um valor:\n 1 - soma \n 2 - subtração \n 3 - multipliação \n 4 - divisão real / \n 5 - divisão inteira % \n 6 - potenciação');
}

let n1 = Number(prompt('Insira o primeiro valor'));
let n2 = Number(prompt('Insira o segundo valor'));
let resultado 

function soma () {
    resultado = n1 + n2;
    alert(resultado);
}

function subtração () {
    resultado = n1 - n2;
    alert(resultado);
}
function multipliação () {
    resultado = n1 * n2;
    alert(resultado);
}
function divisãoReal () {
    resultado = n1 / n2;
    alert(resultado);
}
function divisãoInteira () {
    resultado = n1 % n2;
    alert(resultado);
}
function potenciação () {
    resultado = n1 ** n2;
    alert(resultado);
}

function novaOperação () {
    let novo = prompt('Deseja fazer uma nova operação?\n 1 - sim\n 2 - não');

    if (novo ==1 ) {
        calculadora();
    } else if (novo ==2) {
        alert('até mais');
    } else {
        alert('digite uma opção valida');
        novaOperação();
    }
}


if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtração();
} else if (operacao == 3) {
    multipliação();
} else if (operacao == 4) {
    divisãoReal();
} else if (operacao == 5) {
    divisãoInteira();
} else if (operacao == 6) {
    potenciação();
}

calculadora();