function mostrar()
{
	var num;
	var suma=0;
	var contador=0;
	

	while (contador < 5){

	    num=prompt("Ingrese numeros");

	 if (isNaN(num)){

		alert ("Ingrese un NUMERO");

	} else {
		num=parseInt(num);
		suma=num + suma;
		contador++;
	}
	
	

}	
	

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN