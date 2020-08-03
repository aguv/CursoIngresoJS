/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */


function mostrar()
{
	let numeroIngresado;
	let seguir;
	let arrPos = [];
	let arrNeg = [];
	let totalPos = 0;
	let totalNeg = 0;
	let pares = 0;
	let ceros = 0;
	let promPos;
	let promNeg;
	let diferencia;



	do{
		numeroIngresado = Number(prompt('Ingrese un numero'));
		if(numeroIngresado < 0) {
			arrNeg.push(numeroIngresado)
		} else {
			arrPos.push(numeroIngresado)
		}
		
		seguir = prompt('Quiere ingresar otro numero?');
	} while(seguir === 's'); // hasta aca funciona bien, los numeros se guardan en el array y el loop esta correcto
							 // ahora tengo que agregar la logica para las operaciones dentro de los array

	for (i = 0; i < arrPos.length; i++) { // podria haber usado forEach en todo el ejercicio pero intente con for tambien
		totalPos += arrPos[i];
	}

	for (i = 0; i < arrNeg.length; i++) {
		totalNeg += arrNeg[i];
	}

	arrNeg.forEach(function(item){ // itero a traves del array buscando los numeros pares 
		let resto = item % 2;
		if(resto === 0) {
			pares++;
		}
	});
	arrPos.forEach(function(item){ // lo mismo que arriba
		let resto = item % 2;
		if(resto === 0) {
			pares ++;
		}
	});

	arrPos.forEach(function(item){ // itero a traves del array buscando el numero cero
		if (item === 0) {
			ceros++;
		}
	});
	
	promPos = totalPos / arrPos.length;
	promNeg = totalNeg / arrNeg.length;
	diferencia = totalPos - totalNeg;

	document.write('1. La suma de los negativos es: ' + totalNeg + '<br>2. La suma de los positivos es: '
	 + totalPos + '<br>3. Cantidad de positivos: ' + arrPos.length + '<br>4. Cantidad de negativos: '
	  + arrNeg.length + '<br>5. Cantidad de ceros: ' + ceros + '<br>6. Cantidad de numeros pares: '
	  + pares + '<br>7. Promedio de positivos: ' + promPos + '<br>8. Promedio de negativos: '
	  + promNeg + '<br>9. Diferencia entre positivos y negativos: ' + diferencia); 
}//FIN DE LA FUNCIÓN

// ESTO SE PODRIA REDUCIR MAS, HASTA LA FECHA LO DEJO ASI.
// INTENTAR ESTE EJERCICIO CON PROGRAMACION FUNCIONAL, A VER SI SALE