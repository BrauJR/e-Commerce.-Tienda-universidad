// Contador del carrito
const contadorCarrito = document.getElementById("contadorCarrito");
const carritoContenido = document.getElementById("carritoContenido");

// Productos que se tienen en STOCK
const productos = [
  { id: "itpl01", nombre: "Sudadera Garra", precio: 560, img: "./imagenes/productos.jpg", piezas: 1},
  { id: "itpl02", nombre: "Playera negra", precio: 250, img: "./imagenes/p1.jpg", piezas: 1 },
  { id: "itpl03", nombre: "Playera melón", precio: 260, img: "./imagenes/p2.jpg", piezas: 1 },
  { id: "itpl04", nombre: "Sudadera leones", precio: 550, img: "./imagenes/p3.jpg", piezas: 1 },
  { id: "itpl05", nombre: "Portacredencial leones", precio: 80, img: "./imagenes/p7.jpg", piezas: 1 },
  { id: "itpl06", nombre: "Gorra León", precio: 200, img: "./imagenes/p5.jpg", piezas: 1 },
  { id: "itpl07", nombre: "Cubreboca ITP", precio: 40, img: "./imagenes/p6.jpg", piezas: 1 },
  { id: "itpl08", nombre: "Taza León", precio: 150, img: "./imagenes/p4.jpg", piezas: 1 },
];

// Carrito de compras
const carrito = [];

// Función que agrega productos al carrito
const agregarCarrito = (id, carrito) => {
  const productoSeleccionado = productos.find(e => e.id === id);
  carrito.push(productoSeleccionado);
  console.log("Se agrefo con exito", carrito)
}

// Función que actualiza el contador del carrito
const agregarContadorCarrito = () => {
  if (carrito.length !== 0) {
    contadorCarrito.classList.add("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
  }
}

// Función que muestra los productos del carrito
const actualizarCarrito = () => {
  carritoContenido.innerHTML = "";
  carrito.forEach(articulo => {
    const div = document.createElement("div");
    div.classList.add("tableroProductosEnCarrito");
    div.innerHTML =
      `
    <p >${articulo.piezas}</p>
    <p >${articulo.nombre}</p>
    <p >${articulo.precio}</p>
    `
    carritoContenido.appendChild(div);
  });
};


// Función que imprime en la página los productos
productos.forEach(articulo => {
  const div = document.createElement("div");
  div.innerHTML =
    `
    <div class="col-3 card text-center p-0 mx-5 my-3 align-items-center" style="width: 15rem;">
      <img src="${articulo.img}" class="card-img-top" alt="${articulo.nombre}">
      <div class="card-body">
        <h5 class="card-title">${articulo.nombre}</h5>
        <p class="card-text">$${articulo.precio}
        <br>
        <button class="btn btn-primar tableroAgregar" id="agregarCarrito${articulo.id}">Agregar al carrito</button>
      </div>
    </div>
    `
  contenidoproductos.appendChild(div);

  const botonAgregarCarrito = document.getElementById(`agregarCarrito${articulo.id}`);
  botonAgregarCarrito.addEventListener("click", () => {
    agregarCarrito(articulo.id, carrito);
    agregarContadorCarrito();
    actualizarCarrito();
  });
});

const botonOrdenarAlfabeto = document.getElementById("orden");
botonOrdenarAlfabeto.addEventListener("click", () => {
  console.log("Hola");

})

