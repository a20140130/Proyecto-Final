document.write("<br>")
document.write("<h2>Ejercicio 4</h2>");
document.write("<br>")
let w = prompt("EJERCICIO 4: Cuántos elementos tendrá el arreglo?");

    var array = [];
    for(let v = 0; v < w ; v++ ){
        array[v] = prompt("Ingresa el elemento " + (v+1));
      
    }
    console.log("EJERCICIO 4");  
    for(let k = 0; k < w ; k++ ){
	document.write("<br>")
	document.write(array[k]);
	console.log(array[k]);      
        }
