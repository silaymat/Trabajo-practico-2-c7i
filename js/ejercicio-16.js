//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let frase = prompt("Escribe una frase");
for(let i = frase.length-1; i >= 0; i--){
    let alReves = frase [i];
    document.write(alReves);
}