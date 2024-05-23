//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let showMe = document.querySelector(".showme");
console.log(showMe);


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let pillado = document.querySelector('#pillado');
console.log(pillado);

//1.3 Usa querySelector para mostrar por consola todos los p

let todosP = document.querySelectorAll('p');

for(let i = 0; i < todosP.length; i++) {
  console.log('Párrafo ' + (i + 1) + ': ' + todosP[i].innerText);
  console.log(todosP[i]);
}

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon

let pokemon = document.querySelectorAll(".pokemon");

for(let i = 0; i < pokemon.length; i++) {
  console.log('Pokemon ' + (i + 1) + ': ' + pokemon[i].innerText);
  console.log(pokemon[i]);
}

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

let testMe = document.querySelectorAll('span[data-function="testMe"]');

for(let i = 0; i < testMe.length; i++) {
  console.log('Span ' + (i + 1) + ': ' + testMe[i].innerText);
  console.log(testMe[i]);
}

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];

console.log(thirdCharacter);
console.log(thirdCharacter.innerText);

