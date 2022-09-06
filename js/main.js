//INCORPORANDO ARRAYS

const tienda = [{"Scotch" : 2000}, {"Honey" : 1500}, {"IPA" : 3000}, {"Red" : 2300}, {"APA" : 6000}, {"pilsner" : 7000}];

 
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
            console.log("El precio de la cerveza es de $" + tienda[0].Scotch)
        } else if (cerveza == "2") {
            console.log("El precio de la cerveza es de $" + tienda[1].Honey)
        } else if (cerveza == "3") {
            console.log("El precio de la cerveza es de $" + tienda[2].IPA)
        } else if (cerveza == "4") {
            console.log("El precio de la cerveza es de $" + tienda[3].Red)
        } else if (cerveza == "5") {
            console.log("El precio de la cerveza es de $" + tienda[4].APA)
        } else if (cerveza == "6") {
            console.log("El precio de la cerveza es de $" + tienda[5].pilsner)
        }
    }
    alert("¡Gracias por comprar en Mountain Beer!")
}

compraProducto()