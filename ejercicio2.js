//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement("div");
const body = document.querySelector("body");   
body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div2 = document.createElement("div");
let newP = document.createElement("p");

div2.appendChild(newP);
body.appendChild(div2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div3 = document.createElement("div");
const numOfP = 6;

for(let i = 0; i < numOfP; i++) {
  let newP2 = document.createElement("p");
  div3.appendChild(newP2);
}
body.appendChild(div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newP3 = document.createElement("p");
newP3.textContent = 'Soy dinámico!';

body.appendChild(newP3);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector(".fn-insert-here");
h2.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newUl = document.createElement("ul");

apps.forEach(element => {
  let newLi = document.createElement("li");
  newLi.textContent = element;
  newUl.appendChild(newLi);
});

body.appendChild(newUl);

////2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me');

/*elementsToRemove.forEach(element => {
  element.remove();
});*/

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

let newP4 = document.createElement("p");
newP4.textContent = 'Voy en medio!';

let firstDiv = document.querySelectorAll("body > div") [0];
firstDiv.insertAdjacentElement("afterend", newP4);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let newP5 = document.createElement("p");
newP5.textContent = 'Voy dentro!';

const elementsToInsert = document.querySelectorAll("div.fn-insert-here");

elementsToInsert.forEach(element => {
  element.appendChild(newP5);
});
