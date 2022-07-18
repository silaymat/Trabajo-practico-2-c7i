/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let resultado = "";
do{
    let texto = prompt("introduce un texto");
    if(resultado == ""){
        resultado = resultado + texto;
    }else{
        resultado = resultado + "-" + texto;
    }
}while(confirm("Quieres continuar escribiendo?"));

document.write(resultado);





