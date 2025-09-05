class Singleton{
    constructor(){
        if(Singleton.instance == null){
            Singleton.instance == this;
            this.value = 0;
        }
        return Singleton.instance;
    }
    incremento(){
        this.valor += 1;
        console.log(`Valor: ${this.valor}`);
    }
}
//USO DO PADRÃO: 
const s1 = new Singleton();
const s2 = new Singleton();

console.log("Analisa se S1 é igual S2: ")
console.log(s1 === s2);

console.log("Incrementa S1 e S2")
s1.incremento();
s2.incremento();

console.log("Conclui a operação ------")