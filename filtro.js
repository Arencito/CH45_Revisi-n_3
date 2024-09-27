// Lista de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Seleccionar elementos HTML
const listaDeProductos = document.getElementById("lista-de-productos");
const input = document.getElementById("input");
const botonDeFiltro = document.querySelector("button");

// Función para mostrar productos en la lista
function mostrarProductos(productos) {
  // Limpiar la lista de productos
  listaDeProductos.innerHTML = '';

  // Crear los elementos de producto
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    listaDeProductos.appendChild(d);
  });
}

// Mostrar productos al cargar la página
mostrarProductos(productos);

// Evento de filtrado
botonDeFiltro.onclick = function() {
  const texto = input.value.toLowerCase(); // Convertir el texto a minúsculas
  const productosFiltrados = productos.filter(producto => 
    producto.tipo.includes(texto) || producto.color.includes(texto)
  );
  
  mostrarProductos(productosFiltrados); // Mostrar los productos filtrados
}
