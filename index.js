// let welcome = parseInt(prompt('Welcome to my page insert your name! :'));
// let edad = parseInt(prompt("How old are you?"))

// if(edad >= 18){
//     alert('Your age is ' + edad + '🫡')
// }

function changeColor(newColor) {
  let elem = document.getElementById("para");
  elem.style.color = newColor;
}

function calculadora() {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);
  let promedio = (valor1 + valor2) / 2;

  const li = document.getElementById("resultado");
  li.innerHTML = "<p>Tu promedio es </p>" + promedio
  li.innerHTML;
}
function resultadoAlumnos() {
  const arrayAlumnos = ["10", "5", "8"];
  const resultadoAlumno = document.getElementById("resultadoAlumno").value;
  const insert = document.getElementById("resultadoImpresoAlumno");

  if (resultadoAlumno === "Juan" || resultadoAlumno === "juan") {
    insert.innerHTML = "<p>Juan saco </p>" + arrayAlumnos[0];
    insert.innerHTML;
  } else if (resultadoAlumno === "Pedro" ||resultadoAlumno ===  "pedro") {
    insert.innerHTML = "<p>Pedro saco </p> " + arrayAlumnos[1];
    insert.innerHTML;
  } else if (resultadoAlumno === "Nacho" ||  resultadoAlumno === "nacho") {
    insert.innerHTML = "<p>Nacho saco </p>" + arrayAlumnos[2];
    insert.innerHTML;
  } else {
    alert("No hay nada");
  }

}
