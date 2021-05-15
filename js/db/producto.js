const productos = [
    new Producto('Lapiz', 5, 200, 1),
    new Producto('Pluma', 7, 100, 0),
    new Producto('Hoja', 1, 1000, 1),
    new Producto('Pincel', 10, 50, 1),
    new Producto('Diurex', 15, 150, 1),
    new Producto('Plumon', 50, 500, 1)
]

function getProductos(){
    return productos
}

function getProductoByIndex(i){
    return productos[i]
}

function deleteProducto(i){
    return productos.splice(i, 1);
}

function updateProducto(i, nombre, precio, existencias, status){
    productos[i].nombre = nombre
    productos[i].precio = precio
    productos[i].existencias = existencias
    productos[i].status = status
}

function createProducto(nombre, precio, existencias, status){
    const newProducto = new Producto(nombre, precio, existencias, status)
    productos.push(newProducto)
}

function getProductoByNombre(nombre){
    let productFinded = {}
    productos.forEach((p)=>{
        if(p.nombre.toUpperCase() === nombre.toUpperCase()) productFinded = p
    })
    return productFinded
}