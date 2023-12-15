document.write("<br>")
document.write("<h2>Ejercicio 3</h2>")
document.write("<br>")
var familia = [];
for (let x = 0; x < 10; x ++) {
  familia[x] = prompt("EJERCICIO 3: Ingresa el nombre de los miembros de tu familia (" + (x+1) +"):" );
}
document.write("<br>")
document.write("Nombres de su familia: ", familia);
console.log("EJERCICIO 3:"); 
for(let k = 0; k < 10 ; k++ ){
	console.log(familia[k]);      
}