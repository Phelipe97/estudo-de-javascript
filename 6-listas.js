console.log(`Trabalhando com listas`);
// const salvador=`Salvador`;
// const saoPaulo=`São Paulo`;
// const rioDeJaneiro=`Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,  
);
listaDeDestinos.push( `Paraiba`);//adicionando um item na lista
console.log("Destinos Possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//deletando um item da lista
//antes da virgula e indicado a POSIÇÃO DO ITEM NA LISTA, depois da virgula a QUANTIDADE de itens a serem deletados
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//mostrando apenas um unico item da lista
console.log(listaDeDestinos[1],listaDeDestinos[0]);//mostrando mais de um unico item da lista