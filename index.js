let precio = 0;
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
sumar();