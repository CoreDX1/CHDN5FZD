let nombre = ("Ingrese su Nombre");
const cuadro = document.getElementById("cuadro");
let nombreIngresado = document.createElement("h1");
nombreIngresado.innerHTML = `${nombre}`;
cuadro.prepend(nombreIngresado);

let menus = ["Menu", "Explorar", "Imagenes", "¿Quines Somos?"]
const menu_Primario = document.getElementById("menu_Primario")
for (const menuPagina of menus){
    let contenedor = document.createElement("li")
    contenedor.className = "menuPagina";
    contenedor.innerHTML = `
    <a href="#">${menuPagina}</a>`;
    menu_Primario.appendChild(contenedor);
}

const galeria = [
    {
        nombre: "Cuidad Monocromamatica",
        imagen: "image/imagen_01.jpg",
    },
    {
        nombre: "Cuidad Monocromamatica",
        imagen: "image/imagen_02.jpg"
    },
    {
        nombre: "Cuidad Monocromamatica",
        imagen: "image/imagen_03.jpg",
    },
];

const image_galeria = document.getElementById("image_galeria")
for ( imagenGaleria of galeria){
    let contenedorGaleria = document.createElement("div")
    contenedorGaleria.innerHTML =`
    <p>${imagenGaleria.nombre}</p>
    <img src="${imagenGaleria.imagen}" class="imagen_galeria_background">`;
    image_galeria.appendChild(contenedorGaleria)
}

