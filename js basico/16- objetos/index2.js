const pessoa1 = {
    nome: 'André', sobrenome: 'Luan', idade: 22,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi....`)
        console.log(`Minha idade atual é ${this.idade}`)
        
    },

    incrementar() {
        this.idade++;
    }
}
console.log(pessoa1)
console.log()


pessoa1.fala()
pessoa1.incrementar()
pessoa1.fala()