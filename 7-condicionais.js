console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;//tipo booleano : true ou false
const temPassagem = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {//condicional de idade
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(2, 1);//removendo se for de menor
// } else if (estaAcompanhada) {//a pessoa e menor de idade
//     console.log("Comprador Esta Acompanhado");
//     listaDeDestinos.splice(2, 1);//removendo se for de menor
// }
// else {
//     console.log("Comprador de menor venda proibida");
//     listaDeDestinos.splice(listaDeDestinos);//removendo a lista inteira
// }

if (idadeComprador >= 18 || estaAcompanhada ) {//condicional de idade
    console.log("Boa viagem !!");
    listaDeDestinos.splice(2, 1);//removendo se for de menor
}
else {
    console.log("Comprador de menor venda proibida");
    listaDeDestinos.splice(listaDeDestinos);//removendo a lista inteira
}

console.log(listaDeDestinos);

console.log("Embarque: \n \n");

if(idadeComprador >= 18 && temPassagem){
    console.log("Viagem altorizada boa viagem");
}
else{
    console.log("Viagem nao altorizada,por favor compre a passagem");
}


// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 8)