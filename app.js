const imagesSection = document.querySelector("#images");
const imageContainer = document.createElement("div");
const button = document.querySelector("#daButton");

imageContainer.className = "image-container";

imagesSection.appendChild(imageContainer);

const maximum = 120;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
  const image = document.createElement("img");
  image.style.width = "320px";
  image.className = "image";
  image.src = `https://source.unsplash.com/collection/${random()}`;

  return image;
};

const newImage = createImageNode();
const mountNode = document.getElementById("images");
imageContainer.appendChild(newImage);

button.onclick = () => {
  const nuevaImagen = createImageNode();
  mountNode.append(nuevaImagen);
};
