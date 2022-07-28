/*
let n1;
let n2;


const numerosSomados = n1 + n2;
const saoiguais = n1 === n2;

function fraseCompleta(n1,n2) {
    const primeiraFrase = primeiraFrase(n1,n2);
    const segundaFrase = segundaFrase(numerosSomados);
}

function primeiraFrase (n1,n2) {
    if (n1 === n2) {
        return `Os numeros ${n1} e ${n2} são iguais`;
    }
    return `Os numeros ${n1} e ${n2} não são iguais`;
}

function segundaFrase (numerosSomados) {
    if (numerosSomados > 10 && numerosSomados < 20) {
        return `Sua soma é ${numerosSomados}, que é maior que 10 e menor que 20`;
    }
    return `Sua soma é ${numerosSomados}, que é menor que 10 e menor que 20`;
}



console.log(fraseCompleta(1,2));
primeiraFrase()
segundaFrase()

tentativa falha
*/

function comparaNumeros(n1,n2) {
    const PrimeiraFrase = criaPrimeiraFrase(n1,n2);
    const segundaFrase = criaSegundaFrase(n1,n2);

    return `${PrimeiraFrase} ${segundaFrase}`;


}

function criaPrimeiraFrase(n1,n2) {
    let saoIguais = '';
    if(n1 !== n2) {
        saoIguais = 'não'

    }

    return `Os numeros ${n1} e ${n2} ${saoIguais} são iguais`;
};

function criaSegundaFrase(n1,n2) {
    soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado0 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}


console.log(comparaNumeros(1,2));

