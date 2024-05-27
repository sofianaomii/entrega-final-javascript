"use sticts"

let productos = [

    {
        id: "0",
        titulo: "Chocolate Milka",
        imagen: "./assets/chocolate.jpg",
        precio: 2000,
    },

    {
        id: "1",
        titulo: "Alfajor Milka",
        imagen: "./assets/alfajor.jpg",
        precio: 1000,
    },

    {
        id: "2",
        titulo: "Gomitas de Sandia",
        imagen: "./assets/mogul-sandia.jpg",
        precio: 700,
    },

    {
        id: "3",
        titulo: "bubbaloo",
        imagen: "./assets/bubbaloo.jpg",
        precio: 120,
    },

    {
        id: "4",
        titulo: "flynn paff",
        imagen: "./assets/flynn-paff-70.jpg",
        precio: 100,
    },

    {
        id: "5",
        titulo: "pico dulce",
        imagen: "./assets/pico.jpg",
        precio: 350,
    },



];

let carrito = []
const productosContenedor = document.querySelector("#contenedorProductos");
const verCarrito = document.querySelector("#verCarrito");
const carritoContenedor = document.querySelector("#carritoContenedor");
const mostrarCarrito = document.querySelector(".gomitas-corazon")







function cargarProductos(productos) {

    productos.forEach(productos => {


        productosContenedor.innerHTML += ` 
        <div class="cardProducto">
        <img class= "imgCarrito" src="${productos.imagen}" alt="${productos.titulo}">
        <h3 class="productoTitulo">${productos.titulo}</h3>
        <p class="productoPrecio">$${productos.precio}</p>
        <button class="btnAgregar" data-id="${productos.id}" data-imagen="${productos.imagen}" data-titulo="${productos.titulo}" data-precio="${productos.precio}"><p>Agregar a carrito</p></button> 
        </div>
        
        `;



    })

}

cargarProductos(productos);



let comprar = document.querySelectorAll(".btnAgregar")

comprar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const id = boton.dataset.id;
        const imagen = boton.dataset.imagen;
        const titulo = boton.dataset.titulo;
        const precio = boton.dataset.precio;

        carrito.push({
            id: id,
            imagen: imagen,
            titulo: titulo,
            precio: precio,
        });
        console.log(carrito);
    });
});

/*
const carritoBoton = document.createElement("button"); 
carritoBoton.innerText = "x";
carritoBoton.className = "carritoBotonCerrar";
*/

verCarrito.addEventListener("click", () => {

    const carritoBoton = document.createElement("button");
    carritoBoton.innerText = "x";
    carritoBoton.className = "carritoBotonCerrar";
    mostrarCarrito.append(carritoBoton)

    carrito.forEach(productos => {

        mostrarCarrito.innerHTML += ` 
        <div class="cardProductoCarrito">
        <img class= "imgCarrito" src="${productos.imagen}" alt="${productos.titulo}">
        <h3 class="productoTitulo">${productos.titulo}</h3>
        <p class="productoPrecio">$${productos.precio}</p>
        <p class="productoPrecio">cantidad</p>
        <p class="productoPrecio">total</p>
        
        </div>
        
        `;
        carritoBoton.addEventListener("click", () => {
            mostrarCarrito.style.display = "none"
        })
    })


    localStorage.setItem("arraycarrito", JSON.stringify(carrito))

});
/*

const carritoHeader = document.createElement("div");
carritoHeader.className = "carritoHeader";
carritoHeader.innerHTML = `
    <h1 class="modalTitulo">Carrito</h1>
`;
carritoContenedor.appendChild(carritoHeader);

carritoBoton.addEventListener("click", () => {
    console.log("Se hizo clic en el botón del carrito");
    carritoBoton.style.display = "none";
});

carritoContenedor.appendChild(carritoBoton);

let totalPagar = 0;
carrito.forEach((producto) => {
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "carritoContenido";
    carritoContenido.innerHTML = `
        <img class= "imgCarrito" src="${producto.imagen}">
        <h3 class= "productotitulo">${producto.titulo}</h3>
        <p class= "productoPrecio">$${producto.precio}</p>
    `;
    carritoContenedor.appendChild(carritoContenido);

    totalPagar += parseFloat(producto.precio);
});

const totalElement = document.createElement("p");
totalElement.innerText = `Total a pagar: $${totalPagar.toFixed(2)}`;
carritoContenedor.appendChild(totalElement);
*/









//tabla para carrito
/*
                <div>
                    <h3></h3>
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div class="nombres">
                    <p>nombres</p>
                </div>
                <div class="cantidad">
                    <p>cantidad</p>
                </div>
                <div class="precio">
                    <p>precio</p>
                </div>
                <div class="totalPrecios">
                    <p>total</p>
                </div>
                <div>
                    <button>vaciar</button>

                    <button>comprar</button>

                    <h3>total: 0000</h3>



                </div>*/



















