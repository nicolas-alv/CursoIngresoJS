function mostrar()
/*{ 

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}

}*/

{

	var num;
	var contador=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	
	while(contador != null){

		num=prompt("Ingrese un numero");

		if (num==null){

			break;
		}
		
		if(isNaN(num)){
			
			alert("Ingresa un numero kpo");
			
		} else {

			num=parseInt(num);
			if(num>0){

				sumaPositivos= num + sumaPositivos;
				contadorPositivos++;
			}
			else if(num<0) {
	
				sumaNegativos=num + sumaNegativos;
				contadorNegativos++;
			}
			else {
	
				contadorCeros++;
			}
	
			if (num % 2 == 0 && num != 0){
	
				contadorPares++;
			}
		}	
		

	}

	alert("Suma de negativos " + sumaNegativos);
	alert("Suma Positivos " + sumaPositivos);
	alert("cantidad de positivos"+ contadorPositivos);
	alert("Cantidad de negativos "+ contadorNegativos);
	alert("catidad de ceros " + contadorCeros);
	alert("Cantidad de numeros pares: "+contadorPares);
	if (contadorPositivos>0){
		alert("promerio de positivos: " + (sumaPositivos / contadorPositivos));
	}
	else {
		alert("El promerio de positivos: 0");
	 }
	if(contadorNegativos>0){

		alert("Promedio de negativos: " + (sumaNegativos/contadorNegativos));

	}
	else {
		alert("El promedio de negativos es: 0");
	}
	alert("Diferencia entre positivos y negativos: " + (sumaPositivos + sumaNegativos));
}
