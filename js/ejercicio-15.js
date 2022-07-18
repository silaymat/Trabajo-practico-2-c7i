//15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = prompt("Escriba una frase");
let contador = 0
for(let i = 0; i < frase.length; i++){
    frase = frase. toLocaleLowerCase();
    if(frase [i] == "a" || frase [i] == "e" || frase [i] =="i" || frase [i] == "o" || frase [i] == "u"){
      contador ++;  
    }
}
document.write(contador);