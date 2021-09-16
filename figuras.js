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

// Area
function areaCirculo(radio){
    return (radio * radio) * PI
}

console.groupEnd();
