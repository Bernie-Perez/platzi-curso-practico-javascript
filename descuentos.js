// const precioOriginal = 120;
// const descuento = 18;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// function onClickButtonPriceDiscount(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }

const coupons = [
    "X50viejuner", "B12viejuner", "C20viejuner",
];


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}