class hero{
    constructor(nome, idade, tipo, ataque, defesa) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar() {
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`);
    }

    defender() {
        console.log(`O ${this.tipo} ${this.nome} se defende usando ${this.defesa}`);
        
    }
}


let heroMago = new hero("Edelson", 28, "Mago", "Bola de fogo", "Escudo da fé")
let heroGuerreiro = new hero("Cleitinho", 18, "Guerreiro", "Tormenta de aço", "Escudo pesado")
let heroMonge = new hero("Shogeki", 21, "Monge", "Lotus primária", "Defesa absouluta")


heroMago.atacar()
heroMago.defender()
console.log("==============================================");
heroGuerreiro.atacar()
heroGuerreiro.defender()
console.log("==============================================");
heroMonge.atacar()
heroMonge.defender()
