// let texto= prompt("ingrese texto a cifrar/descifrar");
// let numeroCifrar= prompt("ingrese offset");
// let ascii=texto.charCodeAt();  //convierte la letra a un numero que es codigo ascii
// let convertidor=(ascii-65+numeroCifrar)%26+65;// convierte el num ascii a un num cifrado
// let textoResultado = String.fromCharCode(convertidor);//toma el num cifrado y devulve una letra
// document.write(textoResultado);

const root = document.getElementById("root");
 document.getElementById("btnCifrar").addEventListener("click",(evento)=>{
    evento.preventDefault();

 let texto = document.getElementById("frase").value.toUpperCase();
 let offset = parseInt(document.getElementById("num").value);
 
 root.innerHTML=cifrar.encode(texto,offset);

 })
const rootDoble = document.getElementById("rootDoble");
 document.getElementById("btnDescifrar").addEventListener("click",(evento)=>{
    evento.preventDefault();

 let texto = document.getElementById("frase").value.toUpperCase();
 let offset = document.getElementById("num").value;
 
 rootDoble.innerHTML=cifrar.decode(texto,offset)
 });