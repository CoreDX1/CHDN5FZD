let nombre = ("Ingrese su Nombre");
const cuadro = document.getElementById("cuadro");
let nombreIngresado = document.createElement("h1");
nombreIngresado.innerHTML = `${nombre}`;
cuadro.prepend(nombreIngresado);

let menus = ["Menu", "Explorar", "Carrito", "¿Quines Somos?"]
const menu_Primario = document.getElementById("menu_Primario")
for (const menuPagina of menus){
    let contenedor = document.createElement("li")
    contenedor.className = "menuPagina";
    contenedor.innerHTML = `
    <a href="#">${menuPagina}</a>`;
    menu_Primario.appendChild(contenedor);
}

const galeria = [
    {}
]
