function mostrar()
/* {

	var contador=0;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}

}//FIN DE LA FUNCIÓN */

{
	var contador=0;
	var num;
	var numMax;
	var numMin;
	var flagNum=true;

	while (contador != null){

		num=prompt("Ingrese un numero");

		if(num==null){
			
			break;
		}
		if(isNaN(num)){
			
			alert("Ingresa un numero kpo");
			
		}
		num=parseInt(num);
		
		if (flagNum){
		
			numMin=num;
			numMax=num;
			flagNum=false;

		 }else if (num>numMax) {

			 numMax=num;

		 } if (num<numMin){

			 numMin=num;

		 }

		 contador++;


		}
		
		document.getElementById("maximo").value=numMax;
		document.getElementById("minimo").value=numMin;
	}
	


