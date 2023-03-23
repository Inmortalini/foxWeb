/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");

// Obtenemos el contenedor donde queremos insertar los elementos

const imaganesContainer = document.getElementById("imaganesContainer");
const addButton=document.querySelector('button')

// Creamos 20 imágenes con números aleatorios en la URL
const creadorImagenes = () => {
  
    // Creamos el elemento div
    const div = document.createElement("div");
    div.classList.add("p-4");

    // Creamos el elemento img y le asignamos los atributos correspondientes
    const img = document.createElement("img");
    img.classList.add("imagenInd", "mx-auto");
    img.setAttribute(
      "src",
      `https://randomfox.ca/images/${Math.floor((Math.random()*120)+1)}.jpg`
    );
    img.setAttribute("alt", "");

    // Añadimos la imagen al div
    div.appendChild(img);

    // Añadimos el nuevo elemento al contenedor
    imaganesContainer.appendChild(div);
  
};
creadorImagenes();
addButton.addEventListener('click',creadorImagenes)