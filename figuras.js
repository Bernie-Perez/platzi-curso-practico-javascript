// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadro miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2")

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// Pi / const PI = 3.1415; es una forma de escribirlo, pero math es mejor
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//     if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
//         console.error("Los lados a y b no son iguales");
//     } else {
//         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//         const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

//         const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

//         const trianguloGrandeAltura = trianguloPequenoLadoA;
//         return trianguloGrandeAltura;
//     }
// }

// Area
function areaCirculo(radio){
    return (radio * radio) * PI
}

console.groupEnd();

// function calcularPerimetroCuadrado(){
//     const input = document.getElementById("InputCuadrado");
//     const value = input.value;

//     const perimetro = perimetroCuadrado(value);
//     alert(perimetro);
// }

// function calcularAreaCuadrado(){
//     const input = document.getElementById("InputCuadrado");
//     const value = input.value;

//     const area = areaCuadrado(value);
//     alert(area);
// }

// function calcularAlturaTriangulo(lado1, lado2, base){
//     const lado1 = document.getElementById("lado1");
//     const lado2 = document.getElementById("lado2");
//     const base = document.getElementById("lado3");

//     if (lado1 === lado2 && lado1 != base){
//         alert("Si es un triangulo iscoseles")
//         const altura = Math.sqrt(lado1**2 - base**2/ 4)
    

//     console.log(altura)}
//         else{
//             alert("No lo se");
//         }

// }
// calcularAlturaTriangulo(6,6,4)

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("Es un triangulo isosceles")
        const altura = Math.sqrt(lado1**2 - base**2/ 4 )
        console.log(altura)
    } else{
        console("No es un triangulo isosceles")
    }
}

altura(6, 6, 4)