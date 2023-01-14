console.log(`\n Trabalhando com loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;//trocando o if por uma variavel fixa

let contador = 0;//contador para o loop
let destinoExiste = false;

/* while (contador < 3) {//loop
    if ((listaDeDestinos[contador]) == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
} */

console.log("Destino Existe:",destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("ERRO");
}

for (let i = 0;i < 3;i ++) {//loop for([Inicialização de variavel]; [condicao]; [incremento])
    if ((listaDeDestinos[i]) == destino) {
        destinoExiste = true;
    } 
    
}
