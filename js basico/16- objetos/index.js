// obejtos

const pessoa1 = {
    nome: 'André', sobrenome: 'Luan', idade: 22
}
console.log(pessoa1)

const pessoa2 = {
    nome: 'ines', sobrenome: 'brasil', idade: 30
}
console.log(pessoa2)
console.log()



//  Criando objetos de forma mais reaproveitavel

function criaPessoa (nome,sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa11 = criaPessoa('luiz', 'otavio', 11)
const pessoa22 = criaPessoa('Maria', 'mesquita', 32)
const pessoa3 = criaPessoa('joao', 'aurelio', 43)
const pessoa4 = criaPessoa('lucasz', 'da', 12)
const pessoa5 = criaPessoa('carloos', 'nobrega', 23)


console.log(pessoa11.nome, pessoa22.nome)
