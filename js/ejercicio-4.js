/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;

while(confirm("Desea ingresaar un numero?")){
    let numero = parseInt(prompt("Ingrese un numero"));
    if(isNaN(numero)=== false){
        suma = suma + numero;
    }else{
        alert("no ingreso un numero, intente nuevamente");
    }
}
document.write("El resultado de la suma es: " + suma);