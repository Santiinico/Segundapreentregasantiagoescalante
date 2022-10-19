class producto {
    constructor(nombre, precio, categoria, unidad) {
    this.nombre= nombre;
    this.precio= parseFloat(precio);
    this.categoria= categoria;
    this.unidad= unidad;
    this.disponible= true;
}

    sumarIva() {
        return this.precio * 1.21;
    }
    
    vender() {
        return this.disponible = false;
    }
    precioDestacado() {
        return this.precio * 1.21 * 1.25;
    }
}
let arrayProductos = []
do{
    let check = prompt("ingrese nombre del instrumento o salir para terminar de agregar");
    if(check === "salir" || check === "salir" || check === "salir"){
        break;
    }else{
        nombreP= check;
        let precioP = prompt("ingrese el precio del producto")
        let categoriaP = prompt ("ingrese la categoria del producto")
        let unidadP= prompt ("ingrese cantidad de unidades que compró")
        arrayProductos.push(new producto(nombreP, precioP, categoriaP, unidadP));
    }
}
while (check === "salir" || check === "salir" || check === "salir")

console.log(arrayProductos);