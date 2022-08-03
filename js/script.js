function Producto(nombre, precio, stock, categoria, codigoProducto, img){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.categoria = categoria
    this.codigoProducto = codigoProducto
    this.img = img
}

const h000 = new Producto("Martillo", 700, 50, "Herramientas manuales", 100, "img/martillo-150x64.jpg")
const h001 = new Producto("Alicate", 800, 20, "Herramientas manuales", 101, "img/alicate105252-150x64.jpg")
const h002 = new Producto("Martillo de goma", 400, 30,"Herramientas manuales", 102,"img/martilloDeGoma-150x50.jpg" )
const h003 = new Producto("Destornillador ", 400, 20,"Herramientas manuales", 103, "img/destornillador258857-150x29.jpg")
const h004 = new Producto("Kit Llaves", 400, 10,"Herramientas manuales", 104, "img/kitLllaves513148-150x130.jpg")

const h100 = new Producto("Taladro", 700, 30, "Herramientas electricas", 200, "img/taladro800295-150x104.jpg")
const h101 = new Producto("Rotomartillo", 800, 10,"Herramientas electricas", 201, "img/rotoMartillo800279-150x112.jpg" )
const h102 = new Producto("Caladora", 400, 30,"Herramientas electricas", 202, "img/caladora813095-150x157.jpg")
const h103 = new Producto("Amoladora", 400, 70,"Herramientas electricas", 203, "img/amoladora800244-150x66.jpg" )


const listaHerramientas = [h000, h001, h002, h003, h004, h100, h101, h102, h103]

/*
function calculoPrecioIva(cantidad, precio){
    precioTotal += cantidad * precio * 1.21
}
function calculoPrecioResponsableInscripto(cantidad, precio){
    precioTotal += cantidad * precio * 1.12
}

function listarHerramientasFiltradas(categoria){
    let listaHerramientasFiltrada = listaHerramientas.filter(herramienta => herramienta.categoria.toLowerCase() === categoria.toLowerCase())
    let herramientaConcat = ""
    listaHerramientasFiltrada.forEach(producto => herramientaConcat += imprimirProducto(producto))
    alert("Las herramientas son: \n" + herramientaConcat )
}

function imprimirProducto(producto){
    let herramienta = "Nombre : " + producto.nombre + " | " + "Precio : " + producto.precio + " | " + "Disponibles : " + producto.stock + "\n"
    return herramienta
}

function buscarPorCodigoEImprimir (codigo){
    let herramienta = listaHerramientas.find(herramienta => herramienta.codigoProducto === codigo)    
    alert("El resutltado de tu busqueda es: \n" + imprimirProducto(herramienta))
}

function listarHerramientasPorNombre(nombre){
    let listaHerramientasPorNombre = listaHerramientas.filter(herramienta => herramienta.nombre.toLowerCase().includes(nombre.toLowerCase()))
    let herramientaConcat =""
    listaHerramientasPorNombre.forEach(producto => herramientaConcat += imprimirProducto(producto))
    alert("Los productos que coninciden con tu búsqueda son: \n" + herramientaConcat )
    
}

let herramientaConcat = ""

let operacion = parseInt(prompt("Bienvenido a Balbico ! Ingrese el numero de la operacion a realizar: \n-1 Lista de Herramientas" +
                                "\n-2 Busqueda por categoria \n-3 Busqueda por codigo \n-4 Busqueda por nombre"))

switch(operacion){

    case 1 : 
        listaHerramientas.forEach(producto => herramientaConcat += imprimirProducto(producto))
        alert("Las herramientas disponibles son: \n\n" + herramientaConcat)
        break

    case 2 : 
        let  categoriaBusqueda= parseInt(prompt("Ingrese la categoria deseada :" + "\n- 1 Herramientas Manuales \n- 2 Herramientas Electricas"))
            switch(categoriaBusqueda){
                case 1 :
                    listarHerramientasFiltradas("herramientas maNuales")    
                break
                case 2 :
                    listarHerramientasFiltradas("herramientas electricaS")
                break               
            }
        break

    case 3 :
        let busquedaPorCodigo = parseInt(prompt("Ingrese el código del artículo . \n Por ejemplo 100 → Martillo"))
        buscarPorCodigoEImprimir(busquedaPorCodigo)
        
        break
        
    case 4 : listaHerramientas.forEach(producto => imprimirProducto(producto))
        let busquedaPorNombre = prompt("Ingrese el nombre del articulo deseado:")
        listarHerramientasPorNombre(busquedaPorNombre)
        
    default : alert("Seleccione una opción valida")
}
*/

let card_container = document.getElementById("card-container")

for(const producto of listaHerramientas){
    if(producto.stock != 0){
        let card = document.createElement("div")
        card.innerHTML = `<div class="col">
        <div class="card h-100 align-items-center">
            <div class="img-container d-flex">
                <img width="64" height="150" src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            </div>                        
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text fs-6 mt-3">Cantidad disponible: ${producto.stock}</p>
            </div> 
            <h4 class="text-center fs-6">Cod: ${producto.codigoProducto}</h4>
            <h6 class="text-center">$${producto.precio}</h6>
           
            <div class="card-footer py-3">				
                    <button id="card-btn_${listaHerramientas.indexOf(producto)}" type="button" class="btn btn-dark"> Añadir al carrito                
            </button>
                </div>
            </div> 
        </div>
    `        
    card_container.append(card)
    let button = document.getElementById(`card-btn_${listaHerramientas.indexOf(producto)}`)
    

    button.addEventListener("click", function() {addToCart(producto)})
        
    }
    else{

    }
}



for(let i=0; i < listaHerramientas.length; i++ ){
    let button = document.getElementById(`card-btn_${i}`)
    
}

let carritoDeCompras = document.getElementById("carrito-table")

function addToCart(producto){
    let row = document.createElement("tr")
    addAttribute(producto.nombre, row)
    addAttribute(producto.precio, row)
    carritoDeCompras.append(row)
}

function addAttribute(atributo, row){
    let item = document.createElement("td")
    item.innerHTML = `${atributo}`
    row.append(item)
}




