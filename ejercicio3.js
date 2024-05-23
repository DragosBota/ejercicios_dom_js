//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul_1 = document.createElement("ul");
const body = document.querySelector("body");

countries.forEach(element => {
  let li_1 = document.createElement("li");
  li_1.textContent = element;
  ul_1.appendChild(li_1);
});

body.appendChild(ul_1);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeElement = document.querySelector(".fn-remove-me");

removeElement.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div_1 = document.querySelector("div[data-function=printHere]");
let ul_2 = document.createElement("ul");

cars.forEach(element => {
  let li_2 = document.createElement("li");
  li_2.textContent = element;
  ul_2.appendChild(li_2);
});

div_1.appendChild(ul_2);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let i = 0; i < countries2.length; i++) {
  let div_2 = document.createElement("div");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");
  h4.textContent = countries2[i].title;
  img.src = countries2[i].imgUrl;
  div_2.appendChild(h4);
  div_2.appendChild(img);
  body.appendChild(div_2);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

let button = document.createElement("button");
button.textContent = "Remove last div";
body.appendChild(button);

button.addEventListener("click", function() {
  let divs = document.querySelectorAll("body > div");
  let lastDiv = divs[divs.length - 1];
  lastDiv.remove();
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

let divs = document.querySelectorAll("body > div");

for(let k = 1; k < divs.length; k++) {
  let button2 = document.createElement("button");
  button2.textContent = `Remove div ${k}`;
  body.appendChild(button2);

  button2.addEventListener("click", () => {
    divs[k].remove();
  })
}