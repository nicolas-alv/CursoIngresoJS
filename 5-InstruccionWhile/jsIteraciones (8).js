function mostrar()
/*{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN*/

{
	var contador=0;
	var num;
	var suma=0;
	var multiplicacion=0;

	while(contador != null){

		num=prompt("Ingrese el "+contador+"º numero");

		if(num==null || isNaN(num)){

			break;
		}
		
		num=parseInt(num);
		
		if (num >= 0) {
			suma = num + suma;
		} else {
			if (multiplicacion == 0) {
				multiplicacion = num;
			} else {
				multiplicacion = num * multiplicacion;
			}
		}
		contador++;
	}
	document.getElementById("suma").value=suma;
	document.getElementById("producto").value=multiplicacion;
}