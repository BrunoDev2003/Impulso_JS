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

