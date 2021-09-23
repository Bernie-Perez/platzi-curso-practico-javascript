var i = [];

while (i.length < 100){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    i.push(getRandomInt(1, 1001))
}

const lista1Count = {};

i.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
        
    }
);

// const lista1Array = Object.entries(lista1Count).sort(
//     function (valorAcumulado, nuevoValor){
//         valorAcumulado - nuevoValor
//     }
// );

const lista1Array = Object.entries(lista1Count).sort(function (elementoA, elementoB) {return elementoA[1] - elementoB[1];})

const moda = lista1Array[lista1Array.length - 1]

console.log(moda);