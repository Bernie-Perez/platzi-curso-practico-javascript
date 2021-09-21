function calcularMediaAritmetica(lista){
    // let sumaLista1 = 0;
    // for (let i = 0; i < lista.length; i++){
    // sumaLista1 = sumaLista1 + lista[i]
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// const lista1 = [
//     100,
//     200,
//     500,
    
//     4000000,
// ];



// function calcularMediana(){
    
//     const mitadLista1 = parseInt(lista1.length / 2);

//     function esPar(numerito) {
//         if (numerito % 2 === 0){
//             return true;
//         } else {
//             return false;
//         }
//     }

//     // let mediana;

//     if (esPar(lista1.length)) {
//         const elemento1 = lista1[mitadLista1 -1];
//         const elemento2 = lista1[mitadLista1];

//         const promedioELemento1y2 = calcularMediaAritmetica([
//             elemento1,
//             elemento2,
//         ]);
//             // return true;
//         mediana = promedioELemento1y2;
//         } else {
//             mediana = lista1[mitadLista1];
//     }
// }

var lista = [220, 1, 6, 7]
lista.sort(function(a, b){return a -b});

function calcularMediana(lista){
    

    const mitadLista = parseInt(lista.length / 2);

    lista % 2 === 0;
    if (lista = true){
        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];

        const promedioELemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    } else {
        mediana = lista[mitadLista];
    }
}

    // function esPar(numerito) {
    //     if (numerito % 2 === 0){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    // const elemento1 = lista[mitadLista -1];
    // const elemento2 = lista[mitadLista];

    // const promedioELemento1y2 = calcularMediaAritmetica([
    //     elemento1,
    //     elemento2,
    // ]);

    // if (esPar(lista.length)) {
    //     const elemento1 = lista[mitadLista -1];
    //     const elemento2 = lista[mitadLista];

    //     const promedioELemento1y2 = calcularMediaAritmetica([
    //         elemento1,
    //         elemento2,
    //     ]);

    //     return promedioELemento1y2;

    //     } else {
    //         mediana = lista[mitadLista];
    //         return mediana;
    // }
