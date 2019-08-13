function mostrar() {

	var num;

	do {
		num = prompt("Ingrese un numero del  0 al 9");
		num = parseInt(num);
	// } while (!(num >= 0 && num <= 9 && !isNaN(num)))
	} while (num < 0 || num > 9 || isNaN(num))

	document.getElementById('Numero').value = "El numero " + num + " es valido";

}//FIN DE LA FUNCIÓN

