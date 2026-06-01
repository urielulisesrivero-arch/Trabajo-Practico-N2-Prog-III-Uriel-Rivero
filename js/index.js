const meriendas = [
    "Mate con facturas",
    "Café con tostadas",
    "Yogur con cereales",
    "Té con galletitas",
    "Chocolatada con budín"
];

const listaHtml = document.getElementById("lista-meriendas");
const btnContar = document.getElementById("btn-contar");
const textoConteo = document.getElementById("texto-conteo");

meriendas.forEach(merienda => {
    const li = document.createElement("li");
    li.textContent = merienda;
    listaHtml.appendChild(li);
});

btnContar.addEventListener("click", () => {
    textoConteo.textContent =
        `Actualmente contamos con ${meriendas.length} meriendas en el menú.`;
});