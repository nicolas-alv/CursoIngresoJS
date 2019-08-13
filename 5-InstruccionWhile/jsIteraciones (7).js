function mostrar()
/*{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCION */
{ 
	var num;
	var suma=0;
	var contador=0;
	

	while (contador!=null){

	    num=prompt("Ingrese numeros");

	
	 if (num==null){

 		break;
	 }	
	 if (isNaN(num)){

		alert ("Ingrese un NUMERO");

	} else {
		num=parseInt(num);
		suma=num + suma;
		contador++;
	}
	

}	
	
document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;
}