// Contador del carrito
const contadorCarrito = document.getElementById("contadorCarrito");
const carritoContenido = document.getElementById("carritoContenido");
const tituloCarritoContenido = document.getElementById("tituloCarritoContenido");
const totalCarritoContenido = document.getElementById("totalCarritoContenido");


// Productos que se tienen en STOCK
const productos = [
  { id: "itpl01", nombre: "Sudadera garra", precio: 560, subtotal: 560, img: "./imagenes/productos.jpg", piezas: 1 },
  { id: "itpl02", nombre: "Playera negra", precio: 250, subtotal: 250, img: "./imagenes/p1.jpg", piezas: 1 },
  { id: "itpl03", nombre: "Playera melón", precio: 260, subtotal: 260, img: "./imagenes/p2.jpg", piezas: 1 },
  { id: "itpl04", nombre: "Sudadera león", precio: 550, subtotal: 550, img: "./imagenes/p3.jpg", piezas: 1 },
  { id: "itpl05", nombre: "Credencialero", precio: 80, subtotal: 80, img: "./imagenes/p7.jpg", piezas: 1 },
  { id: "itpl06", nombre: "Gorra león ITP", precio: 200, subtotal: 200, img: "./imagenes/p5.jpg", piezas: 1 },
  { id: "itpl07", nombre: "Cubreboca ITP", precio: 40, subtotal: 40, img: "./imagenes/p6.jpg", piezas: 1 },
  { id: "itpl08", nombre: "Taza león ITP", precio: 150, subtotal: 150, img: "./imagenes/p4.jpg", piezas: 1 },
];

// Carrito de compras
const carrito = [];

// Función que agrega productos al carrito
const agregarCarrito = (id, carrito) => {
  const productoSeleccionado = productos.find(e => e.id === id);
  if (carrito.find(e => e.id === productoSeleccionado.id)) {
    productoSeleccionado.piezas += 1
    productoSeleccionado.subtotal = productoSeleccionado.precio * productoSeleccionado.piezas;
  } else {
    carrito.push(productoSeleccionado);
  }
  console.log("Se agregó con exito", carrito)
}

// Función que actualiza el contador del carrito
const agregarContadorCarrito = () => {
  if (carrito.length !== 0) {
    contadorCarrito.classList.add("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
  }
}

// Función que calcula el total de la compra
const obtenerTotal = () => {
  const total = carrito.map(item => item.subtotal);
  let totalVenta = total.reduce((acumulador, item) => acumulador + item)
  console.log(totalVenta);
  totalCarritoContenido.innerHTML =
    `
  <h5>Total:</h5>
  <h5></h5>
  <h5>$${totalVenta}</h5>
  `
}

// Función que muestra los productos del carrito
const actualizarCarrito = () => {
  tituloCarritoContenido.innerHTML =
  `
  <h5>Producto</h5>
  <h5>Cantidad</h5>
  <h5>Precio</h5>
  <h5>Subtotal</h5>
  `
  carritoContenido.innerHTML = "";
  carrito.forEach(articulo => {
    const div = document.createElement("div");
    div.classList.add("tableroProductosEnCarrito");
    div.innerHTML =
    `   
    <p >${articulo.nombre}</p>
    <p >${articulo.piezas}</p>
    <p >${articulo.precio}</p>
    <p >${articulo.subtotal}</p>
    `
    carritoContenido.appendChild(div);
  });
};


// Función que ordena por precio
const ordenarPorPrecio = () => {
  productos.sort((a, b) => {
    return a.precio - b.precio;
  });
  productos.forEach((e) => {
    const div = document.createElement("div");
    div.innerHTML =
      `
    <div class="col-3 card text-center p-0 mx-5 my-3 align-items-center" style="width: 15rem;">
      <img src="${e.img}" class="card-img-top" alt="${e.nombre}">
      <div class="card-body">
        <h5 class="card-title">${e.nombre}</h5>
        <p class="card-text">$${e.precio}
        <br>
        <button class="btn btn-primar tableroAgregar" id="agregarCarrito${e.id}">Agregar al carrito</button>
      </div>
    </div>
    `
    contenidoproductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`agregarCarrito${e.id}`);
    botonAgregarCarrito.addEventListener("click", () => {
      agregarCarrito(e.id, carrito);
      agregarContadorCarrito();
      actualizarCarrito();
      obtenerTotal();
    });
  });
};

window.onload = () => {
  ordenarPorPrecio();
};

// Pago Paypal
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',

    },

    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{ "amount": { "currency_code": "MXN", "value": totalVenta } }]
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');

      });
    },

    onError: function (err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();

