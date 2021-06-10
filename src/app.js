// Creacion de imagenes

const imagesSection = document.querySelector("#images");
// const imageContainer = document.createElement("div");
const button = document.querySelector("#daButton");
const eliminateButton = document.querySelector("#daButton2");
// imageContainer.className = "image-container";

// imagesSection.appendChild(imageContainer);

const maximum = 120;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
  const image = document.createElement("img");
  image.style.width = "320px";
  image.className = "image";
  image.src = `https://source.unsplash.com/collection/${random()}`;
  image.loading = "lazy";

  return image;
};
const newImage = createImageNode();
const mountNode = document.getElementById("images");
// imageContainer.appendChild(newImage);

//Agregar Imagenes
button.onclick = () => {
  const nuevaImagen = createImageNode();
  mountNode.append(nuevaImagen);
};

// Eliminar Imagenes
eliminateButton.onclick = () => {
  mountNode.innerHTML = "";
};
