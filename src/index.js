// importaciones

import { registerImagen } from "./lazyloading";
import { observer } from "./lazyloading";

// Obtenemos el contenedor donde queremos insertar los elementos

const addButton = document.querySelector("button");
// const imagenesObservadas = [];

const creadorImagenes = () => {
  // Creamos el elemento div
  const container = document.createElement("div");
  container.classList.add("p-4");

  // Creamos el elemento img y le asignamos los atributos correspondientes
  const imagen = document.createElement("img");
  imagen.classList.add("imagenInd", "mx-auto");
  imagen.dataset.src = `https://randomfox.ca/images/${Math.floor(
    Math.random() * 120 + 1
  )}.jpg`;

  // Añadimos la nueva imagen al div
  container.append(imagen);
  return container;
};

const mountNode = document.getElementById("imaganesContainer");
const addImagen=()=>{
  const newImage=creadorImagenes();
  mountNode.appendChild(newImage);
  registerImagen(newImage)
}
// Escuchar el evento "click" del botón y agregar nuevas imágenes
addButton.addEventListener("click", addImagen);
