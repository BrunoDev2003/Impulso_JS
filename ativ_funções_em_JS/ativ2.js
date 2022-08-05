function calculaIdade(anos) {
    return `daqui a ${anos} anos, ${this.nome} terá ${
        this.idade +anos
    } anos de idade.`;

}

const pessoa1 = {
    nome: 'Roberto',
    idade: 56
}

const pessoa2 = {
    nome: 'Bianca',
    idade: 23
}

const animal = {
    nome: 'Garfield',
    idade: 7,
    tipo: 'gato'
}

console.log(calculaIdade.call(animal,4));
console.log(calculaIdade.call(pessoa1,30));
console.log(calculaIdade.call(pessoa2,5));

console.log(calculaIdade.apply(animal,[4]));
console.log(calculaIdade.apply(pessoa1,[6]));
console.log(calculaIdade.apply(pessoa2,[3]));