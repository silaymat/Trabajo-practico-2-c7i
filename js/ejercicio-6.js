/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
*/

for (let x = 0; x <= 30; x++){
    for(let y = 0; y < x; y++){
        document.write(x);
    }
    document.write("<br>");
}