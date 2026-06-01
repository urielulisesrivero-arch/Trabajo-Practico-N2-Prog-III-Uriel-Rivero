const tarjetas = document.querySelectorAll(".tarjeta");
const contadorTexto = document.getElementById("contador-texto");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("seleccionada");

        const seleccionadas =
            document.querySelectorAll(".tarjeta.seleccionada").length;

        contadorTexto.textContent =
            `Elementos destacados seleccionados: ${seleccionadas}`;
    });
});