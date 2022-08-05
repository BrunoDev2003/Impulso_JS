const alunos = [
    {
        nome: 'bruno',
        nota: 5,
        turma: '2 ANO'
    },
    {
        nome: 'Julia',
        nota: 9,
        turma: '2 ANO'
    }, 
    {
        nome: 'Rafael',
        nota: 10,
        turma: '1 ANO'
    },
    {
        nome: 'Rafaela',
        nota: 3,
        turma: '1 ANO'
    },
    {
        nome: 'Gabriela',
        nota: 2,
        turma: '1 ANO'
    }
];



function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i =0;i < arr.length;i++) {

        const {nota,nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5))