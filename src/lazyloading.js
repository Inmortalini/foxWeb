const isIntersecting = (entry) => {
  return entry.isIntersecting; //(sera true si esta adentro y false contrario)
};

const loadingImagen = (entry) => {
  const container = entry.target;
  const imagen = container.querySelector("img");
  const url = imagen.dataset.src;
  imagen.src = url;
  //desregistra la imagen
  observer.unobserve(container);
};
export const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadingImagen);
});

// crear una funcion
export const registerImagen = (imagen) => {
  //IntersectionObserver->>observer(imagen)
  observer.observe(imagen);
};
