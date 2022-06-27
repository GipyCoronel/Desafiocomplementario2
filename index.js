class Producto {
    constructor(numero, cantidad) {
        this.numero = numero;
        this.cantidad = cantidad;
        

    }
}

function pregunta () {
    let Productos = parseInt (prompt("Desea comprar un producto? 1=yes"))

    let compra = []

    for (let index = 0; index < Productos; index++) {
         let numero = parseInt (prompt ("elija producto del 1 al 3"))
         let cantidad = parseInt (prompt ("ingresa cantidad de 1 a 3"))

         let producto1 = new Producto (numero, cantidad)
         compra.push (producto1)
         console.log (compra.length);

    }
     console.log (compra)
}

 function main () {
     pregunta()
 }
 main ()