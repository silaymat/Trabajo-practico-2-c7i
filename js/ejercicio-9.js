/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

for(let x =1; x <= 500; x++){
    document.write(x);
    if(x % 4 == 0){
        document.write("Es múltiplo de 4");
    }
    if(x % 5 == 0){
        document.write("Es múltiplo de 5 ");

    }
    if(x % 9 == 0){
        document.write("es múltiplo de 9");
        document.write("<br>");
        document.write("<hr>");
    }
}