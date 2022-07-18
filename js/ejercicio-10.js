/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

const filas = parseInt(prompt("Ingrese el número de filas"));
const columnas = parseInt(prompt("Ingrese un número de columnas"));
let resultado = filas * columnas;

console.log(filas);
console.log(columnas);

document.write(` <table>
<tbody>`)

for(let indiceFila = 0; indiceFila < filas; indicefila++){
    document.write(`<tr>`)
    for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
        document.write(`<td>${resultado}</td>`);
        resultado--;
    }

   
}
document.write(`</tbody>
</table>`)