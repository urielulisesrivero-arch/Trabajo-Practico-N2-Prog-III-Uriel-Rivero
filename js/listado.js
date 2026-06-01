const productos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Lechuga", categoria: "verdura" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Zanahoria", categoria: "verdura" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Acelga", categoria: "verdura" }
];

const contenedor = document.getElementById("contenedor-elementos");
const btnTodos = document.getElementById("btn-todos");
const btnFrutas = document.getElementById("btn-frutas");
const btnVerduras = document.getElementById("btn-verduras");

function renderizar(arreglo) {
    contenedor.innerHTML = "";

    arreglo.forEach(item => {
        const div = document.createElement("div");

        div.className = "tarjeta";

        div.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Categoría: ${item.categoria}</p>
        `;

        contenedor.appendChild(div);
    });
}

renderizar(productos);

btnTodos.addEventListener("click", () => {
    renderizar(productos);
});

btnFrutas.addEventListener("click", () => {
    const soloFrutas =
        productos.filter(producto => producto.categoria === "fruta");

    renderizar(soloFrutas);
});

btnVerduras.addEventListener("click", () => {
    const soloVerduras =
        productos.filter(producto => producto.categoria === "verdura");

    renderizar(soloVerduras);
});