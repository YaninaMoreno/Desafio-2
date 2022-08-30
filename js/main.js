// SIMULADOR INTERACTIVO

const Scotch = 2000;
const Honey = 1500;
const IPA = 3000;
const Red = 2300;
const APA = 6000;
const pilsner = 7000;

let compraProducto = (mostrar) => {
    alert("¡Bienvenido a Mountain Beer!");
    let limite = parseInt(prompt("¿Cuantos productos desea comprar?"));
    //SI ESCRIBE STRING EN VEZ DE NUMERO
    if (isNaN(limite)) {
        alert("Elija un número por favor.")
        return
    }
    for (i = 1; i <= limite; i++) {
        let cerveza = prompt("Tenemos \n 1. Scotch \n 2. Honey \n 3. IPA \n 4. Red \n 5. APA \n 6. Pilsner");
        if (cerveza == "1") {
            console.log("$" + Scotch)
        } else if (cerveza == "2") {
            console.log("$" + Honey)
        } else if (cerveza == "3") {
            console.log("$" + IPA)
        } else if (cerveza == "4") {
            console.log("$" + Red)
        } else if (cerveza == "5") {
            console.log("$" + APA)
        } else if (cerveza == "6") {
            console.log("$" + pilsner)
        }
    }
    alert("¡Gracias por comprar en Mountain Beer!")
}

compraProducto()