import programas from "./programas.js";

const contenedor = document.getElementById("entrenamiento-container");

let htmlRenderizar = "";

programas.entrenamientos.forEach((treino) => {
    htmlRenderizar += `<div class="entrenamiento">
        <h2>${treino.tipo}</h2>
        <p>${treino.descripción}</p>
        <a href="${treino.rutina}">¡Quiero obtener mi rutina de ${treino.tipo}!</a> <br>
        <video controls>
            <source src="${treino.video}" type="video/mp4">
        </video>
    </div>`;

    
});

contenedor.innerHTML = htmlRenderizar;


fetch("./programas.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });


  console.log("Lista de entrenamientos:", programas.entrenamientos);

