const pessoa = {
    nome: 'André',
    sobrenome: 'Maia',
    idade: '29',
    profissao: 'Dev'
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;


// Modelo de variável desestruturada, a partir de um objeto.

let { nome, sobrenome, idade, profissao} = pessoa;

console.log(nome, idade, profissao);