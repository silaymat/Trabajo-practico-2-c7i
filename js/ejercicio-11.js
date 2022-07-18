/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let nombre1 = prompt("Ingrese su nombre");
let edad1 = prompt("Ingrese su edad");
let nombre2 = prompt("Ingrese su nombre");
let edad2 = prompt("Ingrese su edad");
let nombre3 = prompt("Ingrese su nombre");
let edad3 = prompt("Ingrese su edad");

if(Math.max( edad1, edad2, edad3) ==edad1){
    document.write("Es mayor " +  nombre1 + "<br>");
}
if(Math.max( edad1, edad2, edad3) == edad2){
document.write("Es mayor " + nombre2 + "<br>");
}
if(Math.max( edad1, edad2, edad3) == edad3){
    document.write("Es mayor " + nombre3 + "<br>");
}