// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];



// Función que recibe por parámetro un array y muestra sus elementos en pantalla
// function showList(array) {
//   const container = document.getElementById("list");
//   container.innerHTML = "";
//   // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//   array.forEach((element) => {
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(element));
//     container.appendChild(li);
//   });
// }
// ME PUSE A HACER EN VEZ DE LEER ESTA PARTE

document.addEventListener("DOMContentLoaded", (e) => {

  let listita = document.getElementById("list");

  function showString() {
    const knownArray = [];
    for (let i = 0; i < strangeArray.length; i++) {
      if (typeof strangeArray[i] == "string") {
        knownArray.push(strangeArray[i]);
      }
    }

    return knownArray.sort()
  }

  function addListita() {
    let orderedArray = showString();
    console.log(listita)
    orderedArray.forEach(element => {
      let li = document.createElement("li")
      li.appendChild(document.createTextNode(element))
      listita.appendChild(li)
    });
  }

  addListita()

});
