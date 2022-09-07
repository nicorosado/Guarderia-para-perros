let productos = [
    {id: 1, nombre: "correa", precio: 1000},
    {id: 1, nombre: "comida", precio: 2000},
    {id: 2, nombre: "juguete", precio: 500},
    {id: 3, nombre: "pipeta", precio: 800},
]

function Producto(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

 let producto1 = new Producto(1, "correa", 1000);
 let producto2 = new Producto(2, "comida", 2000);
 let producto3 = new Producto(3, "juguete", 500);
 let producto4 = new Producto(4, "pipeta", 800);

 let stock = prompt("ingrese el producto que desea comprar para chequear stock");
 
const existe = productos.filter(item => item.nombre === stock);
console.log(existe); /* funcion que devuelve el objeto que se busca */
const precioTotal = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(precioTotal);  /* funcion que me devuelve el precio total de los productos que se venden */





























/* let precio = 0;
const sumar = () => {
    let producto = prompt (`ingrese numero a comprar, con 0 termina
    1 - correa
    2 - juguete
    3 - hueso
    4 - alimento`);
    if (producto ==="0"){
        alert (`el precio total es  $${precio}`);
        return;
    }
    switch(producto){
        case "1":
            precio += 300;
            break
        case "2":
            precio += 1000;
            break
        case "3":
            precio += 200;
            break
        case "4":
            precio += 3000;
            break
        default:
        break
    }
    sumar();
}
sumar(); */
