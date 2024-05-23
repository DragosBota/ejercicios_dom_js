//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click


let btnToClick = document.createElement("button");
btnToClick.textContent = "Click";
btnToClick.id = "btnToClick";

let body = document.querySelector("body");
body.appendChild(btnToClick);

let clickInput = document.querySelector('.click');

btnToClick.addEventListener('click', () => {
  console.log(clickInput.value);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', () => {
    console.log(focusInput.value);
});

// 1.3 Añadir el evento 'input' que ejecute un console.log con el valor del input

let valueInput = document.querySelector('.value');

valueInput.addEventListener('input', () => {
    console.log(valueInput.value);
});

//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let albumsUl = document.createElement("ul");
body.appendChild(albumsUl);

albums.forEach(element => {
  let albumsLi = document.createElement("li");
  albumsUl.appendChild(albumsLi);

  albumsLi.textContent = element;
});
